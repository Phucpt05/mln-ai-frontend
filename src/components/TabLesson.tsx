"use client";

import React from "react";
import { Layers, Globe, Lightbulb, TrendingUp } from "lucide-react";
import SlideLayout, { SlideLayoutProps } from "./SlideLayout";

type SlideNavProps = Omit<SlideLayoutProps, 'slides' | 'tabId'>;

// ---- SLIDE 1: Tích lũy tư bản ----
function Slide1Accumulation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <Layers className="h-6 w-6 shrink-0" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Mở rộng: Tích lũy tư bản
        </h3>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed">
        Nếu Alpha Corp bán được nhà và thu về{" "}
        <strong className="text-neutral-100">15.000 tỷ</strong>, họ sẽ làm gì với{" "}
        <strong className="text-gold-bright">5.000 tỷ giá trị thặng dư</strong>?
      </p>

      {/* Allocation diagram */}
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
        <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
          Quyết định phân phối Giá trị thặng dư (m)
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { pct: 15, label: "Tiêu dùng cá nhân", color: "bg-neutral-700", textColor: "text-neutral-400", note: "CEO mua siêu xe, biệt thự..." },
            { pct: 85, label: "Tích lũy tư bản", color: "bg-crimson", textColor: "text-crimson-bright", note: "Tái sản xuất mở rộng!" },
          ].map((item) => (
            <div key={item.label} className="md:col-span-1 space-y-2">
              <div className="h-24 bg-neutral-900 rounded-xl overflow-hidden flex flex-col-reverse">
                <div
                  className={`${item.color} w-full transition-all duration-1000`}
                  style={{ height: `${item.pct}%` }}
                />
              </div>
              <p className={`text-xs font-bold ${item.textColor} text-center`}>{item.pct}%</p>
              <p className="text-[10px] text-neutral-500 text-center">{item.label}</p>
            </div>
          ))}
          <div className="space-y-2 flex flex-col justify-center">
            <div className="bg-gold/10 border border-gold/25 rounded-xl p-3 space-y-1">
              <p className="text-xs font-bold text-gold-bright">Tích lũy = Tái sản xuất mở rộng</p>
              <p className="text-[10px] text-neutral-400 leading-relaxed">
                Chuyển 4.250 tỷ m thành tư bản phụ thêm → xây 5 tòa tháp thay vì 3 →
                thu lợi nhuận ngày càng lớn hơn.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-5 space-y-2">
        <p className="text-sm font-bold text-neutral-100">Quy luật tất yếu: Tích tụ &amp; Tập trung</p>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Tích lũy tư bản khiến vốn ngày càng tập trung vào tay ít người. Các công ty lớn
          thâu tóm công ty nhỏ. Thị trường BĐS hình thành vài "ông lớn" độc quyền — đây
          chính là quy luật Mác đã dự báo từ thế kỷ 19.
        </p>
      </div>
    </div>
  );
}

// ---- SLIDE 2: Thực tế quốc tế ----
function Slide2RealWorld() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2.5 text-emerald-400 border-b border-neutral-900 pb-4">
        <Globe className="h-5 w-5 shrink-0" />
        <h3 className="text-xl font-bold uppercase tracking-wider">
          Thực chiến: Không chỉ là lý thuyết
        </h3>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed">
        Alpha Corp là kịch bản{" "}
        <strong className="text-neutral-100">hoàn toàn thực tế</strong>. Mác đã tiên đoán khủng
        hoảng này từ 150 năm trước.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            flag: "🇨🇳",
            name: "Evergrande (Trung Quốc)",
            year: "2021–nay",
            desc: "Nợ > 300 tỷ USD. Hàng nghìn dự án đóng băng. Hàng trăm nghìn căn hộ xây dở — không bán được. Mô hình vay — xây — bán nhanh sụp đổ khi thị trường đóng băng.",
            color: "border-red-800/40 bg-red-950/10",
          },
          {
            flag: "🇻🇳",
            name: "BĐS Việt Nam",
            year: "2022–2023",
            desc: "Hàng loạt doanh nghiệp bất động sản phát hành trái phiếu huy động vốn, đầu tư dàn trải → khi tín dụng bị siết (Thông tư 16), H' chất đống, T' không về được.",
            color: "border-yellow-800/40 bg-yellow-950/10",
          },
        ].map((item) => (
          <div key={item.name} className={`p-5 rounded-xl border ${item.color} space-y-3`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.flag}</span>
                <p className="text-sm font-bold text-neutral-100">{item.name}</p>
              </div>
              <span className="text-[10px] text-neutral-500 font-mono">{item.year}</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-xl p-5">
        <p className="text-xs text-neutral-300 leading-relaxed">
          🎯 <strong className="text-emerald-400">Luận điểm cốt lõi của Mác:</strong> Kinh tế thị
          trường tư bản chủ nghĩa luôn chứa đựng{" "}
          <strong className="text-neutral-100">khủng hoảng sản xuất thừa tương đối</strong> — hàng
          hóa xây dựng vượt quá khả năng chi trả thực tế của xã hội. Đây không phải lỗi cá
          nhân Alpha Corp — đó là bản chất mâu thuẫn của hệ thống.
        </p>
      </div>
    </div>
  );
}

