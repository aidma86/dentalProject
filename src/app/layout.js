import "./globals.css";
import TopNavtab from "./(main)/TopNavtab";
import { Noto_Sans_KR } from "next/font/google";


const notoSans = Noto_Sans_KR({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "온가족치과의원 - 전문적인 치과 치료",
  description:
    "경상남도 창원시 의창구에 위치한 온가족치과의원입니다. 임플란트, 교정, 심미치료, 일반치료를 전문으로 합니다.",
  keywords: "치과, 임플란트, 교정, 심미치료, 창원치과, 온가족치과의원",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "온가족치과의원",
    description: "전문적인 치과 치료 서비스",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <TopNavtab />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
