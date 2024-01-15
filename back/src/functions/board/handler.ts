import { middyfy } from "@libs/lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createBoard, getBoards } from "./services";
import { formatJSONResponse } from "@libs/api-gateway";

export const createBoardHandler = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const board = await createBoard(event.body as any);
      return formatJSONResponse({ board });
    } catch (error) {
      return formatJSONResponse({ error }, 500);
    }
  }
);

export const getBoardsHandler = middyfy(
  async (_: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const boards = await getBoards();
    return formatJSONResponse({ boards });
  }
);
