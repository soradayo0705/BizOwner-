import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "（仮）ビジネスの学び家",
};

export default function ManabiyaPage() {
  return (
    <div className="font-sans text-[#1d1d1f] bg-white min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-[200] bg-black/82 backdrop-blur-[20px] backdrop-saturate-[180%]">
        <div className="max-w-[980px] mx-auto px-6 flex items-center justify-between h-[48px]">
          <Link
            href="/"
            className="font-[Josefin_Sans] font-bold text-[14px] tracking-[0.06em] text-white"
          >
            Bestimulate
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="text-white/82 text-[12px] px-2.5 leading-[48px] transition-colors hover:text-white"
            >
              ホーム
            </Link>
            <Link
              href="/services"
              className="text-white/82 text-[12px] px-2.5 leading-[48px] transition-colors hover:text-white"
            >
              サービス
            </Link>
            <Link
              href="/#contact"
              className="text-white/82 text-[12px] px-2.5 leading-[48px] transition-colors hover:text-white"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center pt-[48px]">
        <div className="text-center py-32 px-6">
          <p className="font-[Josefin_Sans] font-semibold text-primary text-[12px] tracking-[0.2em] mb-5">
            SERVICE PAGE
          </p>
          <h1
            className="font-[Noto_Sans_JP] font-bold text-[#1d1d1f] mb-4"
            style={{
              fontSize: "clamp(28px,5vw,40px)",
              lineHeight: 1.07,
              letterSpacing: "-0.01em",
            }}
          >
            ビジネスの学び家
          </h1>
          <p
            className="font-[Noto_Sans_JP] text-black/56 mb-8"
            style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
          >
            このページは準備中です。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            トップに戻る
          </Link>
        </div>
      </main>
      <footer
        className="bg-dark-surface text-white/30 py-5 text-center"
        style={{ fontSize: "11px", letterSpacing: "0.04em" }}
      >
        &copy; 2026 Bestimulate. All Rights Reserved.
      </footer>
    </div>
  );
}
