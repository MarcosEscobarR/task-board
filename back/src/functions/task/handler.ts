import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { getTasks } from "./services";

export const getTasksHandler = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const tasks = await getTasks(Number(event.pathParameters.columnId));
    return formatJSONResponse({ tasks });
  }
);
