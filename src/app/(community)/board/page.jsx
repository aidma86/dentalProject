import CommunityTable from "@/componant/CommunityTable"
import client from "@/generated/prisma/client";
import { getUser } from "@/action/database";

export default async function Board() {
  // getUser 함수를 실행하여 데이터 확인
  const userData = await getUser();
  console.log("User data:", userData);

  return (
    <>
      <div>
        <CommunityTable/>
      </div>
    </>
  );
}
