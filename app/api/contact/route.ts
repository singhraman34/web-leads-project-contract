import { NextResponse } from 'next/server';

const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8xtW4vhycBMiykgud7zwjVZpbqk8YxJMdVTdm_26MD3lYA5yfkGvwqQPZihEqwsjl/exec";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Clean Payload: Remove internal botField before sending to Google Sheets
        const { botField, ...payload } = body;

        // 2. Server-side check for botField (extra layer of security)
        if (botField) {
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

        // 4. Forward EXACT payload required by Google Script
        const response = await fetch(GOOGLE_APP_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });

        if (!response.ok) {
            throw new Error(`Google Script Error: ${response.statusText}`);
        }

        // GAS sometimes returns a redirect or structured JSON
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Google Sheets Submission Error:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to submit inquiry to Google Sheets" },
            { status: 500 }
        );
    }
}
