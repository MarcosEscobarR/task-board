export interface createColumnServiceParams {
  name: string;
}

export type getColumnResponse = {
  name: string;
  id: number;
  Tasks: {
    subtasksCount: number;
    title: string;
  }[];
};
