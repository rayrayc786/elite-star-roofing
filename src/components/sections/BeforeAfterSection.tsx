"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProject {
  title: string;
  service: string;
  location: string;
  beforeImage: string;
  afterImage: string;
}

const projects: BeforeAfterProject[] = [
  {
    title: "Ridge Pointing & Bedding Restoration",
    service: "Roof Pointing",
    location: "Canning Vale, WA",
    beforeImage: "/images/web/IMG_2845.jpg",
    afterImage: "/images/web/IMG_2870.jpg",
  },
  {
    title: "Moss & Algae Pressure Cleaning",
    service: "Roof Cleaning",
    location: "Bunbury, WA",
    beforeImage: "/images/web/IMG_4965.jpg",
    afterImage: "/images/web/IMG_4970.jpg",
  },
  {
    title: "Roof Painting & Membrane Coating",
    service: "Roof Painting",
    location: "Perth, WA",
    beforeImage: "/images/web/IMG_5293.jpg",
    afterImage: "/images/web/IMG_5505.jpg",
  },
];

function BeforeAfterItem({ project }: { project: BeforeAfterProject }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
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
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const handleTouchEnd = () => {
      isDragging.current = false;
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuenow={Math.round(sliderPos)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(5, p - 2));
          if (e.key === "ArrowRight") setSliderPos((p) => Math.min(95, p + 2));
        }}
      >
        {/* After (background) */}
        <div className="absolute inset-0">
          <Image
            src={project.afterImage}
            alt={`${project.title} After`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Before (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={project.beforeImage}
            alt={`${project.title} Before`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg z-10"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-accent"
          style={{ left: `${sliderPos}%`, transform: "translate(-50%, -50%)" }}
        >
          <MoveHorizontal className="w-5 h-5 text-accent" />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-black/70 rounded-full text-xs font-bold text-white shadow">
          Before
        </div>
        <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-accent/90 rounded-full text-xs font-bold text-primary shadow">
          After
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-primary">{project.title}</h3>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-xs font-semibold text-accent">{project.service}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="text-xs text-text-muted">{project.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-28 bg-light-gray" aria-label="Before and after projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Our Real Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            See the Difference
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Drag the slider to see the before and after transformations on our actual Western Australia roofing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <BeforeAfterItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
