import ContentExplain from "@/ui/contentExplain";
import DoctorSection from "@/ui/docotorSection";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const doctorList = [
  {
    img: "/image/doctor/kim.png",
    title: "김한나 대표원장",
    content: [
      "- 부산교육대학교 초등교육학과 졸업",
      "- A대학 치의학전문대학원 졸업",
      "- A대학 치과대학 치의학 석사",
      "- 통합치의학 전문의",
      "- C병원 치과과장",
      "- D병원 치과진료원장",
    ],
  },
  {
    img: "/image/doctor/song.png",
    title: "송보가 원장",
    content: [
      "- 아주대학교 경제학과 졸업",
      "- A대학교 치의학전문대학원 졸업",
      "- 구강악안면외과 전문의",
      "- 대한구강악안면외과학회 정회원",
      "- 대한구강악안면 임플란트학회 정회원",
    ],
  },
  {
    img: "/image/introduce/totalTreatment.png",
    title: "임현웅 원장",
    content: [
      "- C대학교 컴퓨터공학과 졸업",
      "- A대학교 치의학전문대학원 졸업",
      "- A대학교 치과병원 종합진료실 근무",
      "- D치과 보철 연구회 수료",
      "- University of P대학 근관치료 수료",
    ],
  },
];

export default function DoctorIntroduce() {
  return (
    <>
      <ContentExplain
        title="환자의 마음을<br>이해하는 진료를 합니다."
        content=""
      />
      <div style={containerStyle}>
        {doctorList.map((item, index) => (
          <DoctorSection
            key={index}
            title={item.title}
            content={item.content}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
}
