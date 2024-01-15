import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";
import { boardSliceV2 } from "./boardApi";
import columnSlice from "./columnSlice";
import { columnApi } from "./columnApi";

export default configureStore({
  reducer: {
    boards: boardsSlice.reducer,
    columns: columnSlice.reducer,
    [boardSliceV2.reducerPath]: boardSliceV2.reducer,
    [columnApi.reducerPath]: columnApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardSliceV2.middleware),
});
