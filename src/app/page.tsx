import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <>
      <Header active="home" />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/ファーストビュー画像.png')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(0,43,55,0.72) 0%,rgba(0,103,133,0.55) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-[900px]">
          <h1
            className="font-[Josefin_Sans] font-bold text-white mb-8"
            style={{
              fontSize: "clamp(3rem,9vw,7.2rem)",
              lineHeight: 1.07,
              letterSpacing: "-0.01em",
            }}
          >
            BESTIMULATE
          </h1>
          <p
            className="font-[Noto_Sans_JP] text-white text-lg md:text-[22px] font-medium mb-3"
            style={{ letterSpacing: "0.08em" }}
          >
            ビジネスを、より戦略的に、より本質的に
          </p>
          <p
            className="text-white/60 text-sm md:text-base mb-12"
            style={{ letterSpacing: "-0.2px" }}
          >
            営業支援・コミュニティ構築・経営支援で、事業成長を加速します
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Link href="/services" className="btn-ghost white">
              VIEW SERVICE
              <span className="arrow"></span>
            </Link>
            <Link
              href="#contact"
              className="btn-ghost white"
              style={{
                borderColor: "rgba(255,255,255,0.35)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              CONTACT
              <span className="arrow"></span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/35 text-[10px] font-[Josefin_Sans] tracking-[0.25em]">
            SCROLL
          </span>
          <div className="w-[1px] h-9 bg-white/10 relative">
            <div className="scroll-dot absolute top-0 left-0 w-full h-3 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <p className="section-deco">ABOUT</p>
                <div className="w-10 h-[3px] bg-primary mt-5"></div>
              </div>
              <div>
                <h2
                  className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] mb-6"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  私たちについて
                </h2>
                <p
                  className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2.1] mb-5"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  株式会社Bestimulateは、営業代行・コミュニティ運営・経営コンサルティングの3つの柱で企業の成長を多角的に支援するビジネスパートナーです。
                </p>
                <p
                  className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2.1]"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  単なるサービス提供者ではなく、成果にこだわるパートナーとしてクライアントに寄り添い、持続的な成長をともに目指します。
                </p>
              </div>
            </div>
          </FadeUp>
          {/* 3 Pillars */}
          <FadeUp className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  ),
                  en: "SALES",
                  ja: "営業支援",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ),
                  en: "COMMUNITY",
                  ja: "コミュニティ構築",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                  en: "CONSULTING",
                  ja: "経営支援",
                },
              ].map((pillar) => (
                <div key={pillar.en} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {pillar.icon}
                    </svg>
                  </div>
                  <p className="font-[Josefin_Sans] text-[13px] tracking-[0.15em] text-primary font-semibold mb-1">
                    {pillar.en}
                  </p>
                  <p className="font-[Noto_Sans_JP] text-xs text-text-main">
                    {pillar.ja}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== SERVICE ===== */}
      <section id="service" className="py-24 md:py-32 bg-bg-alt">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="section-deco">SERVICE</p>
            <div className="w-10 h-[3px] bg-primary mx-auto mt-5 mb-6"></div>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              事業内容
            </h2>
            <p
              className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2] max-w-lg mx-auto"
              style={{ letterSpacing: "-0.2px" }}
            >
              営業支援・コミュニティ構築・経営支援の3領域を横断し、
              <br className="hidden md:block" />
              クライアントの事業成長を包括的にサポートします。
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  ),
                  title: "営業代行",
                  desc: "新規開拓から既存顧客フォローまで、経験豊富なプロフェッショナルが営業力を強化。成果にコミットします。",
                  items: [
                    "新規顧客の開拓・アポイント獲得",
                    "既存顧客のフォローアップ",
                    "営業戦略の立案・改善",
                  ],
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ),
                  title: "コミュニティ運営",
                  desc: "顧客やファンを繋ぐコミュニティの構築・運営。エンゲージメントとロイヤリティの向上を実現します。",
                  items: [
                    "コミュニティ設計・立ち上げ",
                    "イベント企画・運営",
                    "メンバーエンゲージメント施策",
                  ],
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                  title: "経営コンサルティング",
                  desc: "経営課題の分析から戦略立案、実行支援まで。包括的にサポートします。",
                  items: [
                    "経営課題の分析・可視化",
                    "事業戦略・成長戦略の策定",
                    "実行フェーズの伴走支援",
                  ],
                },
              ].map((svc) => (
                <div key={svc.title} className="svc-card bg-white p-7 md:p-8">
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center mb-5">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {svc.icon}
                    </svg>
                  </div>
                  <h3
                    className="text-text-heading font-bold text-[16px] mb-3"
                    style={{ letterSpacing: "-0.3px" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="font-[Noto_Sans_JP] text-text-main text-[13px] leading-[2] mb-5">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2 text-[13px] text-text-main">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-[9px] shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="text-center mt-14">
            <Link href="/services" className="btn-ghost">
              VIEW MORE
              <span className="arrow"></span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ===== 提供サービス ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeUp className="mb-16">
            <p className="font-[Noto_Sans_JP] text-text-main text-[13px] mb-3">
              営業支援・コミュニティ構築・経営支援を基盤として
            </p>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] leading-[1.6]"
              style={{ letterSpacing: "-0.3px" }}
            >
              「事業の成長」をサポートする
              <br />
              サービスを提供しています。
            </h2>
          </FadeUp>

          <FadeUp>
            <div className="grid md:grid-cols-12 gap-4">
              <Link
                href="/bizowner"
                className="nav-card md:col-span-7 flex flex-col justify-end p-7 md:p-10 min-h-[200px] md:min-h-[300px]"
                style={{
                  background:
                    "linear-gradient(135deg,#003d52 0%,#006785 60%,#0088a8 100%)",
                }}
              >
                <p className="font-[Josefin_Sans] text-[11px] text-white/40 tracking-[0.15em] mb-3">
                  BUSINESS PROGRAM
                </p>
                <h3
                  className="font-[Josefin_Sans] font-bold text-[24px] md:text-[32px] text-white mb-2"
                  style={{ letterSpacing: "0.02em" }}
                >
                  BizOwner
                </h3>
                <p className="text-white/50 text-[13px] leading-[1.9] max-w-sm">
                  副業感覚で会社経営。知識ゼロ・リスク最小限で始められる権利収入の仕組みを提供します。
                </p>
              </Link>
              <Link
                href="/sarudemo"
                className="nav-card md:col-span-5 flex flex-col justify-end p-7 md:p-10 min-h-[200px] md:min-h-[300px]"
                style={{
                  background:
                    "linear-gradient(135deg,#004b5e 0%,#007a96 100%)",
                }}
              >
                <p className="font-[Josefin_Sans] text-[11px] text-white/40 tracking-[0.15em] mb-3">
                  FAST PASS TO BUSINESS
                </p>
                <h3
                  className="font-[Josefin_Sans] font-bold text-[24px] md:text-[32px] text-white mb-2"
                  style={{ letterSpacing: "0.02em" }}
                >
                  SARUDEMO
                </h3>
                <p className="text-white/50 text-[13px] leading-[1.9]">
                  最短最速で年商1億円を目指す
                  <br />
                  起業ファストパス。
                </p>
              </Link>
              <Link
                href="/manabiya"
                className="nav-card md:col-span-8 md:col-start-3 flex flex-col justify-end p-7 md:p-10 min-h-[180px] md:min-h-[240px]"
                style={{
                  background:
                    "linear-gradient(135deg,#005064 0%,#008ba3 100%)",
                }}
              >
                <p className="font-[Josefin_Sans] text-[11px] text-white/40 tracking-[0.15em] mb-3">
                  COMMUNITY
                </p>
                <h3 className="font-[Noto_Sans_JP] font-bold text-[22px] md:text-[28px] text-white mb-2">
                  ビジネスの学び家
                </h3>
                <p className="text-white/50 text-[13px] leading-[1.9]">
                  副業・起業・エンタメを融合した総合コミュニティ。仲間とともに学び、成長する場を提供します。
                </p>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 md:py-32 bg-bg-alt">
        <div className="max-w-[700px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p
              className="section-deco"
              style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
            >
              CONTACT
            </p>
            <div className="w-10 h-[3px] bg-primary mx-auto mt-4 mb-6"></div>
            <h2
              className="font-[Noto_Sans_JP] text-text-heading font-bold text-[20px] md:text-[24px] mb-4"
              style={{ letterSpacing: "-0.3px" }}
            >
              お問い合わせ
            </h2>
            <p
              className="font-[Noto_Sans_JP] text-text-main text-[14px] leading-[2]"
              style={{ letterSpacing: "-0.2px" }}
            >
              サービスに関するご質問やお見積りのご依頼など、
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
          </FadeUp>
          <FadeUp>
            <ContactForm />
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
