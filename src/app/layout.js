import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";
import TelSolution from "../componant/telSolution";
import Image from "next/image";

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#224187" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <header>
          <div className={styles.mainMenu}>
            <Link href="/" aria-label="메인 페이지로 이동">
              <div className={styles.mainLogo}>
                <Image
                  src="/image/dentalLogo.png"
                  width={70}
                  height={70}
                  alt="온가족치과의원 로고"
                  priority
                />
                <div className={styles.mainLogoTitle}>온가족치과의원</div>
              </div>
            </Link>
            <nav
              className={styles.mainMenues}
              role="navigation"
              aria-label="메인 메뉴"
            >
              <div>
                <Link
                  href="/dentalIntroduce"
                  aria-label="치과소개 페이지로 이동"
                >
                  치과소개
                </Link>
              </div>
              <div>
                <Link href="/implant" aria-label="임플란트 페이지로 이동">
                  임플란트
                </Link>
              </div>
              <div>
                <Link href="/orthodontics" aria-label="치과교정 페이지로 이동">
                  치과교정
                </Link>
              </div>
              <div>
                <Link href="/cosmetic" aria-label="심미치료 페이지로 이동">
                  심미치료
                </Link>
              </div>
              <div>
                <Link href="/general" aria-label="일반치료 페이지로 이동">
                  일반치료
                </Link>
              </div>
              <div>
                <Link href="/notice" aria-label="커뮤니티 페이지로 이동">
                  커뮤니티
                </Link>
              </div>
            </nav>
            <div className={styles.phone}>
              <Link
                href="tel:055.123.4567"
                aria-label="전화번호 055-123-4567로 전화하기"
              >
                <em className={styles.phone1}>055</em>
                <em className={styles.phone2}>123</em>
                <em className={styles.phone3}>4567</em>
              </Link>
            </div>
          </div>
        </header>
        <main role="main">{children}</main>
        <footer role="contentinfo">
          <div className={styles.footerContainer}>
            <section className={styles.footerInfo}>
              <h3>온가족치과의원</h3>
              <address>
                <p>주소: 경상남도 창원시 의창구 온가족치과의원</p>
                <p>
                  전화:{" "}
                  <a
                    href="tel:055.123.4567"
                    aria-label="전화번호 055-123-4567 전화하기"
                  >
                    055-123-4567
                  </a>
                </p>
                <p>진료시간: 평일 09:00-18:00, 토요일 09:00-13:00</p>
              </address>
            </section>
            <section className={styles.footerServices}>
              <h4>진료과목</h4>
              <nav aria-label="진료과목 메뉴">
                <ul>
                  <li>
                    <Link href="/implant" aria-label="임플란트 페이지로 이동">
                      임플란트
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orthodontics"
                      aria-label="치과교정 페이지로 이동"
                    >
                      치과교정
                    </Link>
                  </li>
                  <li>
                    <Link href="/cosmetic" aria-label="심미치료 페이지로 이동">
                      심미치료
                    </Link>
                  </li>
                  <li>
                    <Link href="/general" aria-label="일반치료 페이지로 이동">
                      일반치료
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
            <section className={styles.footerContact}>
              <h4>문의 및 예약</h4>
              <p>상담 및 예약을 원하시면 전화로 문의해주세요.</p>
              <a
                href="tel:055.123.4567"
                className={styles.footerPhone}
                aria-label="전화번호 055-123-4567 전화하기"
              >
                055-123-4567
              </a>
            </section>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 온가족치과의원. All rights reserved.</p>
          </div>
        </footer>
        <TelSolution />
      </body>
    </html>
  );
}
