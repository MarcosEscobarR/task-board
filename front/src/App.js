import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import EmptyBoard from "./components/EmptyBoard";
import boardsSlice from "./redux/boardsSlice";
import { useGetBoardsQuery } from "./redux/boardApi";
import { useInitBoardData, useSetColumnData } from "./hooks/useInitData";

function App() {
  const dispatch = useDispatch();

  const [boards, isLoading] = useInitBoardData(dispatch);
  const boardActive = boards.filter((board) => board.isActive)[0];
  useSetColumnData(dispatch, boardActive?.id);
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  useEffect(() => {
    if (boards.length > 0) {
      const activeBoard = boards.find((board) => board.isActive);
      if (!activeBoard && boards.length > 0)
        dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
    }
  }, [boards]);

  return (
    <div className=" overflow-hidden  overflow-x-scroll">
      {boards.length ? (
        <>
          <Header
            setIsBoardModalOpen={setIsBoardModalOpen}
            isBoardModalOpen={isBoardModalOpen}
          />
          <Home
            setIsBoardModalOpen={setIsBoardModalOpen}
            isBoardModalOpen={isBoardModalOpen}
          />
        </>
      ) : null}

      {isLoading ? <EmptyBoard type="add" /> : null}
    </div>
  );
}

export default App;
