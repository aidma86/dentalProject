import styles from "./topNavtab.module.css";
import Link from "next/link";
import Image from "next/image";

export default function TopNavtab() {
  return (
    <nav>
      <div className={styles.mainMenu}>
        <Link href="/" aria-label="메인 페이지로 이동">
          <div className={styles.mainLogo}>
            <Image
              src="/image/dentalLogo.webp"
              width={60}
              height={60}
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
            <Link href="/dentalIntroduce" aria-label="치과소개 페이지로 이동">
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
      </div>
    </nav>
  );
}
