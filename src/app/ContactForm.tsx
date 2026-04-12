"use client";

export default function ContactForm() {
  return (
    <form
      className="bg-white border border-[#e0e0e0] p-8 md:p-12"
      onSubmit={(e) => {
        e.preventDefault();
        alert("送信ありがとうございます。");
      }}
    >
      <div className="grid gap-6">
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            お名前 <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            会社名
          </label>
          <input
            type="text"
            name="company"
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="株式会社〇〇"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            メールアドレス <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            電話番号
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px]"
            placeholder="090-0000-0000"
          />
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            お問い合わせ内容 <span className="text-red-500 text-xs">*</span>
          </label>
          <select
            name="category"
            required
            defaultValue=""
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px] text-text-main"
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="sales">営業代行について</option>
            <option value="community">コミュニティー運営について</option>
            <option value="consulting">経営コンサルティングについて</option>
            <option value="other">その他</option>
          </select>
        </div>
        <div>
          <label className="block font-[Noto_Sans_JP] text-[13px] font-semibold text-text-heading mb-2">
            メッセージ <span className="text-red-500 text-xs">*</span>
          </label>
          <textarea
            rows={5}
            name="message"
            required
            className="w-full px-4 py-3 border border-[#d0d0d0] bg-white focus:border-primary focus:outline-none transition-colors text-[14px] resize-none"
            placeholder="お気軽にお問い合わせください"
          />
        </div>
        <div className="text-center pt-2">
          <button type="submit" className="btn-ghost">
            送信
            <span className="arrow"></span>
          </button>
        </div>
      </div>
    </form>
  );
}
