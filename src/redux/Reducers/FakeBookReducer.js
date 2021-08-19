import { ADD_COMMENT } from "../types/FakeBookType";

const initialState = {
  arrComment: [
    // { name: "Sĩ", content: "Ahihi", image: "https://picsum.photos/id/237/200/300" },
    // { name: "Tuân", content: "hello", image: "https://picsum.photos/id/237/200/300" },
  ],
};

export const FakeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      state.arrComment = [...state.arrComment, action.userComment];
      return { ...state };
    }

    default:
      return { ...state };
  }
};
