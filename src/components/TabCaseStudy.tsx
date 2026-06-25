"use client";

import React from "react";
import Image from "next/image";
import { HelpCircle, ChevronRight } from "lucide-react";

export default function TabCaseStudy() {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">

      {/* ── TIÊU ĐỀ ── */}
      <div className="space-y-1">
        <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
          Tình huống thực tế
        </p>
        <h3 className="text-2xl md:text-3xl font-black text-neutral-100 leading-tight">
          <span className="whitespace-nowrap">Tập đoàn Bất động sản <span className="text-crimson-bright">Alpha Corp</span></span>
          <br />
          <span className="whitespace-nowrap">— "Chết trên đống tài sản"</span>
        </h3>
      </div>

      {/* ── HÌNH ẢNH MINH HỌA ── */}
      <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
        <Image
          src="/alpha_corp_crisis.png"
          alt="3 tòa tháp Alpha Corp bỏ hoang ven biển — khủng hoảng thanh khoản"
          width={1200}
          height={550}
          className="w-full object-cover"
          style={{ maxHeight: 380, objectPosition: "center 25%" }}
          priority
        />
        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/90 border border-red-500/40 text-[10px] font-bold uppercase tracking-widest mb-2 animate-pulse" style={{ color: "#fca5a5" }}>
            🔴 Khủng hoảng thanh khoản — [Giả định]
          </div>
          <p className="text-base md:text-xl font-black leading-snug max-w-2xl" style={{ color: "#fff" }}>
            3 tòa tháp chọc trời — đứng trơ trọi ven biển.{" "}
            <span style={{ color: "#fbbf24" }} className="whitespace-nowrap">Không bán được căn nào.</span>
          </p>
        </div>
      </div>

      {/* ── NỘI DUNG TÌNH HUỐNG ── */}
      <div className="grid md:grid-cols-2 gap-5">

        {/* Bối cảnh */}
        <div className="space-y-3 p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800">
          <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">Bối cảnh</p>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Tập đoàn Alpha Corp là một <strong className="text-neutral-100">"ông lớn" danh tiếng</strong> trên
            thị trường. Họ vừa vay ngân hàng{" "}
            <strong className="text-crimson-bright">10.000 tỷ đồng</strong>, nắm trong tay những vị trí đất
            vàng ven biển đắc địa, và đã hoàn thiện xong phần thô của{" "}
            <strong className="text-neutral-100">3 tòa tháp chọc trời</strong>.
          </p>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Xét về mặt sổ sách tài sản, họ{" "}
            <strong className="text-gold-bright">vô cùng giàu có</strong>.
          </p>

          {/* Timeline mini */}
          <div className="mt-2 space-y-2">
            {[
              { step: "GĐ 1", text: "Vay 10.000 tỷ → Mua đất, thuê máy móc & nhân công", color: "bg-blue-600" },
              { step: "GĐ 2", text: "Xây dựng xong phần thô 3 tòa tháp ven biển", color: "bg-crimson" },
              { step: "GĐ 3", text: "Thị trường đóng băng — 3 tòa tháp không bán được", color: "bg-red-600" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <div className={`shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full ${item.color} mt-2`} />
                <p className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-300">{item.step}:</strong> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hệ quả */}
        <div className="space-y-3 p-5 rounded-2xl bg-red-950/10 border border-red-900/25">
          <p className="text-[11px] font-bold text-red-400 uppercase tracking-widest">Hệ quả — Đóng băng toàn diện</p>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Thị trường <strong className="text-neutral-100">bất ngờ đóng băng</strong> do siết chặt tín
            dụng và lãi suất tăng cao. Người dân không có tiền mua nhà. 3 tòa tháp nằm trơ trọi,
            không bán được.
          </p>

          <div className="space-y-2">
            {[
              { icon: "🏦", text: "Không trả được lãi ngân hàng → nguy cơ siết nợ" },
              { icon: "🧱", text: "Không có tiền nhập vật liệu → dự án tiếp theo đình trệ" },
              { icon: "👷", text: "Công nhân bị nợ lương → đình công, dây chuyền ngừng" },
              { icon: "💀", text: "Toàn bộ hoạt động tê liệt — dù tài sản vẫn còn rất nhiều" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2.5">
                <span className="text-base shrink-0">{item.icon}</span>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CÂU HỎI PHẢN BIỆN ── */}
      <div className="bg-gradient-to-br from-crimson/8 to-gold/5 border border-crimson/20 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-crimson-bright shrink-0" />
          <p className="text-sm font-bold text-neutral-100 uppercase tracking-wide">
            Câu hỏi đặt ra cho hội trường
          </p>
        </div>

        <div className="space-y-3">
          {[
            "Tại sao một doanh nghiệp có tài sản hàng chục nghìn tỷ đồng lại đứng bên bờ vực phá sản chỉ vì thiếu vài tỷ tiền mặt vận hành?",
            `Tại sao "có tài sản" trong tay lại không đồng nghĩa với "có tiền"?`,
            "Dòng máu 10.000 tỷ của họ đã chảy đi đâu và bị tắc nghẽn ở nhịp đập nào?",
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-crimson/15 border border-crimson/30 text-crimson-bright text-[10px] font-black flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-neutral-300 leading-relaxed font-medium">{q}</p>
            </div>
          ))}
        </div>

        <div className="pt-1 flex items-center gap-1.5 text-xs text-neutral-500">
          <ChevronRight className="h-3.5 w-3.5 text-crimson-bright" />
          <span>Để trả lời, hãy chuyển sang tab <strong className="text-crimson-bright">Lý thuyết</strong> để tìm hiểu lý luận của C. Mác.</span>
        </div>
      </div>

    </div>
  );
}
