import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import LineIcon from "@/components/LineIcon";

export const metadata: Metadata = {
  title: "SARUDEMO｜猿でも出来る起業のファストパス",
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

export default function SarudemoPage() {
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
                起業のファストパス
              </p>
              <h1
                className="font-bold text-white mb-5"
                style={{
                  fontSize: "clamp(28px,5.5vw,46px)",
                  lineHeight: 1.3,
                  letterSpacing: "0.02em",
                }}
              >
                猿でも出来る、
                <br />
                <span className="text-lp-accent">起業</span>のファストパス。
              </h1>
              <p className="text-white/60 text-[15px] leading-[1.9] mb-8">
                最短最速で社長へ。年商1億円を目標にする起業プログラム。
                <br className="hidden md:block" />
                テンプレート × プロチームで、再現性のある成功を。
              </p>
              <a href="#" className="cta-btn">
                <LineIcon />
                1ヶ月無料でLINE登録する
              </a>
              <p className="cta-sub text-white/40">
                ※ 解約自由・しつこい勧誘なし
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-[200px] h-[260px] md:w-[340px] md:h-[430px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/lp/hero-businessman.jpg"
                  alt="起業家"
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
              こんな<span className="text-lp-accent">想い</span>はありませんか？
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid gap-4">
              {[
                "いつか独立したいと思いながら、気づけば数年経っていた",
                "起業したいけど、何から始めればいいか分からない",
                "副業は経験済み。次のステップに進みたい",
                "会社員のままでは、一生「年収の壁」を超えられない",
                "投資する覚悟はある。でも失敗するのが怖い",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-bg-section border border-gray-100 rounded-xl p-5 md:p-6"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full bg-lp-accent/10 text-lp-accent flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-[1.8] pt-1 font-bold">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp className="text-center mt-12">
            <p className="text-lp-accent font-bold text-[18px] md:text-[22px] leading-[1.6]">
              その想い、
              <br className="md:hidden" />
              SARUDEMOが実現します。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== SARUDEMOとは ===== */}
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
                  WHAT IS SARUDEMO?
                </p>
                <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
                  猿でも出来る起業。
                  <br />
                  最短最速の<span className="text-lp-accent">ファストパス</span>。
                </h2>
                <div className="w-12 h-[3px] bg-lp-accent mb-6"></div>
                <p className="text-[15px] leading-[2] text-text-body">
                  SARUDEMOは、実業のフランチャイズテンプレートと経営のプロチームによるサポートで、最短1年以内にビジネスオーナーへ育成する起業プログラムです。
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />,
                  title: "最短最速で起業",
                  desc: "1年以内に社長へ育成。\nテンプレートで圧倒的スピード。",
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                  title: "再現性がエグイ",
                  desc: "実業のFCテンプレート。\n猿でも出来る簡単さ。",
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
                  title: "プロチームが指南",
                  desc: "経営のプロが全面サポート。\n法務・税務・営業すべて。",
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

      {/* ===== 3つの特徴 ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">WHY SARUDEMO</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              SARUDEMOが<span className="text-lp-accent">選ばれる</span>理由
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "起業のファストパス", desc: "最短最速で成功へ導く\n実業のフランチャイズ。\nテンプレートに沿うだけ。", highlight: "1年以内に社長へ", accent: false },
                { step: "02", title: "脱サラなんて当たり前", desc: "年商1億円を本気で目標に。\n権利収入30〜100万/月で\n会社員を超える収入を。", highlight: "年商1億円を目標", accent: false },
                { step: "03", title: "プロチームが全面支援", desc: "経営コンサルが直接指導。\n法務・税務・営業戦略まで\nワンストップでサポート。", highlight: "経営のプロが伴走", accent: true },
              ].map((s) => (
                <div key={s.step} className="relative bg-bg-section rounded-2xl p-8 text-center border border-gray-100">
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${s.accent ? "bg-cta" : "bg-lp-accent"} text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wider`}>
                    {s.step}
                  </div>
                  <h3 className="font-bold text-text-dark text-[17px] mb-3 mt-4">{s.title}</h3>
                  <p className="text-[13px] text-text-body leading-[1.9] whitespace-pre-line">{s.desc}</p>
                  <p className={`mt-4 ${s.accent ? "text-cta" : "text-lp-accent"} font-bold text-[14px]`}>{s.highlight}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== 報酬モデル ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">REVENUE MODEL</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              起業後の<span className="text-lp-accent">報酬モデル</span>
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-6"></div>
            <p className="text-[14px] text-text-body leading-[1.9]">多彩な収益チャネルで、安定と成長を両立。</p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: "権利収入", sub: "EC / 人材 / ビザ等", amount: "30〜100万/月" },
                { title: "人材派遣", sub: "BPO / アフィリエイト", amount: "10〜100万/月" },
                { title: "営業代行", sub: "成果報酬 / 全案件共有", amount: "10〜50万/月" },
                { title: "資金調達", sub: "デット / エクイティ", amount: "100万以上/回" },
                { title: "申請支援", sub: "補助金 / 助成金", amount: "50万以上/回" },
                { title: "自社事業", sub: "好きなことを自由に", amount: "無限大", accent: true },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 text-center">
                  <h3 className="font-bold text-text-dark text-[14px] mb-1">{item.title}</h3>
                  <p className="text-[11px] text-text-light leading-[1.7] mb-2">{item.sub}</p>
                  <p className="text-lp-accent font-bold text-[13px]">{item.amount}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp className="mt-6">
            <p className="text-[12px] text-text-light text-center">※ 報酬金額はあくまで目安です。成果により変動します。</p>
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
              ただの起業じゃ終わらない。<br />
              <span className="text-lp-accent">&ldquo;ビジネスの学び家&rdquo;</span>という、青春。
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-8"></div>
            <p className="text-white/50 text-[14px] leading-[2] mb-10">
              SARUDEMO会員は「ビジネスの学び家」コミュニティに参加可能。<br className="hidden md:block" />
              起業仲間と切磋琢磨しながら、ビジネスも人生も楽しむ場がここにあります。
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
                { emoji: "🎉", title: "楽しい行事", desc: "講演会・パーティー\nキャンプ・コンテスト" },
                { emoji: "⚽", title: "チーム所属", desc: "フットサル・読書会\nアイドル・YouTuber" },
                { emoji: "🎁", title: "福利厚生", desc: "占い無償提供\nプレゼント配布" },
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
                      { color: "bg-green-50 text-green-500", label: "起業家へ", desc: "初年度年商1億円達成。経営コンサルタントとして50社以上を指導。" },
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

      {/* ===== BizOwner vs SARUDEMO 比較 ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[900px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">COMPARISON</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              BizOwner vs <span className="text-lp-accent">SARUDEMO</span>
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-6"></div>
            <p className="text-[14px] text-text-body leading-[1.9]">同じ運営チームが提供する2つのプラン。あなたに合うのはどちら？</p>
          </FadeUp>
          <FadeUp className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-[13px] md:text-[14px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-100 font-bold text-text-dark rounded-tl-lg"></th>
                  <th className="p-4 bg-gray-100 font-bold text-text-dark text-center">BizOwner</th>
                  <th className="p-4 bg-cta text-white font-bold text-center rounded-tr-lg">SARUDEMO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["コンセプト", "副業感覚で権利収入", "最短最速で起業"],
                  ["対象", "CICブラック", "CICホワイト"],
                  ["価格", "総額210万円（分割型）", "150万円（一括）"],
                  ["支払方法", "売上から天引き", "クレジットカード可"],
                  ["権利収入", "1.5万円/月", "30〜100万/月"],
                  ["目標", "副収入の確保", "年商1億円"],
                  ["コミュニティ", "学び家 月額1万円", "学び家 月額1万円"],
                ].map((row, i) => (
                  <tr key={i} className={i < 6 ? "border-b border-gray-100" : ""}>
                    <td className="p-4 font-bold text-text-dark bg-white">{row[0]}</td>
                    <td className="p-4 text-center bg-white text-text-body">{row[1]}</td>
                    <td className="p-4 text-center bg-cta/5 font-bold text-cta">{row[2]}</td>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {[
                { label: "SARUDEMO契約金", price: "150", unit: "万円", sub: "一括（税別）" },
                { label: "学び家 会費", price: "10,000", unit: "円", sub: "/月（入会必須）" },
                { label: "2期目以降 顧問料", price: "100,000", unit: "円", sub: "/月（2年目〜）" },
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
              <p className="text-white font-bold text-[20px] md:text-[24px] mb-2">💰 資金調達サポートあり</p>
              <p className="text-white/70 text-[14px]">先行者利益のため、金額は随時上昇予定。今がチャンスです。</p>
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
              起業までの<span className="text-lp-accent">流れ</span>
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="space-y-0">
              {[
                { title: "公式LINE追加・ウェビナー視聴", desc: "まずはLINE登録。無料ウェビナーでSARUDEMOの全貌を確認。" },
                { title: "個別面談・契約", desc: "専任コンサルタントと面談。あなたに最適なプランを設計。" },
                { title: "法人設立・事業スタート", desc: "テンプレートに沿って法人設立。すぐに事業を開始。" },
                { title: "プロチームが全面サポート", desc: "経営・営業・法務まで、プロチームがあなたの事業を伴走。" },
                { title: "ビジネスオーナーとして独立", desc: "自分の事業を持つ社長へ。年商1億円を目指す。", last: true },
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
                { q: "BizOwnerとSARUDEMOの違いは何ですか？", a: "同じ運営チームが提供する2つのプランです。BizOwnerは副業感覚で小さく始めたい方向け、SARUDEMOは本気で起業・独立を目指す方向けです。SARUDEMOは契約金150万円で、より大きな報酬モデルとプロチームによる手厚いサポートが特徴です。" },
                { q: "150万円の投資に見合うリターンはありますか？", a: "権利収入だけで月30〜100万円、営業代行や資金調達を含めるとさらに大きな収益が見込めます。BizOwnerで同等レベルになるには総額210万円以上が必要なため、本気の方にはSARUDEMOがお得です。" },
                { q: "起業経験がゼロでも大丈夫ですか？", a: "はい。SARUDEMOは「猿でも出来る」がコンセプト。実業のフランチャイズテンプレートに沿って進めるだけなので、経験は不要です。経営のプロチームが全面サポートします。" },
                { q: "資金調達のサポートはありますか？", a: "はい。デット（融資）・エクイティ（出資）・キャリア（助成金等）など、多角的な資金調達をサポートいたします。" },
                { q: "契約期間はどれくらいですか？", a: "契約期間は1年間です。2期目以降は顧問料として月額10万円がかかりますが、その分プロチームの継続サポートを受けられます。" },
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
            <span className="text-lp-accent">社長</span>になる。
          </h2>
          <p className="text-white/50 text-[15px] leading-[2] mb-10">
            猿でも出来る起業のファストパス。最短1年で社長へ。
            <br className="hidden md:block" />
            まずは無料でLINE登録して、詳しい情報を受け取ってください。
          </p>
          <a href="#" className="cta-btn text-[18px] px-12 py-5">
            <LineIcon className="w-7 h-7" />
            1ヶ月無料でLINE登録する
          </a>
          <p className="text-white/30 text-[12px] mt-6 leading-[1.8]">
            ※ 解約自由・しつこい勧誘は一切ありません<br />
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
            <Link href="/#contact" className="hover:text-white/60 transition-colors">お問い合わせ</Link>
          </div>
          <p className="text-white/20 text-[11px]">&copy; 2026 Bestimulate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
