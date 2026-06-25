"use client";

import React from "react";
import { TrendingUp, Sparkles, ChevronRight, AlertTriangle, Clock, LayoutGrid } from "lucide-react";
import SlideLayout, { SlideLayoutProps } from "./SlideLayout";

type SlideNavProps = Omit<SlideLayoutProps, 'slides' | 'tabId'>;

interface TabAnalysisProps extends SlideNavProps {
  onQuickPrompt: (text: string) => void;
}

interface AnalysisSlideProps {
  onQuickPrompt: (text: string) => void;
}

// ---- SLIDE 1: Hình thái kẹt ----
function Slide1Frozen({ onQuickPrompt }: AnalysisSlideProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <TrendingUp className="h-6 w-6 shrink-0" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Chẩn đoán 1: Vốn đang mắc kẹt ở hình thái nào?
        </h3>
      </div>

      {/* Visual diagram with stuck point */}
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 overflow-x-auto">
        <div className="flex items-center justify-center gap-2 md:gap-3 min-w-[480px]">
          {[
            { label: "T", sub: "10.000 tỷ\nvay ban đầu", color: "bg-blue-950/60 border-blue-700/50 text-blue-300", done: true },
            { label: "→", color: "", done: true, isArrow: true },
            { label: "SX", sub: "Xây 3 tòa\ntháp phần thô", color: "bg-neutral-800 border-neutral-700 text-neutral-300", done: true },
            { label: "→", color: "", done: true, isArrow: true },
            { label: "H'", sub: "3 tòa tháp\n= BỊ MẮC KẸT", color: "bg-gold/20 border-gold/50 text-gold-bright ring-4 ring-gold/20", done: false, current: true },
            { label: "✖", color: "", done: false, isArrow: true, blocked: true },
            { label: "T'", sub: "15.000 tỷ\n(không thu được)", color: "bg-neutral-950 border-neutral-800 text-neutral-600", done: false },
          ].map((item, i) => {
            if (item.isArrow) {
              return (
                <div key={i} className={`flex flex-col items-center ${item.blocked ? "text-red-500 text-xl font-black" : "text-neutral-600"}`}>
                  {item.blocked ? "✖" : "→"}
                  {item.blocked && <span className="text-[9px] text-red-500 mt-1">Đóng băng!</span>}
                </div>
              );
            }
            return (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center font-black text-lg ${item.color} ${item.done && !item.current ? "opacity-60" : ""}`}>
                  {item.label}
                </div>
                <span className="text-[9px] text-neutral-500 text-center whitespace-pre-line leading-tight">{item.sub}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-5 space-y-3">
        <p className="text-xs font-bold text-crimson-bright uppercase tracking-wide">📍 Chẩn đoán:</p>
        <p className="text-sm text-neutral-300 leading-relaxed">
          Toàn bộ 10.000 tỷ đã bị{" "}
          <strong className="text-gold-bright">"hóa thạch" tại hình thái Tư bản Hàng hóa (H')</strong>
          {" "}— dạng sản phẩm dở dang là 3 tòa tháp phần thô. Alpha Corp không thể thực hiện{" "}
          <strong className="text-crimson-bright">Bước nhảy tử thần (H' → T')</strong>{" "}
          vì thị trường đóng băng — người dân không vay được tiền mua nhà.
        </p>
      </div>

      <button
        onClick={() => onQuickPrompt("Alpha Corp đang bị mắc kẹt dòng vốn ở hình thái nào và tại sao theo lý luận của Mác?")}
        className="w-full text-left px-4 py-3 rounded-xl bg-neutral-900/30 hover:bg-crimson/10 border border-neutral-800 hover:border-crimson/30 text-xs text-neutral-300 hover:text-neutral-100 transition-all duration-300 flex items-center justify-between group cursor-pointer"
      >
        <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-gold-bright" /> Hỏi AI giải thích sâu hơn</span>
        <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-crimson-bright" />
      </button>
    </div>
  );
}

// ---- SLIDE 2: Không gian (All-in) ----
function Slide2Space({ onQuickPrompt }: AnalysisSlideProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2.5 text-gold-bright border-b border-neutral-900 pb-4">
        <LayoutGrid className="h-5 w-5 shrink-0" />
        <h3 className="text-xl font-bold uppercase tracking-wider">
          Chẩn đoán 2: Vi phạm điều kiện Không gian
        </h3>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed">
        Mác khẳng định: Tư bản phải tồn tại{" "}
        <strong className="text-neutral-100">đồng thời</strong> ở cả 3 hình thái.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Chuẩn */}
        <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 space-y-4">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">✅ Cấu trúc vốn ĐÚNG</p>
          <div className="space-y-2">
            {[
              { label: "Tư bản Tiền tệ (T)", pct: 20, color: "bg-blue-600", note: "Dự phòng thanh khoản" },
              { label: "Tư bản Sản xuất (SX)", pct: 50, color: "bg-crimson", note: "Dự án đang xây" },
              { label: "Tư bản Hàng hóa (H')", pct: 30, color: "bg-gold-bright", note: "Đang bán cuốn chiếu" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-[10px] text-neutral-400">
                  <span>{item.label}</span>
                  <span className="text-neutral-500">{item.note}</span>
                </div>
                <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alpha Corp */}
        <div className="p-5 rounded-xl bg-red-950/20 border border-red-800/30 space-y-4">
          <p className="text-xs font-bold text-red-400 uppercase tracking-wide">❌ Alpha Corp: ALL-IN</p>
          <div className="space-y-2">
            {[
              { label: "Tư bản Tiền tệ (T)", pct: 0, color: "bg-blue-600", note: "≈ 0% — Cạn kiệt!" },
              { label: "Tư bản Sản xuất (SX)", pct: 0, color: "bg-crimson", note: "≈ 0% — Ngừng" },
              { label: "Tư bản Hàng hóa (H')", pct: 100, color: "bg-gold-bright", note: "100% — Chôn hết!" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-[10px] text-neutral-400">
                  <span>{item.label}</span>
                  <span className={item.pct === 100 ? "text-red-400 font-bold" : "text-neutral-600"}>{item.note}</span>
                </div>
                <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-4">
        <p className="text-xs text-neutral-400 leading-relaxed">
          <AlertTriangle className="h-3.5 w-3.5 text-amber-400 inline mr-1.5" />
          <strong className="text-amber-400">Sai lầm chiến lược:</strong> Alpha Corp đã chơi
          "tất tay" (All-in), dồn toàn bộ vốn vào một hình thái duy nhất. Khi thị trường xấu,
          họ không còn bất kỳ tỷ lệ phòng vệ nào dưới dạng tiền mặt dự phòng.
        </p>
      </div>
    </div>
  );
}

// ---- SLIDE 3: Thời gian ----
function Slide3Time({ onQuickPrompt }: AnalysisSlideProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2.5 text-blue-400 border-b border-neutral-900 pb-4">
        <Clock className="h-5 w-5 shrink-0" />
        <h3 className="text-xl font-bold uppercase tracking-wider">
          Chẩn đoán 3: Vi phạm điều kiện Thời gian
        </h3>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed">
        Tư bản phải{" "}
        <strong className="text-neutral-100">kế tiếp nhau chuyển hóa</strong> qua các giai đoạn.
        Hoàn thành GĐ trước là xung lực cho GĐ sau.
      </p>

      <div className="space-y-3">
        {[
          {
            trigger: "H' → T' bị kẹt",
            effect: "Không thu được tiền",
            consequence: "Không trả nợ ngân hàng → Nguy cơ tịch biên tài sản",
            arrow: "↓",
          },
          {
            trigger: "GĐ 1 tê liệt",
            effect: "Không có tiền nhập vật liệu",
            consequence: "Dự án tiếp theo đình trệ → Mất hợp đồng, mất thị phần",
            arrow: "↓",
          },
          {
            trigger: "GĐ 2 tê liệt",
            effect: "Không có tiền trả lương",
            consequence: "Công nhân đình công → Toàn bộ dây chuyền sản xuất đóng cửa",
            arrow: "✖",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 text-xs font-bold shrink-0">
                {i + 1}
              </div>
              {i < 2 && <div className="w-0.5 flex-1 bg-red-900/30 mt-1" />}
            </div>
            <div className="pb-4 space-y-1">
              <p className="text-xs font-bold text-red-400">{item.trigger} → {item.effect}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{item.consequence}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-4">
        <p className="text-xs text-neutral-300 leading-relaxed">
          🔗 <strong className="text-crimson-bright">Kết luận:</strong> Alpha Corp đang gánh
          lãi suất từng ngày. Khi dòng thời gian luân chuyển bị đứt gãy tại H', mọi bánh răng
          trong tập đoàn kẹt cứng — như cơ thể mà tim không còn bơm máu.
        </p>
      </div>

      <button
        onClick={() => onQuickPrompt("Tại sao vốn của Alpha Corp không thể tiếp tục quay vòng và gây tê liệt toàn bộ doanh nghiệp theo lý thuyết tuần hoàn tư bản?")}
        className="w-full text-left px-4 py-3 rounded-xl bg-neutral-900/30 hover:bg-crimson/10 border border-neutral-800 hover:border-crimson/30 text-xs text-neutral-300 hover:text-neutral-100 transition-all duration-300 flex items-center justify-between group cursor-pointer"
      >
        <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-gold-bright" /> Hỏi AI: Tại sao vốn không quay vòng?</span>
        <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-crimson-bright" />
      </button>
    </div>
  );
}

// ---- SLIDE 4: Giải pháp ----
function Slide4Solution({ onQuickPrompt }: AnalysisSlideProps) {
  return (
    <div className="space-y-6">
      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
        Nếu là CEO Alpha Corp — bạn sẽ làm gì?
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            icon: "💰",
            title: "Hạ giá — Cắt lỗ",
            desc: "Bán dưới giá thị trường để ép H' chuyển thành T nhanh nhất có thể. Ưu tiên thanh khoản hơn lợi nhuận.",
            tag: "Khơi thông GĐ 3",
            tagColor: "text-blue-300",
          },
          {
            icon: "🤝",
            title: "M&A — Bán dự án",
            desc: "Bán lại toàn bộ hoặc một phần dự án cho nhà đầu tư lớn hơn (quỹ đầu tư, đại gia ngành). Đổi H' thành T ngay.",
            tag: "Tái cơ cấu vốn",
            tagColor: "text-emerald-400",
          },
          {
            icon: "🏦",
            title: "Đàm phán ngân hàng",
            desc: "Tái cơ cấu nợ, xin giãn thời gian trả lãi. Chuyển một phần H' (cầm cố tài sản) để đổi lấy dòng tiền vận hành.",
            tag: "Gia hạn thời gian",
            tagColor: "text-gold-bright",
          },
          {
            icon: "🏗️",
            title: "Hoàn thiện → Bàn giao thuê",
            desc: "Đầu tư thêm để hoàn thiện, chuyển từ 'bán' sang 'cho thuê' — tạo dòng tiền đều hàng tháng dù thị trường xấu.",
            tag: "Đổi chiến lược",
            tagColor: "text-crimson-bright",
          },
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <p className="text-sm font-bold text-neutral-100">{item.title}</p>
              <span className={`ml-auto text-[10px] font-bold ${item.tagColor}`}>{item.tag}</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => onQuickPrompt("Nếu là CEO của Alpha Corp bị kẹt vốn tại H', bạn sẽ sử dụng những giải pháp nào để khơi thông tuần hoàn tư bản theo lý luận của Mác?")}
        className="w-full text-left px-4 py-3 rounded-xl bg-neutral-950/60 hover:bg-gold/10 border border-neutral-850 hover:border-gold/30 text-xs text-neutral-400 hover:text-white transition-all duration-300 flex items-center justify-between group cursor-pointer"
      >
        <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-gold-bright" /> Hỏi AI: Giải pháp tốt nhất cho Alpha Corp?</span>
        <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-gold-bright" />
      </button>
    </div>
  );
}

// ---- EXPORT ----
export default function TabAnalysis({ onQuickPrompt, ...navProps }: TabAnalysisProps) {
  const slides = [
    <Slide1Frozen onQuickPrompt={onQuickPrompt} />,
    <Slide2Space onQuickPrompt={onQuickPrompt} />,
    <Slide3Time onQuickPrompt={onQuickPrompt} />,
    <Slide4Solution onQuickPrompt={onQuickPrompt} />,
  ];
  return <SlideLayout slides={slides} tabId="analysis" {...navProps} />;
}
