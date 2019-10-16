import { createContext } from "react";

export const Reducer = createContext({});

export const init = { count: 0 };

export const reducers = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "MINUS":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
