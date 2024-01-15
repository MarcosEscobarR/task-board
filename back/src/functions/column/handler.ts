import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createColumn, getColums } from "./services";

export const createColumnHandler = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const board = await createColumn(
      Number(event.pathParameters.boardId),
      event.body as any
    );
    return formatJSONResponse({ board });
  }
);

export const getColumnHandler = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const columns = await getColums(Number(event.pathParameters.boardId));
    return formatJSONResponse({ columns });
  }
);
