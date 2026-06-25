"use client";

import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SlideLayoutProps {
  slides: React.ReactNode[];
  tabId: string;
  // Controlled by parent (page.tsx global navigation)
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (idx: number) => void;
  // Whether global prev/next are available (for button disabled state)
  globalPrevDisabled?: boolean;
  globalNextDisabled?: boolean;
}

export default function SlideLayout({
  slides,
  tabId,
  currentSlide,
  onNext,
  onPrev,
  onGoTo,
  globalPrevDisabled = false,
  globalNextDisabled = false,
}: SlideLayoutProps) {
  const prevSlideRef = useRef(currentSlide);
  const [animKey, setAnimKey] = React.useState(0);
  const [direction, setDirection] = React.useState<"next" | "prev">("next");

  useEffect(() => {
    if (currentSlide !== prevSlideRef.current) {
      setDirection(currentSlide > prevSlideRef.current ? "next" : "prev");
      setAnimKey((k) => k + 1);
      prevSlideRef.current = currentSlide;
    }
  }, [currentSlide]);

  // Reset animation direction when tab changes
  const prevTabRef = useRef(tabId);
  useEffect(() => {
    if (tabId !== prevTabRef.current) {
      prevTabRef.current = tabId;
      prevSlideRef.current = currentSlide;
      setAnimKey((k) => k + 1);
    }
  }, [tabId, currentSlide]);

  const slideAnimClass =
    direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left";

  return (
    <div className="flex flex-col gap-6">
      {/* Slide content */}
      <div
        key={`${tabId}-${animKey}`}
        className={`${slideAnimClass} min-h-[380px] flex flex-col justify-center`}
      >
        {slides[currentSlide]}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between pt-2 border-t border-neutral-900/60">
        {/* Prev button */}
        <button
          onClick={onPrev}
          disabled={globalPrevDisabled}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed
            hover:bg-neutral-900/50 hover:text-crimson-bright
            text-neutral-400 cursor-pointer"
          aria-label="Trước"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Trước</span>
        </button>

        {/* Dot indicators (within-tab only) */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide
                  ? "w-6 h-2 bg-crimson"
                  : "w-2 h-2 bg-neutral-800 hover:bg-neutral-600"
              }`}
              aria-label={`Đến slide ${i + 1}`}
            />
          ))}
          <span className="ml-2 text-[10px] text-neutral-500 font-mono tabular-nums">
            {currentSlide + 1}/{slides.length}
          </span>
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          disabled={globalNextDisabled}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed
            hover:bg-neutral-900/50 hover:text-crimson-bright
            text-neutral-400 cursor-pointer"
          aria-label="Tiếp"
        >
          <span className="hidden sm:inline">Tiếp</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
