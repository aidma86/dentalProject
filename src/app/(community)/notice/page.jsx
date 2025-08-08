import BoardTable from "@/app/action/boardTable";
import ContentExplain from "@/ui/ContentExplain";
import { Box } from "@mui/material";
import CommunityTable from "@/componant/CommunityTable"

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
