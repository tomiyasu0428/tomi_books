import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "耳で旅する本屋さん",
  description: "音と物語で、新しい世界へ。Audibleの良作との出会いを、忘れられない旅に変える。",
  keywords: "オーディオブック, Audible, レビュー, 本, 読書, ナレーター, 音声コンテンツ",
  authors: [{ name: "ブックとみ" }],
  openGraph: {
    title: "耳で旅する本屋さん",
    description: "音と物語で、新しい世界へ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "耳で旅する本屋さん",
    description: "音と物語で、新しい世界へ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
