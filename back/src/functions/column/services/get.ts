import prisma from "@libs/prisma";

export async function getColums(boardId: number) {
  return await prisma.column.findMany({
    where: {
      boardId,
    },
    select: {
      id: true,
      name: true,
      tasks: {
        select: {
          title: true,
          subtasks: {
            select: {
              title: true,
              isCompleted: true,
            },
          },
        },
      },
    },
  });
}
