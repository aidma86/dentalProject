"use client";

import React, { useEffect, useRef } from "react";
import styles from "./kakaoMap.module.css";

const KakaoMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const container = mapContainer.current;
        const options = {
          center: new window.kakao.maps.LatLng(35.22856, 128.677883), // 병원좌표
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(
          35.22856,
          128.677883
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도에 표시
        marker.setMap(map);

        // 라벨 생성
        const label = new window.kakao.maps.InfoWindow({
          content: `
            <div style="
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 12px 16px;
              font-family: 'Arial', sans-serif;
              font-size: 14px;
              font-weight: 600;
              text-align: center;
              min-width: 120px;
            ">
              🏥 온가족치과
            </div>
          `,
        });

        // 마커 클릭 시 라벨 표시
        window.kakao.maps.event.addListener(marker, "click", function () {
          label.open(map, marker);
        });

        // 초기에 라벨 표시
        label.open(map, marker);
      });
    });
  }, []);

  return <div className={styles.markMap} ref={mapContainer} />;
};

export default KakaoMap;
