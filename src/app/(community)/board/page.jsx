import BoardTable from "@/app/action/boardTable";
import ContentExplain from "@/ui/contentExplain";
import { Box } from "@mui/material";

export default async function Board() {
  return (
    <>
      <div>
        <ContentExplain title="온라인상담" content="" />
      </div>
      <Box
        sx={{
          width: "100%",
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
