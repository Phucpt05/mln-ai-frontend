"use client";

import React from "react";
import { CheckCircle2, Coins, Factory, Layers, Repeat2, ShieldAlert } from "lucide-react";

const lessons = [
  {
    title: "1. Không chỉ sản xuất, tư bản còn phải lưu thông",
    icon: Repeat2,
    text:
      "Alpha Corp đã hoàn thành một phần quá trình sản xuất, nhưng không bán được sản phẩm. Điều này cho thấy giá trị thặng dư chỉ có thể được thực hiện khi hàng hóa được thị trường chấp nhận và chuyển hóa thành tiền.",
  },
  {
    title: "2. Tư bản phải tồn tại đồng thời ở nhiều hình thái",
    icon: Coins,
    text:
      "Nếu phần lớn vốn bị dồn vào bất động sản tồn kho, doanh nghiệp thiếu tư bản tiền tệ để trả nợ, trả lương và tiếp tục mua vật tư. Tuần hoàn tư bản đòi hỏi tiền tệ, sản xuất và hàng hóa cùng tồn tại theo tỷ lệ phù hợp.",
  },
  {
    title: "3. Thời gian chu chuyển quyết định sức sống của doanh nghiệp",
    icon: Factory,
    text:
      "Khi khâu bán hàng bị kéo dài, thời gian chu chuyển tăng lên. Cùng một lượng vốn quay vòng chậm hơn, khả năng sinh giá trị thặng dư và mở rộng sản xuất giảm xuống.",
  },
  {
    title: "4. Tích lũy tư bản phụ thuộc vào việc thực hiện giá trị thặng dư",
    icon: ShieldAlert,
    text:
      "Không có tiền thu về từ bán hàng, Alpha Corp không thể biến giá trị thặng dư thành tư bản phụ thêm. Vì vậy quá trình tái sản xuất mở rộng bị chặn lại.",
  },
];

export default function TabLesson() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <Layers className="h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Bài học rút ra và kết luận
        </h3>
      </div>

      <section className="grid md:grid-cols-2 gap-4">
        {lessons.map((lesson) => {
          const Icon = lesson.icon;
          return (
            <article key={lesson.title} className="bg-neutral-950 border border-neutral-850 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-crimson/10 border border-crimson/30 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-crimson-bright" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{lesson.title}</h4>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{lesson.text}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid md:grid-cols-[0.9fr_1.1fr] gap-6">
        <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide">Kết luận ngắn gọn</h4>
          <p className="mt-4 text-lg md:text-xl font-bold leading-relaxed text-neutral-100">
            Khủng hoảng của Alpha Corp là minh chứng rằng giá trị thặng dư không dừng ở việc được tạo ra trong sản xuất; nó phải được thực hiện trong lưu thông và tiếp tục quay vòng trong chu chuyển tư bản.
          </p>
        </div>

        <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-6 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide">Câu kết dùng khi thuyết trình</h4>
          <div className="space-y-3">
            {[
              "Alpha Corp không thiếu tài sản, nhưng thiếu khả năng chuyển tài sản thành tiền.",
              "Ba tòa tháp là H' bị mắc kẹt; khi H' không thành T', giá trị thặng dư chưa được thực hiện.",
              "Từ đó thấy rõ bài học Chương 3: tư bản chỉ sống khi vận động liên tục qua sản xuất và lưu thông.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm text-neutral-350 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900/50 border border-neutral-850 rounded-xl p-6">
        <h4 className="text-sm font-bold text-gold-bright uppercase tracking-wide">Gợi ý bố cục bài trình bày trên lớp</h4>
        <div className="mt-4 grid md:grid-cols-4 gap-3 text-sm">
          {[
            ["Mở bài", "Kể ngắn case Alpha Corp và nêu vấn đề: vốn bị kẹt ở đâu?"],
            ["Nội dung", "Giải thích Chương 3: GTTD, sức lao động, tuần hoàn, chu chuyển."],
            ["Vận dụng", "Ánh xạ case vào T - H ... SX ... H' - T'."],
            ["Kết luận", "Rút ra bài học về thực hiện GTTD và chu chuyển vốn."],
          ].map(([heading, text]) => (
            <div key={heading} className="bg-neutral-950 border border-neutral-850 rounded-xl p-4">
              <div className="font-bold text-white">{heading}</div>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
