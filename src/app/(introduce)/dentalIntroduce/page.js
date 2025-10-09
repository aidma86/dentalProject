import DentalSection from "@/ui/dentalSection";
import ContentExplain from "@/ui/contentExplain";

const textColorStyle = `"온가족치과의 <span style='color: #1483C4;'>특별함을 소개</span>합니다."`;

const sectionList = [
    {
        title: "환자별 맞춤 의료 서비스 제공",
        content: "실력있는 의료진은 물론 디지털 장비를 이용한 정밀한 치료계획으로<br>난이도가 높은 케이스도 정확히 진료합니다.",
        img: "/image/introduce/dentalIntroduce.png"
    },
    {
        title: "통합치의학 전문의 의료",
        content: "풍부한 임상경험을 보유한 의료진이<br>첫진료부터 마무리까지 책임진료 합니다.",
        img: "/image/introduce/totalTreatment.png"
    },
    {
        title: "디지털 장비를 이용한 정밀 검진",
        content: "3D-CT등의 디티털 장비 시설을 통한 정밀 검진으로<br>더 자세히 보고 더 꼼꼼히 오차 없이 치료합니다.",
        img: "/image/introduce/equipment.png"
    },
    {
        title: "자연치아 보존 원칙",
        content: "다양한 수술방법을 통해 병소를 완벽히 제거하고<br>자연치아의 보존을 위해서 최선을 다해 노력합니다.",
        img: "/image/introduce/naturalTooth.png"
    },
    {
        title: "소아전용 진료실 운영",
        content: "치과에 가기 두려워하는 아이들을 위한<br>전용장비가 맞춰진 독립형 솽전용 진료실을 운영하고 있습니다.",
        img: "/image/introduce/children.png"
    }
]

export default function DentalIntroduce() {
    return (
        <>
            <ContentExplain title="우리가족을 위한 치과진료<br>온가족 치과" content={textColorStyle}/>
            {sectionList.map((item, index) => (
                <DentalSection key={index} title={item.title}
                    content={item.content}
                    img={item.img} />
            ))}
        </>
    );
}