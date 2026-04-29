"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Handle both mouse and touch events
        let clientX = 0;
        if ("touches" in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = (e as MouseEvent).clientX;
        }

        const position = ((clientX - rect.left) / rect.width) * 100;
        const clampedPos = Math.min(Math.max(position, 0), 100);

        setSliderPos(clampedPos);
    };

    // Global listeners for smooth dragging outside container
    useEffect(() => {
        if (!isDragging) return;

        const handleMouseUp = () => setIsDragging(false);
        const handleMouseMove = (e: MouseEvent) => handleMove(e);
        const handleTouchMove = (e: TouchEvent) => handleMove(e);

        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchend", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video rounded-[14px] overflow-hidden cursor-ew-resize select-none bg-slate-50 border border-slate-200 shadow-xl"
            onMouseDown={(e) => { setIsDragging(true); handleMove(e); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e); }}
        >
            {/* Background Image (After) */}
            <Image
                src={afterImage}
                alt="After"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
                className="object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/40 backdrop-blur text-white text-xs font-bold uppercase rounded shadow-lg">
                After
            </div>

            {/* Foreground Image (Before) - Clipped */}
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    priority
                    className="object-cover"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/40 backdrop-blur text-white text-xs font-bold uppercase rounded shadow-lg">
                    Before
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-[#C9A96A] cursor-ew-resize flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-10 h-10 bg-[#C9A96A] text-white rounded-full flex items-center justify-center shadow-md shadow-black/20 border-4 border-white transition-transform active:scale-90">
                    <MoveHorizontal size={20} />
                </div>
            </div>
        </div>
    );
}
