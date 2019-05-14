import { SET_WEIGHT, SET_BARWEIGHT } from "../actions/types";

const initialState = {
  weight: 0,
  barWeight: 0,
  isKilos: true,
  isBarKilos: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WEIGHT:
      return {
        ...state,
        weight: action.payload
      };
    case SET_BARWEIGHT:
      return {
        ...state,
        barWeight: action.payload
      };
    default:
      return state;
  }
};
