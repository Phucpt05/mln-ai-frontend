"use client";

import React from "react";
import { BookOpen } from "lucide-react";

export default function TabTheory() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <BookOpen className="h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Lý thuyết: Công thức tuần hoàn tư bản
        </h3>
      </div>

      <div className="space-y-6 pt-2">
        <p className="text-neutral-300 text-sm md:text-base">
          Tuần hoàn của tư bản công nghiệp là sự vận động liên tục của tư bản trải qua <span className="text-white font-semibold">3 giai đoạn</span>, lần lượt mang lấy <span className="text-white font-semibold">3 hình thái</span> để rồi quay trở về hình thái ban đầu với giá trị thặng dư.
        </p>

        {/* Formula Diagram */}
        <div className="bg-neutral-950/80 p-8 rounded-xl border border-neutral-800/80 overflow-x-auto">
          <div className="flex items-center justify-center gap-2 md:gap-4 text-sm md:text-lg font-bold min-w-[500px]">
            
            <div className="flex flex-col items-center bg-neutral-900 px-4 py-3 rounded border border-neutral-700">
              <span className="text-crimson-bright text-xl">T</span>
              <span className="text-[10px] text-neutral-500 font-normal mt-1">Tư bản tiền tệ</span>
            </div>

            <span className="text-neutral-600">→</span>

            <div className="flex flex-col items-center bg-neutral-900 px-4 py-3 rounded border border-neutral-700">
              <span className="text-white text-base">H (SLD, TLSX)</span>
              <span className="text-[10px] text-neutral-500 font-normal mt-1">Tư liệu SX & Sức LĐ</span>
            </div>

            <span className="text-neutral-600">...</span>

            <div className="flex flex-col items-center bg-crimson/20 px-4 py-3 rounded border border-crimson/40 text-crimson-bright">
              <span className="text-xl">SX</span>
              <span className="text-[10px] text-neutral-400 font-normal mt-1">Tư bản sản xuất</span>
            </div>

            <span className="text-neutral-600">...</span>

            <div className="flex flex-col items-center bg-gold/20 px-4 py-3 rounded border border-gold/40 text-gold-bright">
              <span className="text-xl">H'</span>
              <span className="text-[10px] text-neutral-400 font-normal mt-1">Tư bản hàng hóa</span>
            </div>

            <span className="text-neutral-600">→</span>

            <div className="flex flex-col items-center bg-neutral-900 px-4 py-3 rounded border border-neutral-700">
              <span className="text-crimson-bright text-xl">T'</span>
              <span className="text-[10px] text-neutral-500 font-normal mt-1">Tiền tệ đã tăng</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="p-4 bg-neutral-900/30 rounded-xl border-t-2 border-neutral-750">
            <h4 className="font-bold text-white mb-1 text-sm">Giai đoạn 1 (Lưu thông)</h4>
            <p className="text-neutral-400 leading-relaxed">Tư bản tiền tệ (<strong className="text-neutral-200">T</strong>) mua tư liệu sản xuất và sức lao động để chuẩn bị sản xuất.</p>
          </div>
          <div className="p-4 bg-neutral-900/30 rounded-xl border-t-2 border-crimson">
            <h4 className="font-bold text-white mb-1 text-sm">Giai đoạn 2 (Sản xuất)</h4>
            <p className="text-neutral-400 leading-relaxed">Công nhân kết hợp tư liệu sản xuất tạo ra hàng hóa mới chứa giá trị thặng dư (<strong className="text-neutral-200">SX</strong>).</p>
          </div>
          <div className="p-4 bg-neutral-900/30 rounded-xl border-t-2 border-gold">
            <h4 className="font-bold text-white mb-1 text-sm">Giai đoạn 3 (Lưu thông)</h4>
            <p className="text-neutral-400 leading-relaxed">Bán hàng hóa (<strong className="text-neutral-200">H'</strong>) để thu về lượng tiền lớn hơn ban đầu (<strong className="text-neutral-200">T'</strong>).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
