import { createSlice } from "@reduxjs/toolkit";
import { useGetColumnsQuery } from "./boardApi";

const columnSlice = createSlice({
  name: "columns",
  initialState: [],
  reducers: {
    setColumns: (state, action) => {
      console.log({ action, state });
      return action.payload;
    },
  },
});

export default columnSlice;
