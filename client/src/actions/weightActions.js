import { SET_WEIGHT, SET_BARWEIGHT } from "./types";

export const setWeight = () => {
  return {
    type: SET_WEIGHT,
    payload: 10
  };
};

export const setBarWeight = () => {
  return {
    type: SET_BARWEIGHT,
    payload: 20
  };
};
