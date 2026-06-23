"use client";

import React from "react";
import { Building2, AlertCircle } from "lucide-react";

export default function TabCaseStudy() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <Building2 className="h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Tình huống thực tế: Khủng hoảng tại Alpha Corp
        </h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center pt-2">
        <div className="space-y-4">
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            <strong className="text-white">Tập đoàn Bất động sản Alpha Corp (giả định)</strong> là một doanh nghiệp lớn. Họ thực hiện khoản vay ngân hàng trị giá <span className="text-gold-bright font-bold">10.000 tỷ đồng</span> để phát triển dự án Khu đô thị cao cấp ven biển.
          </p>
          <div className="space-y-3 text-xs md:text-sm">
            <div className="flex items-start gap-3 bg-neutral-900/40 p-4 rounded-xl border border-neutral-800">
              <span className="w-6 h-6 rounded-full bg-crimson/20 border border-crimson/50 text-crimson-bright flex items-center justify-center font-bold shrink-0 text-xs">I</span>
              <p className="text-neutral-400">
                <strong className="text-neutral-200">Giai đoạn 1:</strong> Dùng toàn bộ số tiền vay để đền bù giải phóng mặt bằng, mua đất, thuê máy móc và nhân công chuẩn bị xây dựng.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-neutral-900/40 p-4 rounded-xl border border-neutral-800">
              <span className="w-6 h-6 rounded-full bg-crimson/20 border border-crimson/50 text-crimson-bright flex items-center justify-center font-bold shrink-0 text-xs">II</span>
              <p className="text-neutral-400">
                <strong className="text-neutral-200">Giai đoạn 2:</strong> Xây dựng xong phần thô của 3 tòa tháp chung cư cao tầng.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-950/70 p-6 rounded-xl border border-red-900/25 relative overflow-hidden shadow-inner space-y-3">
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950 border border-red-500/30 text-[10px] text-red-400 font-bold uppercase tracking-widest animate-pulse">
            Đóng băng
          </div>
          <h4 className="text-base font-bold text-red-500 uppercase tracking-wide flex items-center gap-1.5">
            <AlertCircle className="h-5 w-5" /> Hệ quả bất ngờ:
          </h4>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Thị trường bất ngờ đóng băng do thắt chặt tín dụng và lãi suất tăng vọt. Người dân không có tiền mua nhà. 3 tòa tháp đứng trơ trọi không bán được căn nào. 
          </p>
          <p className="text-sm text-neutral-300 leading-relaxed font-semibold">
            Hệ quả: Không thu hồi được tiền bán nhà, Alpha Corp mất thanh khoản, không có tiền trả lãi ngân hàng, không thể nhập vật liệu tiếp tục thi công, công nhân bị nợ lương đình công. Toàn bộ tập đoàn tê liệt.
          </p>
        </div>
      </div>
    </div>
  );
}
