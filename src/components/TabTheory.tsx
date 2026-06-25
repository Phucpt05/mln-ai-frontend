"use client";

import React from "react";
import { BookOpen, ArrowRight, Zap, Cpu, Package } from "lucide-react";
import SlideLayout, { SlideLayoutProps } from "./SlideLayout";

type SlideNavProps = Omit<SlideLayoutProps, 'slides' | 'tabId'>;

// ---- SLIDE 1: H-T-H vs T-H-T ----
function Slide1Formula() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full space-y-4">
      <div className="flex items-center gap-2.5 text-crimson-bright self-start mb-2">
        <BookOpen className="h-6 w-6 shrink-0" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Lý thuyết: Bản chất của Tư bản
        </h3>
      </div>

      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-white">
        {/* Infographic Image */}
        <img 
          src="/Tong_hop_chuong3/1.jpg" 
          alt="Công thức chung của tư bản" 
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
}

// ---- SLIDE 2: NGUỒN GỐC GTTS ----
function Slide2SurplusValue() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full space-y-4">
      <div className="flex items-center gap-2.5 text-crimson-bright self-start mb-2">
        <BookOpen className="h-6 w-6 shrink-0" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Lý thuyết: Nguồn gốc Giá trị thặng dư
        </h3>
      </div>

      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-white">
        {/* Infographic Image for Slide 2 */}
        <img 
          src="/Tong_hop_chuong3/3.jpg" 
          alt="Nguồn gốc Giá trị thặng dư" 
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
}

// ---- SLIDE 3: TƯ BẢN BẤT BIẾN & KHẢ BIẾN ----
function Slide3ConstantVariable() {
  return (
    <div className="space-y-6">
      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
        Phân loại tư bản trong sản xuất
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Tư bản bất biến */}
        <div className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-700/60 space-y-3">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-neutral-400" />
            <span className="text-sm font-bold text-neutral-100">Tư bản bất biến (c)</span>
          </div>
          <p className="text-xs text-neutral-500 font-mono">
            Ký hiệu: <strong className="text-neutral-300">c</strong> — constant capital
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Bộ phận tư bản tồn tại dưới hình thái{" "}
            <strong className="text-neutral-200">tư liệu sản xuất</strong> (máy móc, nguyên vật
            liệu, đất đai). Giá trị của nó được chuyển{" "}
            <strong className="text-neutral-100">nguyên vẹn</strong> vào sản phẩm — không thêm không bớt.
          </p>
          <div className="bg-neutral-950/60 rounded-lg p-3 space-y-1">
            <p className="text-[10px] text-neutral-500">
              🏗️ Với Alpha Corp: <strong className="text-neutral-300">Đất, gạch, sắt thép, máy xây dựng...</strong>
            </p>
            <p className="text-[10px] text-amber-500">
              ⚠️ Không tạo ra GTTD, nhưng là điều kiện cần thiết.
            </p>
          </div>
        </div>

        {/* Tư bản khả biến */}
        <div className="p-5 rounded-xl bg-crimson/5 border border-crimson/30 space-y-3">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-crimson-bright" />
            <span className="text-sm font-bold text-neutral-100">Tư bản khả biến (v)</span>
          </div>
          <p className="text-xs text-neutral-500 font-mono">
            Ký hiệu: <strong className="text-crimson-bright">v</strong> — variable capital
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Bộ phận tư bản dùng để{" "}
            <strong className="text-crimson-bright">mua sức lao động</strong>. Giá trị của nó
            không đơn thuần chuyển vào sản phẩm mà{" "}
            <strong className="text-neutral-100">biến đổi (tăng lên)</strong> — bởi công nhân tạo
            ra giá trị mới lớn hơn tiền lương.
          </p>
          <div className="bg-crimson/10 rounded-lg p-3 space-y-1">
            <p className="text-[10px] text-neutral-400">
              👷 Với Alpha Corp: <strong className="text-neutral-300">Tiền lương kỹ sư, công nhân xây dựng...</strong>
            </p>
            <p className="text-[10px] text-crimson-bright">
              🔥 Nguồn gốc duy nhất tạo ra Giá trị thặng dư!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-950/60 border border-neutral-800 rounded-xl p-4">
        <p className="text-xs font-bold text-neutral-400 mb-2">Công thức giá trị hàng hóa:</p>
        <div className="flex items-center gap-3 text-lg font-black text-center justify-center">
          <span className="text-neutral-100">W</span>
          <span className="text-neutral-600">=</span>
          <span className="text-neutral-400">c</span>
          <span className="text-neutral-600">+</span>
          <span className="text-crimson-bright">v</span>
          <span className="text-neutral-600">+</span>
          <span className="text-gold-bright">m</span>
        </div>
        <p className="text-[10px] text-neutral-600 text-center mt-2">
          (Chi phí tư liệu SX) + (Tiền lương) + (Giá trị thặng dư)
        </p>
      </div>
    </div>
  );
}

