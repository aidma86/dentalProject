import TabMenu from "@/componant/tabMenu";

const tabList = [
  { content: "치과소개", href: "/dentalIntroduce" },
  { content: "의료진소개", href: "/doctorIntroduce" },
  { content: "진료안내", href: "/clinicalGuide" },
  { content: "오시는길", href: "/navigation" },
];

export default function IntroduceLayout({ children }) {
  return (
    <>
      <TabMenu title="치과소개" img="/image/tabMenu/tab1.png" tabList={tabList} />

      {children}
    </>
  );
}
