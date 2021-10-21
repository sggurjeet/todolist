import { ADD_TODO, REMOVE_TODO } from "./type";
export const addTodoAction = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const removeTodoAction = (data) => {
  return {
    type: REMOVE_TODO,
    payload: data,
  };
};

// export const updateTodoAction = (data) => {
//   return {
//     type: UPDATE_TODO,
//     payload: data,
//   };
// };

// export const changeTodoAction = (data) => {
//   return {
//     type: CHANGE_TODO,
//     payload: data,
//   };
// };
