"use client";

import React from "react";
import { BookOpen, ChevronRight, Building2, GraduationCap } from "lucide-react";

interface TabHomeProps {
  onNext: () => void;
}

export default function TabHome({ onNext }: TabHomeProps) {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 animate-fade-in">
      <div className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/15 border border-crimson/30 text-crimson-bright text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="h-3.5 w-3.5" />
          Bài học tình huống
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
          CHƯƠNG 3: <br />
          <span className="bg-gradient-to-r from-crimson via-crimson-bright to-gold bg-clip-text text-transparent">
            GIÁ TRỊ THẶNG DƯ
          </span>
        </h2>
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Website này dùng tình huống “Khủng hoảng tại Alpha Corp” để dẫn vào nội dung Chương 3: nguồn gốc giá trị thặng dư, hàng hóa sức lao động, tuần hoàn - chu chuyển tư bản, tích lũy tư bản và các hình thức biểu hiện trong kinh tế thị trường.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5">
          <Building2 className="h-6 w-6 text-crimson-bright" />
          <h3 className="mt-4 text-sm font-bold text-white uppercase tracking-wide">Tình huống thực tế</h3>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Alpha Corp vay 10.000 tỷ, xây xong 3 tòa tháp nhưng thị trường đóng băng nên không bán được.
          </p>
        </div>
        <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5">
          <BookOpen className="h-6 w-6 text-gold-bright" />
          <h3 className="mt-4 text-sm font-bold text-white uppercase tracking-wide">Nội dung Chương 3</h3>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Trình bày theo mạch: giá trị thặng dư được tạo ra, thực hiện, chu chuyển và tích lũy như thế nào.
          </p>
        </div>
        <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5">
          <GraduationCap className="h-6 w-6 text-emerald-400" />
          <h3 className="mt-4 text-sm font-bold text-white uppercase tracking-wide">Bài học rút ra</h3>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Case Alpha Corp cho thấy giá trị thặng dư chỉ có ý nghĩa khi hàng hóa bán được và vốn quay vòng.
          </p>
        </div>
      </div>

      <div className="text-center pt-2">
        <button 
          onClick={onNext}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-crimson to-crimson-light text-white text-sm font-semibold rounded-xl hover:from-crimson-light hover:to-crimson-bright transition-all duration-300 shadow-lg shadow-crimson/30 hover:scale-105 cursor-pointer"
        >
          <span>Bắt đầu từ tình huống Alpha Corp</span>
          <ChevronRight className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  );
}
