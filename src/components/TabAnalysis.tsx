"use client";

import React from "react";
import { AlertTriangle, ChevronRight, Repeat2, Sparkles, TrendingUp } from "lucide-react";

interface TabAnalysisProps {
  onQuickPrompt: (text: string) => void;
}

const mappingRows = [
  {
    stage: "T",
    caseFact: "Alpha Corp vay 10.000 tỷ đồng",
    theory: "Tư bản tiền tệ được ứng ra để bắt đầu chu trình.",
  },
  {
    stage: "H",
    caseFact: "Mua đất, thuê thiết kế, máy móc và công nhân",
    theory: "Tiền chuyển thành tư liệu sản xuất và sức lao động.",
  },
  {
    stage: "SX",
    caseFact: "Tổ chức xây dựng dự án đô thị ven biển",
    theory: "Tư bản sản xuất vận động để tạo ra giá trị mới.",
  },
  {
    stage: "H'",
    caseFact: "3 tòa tháp xây xong phần thô",
    theory: "Sản phẩm bất động sản trở thành tư bản hàng hóa chứa giá trị mới.",
  },
  {
    stage: "T'",
    caseFact: "Không bán được vì thị trường đóng băng",
    theory: "Hàng hóa không chuyển hóa thành tiền, giá trị thặng dư không được thực hiện.",
    danger: true,
  },
];

export default function TabAnalysis({ onQuickPrompt }: TabAnalysisProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <TrendingUp className="h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Phân tích vận dụng: Alpha Corp theo Chương 3
        </h3>
      </div>

      <section className="space-y-4">
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
          Tình huống Alpha Corp không chỉ là câu chuyện thiếu tiền mặt. Theo Chương 3, đây là ví dụ về việc tư bản đã đi qua sản xuất nhưng bị tắc ở lưu thông: hàng hóa đã hình thành nhưng chưa bán được, nên giá trị thặng dư chưa được thực hiện dưới hình thái tiền.
        </p>

        <div className="overflow-x-auto bg-neutral-950 border border-neutral-850 rounded-xl">
          <div className="min-w-[760px]">
            <div className="grid grid-cols-[90px_1.1fr_1.25fr] gap-0 border-b border-neutral-850 text-xs font-bold uppercase tracking-wide text-neutral-500">
              <div className="p-4">Hình thái</div>
              <div className="p-4">Dữ kiện Alpha Corp</div>
              <div className="p-4">Ý nghĩa lý thuyết</div>
            </div>
            {mappingRows.map((row) => (
              <div
                key={row.stage}
                className={`grid grid-cols-[90px_1.1fr_1.25fr] border-b border-neutral-850 last:border-b-0 ${
                  row.danger ? "bg-red-950/10" : "bg-neutral-950/40"
                }`}
              >
                <div className={`p-4 text-xl font-extrabold ${row.danger ? "text-red-400" : "text-crimson-bright"}`}>
                  {row.stage}
                </div>
                <div className="p-4 text-sm text-neutral-300">{row.caseFact}</div>
                <div className="p-4 text-sm text-neutral-400 leading-relaxed">{row.theory}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-[1fr_0.9fr] gap-6">
        <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-red-400">
            <AlertTriangle className="h-5 w-5" />
            <h4 className="text-base font-bold uppercase tracking-wide">Điểm nghẽn trung tâm</h4>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Vốn của Alpha Corp đang mắc kẹt ở <strong className="text-white">H&apos;</strong>: tư bản hàng hóa. Ba tòa tháp là sản phẩm đã hình thành và có giá trị trên sổ sách, nhưng vì không bán được nên chưa chuyển hóa thành <strong className="text-white">T&apos;</strong>.
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Vì vậy, doanh nghiệp không thu được tiền để trả nợ ngân hàng, trả nhà cung cấp, trả lương và tái đầu tư. Một khâu bị tắc kéo theo toàn bộ chu chuyển tư bản bị đình trệ.
          </p>
        </div>

        <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-gold-bright">
            <Repeat2 className="h-5 w-5" />
            <h4 className="text-base font-bold uppercase tracking-wide text-white">Liên hệ trực tiếp với bài học</h4>
          </div>
          <ul className="space-y-3 text-sm text-neutral-400 leading-relaxed">
            <li><strong className="text-neutral-200">Nguồn gốc GTTD:</strong> giá trị mới được tạo trong sản xuất.</li>
            <li><strong className="text-neutral-200">Thực hiện GTTD:</strong> chỉ xảy ra khi hàng hóa bán được.</li>
            <li><strong className="text-neutral-200">Chu chuyển tư bản:</strong> càng tắc lưu thông, vòng quay vốn càng chậm.</li>
            <li><strong className="text-neutral-200">Tích lũy tư bản:</strong> không có T&apos;, doanh nghiệp không thể mở rộng sản xuất.</li>
          </ul>
        </div>
      </section>

      <section className="bg-neutral-950/70 border border-neutral-850 rounded-xl p-6 space-y-4">
        <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles className="h-4.5 w-4.5 text-gold-bright" />
          Câu hỏi nhanh cho Trợ lý AI
        </h4>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            "Alpha Corp mắc kẹt ở hình thái tư bản nào trong công thức tuần hoàn?",
            "Tại sao không bán được hàng hóa lại làm giá trị thặng dư chưa được thực hiện?",
            "Hãy rút ra bài học Chương 3 từ case Alpha Corp theo dạng thuyết trình.",
          ].map((prompt, index) => (
            <button
              key={prompt}
              onClick={() => onQuickPrompt(prompt)}
              className="text-left px-4 py-3 rounded-xl bg-neutral-900 hover:bg-crimson/10 border border-neutral-850 hover:border-crimson/30 text-xs md:text-sm text-neutral-300 hover:text-white transition-all duration-300 flex items-center justify-between gap-3 group cursor-pointer"
            >
              <span>{index + 1}. {prompt}</span>
              <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-crimson-bright transition-colors shrink-0" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
