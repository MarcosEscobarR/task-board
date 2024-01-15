import prismaClient from "@libs/prisma";

export async function getTasks(columnId: number) {
  return prismaClient.task.findMany({
    where: {
      columnId,
    },
    select: {
      id: true,
      title: true,
      status: true,
      subtasks: {
        select: {
          id: true,
          title: true,
          isCompleted: true,
        },
      },
    },
  });
}
