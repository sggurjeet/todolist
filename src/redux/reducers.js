import { ADD_TODO, REMOVE_TODO } from "./type";
import { combineReducers } from "redux";
const initialState = { todos: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer: reducer,
});

export default rootReducer;
