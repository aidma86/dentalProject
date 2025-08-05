"use server";

import prisma from "./prisma";

export const getBoard = async () => {
  try {
    //board 테이블의 데이터를 불러온다.
    const board = await prisma.board.findMany({
      select: {
        id: true,
        status: true,
        title: true,
        username: true,
        progress: true,
        created: true,
      },
      orderBy: [
        {
          created: "desc",
        },
        { id: "desc" },
      ],
    });

    return board;
  } catch (err) {
    throw new Error("get 오류");
  }
};