// ---- SLIDE 3: Bài học CEO ----
function Slide3CEO() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2.5 text-gold-bright border-b border-neutral-900 pb-4">
        <Lightbulb className="h-5 w-5 shrink-0" />
        <h3 className="text-xl font-bold uppercase tracking-wider">
          Bài học sống còn cho nhà quản trị
        </h3>
      </div>

      <div className="space-y-4">
        {[
          {
            number: "01",
            title: "Thanh khoản > Lợi nhuận",
            color: "border-blue-700/40 text-blue-300",
            desc: `Không bao giờ hy sinh thanh khoản vì lợi nhuận kỳ vọng. Luôn duy trì tối thiểu 6–12 tháng chi phí vận hành (lương + lãi vay) dưới dạng tiền mặt dự phòng — đây là "Tư bản tiền tệ" bắt buộc không được chôn vào tài sản.`,
          },
          {
            number: "02",
            title: "Phân bổ vốn đa hình thái",
            color: "border-crimson/40 text-crimson-bright",
            desc: `Cấu trúc vốn phải tồn tại đồng thời ở 3 hình thái. Không all-in vào bất kỳ một hình thái nào. Bán cuốn chiếu để H' → T' liên tục — không đợi hoàn thiện 100% mới bán.`,
          },
          {
            number: "03",
            title: `Đừng sợ "Bước nhảy tử thần"`,
            color: "border-gold/40 text-gold-bright",
            desc: `Khi thị trường xấu: Đừng chờ giá phục hồi. Chấp nhận cắt lỗ để thu hồi T, khơi thông tuần hoàn. Một vòng quay 1.000 tỷ lãi 5% còn tốt hơn 10.000 tỷ nằm chết và mất tất cả.`,
          },
          {
            number: "04",
            title: "Tư duy Mác trong kinh doanh hiện đại",
            color: "border-emerald-700/40 text-emerald-400",
            desc: `Triết học Mác - Lênin không chỉ là lý thuyết chính trị. Đó là công cụ tư duy hệ thống để nhận diện mâu thuẫn, phân tích dòng chảy tư bản và đưa ra quyết định quản trị doanh nghiệp sắc bén.`,
          },
        ].map((item) => (
          <div key={item.number} className="flex items-start gap-4">
            <span className={`text-2xl font-black font-mono ${item.color.split(" ")[1]} shrink-0`}>
              {item.number}
            </span>
            <div className={`flex-1 pl-4 border-l-2 ${item.color.split(" ")[0]} space-y-1`}>
              <p className="text-sm font-bold text-neutral-100">{item.title}</p>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-crimson/10 to-gold/5 border border-crimson/20 rounded-xl p-5 flex items-start gap-3">
        <TrendingUp className="h-5 w-5 text-crimson-bright shrink-0 mt-0.5" />
        <p className="text-sm text-neutral-300 leading-relaxed font-medium italic">
          "Lý luận chỉ trở thành lực lượng vật chất khi nó thâm nhập vào quần chúng." — C. Mác
        </p>
      </div>
    </div>
  );
}

// ---- EXPORT ----
export default function TabLesson(navProps: SlideNavProps) {
  const slides = [<Slide1Accumulation />, <Slide2RealWorld />, <Slide3CEO />];
  return <SlideLayout slides={slides} tabId="lesson" {...navProps} />;
}
