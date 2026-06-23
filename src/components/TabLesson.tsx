"use client";

import React from "react";
import { Layers, Coins, RotateCcw } from "lucide-react";

export default function TabLesson() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <Layers className="h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Rút ra bài học: Điều kiện tuần hoàn liên tục
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-2">
        <div className="bg-neutral-900/35 p-6 rounded-xl border border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-gold-bright">
            <Coins className="h-5 w-5" />
            <h4 className="font-bold text-white text-base">1. Sự tồn tại đồng thời (Không gian)</h4>
          </div>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Để không bị đứt gãy, tổng số vốn của doanh nghiệp không được dồn hết vào một chỗ mà phải chia ra tương ứng, đồng thời tồn tại ở cả 3 hình thái:
          </p>
          <ul className="text-xs text-neutral-500 space-y-1.5 pl-4 list-disc">
            <li>Một phần giữ làm Tiền mặt để trả nợ lãi, trả lương (<strong className="text-neutral-300">Tiền tệ</strong>)</li>
            <li>Một phần ở xưởng sản xuất, máy móc, gạch cát (<strong className="text-neutral-300">Sản xuất</strong>)</li>
            <li>Một phần đã thành sản phẩm sẵn sàng xuất bán (<strong className="text-neutral-300">Hàng hóa</strong>)</li>
          </ul>
          <p className="text-xs md:text-sm text-red-400 font-semibold italic mt-2">
            ⚠️ Alpha Corp đã vi phạm điều này khi dồn 100% tiền vay ngân hàng vào xây dựng mà không dự phòng dòng tiền mặt để trả lãi!
          </p>
        </div>

        <div className="bg-neutral-900/35 p-6 rounded-xl border border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-crimson-bright">
            <RotateCcw className="h-5 w-5" />
            <h4 className="font-bold text-white text-base">2. Sự kế tiếp nhau (Thời gian)</h4>
          </div>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Các bộ phận tư bản phải không ngừng biến đổi hình thái từ Giai đoạn này sang Giai đoạn khác.
          </p>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Khi một bộ phận vốn bán đi chuyển thành tiền ($H' \rightarrow T'$), lập tức tiền đó phải được tái đầu tư mua vật tư tiếp tục sản xuất. Nếu bất kỳ giai đoạn nào bị đứng lại (dù là khâu mua hay khâu bán), toàn bộ chu kỳ tuần hoàn sẽ bị đứt gãy, gây tổn hại dây chuyền.
          </p>
        </div>
      </div>
    </div>
  );
}
