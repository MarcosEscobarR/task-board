import { createColumnServiceParams } from "./types";
import prismaClient from "@libs/prisma";

export async function createColumn(
  boardId: number,
  params: createColumnServiceParams
) {
  return await prismaClient.column.create({
    data: {
      ...params,
      boardId,
    },
  });
}
