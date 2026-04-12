import type { Metadata } from "next";
import { Inter, Josefin_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社Bestimulate",
    template: "%s | Bestimulate",
  },
  description:
    "営業支援・コミュニティ構築・経営支援で、事業成長を加速します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${josefinSans.variable} ${notoSansJP.variable}`}
    >
      <body className="font-sans text-text-main bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
