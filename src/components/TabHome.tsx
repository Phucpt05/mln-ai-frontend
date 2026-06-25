"use client";

import React from "react";
import { Layers, ChevronRight } from "lucide-react";

interface TabHomeProps {
  onNext: () => void;
}

export default function TabHome({ onNext }: TabHomeProps) {
  return (
    <div className="text-center space-y-6 max-w-3xl mx-auto py-10 animate-fade-in">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-crimson-bright text-xs font-semibold uppercase tracking-wider mb-2">
        <Layers className="h-3.5 w-3.5" />
        Bài Thuyết Trình Tương Tác
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-neutral-100">
        LÝ LUẬN CỦA C. MÁC VỀ <br />
        <span className="bg-gradient-to-r from-crimson via-crimson-bright to-gold bg-clip-text text-transparent">
          TUẦN HOÀN TƯ BẢN
        </span>
      </h2>
      <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        Phân tích dòng vận động của tư bản qua ba hình thái và ba giai đoạn. Ứng dụng lý thuyết để mổ xẻ Case Study thực tế về sự đóng băng dòng vốn của các tập đoàn bất động sản hiện đại.
      </p>
      <div className="pt-6">
        <button 
          onClick={onNext}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-crimson to-crimson-light text-neutral-950 text-sm font-semibold rounded-xl hover:from-crimson-light hover:to-crimson-bright transition-all duration-300 shadow-lg shadow-crimson/30 hover:scale-105 cursor-pointer" style={{color: '#fff'}}
        >
          <span>Khám phá Case Study</span>
          <ChevronRight className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  );
}
