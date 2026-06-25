"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Banknote,
  BookOpen,
  Boxes,
  ChevronRight,
  Factory,
  Repeat2,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TheoryTopic {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  summary: string;
  keyPoint: string;
  details: string[];
  caseLink: string;
}

const topics: TheoryTopic[] = [
  {
    id: "formula",
    title: "1. Công thức chung của tư bản",
    icon: Banknote,
    accent: "text-crimson-bright",
    summary:
      "So sánh H - T - H với T - H - T' để thấy mục đích của tư bản là thu về giá trị lớn hơn ban đầu.",
    keyPoint:
      "T' = T + m. Phần giá trị tăng thêm m là giá trị thặng dư, nhưng nó không sinh ra từ mua rẻ bán đắt thông thường.",
    details: [
      "Trong lưu thông hàng hóa giản đơn, công thức là H - T - H. Người bán hàng lấy tiền để mua một hàng hóa khác phục vụ nhu cầu sử dụng.",
      "Trong lưu thông tư bản, công thức là T - H - T'. Người sở hữu tiền ứng tiền ra mua hàng hóa nhằm bán ra để thu về lượng tiền lớn hơn ban đầu.",
      "Nếu chỉ mua rẻ bán đắt, phần lợi của người bán là phần thiệt của người mua. Xét trên toàn xã hội, trao đổi thông thường không tự tạo ra giá trị mới.",
      "Vì vậy, muốn giải thích giá trị thặng dư phải đi vào sản xuất và hàng hóa sức lao động.",
    ],
    caseLink:
      "Alpha Corp bắt đầu bằng T: khoản vay 10.000 tỷ đồng. Mục đích không phải giữ tiền, mà biến khoản tiền đó thành dự án rồi thu về T' lớn hơn.",
  },
  {
    id: "labor-power",
    title: "2. Hàng hóa sức lao động",
    icon: Users,
    accent: "text-gold-bright",
    summary:
      "Sức lao động trở thành hàng hóa khi người lao động tự do về thân thể nhưng không có đủ tư liệu sản xuất.",
    keyPoint:
      "Giá trị của sức lao động do lao động xã hội cần thiết để sản xuất và tái sản xuất sức lao động quyết định.",
    details: [
      "Sức lao động là toàn bộ năng lực thể chất và tinh thần của con người được vận dụng khi sản xuất ra giá trị sử dụng.",
      "Sức lao động trở thành hàng hóa khi người lao động có quyền tự do bán sức lao động của mình.",
      "Đồng thời, người lao động không có đủ tư liệu sản xuất để tự sản xuất hàng hóa đem bán, nên phải bán sức lao động cho nhà tư bản.",
      "Giá trị hàng hóa sức lao động bao gồm tư liệu sinh hoạt cần thiết, chi phí đào tạo và chi phí tái sản xuất thế hệ lao động.",
    ],
    caseLink:
      "Trong case Alpha Corp, công nhân xây dựng bán sức lao động cho doanh nghiệp. Đây là điều kiện để dự án chuyển từ đất và vật liệu thành sản phẩm bất động sản.",
  },
  {
    id: "surplus-production",
    title: "3. Sản xuất giá trị thặng dư",
    icon: Factory,
    accent: "text-emerald-400",
    summary:
      "Giá trị thặng dư là phần giá trị mới dôi ra ngoài giá trị sức lao động do lao động thặng dư tạo ra.",
    keyPoint:
      "Ngày lao động gồm thời gian lao động tất yếu và thời gian lao động thặng dư.",
    details: [
      "Quá trình sản xuất giá trị thặng dư thống nhất giữa quá trình tạo ra giá trị và quá trình làm tăng giá trị.",
      "Trong một phần ngày lao động, công nhân tạo ra giá trị đủ bù đắp giá trị sức lao động của mình. Đó là thời gian lao động tất yếu.",
      "Phần thời gian vượt quá điểm bù đắp đó là thời gian lao động thặng dư, tạo ra giá trị thặng dư cho nhà tư bản.",
      "Vì vậy, nguồn gốc của giá trị thặng dư nằm trong sản xuất, không nằm trong trao đổi đơn thuần.",
    ],
    caseLink:
      "Alpha Corp có thể tạo ra giá trị mới trong quá trình xây dựng. Nhưng giá trị đó chưa trở thành tiền nếu sản phẩm không bán được.",
  },
  {
    id: "constant-variable",
    title: "4. Tư bản bất biến và tư bản khả biến",
    icon: Scale,
    accent: "text-crimson-bright",
    summary:
      "Tư bản bất biến c chuyển giá trị cũ vào sản phẩm; tư bản khả biến v gắn với sức lao động tạo giá trị mới.",
    keyPoint:
      "c là điều kiện cần thiết của sản xuất; v là bộ phận trực tiếp liên quan đến nguồn gốc giá trị thặng dư.",
    details: [
      "Tư bản bất biến c tồn tại dưới hình thái tư liệu sản xuất như máy móc, nhà xưởng, nguyên vật liệu.",
      "Giá trị của tư bản bất biến được lao động cụ thể bảo tồn và chuyển vào sản phẩm, nhưng bản thân nó không tự tăng lên.",
      "Tư bản khả biến v là bộ phận tư bản dùng để mua hàng hóa sức lao động.",
      "Trong sản xuất, sức lao động tạo ra giá trị mới lớn hơn giá trị bản thân nó. Vì vậy gọi là tư bản khả biến.",
    ],
    caseLink:
      "Đất, vật liệu, máy móc của Alpha Corp tương ứng với c; chi phí thuê công nhân tương ứng với v. Dự án chỉ tạo giá trị mới khi có lao động sống.",
  },
  {
    id: "wage-realization",
    title: "5. Tiền công và thực hiện giá trị thặng dư",
    icon: Boxes,
    accent: "text-gold-bright",
    summary:
      "Giá trị thặng dư được tạo ra trong sản xuất nhưng chỉ được thực hiện khi hàng hóa bán được.",
    keyPoint:
      "Không bán được hàng hóa thì giá trị thặng dư chưa chuyển thành tiền, doanh nghiệp có thể mất thanh khoản.",
    details: [
      "Tiền công biểu hiện như giá cả của lao động, nhưng về bản chất là giá cả của hàng hóa sức lao động.",
      "Nhà tư bản mua sức lao động và sử dụng nó trong sản xuất để tạo ra giá trị mới.",
      "Tuy nhiên, tạo ra giá trị thặng dư chưa đồng nghĩa với thu được giá trị thặng dư bằng tiền.",
      "Muốn thực hiện giá trị thặng dư, hàng hóa sản xuất ra phải được bán và được thị trường chấp nhận.",
    ],
    caseLink:
      "Đây là điểm sát nhất với Alpha Corp: 3 tòa tháp có thể chứa giá trị, nhưng không bán được nên giá trị thặng dư chưa được thực hiện.",
  },
  {
    id: "circuit-turnover",
    title: "6. Tuần hoàn và chu chuyển tư bản",
    icon: Repeat2,
    accent: "text-emerald-400",
    summary:
      "Tư bản vận động qua T - H ... SX ... H' - T' và phải lặp lại thường xuyên để tiếp tục tồn tại.",
    keyPoint:
      "Chu chuyển tư bản càng chậm, vốn càng bị ứ đọng và khả năng tái sản xuất càng yếu.",
    details: [
      "Tuần hoàn tư bản là sự vận động qua ba giai đoạn và ba hình thái: tư bản tiền tệ, tư bản sản xuất, tư bản hàng hóa.",
      "Ở hình thái tiền tệ, tư bản chuẩn bị điều kiện sản xuất bằng cách mua tư liệu sản xuất và sức lao động.",
      "Ở hình thái sản xuất, tư bản tạo ra hàng hóa mới chứa giá trị thặng dư.",
      "Ở hình thái hàng hóa, sản phẩm phải bán được để quay về hình thái tiền tệ lớn hơn ban đầu.",
      "Chu chuyển tư bản là tuần hoàn được xét như quá trình lặp lại theo thời gian.",
    ],
    caseLink:
      "Alpha Corp bị đứt chu chuyển ở H' - T'. Hàng hóa bất động sản không bán được nên tiền không quay về để mở chu kỳ mới.",
  },
  {
    id: "methods",
    title: "7. Các phương pháp sản xuất giá trị thặng dư",
    icon: TrendingUp,
    accent: "text-crimson-bright",
    summary:
      "Nhà tư bản có thể tăng giá trị thặng dư bằng kéo dài ngày lao động hoặc tăng năng suất lao động.",
    keyPoint:
      "Giá trị thặng dư tuyệt đối dựa vào kéo dài thời gian; giá trị thặng dư tương đối dựa vào rút ngắn thời gian lao động tất yếu.",
    details: [
      "Giá trị thặng dư tuyệt đối thu được bằng cách kéo dài ngày lao động vượt quá thời gian lao động tất yếu.",
      "Giá trị thặng dư tương đối thu được bằng cách tăng năng suất, rút ngắn thời gian lao động tất yếu và kéo dài tương đối thời gian lao động thặng dư.",
      "Giá trị thặng dư siêu ngạch xuất hiện khi một nhà tư bản có năng suất cá biệt cao hơn mức xã hội, thường nhờ cải tiến kỹ thuật.",
      "Sự theo đuổi giá trị thặng dư siêu ngạch thúc đẩy đổi mới công nghệ và phát triển lực lượng sản xuất.",
    ],
    caseLink:
      "Với Alpha Corp, dù doanh nghiệp có tăng tốc xây dựng hay cải tiến kỹ thuật, khâu bán hàng vẫn quyết định việc giá trị thặng dư có được thực hiện hay không.",
  },
  {
    id: "accumulation-profit",
    title: "8. Tích lũy tư bản và hình thức lợi nhuận",
    icon: BookOpen,
    accent: "text-gold-bright",
    summary:
      "Giá trị thặng dư có thể chuyển thành tư bản phụ thêm để mở rộng sản xuất và thường biểu hiện thành lợi nhuận.",
    keyPoint:
      "Tích lũy tư bản đòi hỏi giá trị thặng dư phải được thực hiện; lợi nhuận là hình thức biểu hiện làm nguồn gốc GTTD bị che khuất.",
    details: [
      "Tích lũy tư bản là quá trình tái sản xuất mở rộng bằng cách chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm.",
      "Tư bản phụ thêm được dùng để mua thêm sức lao động, nguyên vật liệu, máy móc và mở rộng nhà xưởng.",
      "Trong thị trường, giá trị thặng dư thường biểu hiện thành lợi nhuận sau khi hàng hóa được bán.",
      "Khi nhìn từ chi phí sản xuất, lợi nhuận có vẻ như do toàn bộ tư bản sinh ra, làm nguồn gốc lao động thặng dư bị che khuất.",
    ],
    caseLink:
      "Alpha Corp không bán được nhà nên không có lợi nhuận thực hiện, không có dòng tiền để tích lũy và mở rộng dự án tiếp theo.",
  },
];

