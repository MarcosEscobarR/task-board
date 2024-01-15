import axios from "axios";
/**
 * TODO: llamar la variable de entorno desde el achivo .env
 */
export const baseURL = "http://localhost:3000/dev";
export const getBoardsService = async () => {
  try {
    const { data } = await axios.get(baseURL + "/board");
    return data.boards;
  } catch (error) {
    console.log(error);
  }
};
