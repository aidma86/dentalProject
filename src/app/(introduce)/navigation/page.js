import KakaoMap from "@/componant/kakaoMap";
import styles from "./navigation.module.css";
import ContentExplain from "@/ui/contentExplain";
import MapButton from "@/componant/mapButton";

const textCotent =
  "경남 창원시 성산구 원이대로 578 <span style='color:rgb(3, 69, 107);'>구트병원빌딩 4층</span><br>경남 창원시 성산구 중앙동 75-4<br><span style='color:rgb(3, 69, 107);'>055-123-4567</span>";

export default function Navigation() {
  return (
    <>
      <div>
        <ContentExplain title="오시는길" content={textCotent} />
      </div>

      <div className={styles.mapStyle}>
        <KakaoMap />
      </div>

      <div className={styles.mapbnt}>
        <MapButton href="https://map.kakao.com/link/map/온가족치과,35.22856,128.677883" btnName="큰지도보기" backgroundColor="#396ebb"/>
        <MapButton href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C881885%2C484330&rt1=&rt2=%EA%B5%AC%ED%8A%B8%EB%B3%91%EC%9B%90&rtIds=%2C&rtTypes=%2C" btnName="길찾기" backgroundColor="#674ea5"/>
      </div>
    </>
  );
}
