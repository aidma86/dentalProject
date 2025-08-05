import BoardTable from "@/app/action/boardTable";
import ContentExplain from "@/ui/contentExplain";
import { getBoard } from "@/app/action/database";
import { Box } from "@mui/material";

export default async function Board() {
  // getUser 함수를 실행하여 데이터 확인
  const userData = await getBoard();

  return (
    <>
      <div>
        <ContentExplain title="온라인상담" content="" />
      </div>
      <Box
        sx={{
          width : "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BoardTable />
      </Box>
    </>
  );
}
