
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_JP({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto" 
});

export const metadata: Metadata = {
  title: "Akapla | Vietnamese Manufacturing Partner & Japan Supply Chain Bridge",
  description: "Akapla connects Japan's engineering precision with Vietnam's manufacturing power. Industrial Supply Chain Management, Bridge Engineering, and high-quality outsourcing services.",
  keywords: "Vietnamese manufacturing partner, Japan supply chain bridge, 工業ベトナム委託, サプライチェーン管理, industrial sourcing, RFQ Vietnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} ${noto.variable} font-sans bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