// ---- SLIDE 3B: INFOGRAPHIC (4.jpg) ----
function Slide3BImage() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full space-y-4">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-white">
        <img 
          src="/Tong_hop_chuong3/4.jpg" 
          alt="Infographic bổ sung" 
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
}

// ---- SLIDE 4: TUẦN HOÀN TƯ BẢN ----
function Slide4Circulation() {
  return (
    <div className="space-y-6">
      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
        Tuần hoàn tư bản: 3 giai đoạn - 3 hình thái
      </p>

      {/* Diagram */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:p-8 overflow-x-auto">
        <div className="flex items-start justify-center gap-2 md:gap-4 min-w-[480px]">
          {/* T */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-blue-950/80 border-2 border-blue-700/50 flex items-center justify-center">
              <span className="text-2xl font-black text-blue-300">T</span>
            </div>
            <span className="text-[10px] text-neutral-500 text-center font-semibold">Tư bản<br />Tiền tệ</span>
          </div>
          <div className="flex flex-col items-center mt-5 gap-0.5">
            <ArrowRight className="h-5 w-5 text-neutral-600" />
            <span className="text-[9px] text-neutral-600">Mua SLĐ<br />& TLSX</span>
          </div>
          {/* SX */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-crimson/20 border-2 border-crimson/50 flex items-center justify-center">
              <Cpu className="h-7 w-7 text-crimson-bright" />
            </div>
            <span className="text-[10px] text-neutral-500 text-center font-semibold">Tư bản<br />Sản xuất</span>
          </div>
          <div className="flex flex-col items-center mt-5 gap-0.5">
            <ArrowRight className="h-5 w-5 text-neutral-600" />
            <span className="text-[9px] text-neutral-600">Tạo ra<br />hàng hóa</span>
          </div>
          {/* H' */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-gold/20 border-2 border-gold/50 flex items-center justify-center">
              <span className="text-2xl font-black text-gold-bright">H'</span>
            </div>
            <span className="text-[10px] text-neutral-500 text-center font-semibold">Tư bản<br />Hàng hóa</span>
          </div>
          <div className="flex flex-col items-center mt-5 gap-0.5">
            <ArrowRight className="h-5 w-5 text-neutral-600" />
            <span className="text-[9px] text-neutral-600">Bán để<br />thu tiền</span>
          </div>
          {/* T' */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-emerald-950/80 border-2 border-emerald-700/50 flex items-center justify-center">
              <span className="text-2xl font-black text-emerald-400">T'</span>
            </div>
            <span className="text-[10px] text-neutral-500 text-center font-semibold">Tiền tệ<br />+ GTTD</span>
          </div>
        </div>
      </div>

      {/* 3 chức năng */}
      <div className="grid md:grid-cols-3 gap-3 text-xs">
        {[
          {
            label: "Giai đoạn 1",
            sublabel: "Lưu thông (T → H)",
            desc: "Chuẩn bị điều kiện sản xuất: mua đất, máy móc, thuê nhân công.",
            border: "border-blue-700/40",
            bg: "bg-blue-950/20",
          },
          {
            label: "Giai đoạn 2",
            sublabel: "Sản xuất (…SX…)",
            desc: "Kết hợp tư liệu sản xuất + sức lao động để tạo ra H' chứa giá trị thặng dư.",
            border: "border-crimson/40",
            bg: "bg-crimson/5",
          },
          {
            label: "Giai đoạn 3",
            sublabel: `"Bước nhảy tử thần" (H' → T')`,
            desc: "Bán hàng hóa để thực hiện giá trị. Không bán được = hàng hóa + chủ đều 'chết'.",
            border: "border-gold/40",
            bg: "bg-gold/5",
          },
        ].map((g) => (
          <div
            key={g.label}
            className={`p-4 rounded-xl border-t-2 border ${g.border} ${g.bg} space-y-1.5`}
          >
            <p className="font-bold text-neutral-100">{g.label}</p>
            <p className="text-[10px] text-neutral-500 font-mono">{g.sublabel}</p>
            <p className="text-neutral-400 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- SLIDE 5: CHU CHUYỂN ----
function Slide5Turnover() {
  return (
    <div className="space-y-6">
      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
        Chu chuyển tư bản: Tuần hoàn định kỳ & tốc độ quay vòng
      </p>

      <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
        <p className="text-sm text-neutral-300 leading-relaxed">
          Nếu{" "}
          <strong className="text-neutral-100">Tuần hoàn</strong> là <em>một vòng chạy</em>, thì{" "}
          <strong className="text-crimson-bright">Chu chuyển</strong> là hỏi:
          "Trong 1 năm, doanh nghiệp chạy được mấy vòng?"
        </p>
        <div className="flex items-center justify-center gap-6 py-2">
          <div className="text-center">
            <p className="text-3xl font-black text-crimson-bright">n</p>
            <p className="text-[10px] text-neutral-500 mt-1">Số vòng/năm</p>
          </div>
          <span className="text-2xl text-neutral-600">=</span>
          <div className="text-center">
            <p className="text-xl font-bold text-neutral-100">12 tháng</p>
            <p className="text-[10px] text-neutral-500 mt-1">Thời gian chuẩn</p>
          </div>
          <span className="text-2xl text-neutral-600">÷</span>
          <div className="text-center">
            <p className="text-xl font-bold text-gold-bright">T vòng</p>
            <p className="text-[10px] text-neutral-500 mt-1">Thời gian 1 chu kỳ</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-3">
          <p className="text-xs font-bold text-neutral-300 uppercase tracking-wide">
            Tư bản cố định
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Máy móc, nhà xưởng, thiết bị… Giá trị chuyển{" "}
            <strong className="text-neutral-100">dần dần</strong> vào sản phẩm (qua khấu hao). Tốc
            độ chu chuyển chậm (nhiều năm).
          </p>
          <p className="text-[10px] text-neutral-600">
            🏗️ Ví dụ: Cần cẩu xây dựng của Alpha Corp — dùng 10 năm mới hao mòn hết.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-crimson/5 border border-crimson/20 space-y-3">
          <p className="text-xs font-bold text-crimson-bright uppercase tracking-wide">
            Tư bản lưu động
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Nguyên vật liệu, sức lao động… Giá trị chuyển{" "}
            <strong className="text-neutral-100">toàn phần</strong> vào sản phẩm trong một chu kỳ.
            Tốc độ chu chuyển nhanh hơn.
          </p>
          <p className="text-[10px] text-neutral-600">
            🧱 Ví dụ: Gạch, xi măng, tiền lương công nhân dùng hết trong từng tháng.
          </p>
        </div>
      </div>

      <div className="bg-gold/5 border border-gold/20 rounded-xl p-4">
        <p className="text-xs text-neutral-300 leading-relaxed">
          💡 <strong className="text-gold-bright">Hệ quả quan trọng:</strong> Tư bản lưu động
          càng chu chuyển nhanh, nhà tư bản càng thu được nhiều giá trị thặng dư trong năm.
          Đây là lý do tại sao các doanh nghiệp luôn tìm cách{" "}
          <strong className="text-neutral-100">rút ngắn thời gian sản xuất và lưu thông</strong>.
        </p>
      </div>
    </div>
  );
}

// ---- SLIDE 6: INFOGRAPHIC (6.jpg) ----
function Slide6Image() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full space-y-4">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-white">
        <img 
          src="/Tong_hop_chuong3/6.jpg" 
          alt="Infographic bổ sung chu chuyển tư bản" 
          className="w-full h-auto object-contain block"
        />
      </div>
    </div>
  );
}

// ---- EXPORT ----
export default function TabTheory(navProps: SlideNavProps) {
  const slides = [
    <Slide1Formula />,
    <Slide2SurplusValue />,
    <Slide3ConstantVariable />,
    <Slide3BImage />,
    <Slide4Circulation />,
    <Slide5Turnover />,
    <Slide6Image />,
  ];
  return <SlideLayout slides={slides} tabId="theory" {...navProps} />;
}
