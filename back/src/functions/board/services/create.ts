import { createBoardServiceParams } from "../types";
import prismaClient from "@libs/prisma";

export async function createBoard(params: createBoardServiceParams) {
  const { name, userId = 1, columns } = params;

  return await prismaClient.board.create({
    data: {
      name,
      userId,
      columns: {
        create: columns,
      },
    },
    include: {
      columns: true,
    },
  });
}
