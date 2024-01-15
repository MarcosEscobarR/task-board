export const createBoardSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    userId: { type: "number" },
  },
  required: ["name", "userId"],
};
