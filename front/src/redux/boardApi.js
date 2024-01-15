import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const boardSliceV2 = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/dev",
  }),
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: () => "/board",
    }),
  }),
});

export const { useGetBoardsQuery, useLazyGetBoardsQuery } = boardSliceV2;
