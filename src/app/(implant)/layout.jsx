import TabMenu from "@/componant/tabMenu";

const tabList = [
  { content: "가이드임플란트", href: "/dentalIntroduce" },
  { content: "뼈이식임플란트", href: "/bornImplant" },
  { content: "임플란트틀니", href: "/denturesImpant" },
  { content: "발치 즉시 식립술", href: "/extractionImplant" },
  { content: "보험임플란트", href: "/insuranceImplant" },
];

export default function ImplantLayout({ children }) {
  return (
    <>
      <TabMenu title="임플란트" img="/image/tabMenu/tab2.png" tabList={tabList} />

      {children}
    </>
  );
}
