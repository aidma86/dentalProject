import TabMenu from "@/componant/tabMenu";

const tabList = [
  { content: "공지사항", href: "/notice" },
  { content: "게시판", href: "/board" },
  { content: "보도자료", href: "/news" },
  { content: "원장님칼럼", href: "/column" },
];

export default function CommunityLayout({ children }) {
  return (
    <>
      <TabMenu title="커뮤니티" img="/image/tabMenu/tab6.png" tabList={tabList} />

      {children}
    </>
  );
}