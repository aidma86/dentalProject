import BoardTable from "@/app/(community)/board/boardTable";
import ContentExplain from "@/ui/cntentExplain";
import { Box } from "@mui/material";

export default function Notice() {
  return (
    <>
      <div>
        <ContentExplain title="공지사항" content="" />
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
