import { handlerPath } from "@libs/handler-resolver";
import { createColumnSchema } from "./schema";

export const createColumn = {
  handler: `${handlerPath(__dirname)}/handler.createColumnHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "board/{boardId}/column",
        cors: true,
        schemas: {
          "application/json": createColumnSchema,
        },
      },
    },
  ],
};

export const getColumns = {
  handler: `${handlerPath(__dirname)}/handler.getColumnHandler`,
  events: [
    {
      http: {
        method: "get",
        path: "board/{boardId}/column",
      },
    },
  ],
};
