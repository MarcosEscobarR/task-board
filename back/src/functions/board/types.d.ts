export interface createBoardServiceParams {
  name: string;
  userId: number;
  columns: {
    name: string;
  }[];
}