const formulaSteps = [
  ["T", "Tư bản tiền tệ", "ứng vốn"],
  ["H", "Đầu vào", "TLSX + SLĐ"],
  ["SX", "Sản xuất", "tạo giá trị mới"],
  ["H'", "Hàng hóa mới", "chứa GTTD"],
  ["T'", "Tiền tăng thêm", "T + m"],
];

export default function TabTheory() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedTopic = topics.find((topic) => topic.id === selectedId) ?? null;

  if (selectedTopic) {
    const Icon = selectedTopic.icon;

    return (
      <div className="space-y-6 animate-fade-in">
        <button
          onClick={() => setSelectedId(null)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-crimson-bright transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại danh sách nội dung
        </button>

        <section className="bg-neutral-950 border border-neutral-850 rounded-2xl p-6 md:p-8 space-y-6">
          <div className={`flex items-center gap-3 ${selectedTopic.accent}`}>
            <div className="h-11 w-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Trang chủ đề</div>
              <h3 className="mt-1 text-2xl md:text-3xl font-extrabold text-white">{selectedTopic.title}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_0.85fr] gap-6">
            <div className="space-y-4">
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed">{selectedTopic.summary}</p>
              <div className="bg-crimson/5 border-l-2 border-crimson p-4">
                <p className="text-sm font-semibold text-neutral-200 leading-relaxed">{selectedTopic.keyPoint}</p>
              </div>
            </div>

            <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold-bright">Liên hệ Alpha Corp</h4>
              <p className="mt-3 text-sm text-neutral-350 leading-relaxed">{selectedTopic.caseLink}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Nội dung cần nắm</h4>
            <div className="grid gap-3">
              {selectedTopic.details.map((detail, index) => (
                <div key={detail} className="grid grid-cols-[36px_1fr] gap-3 bg-neutral-900/55 border border-neutral-850 rounded-xl p-4">
                  <div className="h-7 w-7 rounded-full bg-crimson/15 border border-crimson/30 text-crimson-bright flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-neutral-350 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-2.5 text-crimson-bright border-b border-neutral-900 pb-4">
        <BookOpen className="h-6 w-6" />
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Nội dung bài học Chương 3: Giá trị thặng dư
        </h3>
      </div>

      <section className="space-y-4">
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
          Mỗi mục bên dưới là một chủ đề chính của Chương 3. Bấm vào từng mục để mở trang chi tiết, xem tóm tắt, nội dung cần nắm và liên hệ với tình huống Alpha Corp.
        </p>

        <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5 overflow-x-auto">
          <div className="min-w-[720px] grid grid-cols-5 gap-3 text-center">
            {formulaSteps.map(([symbol, label, note]) => (
              <div key={symbol} className="border border-neutral-800 bg-neutral-900 rounded-xl p-4">
                <div className="text-2xl font-extrabold text-crimson-bright">{symbol}</div>
                <div className="mt-2 text-xs font-bold text-white uppercase tracking-wide">{label}</div>
                <div className="mt-1 text-[11px] text-neutral-500">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedId(topic.id)}
              className="group text-left bg-neutral-950/80 hover:bg-neutral-950 border border-neutral-850 hover:border-crimson/40 rounded-xl p-5 space-y-3 transition-all duration-300 cursor-pointer"
            >
              <div className={`flex items-center justify-between gap-3 ${topic.accent}`}>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <h4 className="text-sm font-bold uppercase tracking-wide text-white">{topic.title}</h4>
                </div>
                <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-crimson-bright transition-colors" />
              </div>
              <p className="text-sm text-neutral-350 leading-relaxed">{topic.summary}</p>
              <p className="text-xs text-neutral-500 leading-relaxed border-l-2 border-crimson/40 pl-3">
                {topic.keyPoint}
              </p>
            </button>
          );
        })}
      </section>
    </div>
  );
}
