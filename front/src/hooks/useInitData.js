import { useEffect, useState } from "react";
import columnSlice from "../redux/columnSlice";
import { useGetBoardsQuery } from "../redux/boardApi";
import { useGetColumnsQuery } from "../redux/columnApi";
import boardsSlice from "../redux/boardsSlice";

export function useInitBoardData(dispatch) {
  const { data, isLoading, isSuccess } = useGetBoardsQuery();
  const [boards, setBoards] = useState([]);
  console.log({ data, isLoading, isSuccess });
  useEffect(() => {
    if (data) {
      setBoards(data.boards);

      dispatch(boardsSlice.actions.setBoards(data.boards));
    }
  }, [data]);
  return [boards, isLoading, isSuccess];
}

export function useSetColumnData(dispatch, boardId) {
  const { data, isLoading, isSuccess } = useGetColumnsQuery(boardId);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    if (data) {
      setColumns(data.columns);
      dispatch(columnSlice.actions.setColumns(data.columns));
    }
  }, [data]);
  return [columns, isLoading, isSuccess];
}
