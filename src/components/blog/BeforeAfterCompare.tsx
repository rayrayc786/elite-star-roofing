"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
}

export default function BeforeAfterCompare({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
}: BeforeAfterCompareProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    };
    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = () => {
    isDragging.current = true;
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current && e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };
    const handleTouchEnd = () => {
      isDragging.current = false;
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-border bg-white shadow-lg">
      <div className="bg-primary px-5 py-3 flex items-center justify-between text-xs text-white/80">
        <span className="font-semibold text-white tracking-wide uppercase text-[11px]">
          Interactive Job Showcase
        </span>
        <span className="flex items-center gap-1.5 text-accent font-medium text-[11px]">
          <MoveHorizontal className="w-3.5 h-3.5" /> Drag slider to compare
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none cursor-ew-resize overflow-hidden bg-primary/5"
      >
        {/* After Image (Full Background) */}
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          className="object-cover pointer-events-none"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              sizes="(max-width: 800px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider rounded-md shadow">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3 py-1 bg-accent text-white text-[11px] font-bold uppercase tracking-wider rounded-md shadow">
            {afterLabel}
          </span>
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] -ml-[1px]" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-lg border-2 border-white">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {caption && (
        <div className="p-4 bg-warm-white/60 border-t border-border/60 text-xs text-text-muted italic text-center">
          {caption}
        </div>
      )}
    </div>
  );
}
