import { handlerPath } from "@libs/handler-resolver";
import { createBoardSchema } from "./schema";

export const createBoard = {
  handler: `${handlerPath(__dirname)}/handler.createBoardHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "board",
        request: {
          schemas: {
            "application/json": createBoardSchema,
          },
        },
      },
    },
  ],
};

export const getBoards = {
  handler: `${handlerPath(__dirname)}/handler.getBoardsHandler`,
  events: [
    {
      http: {
        method: "get",
        path: "board",
      },
    },
  ],
};
