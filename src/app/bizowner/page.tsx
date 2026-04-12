import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import LineIcon from "@/components/LineIcon";

export const metadata: Metadata = {
  title: "BizOwner｜副業感覚で会社のオーナーに",
};

function CtaBanner({ large = false }: { large?: boolean }) {
  return (
    <section className="bg-lp-sky py-8">
      <div className="text-center">
        <a
          href="#"
          className={`cta-btn ${large ? "text-[18px] px-12 py-5" : ""}`}
        >
          <LineIcon className={large ? "w-7 h-7" : "w-6 h-6"} />
          1ヶ月無料でLINE登録する
        </a>
        <p className="cta-sub">※ 解約自由・しつこい勧誘なし</p>
      </div>
    </section>
  );
}

export default function BizOwnerPage() {
  return (
    <div className="font-sans text-text-body bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 50%, #2a7ab5 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><polygon points='30,5 55,20 55,40 30,55 5,40 5,20' fill='none' stroke='white' stroke-width='1'/></svg>")`,
          }}
        />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-24 md:py-0 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <p className="inline-block bg-white/10 text-white/80 text-[12px] font-bold tracking-wider px-4 py-1.5 rounded-full mb-6 border border-white/15">
                1ヶ���無料キャンペーン実施中
              </p>
              <h1
                className="font-bold text-white mb-5"
                style={{
                  fontSize: "clamp(28px,5.5vw,46px)",
                  lineHeight: 1.3,
                  letterSpacing: "0.02em",
                }}
              >
                副業感覚で、
                <br />
                会社の<span className="text-lp-accent">オーナー</span>になる。
              </h1>
              <p className="text-white/60 text-[15px] leading-[1.9] mb-8">
                月額11,000円から始める、あなたの権利収入ライフ。
                <br className="hidden md:block" />
                知識ゼロ・経験ゼロでもOK。
              </p>
              <a href="#" className="cta-btn">
                <LineIcon />
                1ヶ月無料でLINE登録する
              </a>
              <p className="cta-sub text-white/40">
                ※ 解約自由���しつこい勧誘なし
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-[200px] h-[260px] md:w-[340px] md:h-[430px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/lp/hero-businessman.jpg"
                  alt="ビジネスマン"
                  width={340}
                  height={430}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] font-[Inter] tracking-[0.2em]">
            SCROLL
          </span>
          <div className="w-[1px] h-8 bg-white/15"></div>
        </div>
      </section>

      {/* CTA 1 */}
      <CtaBanner />

      {/* ===== 共感パート ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              こんな<span className="text-lp-accent">お悩み</span>ありませんか？
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid gap-4">
              {[
                "副業を始めたいけど、何から手をつければいいか分からない",
                "ビジネ��の知識がゼロで、失敗するのが怖い",
                "一人だとモチベーションが続かない",
                "会社の給料だけじゃ将来が不安",
                "起業には憧れるけど、リスクを取るのは怖い",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-bg-section border border-gray-100 rounded-xl p-5 md:p-6"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full bg-lp-accent/10 text-lp-accent flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <p
                    className="text-[15px] leading-[1.8] pt-1"
                    dangerouslySetInnerHTML={{
                      __html: text.replace(
                        /(.+)/,
                        (_, m) => {
                          const parts = m.split(/(?<=、|で、|と|じゃ)/);
                          if (parts.length > 1) {
                            return `${parts[0]}<strong>${parts.slice(1).join("")}</strong>`;
                          }
                          return `<strong>${m}</strong>`;
                        }
                      ),
                    }}
                  />
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp className="text-center mt-12">
            <p className="text-lp-accent font-bold text-[18px] md:text-[22px] leading-[1.6]">
              そのお悩み、
              <br className="md:hidden" />
              BizOwnerが解決します。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== BizOwnerとは ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[900px] mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/lp/workspace.jpg"
                  alt="ビジネスワークスペース"
                  width={600}
                  height={280}
                  className="w-full h-[240px] md:h-[280px] object-cover"
                />
              </div>
              <div>
                <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">
                  WHAT IS BIZOWNER?
                </p>
                <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
                  副業感覚で、会社経営。
                  <br />
                  大家さん気分で、<span className="text-lp-accent">権利収入</span>。
                </h2>
                <div className="w-12 h-[3px] bg-lp-accent mb-6"></div>
                <p className="text-[15px] leading-[2] text-text-body">
                  BizOwnerは、知識・経験・資格一切不要で「会社のオーナー」として権利収入を得る仕組みを提供するビジネスプログラ���です。
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                  title: "誰でもOK",
                  desc: "年齢・学歴・経験不問。\nCICブラックの方も参加可��。",
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                  title: "知識不要",
                  desc: "専門知識は一切不要。\n本部が全面サポー��。",
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: "月額11,000円から",
                  desc: "低コストで開始可能。\n売上からの天引き払いもOK。",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-7 text-center border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-lp-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-lp-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <h3 className="font-bold text-text-dark text-[16px] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-text-light leading-[1.8] whitespace-pre-line">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA 2 */}
      <CtaBanner />

      {/* ===== 3ステッ�� ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">HOW IT WORKS</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              3ステップで<span className="text-lp-accent">稼ぐ</span>仕組み
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "STEP 01", title: "個人で案件参加", desc: "月額11,000円で会員登録。\n個人として案件に参加し、\nすぐに副収入をスタート。", price: "月額11,000円〜", accent: false },
                { step: "STEP 02", title: "法人で追加収益", desc: "法人を作成し、法人案件にも参加。\n収益チャネルが倍増し、\n権利収入が加速。", price: "+100,000円で法人作成", accent: false },
                { step: "STEP 03", title: "FC化で独立", desc: "フランチャイズオーナーとして\n完全独立。自分のチームを持ち、\n本格的なビジネスオーナーへ。", price: "FC加盟 200万円〜", accent: true },
              ].map((s) => (
                <div key={s.step} className="relative bg-bg-section rounded-2xl p-8 text-center border border-gray-100">
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${s.accent ? "bg-cta" : "bg-lp-accent"} text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wider`}>
                    {s.step}
                  </div>
                  <h3 className="font-bold text-text-dark text-[17px] mb-3 mt-4">{s.title}</h3>
                  <p className="text-[13px] text-text-body leading-[1.9] whitespace-pre-line">{s.desc}</p>
                  <p className={`mt-4 ${s.accent ? "text-cta" : "text-lp-accent"} font-bold text-[14px]`}>{s.price}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== 案件一覧 ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">BUSINESS LINEUP</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              多彩な<span className="text-lp-accent">案���</span>で稼ぐ
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-6"></div>
            <p className="text-[14px] text-text-body leading-[1.9]">あなたに合った案件を自由に選べます。</p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: "人材アカウント", sub: "Indeed / エアワーク等" },
                { title: "ECショップ", sub: "メルカリ / 楽天市場等" },
                { title: "権利運用", sub: "ビザ / 派遣 / 物販等" },
                { title: "補助金・助成金", sub: "行政申請サポート" },
                { title: "個人単発", sub: "アフィリ / MNP / 投資" },
                { title: "夢の事業", sub: "やりたいビジネスを支援", accent: true },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 text-center">
                  <h3 className="font-bold text-text-dark text-[14px] mb-1">{item.title}</h3>
                  <p className="text-[11px] text-text-light leading-[1.7]">{item.sub}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== コミュニティ ===== */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 100%)" }}
      >
        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">COMMUNITY</p>
            <h2 className="font-bold text-white text-[22px] md:text-[28px] leading-[1.5] mb-4">
              ただの副業じゃ終わらない。<br />
              <span className="text-lp-accent">&ldquo;ビジネスの学び家&rdquo;</span>という、青春。
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-8"></div>
            <p className="text-white/50 text-[14px] leading-[2] mb-10">
              BizOwner会員は「ビジネスの学���家」コミュニティに参加可能。<br className="hidden md:block" />
              ビジネスだけじゃない、仲間と楽しむ場がここにあります。
            </p>
            <div className="grid grid-cols-2 gap-3 max-w-[700px] mx-auto mb-10">
              <div className="rounded-xl overflow-hidden h-[160px] md:h-[200px]">
                <Image src="/lp/meeting-laugh.jpg" alt="コミュニティ風景" width={400} height={200} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-[160px] md:h-[200px]">
                <Image src="/lp/team-celebration.jpg" alt="チームの喜び" width={400} height={200} className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {[
                { emoji: "🎬", title: "会員サイト", desc: "動画見放題\n一生学べる" },
                { emoji: "🎉", title: "楽しい行事", desc: "講演会・パーティー\nキャンプ・コンテス���" },
                { emoji: "⚽", title: "チーム所属", desc: "フットサル・読書会\nアイドル・YouTuber" },
                { emoji: "🎁", title: "福���厚生", desc: "占い無償提供\nプレゼント配布" },
              ].map((c) => (
                <div key={c.title} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">{c.emoji}</div>
                  <h3 className="font-bold text-white text-[14px] mb-2">{c.title}</h3>
                  <p className="text-white/40 text-[12px] leading-[1.7] whitespace-pre-line">{c.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA 3 */}
      <CtaBanner />

      {/* ===== 顧問紹介 ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">ADVISOR</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">顧問紹介</h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="bg-bg-section rounded-2xl p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-[3px] border-lp-accent/20">
                  <Image src="/lp/advisor-portrait.jpg" alt="顧問" width={112} height={112} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lp-accent font-bold text-[13px] tracking-wider mb-1">起業ニキ</p>
                  <h3 className="font-bold text-text-dark text-[20px] mb-5">ゼロから年商1億円へ。</h3>
                  <div className="space-y-4 text-[14px] text-text-body leading-[2]">
                    {[
                      { color: "bg-red-50 text-red-400", label: "絶望から", desc: "19歳で精神病院に2年間入院。退院後、人生の逆転を誓う。" },
                      { color: "bg-yellow-50 text-yellow-500", label: "下克上", desc: "ホストNo.1、アイドルプロデュース、JAPAN EXPO出演。" },
                      { color: "bg-green-50 text-green-500", label: "起業家へ", desc: "初年度年���1億円達成。経営コンサルタントとして50社以上を指導。" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className={`shrink-0 w-6 h-6 rounded ${item.color} flex items-center justify-center text-[11px] font-bold mt-0.5`}>{i + 1}</span>
                        <p><strong>{item.label}</strong> — {item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== 他社比較 ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[900px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">COMPARISON</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              他社との<span className="text-lp-accent">比較</span>
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-[13px] md:text-[14px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-100 font-bold text-text-dark rounded-tl-lg"></th>
                  <th className="p-4 bg-cta text-white font-bold text-center">BizOwner</th>
                  <th className="p-4 bg-gray-100 font-bold text-text-dark text-center">一般的な起業塾</th>
                  <th className="p-4 bg-gray-100 font-bold text-text-dark text-center rounded-tr-lg">独学</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["初期費用", "月額11,000円", "30〜100万円", "0円〜"],
                  ["知識・経験", "不要", "ある程度必要", "自力で習得"],
                  ["サポート", "本部が全面支援", "講師による指導", "なし"],
                  ["収益化", "即日可能", "数ヶ月後", "不確定"],
                  ["コミュニティ", "学び家に所属", "期間限定", "なし"],
                ].map((row, i) => (
                  <tr key={i} className={i < 4 ? "border-b border-gray-100" : ""}>
                    <td className="p-4 font-bold text-text-dark bg-white">{row[0]}</td>
                    <td className="p-4 text-center bg-cta/5 font-bold text-cta">{row[1]}</td>
                    <td className="p-4 text-center bg-white text-text-body">{row[2]}</td>
                    <td className="p-4 text-center bg-white text-text-body">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeUp>
        </div>
      </section>

      {/* ===== 料金 ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">PRICING</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">料金プラン</h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {[
                { label: "ご利用料金", price: "11,000", unit: "円", sub: "/月（税込）" },
                { label: "法人作成費用", price: "100,000", unit: "円", sub: "一括" },
                { label: "FC加盟料金", price: "200", unit: "万円〜", sub: "一括" },
                { label: "サークル等費用", price: "団長決定", unit: "", sub: "各サークルによる" },
              ].map((p) => (
                <div key={p.label} className="bg-bg-section rounded-xl p-6 text-center border border-gray-100">
                  <p className="text-[12px] text-text-light font-bold mb-3">{p.label}</p>
                  <p className="text-text-dark font-bold text-[28px] leading-none mb-1">
                    {p.price}<span className="text-[14px]">{p.unit}</span>
                  </p>
                  <p className="text-text-light text-[12px]">{p.sub}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp className="mt-8">
            <div className="bg-cta rounded-xl p-6 md:p-8 text-center">
              <p className="text-white font-bold text-[20px] md:text-[24px] mb-2">🎉 今なら1ヶ月無料！</p>
              <p className="text-white/70 text-[14px]">いつでも解約OK。まずはお試しください。</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA 4 */}
      <CtaBanner />

      {/* ===== 参加フロー ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[700px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">FLOW</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              参加までの<span className="text-lp-accent">流れ</span>
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="space-y-0">
              {[
                { title: "公式LINE追加・ウェビナー視聴", desc: "まずはLINE登録。無料ウェビナーでサービス内容を確認。" },
                { title: "個人情報・決済フォーム入力", desc: "納得いただけたら、簡単なフォーム入力で登��完了。" },
                { title: "会員サイトから案件確認・実施", desc: "個人案件に参加して、すぐに副収入をスタート。" },
                { title: "法人作成を本部へ依頼", desc: "法人案件にも参加し、収益を拡大。" },
                { title: "FC加盟で完全独立", desc: "フランチャイズオーナーとして、ビジネスオーナーへ。", last: true },
              ].map((item, i) => (
                <div key={i} className={`${!item.last ? "step-line" : ""} text-center pb-8`}>
                  <div className={`w-14 h-14 rounded-full ${item.last ? "bg-cta" : "bg-lp-accent"} text-white flex items-center justify-center mx-auto mb-4 font-[Inter] font-bold text-[16px]`}>
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-text-dark text-[16px] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== Q&A ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">よくある質問</h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="space-y-3">
              {[
                { q: "作った法人は自由に使って良いですか？", a: "はい、作成した法人はあなたの会社です。本部案件以外にも自由にご活用いただけます。" },
                { q: "新しくサークルを作ってもいいですか？", a: "もちろんです。学び家ではメンバー発信のサークルを歓迎しています。" },
                { q: "案件やサービスの参加方法は？", a: "会員サイトから案件一覧を確認し、興味のあるものに申し込むだけです。" },
                { q: "個別の質疑応答はどこでできますか？", a: "公式LINEまたは会員専用チャットで、いつでもご質問いただ���ます。" },
                { q: "本当に知識ゼロでも大丈夫ですか？", a: "はい。案件の実行方法は会員サイトの動画で全て学べます。本部のサポートもあるのでご安��ください。" },
                { q: "途中で解約できますか？", a: "はい、いつでも解約可能です。違約金や引き止めは一切ありません。" },
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 md:p-6 font-bold text-text-dark text-[14px] md:text-[15px]">
                    <span className="flex items-center gap-3">
                      <span className="text-lp-accent font-[Inter]">Q.</span>
                      {faq.q}
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-[14px] text-text-body leading-[2] border-t border-gray-50 pt-4">
                    <span className="text-cta font-bold font-[Inter]">A.</span> {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== 最終CTA ===== */}
      <section
        className="relative py-28 md:py-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b2a4a 0%, #1a4f7a 50%, #2a7ab5 100%)" }}
      >
        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-6">START YOUR JOURNEY</p>
          <h2
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(24px,5vw,40px)", lineHeight: 1.4 }}
          >
            あなたも、<br />
            <span className="text-lp-accent">オーナー</span>になる。
          </h2>
          <p className="text-white/50 text-[15px] leading-[2] mb-10">
            副業感覚で会社経営。知識ゼロから始める権利収入。
            <br className="hidden md:block" />
            まずは無料でLINE登録して、詳しい情報を受け取ってください。
          </p>
          <a href="#" className="cta-btn text-[18px] px-12 py-5">
            <LineIcon className="w-7 h-7" />
            1ヶ月無料でLINE登録する
          </a>
          <p className="text-white/30 text-[12px] mt-6 leading-[1.8]">
            ※ 解約自由・しつこい勧誘は一��ありません<br />
            ※ LINE登録は無料です
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0a1e33] py-10">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p className="font-[Inter] font-bold text-white/60 text-[14px] tracking-[0.1em] mb-3">Bestimulate</p>
          <div className="flex justify-center gap-6 text-[12px] text-white/30 mb-6">
            <Link href="/" className="hover:text-white/60 transition-colors">ホーム</Link>
            <Link href="/services" className="hover:text-white/60 transition-colors">サービス一覧</Link>
            <Link href="/#contact" className="hover:text-white/60 transition-colors">���問い合わせ</Link>
          </div>
          <p className="text-white/20 text-[11px]">&copy; 2026 Bestimulate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
