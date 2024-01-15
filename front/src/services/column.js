import axios from "axios";
import { baseURL } from "./board";
export const getColumnsService = async (boardId) => {
  console.log({ boardId });
  try {
    const { data } = await axios.get(`${baseURL}/board/${boardId}/column`);
    return data.columns;
  } catch (error) {
    console.log(error);
  }
};
