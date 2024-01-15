import { handlerPath } from "@libs/handler-resolver";

export const getTasks = {
  handler: `${handlerPath(__dirname)}/handler.getTasksHandler`,
  events: [
    {
      http: {
        method: "get",
        path: "column/{columnId}/task",
        cors: true,
      },
    },
  ],
};
