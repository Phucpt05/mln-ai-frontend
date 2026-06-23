"use client";

import React from "react";
import { TrendingUp, Sparkles, ChevronRight } from "lucide-react";

interface TabAnalysisProps {
  onQuickPrompt: (text: string) => void;
}

export default function TabAnalysis({ onQuickPrompt }: TabAnalysisProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <TrendingUp className="h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Phân tích: Vốn của Alpha Corp đang bị kẹt ở đâu?
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center pt-2">
        <div className="space-y-4">
          <p className="text-neutral-350 text-sm md:text-base leading-relaxed">
            Áp dụng lý thuyết chu trình tuần hoàn: 
            <span className="text-white font-semibold"> $T \rightarrow H ... SX ... H' \rightarrow T'$</span>
          </p>
          <div className="bg-crimson/5 p-5 rounded-xl border border-crimson/20 space-y-3">
            <p className="text-xs md:text-sm text-neutral-300">
              • Số tiền vay 10.000 tỷ ban đầu (<strong className="text-crimson-bright">T</strong>) đã mua đất và trả lương, chuyển sang hình thái sản xuất (<strong className="text-white">SX</strong>).
            </p>
            <p className="text-xs md:text-sm text-neutral-300">
              • Khi xây dựng xong phần thô, tư bản đã chuyển hóa thành sản phẩm hàng hóa (<strong className="text-gold-bright">H'</strong>).
            </p>
            <p className="text-xs md:text-sm text-red-400 font-semibold leading-relaxed">
              • Giao dịch đóng băng tại bước cuối: Không thể thực hiện chuyển hóa $H' \rightarrow T'$. Vốn nằm chết ở dạng những khối bê tông bất động sản không thanh khoản!
            </p>
          </div>
        </div>

        <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-800 space-y-4">
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="h-4.5 w-4.5 text-gold-bright animate-bounce" />
            Thử hỏi Trợ lý AI giải thích tình huống này:
          </h4>
          
          <div className="flex flex-col gap-2.5">
            <button 
              onClick={() => onQuickPrompt("Alpha Corp đang bị mắc kẹt dòng vốn ở hình thái nào và tại sao?")}
              className="text-left w-full px-4 py-3 rounded-xl bg-neutral-950/60 hover:bg-crimson/10 border border-neutral-850 hover:border-crimson/30 text-xs md:text-sm text-neutral-300 hover:text-white transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <span>1. Alpha Corp mắc kẹt ở đâu?</span>
              <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-crimson-bright transition-colors" />
            </button>

            <button 
              onClick={() => onQuickPrompt("Tại sao vốn của Alpha Corp không thể tiếp tục quay vòng và gây tê liệt doanh nghiệp?")}
              className="text-left w-full px-4 py-3 rounded-xl bg-neutral-950/60 hover:bg-crimson/10 border border-neutral-850 hover:border-crimson/30 text-xs md:text-sm text-neutral-300 hover:text-white transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <span>2. Tại sao vốn không quay vòng?</span>
              <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-crimson-bright transition-colors" />
            </button>

            <button 
              onClick={() => onQuickPrompt("Hãy giải thích tình hình đóng băng vốn của Alpha Corp theo ngôn ngữ dễ hiểu nhất cho sinh viên năm nhất.")}
              className="text-left w-full px-4 py-3 rounded-xl bg-neutral-950/60 hover:bg-crimson/10 border border-neutral-850 hover:border-crimson/30 text-xs md:text-sm text-neutral-300 hover:text-white transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <span>3. Giải thích như sinh viên năm nhất</span>
              <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-crimson-bright transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
