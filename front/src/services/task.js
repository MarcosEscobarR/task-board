import axios from "axios";
import { baseURL } from "./board";

export const getTasksService = async (boardId) => {
  try {
    const { data } = axios.get(baseURL + "/column/" + "/task");
    return data.tasks;
  } catch (error) {
    console.log(error);
  }
};
