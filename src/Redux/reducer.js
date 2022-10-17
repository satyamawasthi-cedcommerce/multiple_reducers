import { ADD, CLR, DIV, MUL, SUB } from "./action";

const initialState = {
  sum: 0,
  sub: 0,
  mul: 0,
  div: 0,
};
export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        sum: +action.payload.num1 + +action.payload.num2,
      };
    case CLR:
      return {
        ...state,
        sum: 0,
      };

    default:
      return state;
  }
};
// for substraction
export const subReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case SUB:
      return {
        ...state,
        sub: action.payload.num2 - action.payload.num1,
      };
    case CLR:
      return {
        ...state,
        sub: 0,
      };

    default:
      return state;
  }
};
// for multipliaction
export const multiplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUL:
      return {
        ...state,
        mul: action.payload.num1 * action.payload.num2,
      };
    case CLR:
      return {
        ...state,
        mul: 0,
      };

    default:
      return state;
  }
};
// for division
export const divideReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIV:
      return {
        ...state,
        div: action.payload.num1 / action.payload.num2,
      };
    case CLR:
      return {
        ...state,
        div: 0,
      };

    default:
      return state;
  }
};
