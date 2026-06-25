"use client";

import React from "react";
import { BookMarked } from "lucide-react";
import SlideLayout, { SlideLayoutProps } from "./SlideLayout";

type SlideNavProps = Omit<SlideLayoutProps, 'slides' | 'tabId'>;

function SummaryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full space-y-4">
      <div className="flex items-center gap-2.5 text-gold-bright self-start mb-2">
        <BookMarked className="h-6 w-6 shrink-0" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Tổng hợp Chương 3
        </h3>
      </div>

      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-white">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
}

// ---- EXPORT ----
export default function TabSummary(navProps: SlideNavProps) {
  const slides = [
    <SummaryImage src="/Tong_hop_chuong3/1.jpg" alt="Tổng hợp Chương 3 - Phần 1" />,
    <SummaryImage src="/Tong_hop_chuong3/2.jpg" alt="Tổng hợp Chương 3 - Phần 2" />,
    <SummaryImage src="/Tong_hop_chuong3/3.jpg" alt="Tổng hợp Chương 3 - Phần 3" />,
    <SummaryImage src="/Tong_hop_chuong3/4.jpg" alt="Tổng hợp Chương 3 - Phần 4" />,
    <SummaryImage src="/Tong_hop_chuong3/5.jpg" alt="Tổng hợp Chương 3 - Phần 5" />,
    <SummaryImage src="/Tong_hop_chuong3/6.jpg" alt="Tổng hợp Chương 3 - Phần 6" />,
    <SummaryImage src="/Tong_hop_chuong3/7.jpg" alt="Tổng hợp Chương 3 - Phần 7" />,
    <SummaryImage src="/Tong_hop_chuong3/8.jpg" alt="Tổng hợp Chương 3 - Phần 8" />,
  ];
  return <SlideLayout slides={slides} tabId="summary" {...navProps} />;
}
