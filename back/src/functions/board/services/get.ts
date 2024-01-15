import prismaClient from "@libs/prisma";

export async function getBoards() {
  return await prismaClient.board.findMany({
    select: {
      id: true,
      name: true,
      isActive: true,
    },
  });
}
