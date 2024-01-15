export const boardReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_BOARD":
      return action.payload;
    default:
      return state;
  }
};
