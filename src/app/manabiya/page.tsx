import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import LineIcon from "@/components/LineIcon";

export const metadata: Metadata = {
  title: "ビジネスの学び家｜学ぶ、遊ぶ、稼ぐ。全部ここに。",
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

export default function ManabiyaPage() {
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
                BizOwner会員限定コミュニティ
              </p>
              <h1
                className="font-bold text-white mb-5"
                style={{
                  fontSize: "clamp(28px,5.5vw,46px)",
                  lineHeight: 1.3,
                  letterSpacing: "0.02em",
                }}
              >
                学ぶ、遊ぶ、稼ぐ。
                <br />
                <span className="text-lp-accent">全部</span>ここに。
              </h1>
              <p className="text-white/60 text-[15px] leading-[1.9] mb-8">
                副業 × 起業 × エンタメ。コスパ最強の福利厚生コミュニティ。
                <br className="hidden md:block" />
                ビジネスも人生も、仲間と一緒に楽しもう。
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
                  src="/lp/team-celebration.jpg"
                  alt="コミュニティの仲間たち"
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
              こんな<span className="text-lp-accent">モヤモヤ</span>ありませんか？
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid gap-4">
              {[
                "副業を始めたけど、一人だとモチベーションが続かない",
                "ビジネスを学びたいけど、高額なスクールには手が出ない",
                "社会人になってから、本気で語れる仲間がいない",
                "毎日が仕事と家の往復。もっとワクワクする場所がほしい",
                "起業に興味はあるけど、何から学べばいいか分からない",
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
              そのモヤモヤ、
              <br className="md:hidden" />
              「学び家」が全部解決します。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== ビジネスの学び家とは ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[900px] mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/lp/meeting-laugh.jpg"
                  alt="学び家の雰囲気"
                  width={600}
                  height={280}
                  className="w-full h-[240px] md:h-[280px] object-cover"
                />
              </div>
              <div>
                <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">
                  WHAT IS MANABIYA?
                </p>
                <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
                  副業 × 起業 × エンタメ。
                  <br />
                  <span className="text-lp-accent">コスパ最強</span>のコミュニティ。
                </h2>
                <div className="w-12 h-[3px] bg-lp-accent mb-6"></div>
                <p className="text-[15px] leading-[2] text-text-body">
                  「ビジネスの学び家」は、BizOwner会員限定の総合コミュニティ。ビジネスの学びはもちろん、サークル活動・イベント・福利厚生まで、ここにしかない体験が待っています。
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                  title: "学べる",
                  desc: "副業の始め方からビジネス講義まで\n動画見放題で一生学べる。",
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: "遊べる",
                  desc: "サークル・イベント・コンテスト。\n大人の青春がここにある。",
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: "稼げる",
                  desc: "学んだ知識で副業スタート。\n仲間と一緒に収入アップ。",
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

      {/* ===== 4つの価値（楽しそうセクション） ===== */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a3a5c 0%, #2a6090 40%, #3a8cc0 70%, #5ab0e0 100%)" }}
      >
        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-[#ffd666] text-[12px] tracking-[0.2em] mb-3">4 VALUES</p>
            <h2 className="font-bold text-white text-[22px] md:text-[28px] leading-[1.5] mb-4">
              学び家で手に入る<br />
              <span className="text-[#ffd666]">4つの価値</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#ffd666] mx-auto mb-6"></div>
            <p className="text-white/60 text-[14px] leading-[2]">
              ビジネスだけじゃない。ここにしかない体験が、あなたを待っている。
            </p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {[
                { emoji: "🎬", title: "会員サイト", desc: "副業講座・ビジネスセミナーが\n追加料金なしで見放題。\n動画は随時追加！", color: "from-blue-500/20 to-blue-600/10" },
                { emoji: "🎉", title: "楽しい行事", desc: "経営者講演会・クラブ貸切・\nキャンプ・ビジコン・ミスコン\n...大人の文化祭！", color: "from-pink-500/20 to-pink-600/10" },
                { emoji: "⚽", title: "サークル活動", desc: "フットサル・筋トレ・読書会\nアイドル・YouTuber・バンド\nなんでもアリ！", color: "from-green-500/20 to-green-600/10" },
                { emoji: "🎁", title: "福利厚生", desc: "占い＆コーチング無償提供\nプレゼント企画・会員割引\n毎月ゲリラ開催！", color: "from-yellow-500/20 to-yellow-600/10" },
              ].map((c) => (
                <div key={c.title} className={`bg-gradient-to-b ${c.color} border border-white/15 rounded-xl p-6 text-center backdrop-blur-sm`}>
                  <div className="text-4xl mb-3">{c.emoji}</div>
                  <h3 className="font-bold text-white text-[15px] mb-3">{c.title}</h3>
                  <p className="text-white/50 text-[12px] leading-[1.8] whitespace-pre-line">{c.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== 会員サイト ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">LEARNING</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              一生<span className="text-lp-accent">学べる</span>会員サイト
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-6"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-bg-section rounded-2xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-bold text-text-dark text-[17px] mb-3">副業の始め方</h3>
                <p className="text-[14px] text-text-body leading-[2]">
                  何から始めればいいか分からない…そんな方でも大丈夫。会員サイトの動画で副業の進め方がステップごとに分かります。
                </p>
              </div>
              <div className="bg-bg-section rounded-2xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="font-bold text-text-dark text-[17px] mb-3">ビジネスセミナー見放題</h3>
                <p className="text-[14px] text-text-body leading-[2]">
                  起業家向けのビジネスセミナーも追加料金なしで見放題。動画は随時更新されるので、案件も講義もどんどん増えていきます。
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp className="text-center mt-8">
            <p className="text-[13px] text-text-light leading-[1.9]">
              将来的には各界のプロフェッショナル監修の動画も追加予定。学べるジャンルは無限に広がります。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ===== イベント・コンテスト（楽しそうセクション） ===== */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2d1b4e 0%, #4a2d7a 40%, #6b3fa0 70%, #8b5fc0 100%)" }}
      >
        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-[#ffd666] text-[12px] tracking-[0.2em] mb-3">EVENTS & CONTESTS</p>
            <h2 className="font-bold text-white text-[22px] md:text-[28px] leading-[1.5] mb-4">
              大人の<span className="text-[#ffd666]">文化祭</span>、毎月開催。
            </h2>
            <div className="w-12 h-[3px] bg-[#ffd666] mx-auto mb-6"></div>
            <p className="text-white/50 text-[14px] leading-[2]">ビジネスも遊びも全力。学び家だから体験できるイベントの数々。</p>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="font-bold text-white text-[16px] mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎤</span> イベント
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "経営者講演会",
                    "ビジネス交流会",
                    "YouTuber 1日店長BAR",
                    "クラブ貸切パーティー",
                    "合コン",
                    "キャンプ",
                  ].map((name) => (
                    <div key={name} className="bg-white/8 border border-white/10 rounded-lg px-4 py-3 text-center">
                      <p className="text-white/80 text-[13px] font-bold">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-[16px] mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span> コンテスト
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "ビジコン",
                    "ミスコン",
                    "フェス型のど自慢",
                    "大食い選手権",
                    "Uber配達レース",
                    "ファッションショー",
                  ].map((name) => (
                    <div key={name} className="bg-white/8 border border-white/10 rounded-lg px-4 py-3 text-center">
                      <p className="text-white/80 text-[13px] font-bold">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 gap-3 max-w-[700px] mx-auto">
              <div className="rounded-xl overflow-hidden h-[160px] md:h-[200px]">
                <Image src="/lp/office-party.jpg" alt="イベント風景" width={400} height={200} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-[160px] md:h-[200px]">
                <Image src="/lp/meeting-laugh.jpg" alt="交流会風景" width={400} height={200} className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== サークル活動（楽しそうセクション） ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">CIRCLES</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              好きなことで<span className="text-lp-accent">つながる</span>サークル
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-6"></div>
            <p className="text-[14px] text-text-body leading-[1.9]">スポーツも芸能も趣味も。やりたいことが見つかる場所。</p>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-text-dark text-[16px] mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-lp-accent/10 text-lp-accent flex items-center justify-center text-[16px]">🏃</span>
                  スポーツ・趣味サークル
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { emoji: "⚽", name: "フットサル" },
                    { emoji: "⚾", name: "草野球" },
                    { emoji: "💪", name: "筋トレ" },
                    { emoji: "📖", name: "読書" },
                    { emoji: "🏃", name: "ランニング" },
                    { emoji: "🎲", name: "ボードゲーム" },
                    { emoji: "🧖", name: "サウナ" },
                    { emoji: "🍽️", name: "グルメ" },
                    { emoji: "🍻", name: "飲み会" },
                  ].map((item) => (
                    <div key={item.name} className="bg-bg-section rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-xl mb-1">{item.emoji}</div>
                      <p className="text-[12px] font-bold text-text-dark">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-text-dark text-[16px] mb-5 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-cta/10 text-cta flex items-center justify-center text-[16px]">🎭</span>
                  芸能・クリエイターサークル
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { emoji: "🎤", name: "アイドル" },
                    { emoji: "🎭", name: "劇団俳優" },
                    { emoji: "😂", name: "芸人" },
                    { emoji: "🎸", name: "バンド" },
                    { emoji: "📸", name: "撮影会モデル" },
                    { emoji: "🎨", name: "芸術家" },
                    { emoji: "📹", name: "YouTuber" },
                    { emoji: "📱", name: "ライバー" },
                    { emoji: "🎬", name: "動画編集" },
                  ].map((item) => (
                    <div key={item.name} className="bg-bg-section rounded-xl p-3 text-center border border-gray-100">
                      <div className="text-xl mb-1">{item.emoji}</div>
                      <p className="text-[12px] font-bold text-text-dark">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp className="text-center mt-10">
            <p className="text-[13px] text-text-light">※ 新しいサークルの立ち上げも歓迎！毎月の全体MTGでプレゼンして仲間を集めよう。</p>
          </FadeUp>
        </div>
      </section>

      {/* CTA 3 */}
      <CtaBanner />

      {/* ===== 福利厚生 ===== */}
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[900px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">BENEFITS</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">
              ここだけの<span className="text-lp-accent">福利厚生</span>
            </h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto mb-6"></div>
            <p className="text-[14px] text-text-body leading-[1.9]">学び家に入らないと手に入らないものが、ここにはたくさんある。</p>
          </FadeUp>
          <FadeUp>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🔮",
                  title: "個別占い＆コーチング",
                  desc: "恋愛・ビジネス・人格形成をプロが指導。週1時間 × 月4回を無償提供。",
                  note: "※ 要予約制",
                },
                {
                  emoji: "🎁",
                  title: "プレゼント企画",
                  desc: "ミッション達成で豪華賞品をご自宅へ郵送。毎月1回以上、ゲリラ開催も！",
                  note: "※ 毎月開催",
                },
                {
                  emoji: "💎",
                  title: "会員割引・無料体験",
                  desc: "様々なサービスの特別優待券を配布。学び家メンバーだけの限定特典。",
                  note: "※ 随時更新",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-7 text-center border border-gray-100">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-text-dark text-[16px] mb-3">{item.title}</h3>
                  <p className="text-[13px] text-text-body leading-[1.9] mb-3">{item.desc}</p>
                  <p className="text-[11px] text-text-light">{item.note}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== 他社比較 ===== */}
      <section className="py-20 md:py-28 bg-white">
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
                  <th className="p-4 bg-cta text-white font-bold text-center">ビジネスの学び家</th>
                  <th className="p-4 bg-gray-100 font-bold text-text-dark text-center">A社（マッチング系）</th>
                  <th className="p-4 bg-gray-100 font-bold text-text-dark text-center rounded-tr-lg">B社（副業系）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["属性", "副業 × 起業 × エンタメ", "ビジネスマッチング", "副業コミュニティ"],
                  ["ベネフィット", "未経験から起業/権利収入", "人脈や商材が増える", "気楽に小遣い稼ぎ"],
                  ["サークル活動", "20種類以上", "なし", "なし"],
                  ["イベント", "毎月開催", "不定期", "なし"],
                  ["福利厚生", "占い・プレゼント等", "なし", "なし"],
                  ["弱点", "ない！", "活用方法が不明", "中抜きが大きい"],
                ].map((row, i) => (
                  <tr key={i} className={i < 5 ? "border-b border-gray-100" : ""}>
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
      <section className="py-20 md:py-28 bg-bg-section">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-3">PRICING</p>
            <h2 className="font-bold text-text-dark text-[22px] md:text-[28px] leading-[1.5] mb-4">料金プラン</h2>
            <div className="w-12 h-[3px] bg-lp-accent mx-auto"></div>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[600px] mx-auto">
              {[
                { label: "BizOwner会費（学び家込み）", price: "11,000", unit: "円", sub: "/月（税込）" },
                { label: "サークル・イベント参加費", price: "各団長", unit: "設定", sub: "サークルによる" },
              ].map((p) => (
                <div key={p.label} className="bg-white rounded-xl p-6 text-center border border-gray-100">
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
            <div className="bg-cta rounded-xl p-6 md:p-8 text-center max-w-[600px] mx-auto">
              <p className="text-white font-bold text-[20px] md:text-[24px] mb-2">🎉 今なら1ヶ月無料！</p>
              <p className="text-white/70 text-[14px]">BizOwner会員なら追加料金なしで学び家のすべてを体験できます。</p>
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
                { title: "公式LINE追加・ウェビナー視聴", desc: "まずはLINE登録。無料ウェビナーでBizOwnerと学び家の全貌を確認。" },
                { title: "BizOwner会員登録", desc: "簡単なフォーム入力で登録完了。学び家にも自動で参加できます。" },
                { title: "会員サイトで学ぶ", desc: "動画で副業の始め方を学び、すぐに行動スタート。" },
                { title: "サークル・イベントに参加", desc: "興味のあるサークルやイベントに自由に参加。仲間を見つけよう。" },
                { title: "学び家ライフを満喫", desc: "学ぶ、遊ぶ、稼ぐ。全部ここで叶えよう。", last: true },
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
                { q: "学び家だけの利用はできますか？", a: "学び家はBizOwner会員限定のコミュニティです。BizOwnerに入会いただくことで、学び家のすべてのサービスをご利用いただけます。" },
                { q: "サークルの参加費はいくらですか？", a: "サークルごとに団長が費用を設定しています。イベントやコンテストも参加料制です。BizOwner月額会費以外の追加料金は各活動ごとに異なります。" },
                { q: "新しくサークルを作ってもいいですか？", a: "もちろんです！毎月1回の全体MTGでプレゼンし、参加希望者が集まれば新サークルを立ち上げられます。" },
                { q: "会員サイトの動画はどんな内容ですか？", a: "副業の始め方や初心者向けビジネスセミナーを中心に提供しています。動画は随時追加され、今後は各分野のプロによる講座も増やしていく予定です。" },
                { q: "占いやコーチングは本当に無料ですか？", a: "はい、学び家メンバーには週1時間×月4回の個別占い＆コーチングを無償提供しています。要予約制です。" },
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
          <p className="font-[Inter] font-bold text-lp-accent text-[12px] tracking-[0.2em] mb-6">JOIN THE COMMUNITY</p>
          <h2
            className="font-bold text-white mb-6"
            style={{ fontSize: "clamp(24px,5vw,40px)", lineHeight: 1.4 }}
          >
            ここが、あなたの<br />
            <span className="text-lp-accent">居場所</span>になる。
          </h2>
          <p className="text-white/50 text-[15px] leading-[2] mb-10">
            学ぶ、遊ぶ、稼ぐ。全部ここに。
            <br className="hidden md:block" />
            まずは無料でLINE登録して、学び家の仲間になろう。
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
