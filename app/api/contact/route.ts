import { NextResponse } from 'next/server';

const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8xtW4vhycBMiykgud7zwjVZpbqk8YxJMdVTdm_26MD3lYA5yfkGvwqQPZihEqwsjl/exec";

// Simple retry helper
async function fetchWithRetry(url: string, options: RequestInit, retries = 2, delay = 1000) {
    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Status: ${response.status} ${response.statusText}`);
            }
            return response;
        } catch (err) {
            const isLastAttempt = i === retries;
            const error = err as Error;
            
            console.error(`Attempt ${i + 1} failed: ${error.message}`);
            
            if (isLastAttempt) throw error;
            
            // Exponential backoff or simple delay
            await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
        }
    }
    throw new Error("Maximum retries reached");
}

export async function POST(req: Request) {
    const timestamp = new Date().toISOString();
    try {
        const body = await req.json();

        // 1. Clean Payload: Remove internal botField before sending to Google Sheets
        const { botField, ...payload } = body;

        console.log(`[${timestamp}] Incoming Lead Submission:`, JSON.stringify({
            name: payload.name,
            phone: payload.phone,
            status: payload.status,
            source: payload.area ? "MultiStepForm" : "Popup"
        }));

        // 2. Server-side check for botField (extra layer of security)
        if (botField) {
            console.warn(`[${timestamp}] Bot detected, discarding request.`);
            return NextResponse.json({ success: true, message: "Spam discarded" }, { status: 200 });
        }

        // 3. Field Mapping & Encoding
        if (payload.location !== undefined) {
            payload.area = payload.location;
            delete payload.location;
        }

        const formData = new URLSearchParams();
        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, String(value));
        });

        // 4. Forward payload with Retry Logic
        console.log(`[${timestamp}] Forwarding to Google Script...`);
        
        await fetchWithRetry(GOOGLE_APP_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });

        console.log(`[${timestamp}] Successfully submitted to Google Sheets.`);
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error(`[${timestamp}] Google Sheets Submission Error:`, error);
        
        // Provide more context for ENOTFOUND
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        const isDnsError = errorMessage.includes("ENOTFOUND") || errorMessage.includes("getaddrinfo");
        
        return NextResponse.json(
            { 
                error: isDnsError 
                    ? "Network/DNS Error: Unable to reach Google Sheets. Please check your internet connection or try again in a few moments." 
                    : "Failed to submit inquiry. Please try again later." ,
                details: errorMessage
            },
            { status: 500 }
        );
    }
}
