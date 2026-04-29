"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = "Before and After Comparison" }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percentage);
    };



    useEffect(() => {
        const handleMouseMove = (e: globalThis.MouseEvent) => {
            if (!isDragging) return;
            handleMove(e.clientX);
        };

        const handleTouchMove = (e: globalThis.TouchEvent) => {
            if (!isDragging) return;
            handleMove(e.touches[0].clientX);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', () => setIsDragging(false));
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', () => setIsDragging(false));
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', () => setIsDragging(false));
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', () => setIsDragging(false));
        };
    }, [isDragging, sliderPosition]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full aspect-square overflow-hidden rounded-2xl shadow-xl border border-neutral-200/20 cursor-ew-resize group select-none"
            onMouseDown={(e: MouseEvent) => {
                setIsDragging(true);
                handleMove(e.clientX);
            }}
            onTouchStart={(e: TouchEvent) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
            }}
        >
            {/* Before Image (Background) */}
            <div className="absolute inset-0">
                <Image
                    src={beforeImage}
                    alt={`Before: ${alt}`}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>

            {/* After Image (Foreground, clipped) */}
            <div
                className="absolute inset-0 bg-slate-900 pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <Image
                    src={afterImage}
                    alt={`After: ${alt}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover pointer-events-none"
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white drop-shadow-[0_0_3px_rgba(0,0,0,0.5)] z-20"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
                {/* Drag Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-110">
                    <ArrowLeftRight className="w-5 h-5 text-slate-700" />
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg">
                    After
                </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg">
                    Before
                </span>
            </div>
        </div>
    );
}
