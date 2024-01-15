import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const columnApi = createApi({
  reducerPath: "column",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/dev",
  }),
  endpoints: (builder) => ({
    getColumns: builder.query({
      query: (boardId) => `/board/${boardId}/column`,
    }),
  }),
});

export const { useGetColumnsQuery } = columnApi;
