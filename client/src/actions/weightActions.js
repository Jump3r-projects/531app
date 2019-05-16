import {
  SET_WEIGHT,
  RESET_WEIGHT,
  RESET_BARWEIGHT,
  CONVERT_TO_KG,
  CONVERT_TO_LB
} from "./types";

export const setWeight = ({ weight, barWeight }) => {
  return {
    type: SET_WEIGHT,
    payload: { weight, barWeight }
  };
};

export const resetWeight = () => {
  return {
    type: RESET_WEIGHT
  };
};

export const resetBarWeight = () => {
  return {
    type: RESET_BARWEIGHT
  };
};

export const convertToKg = ({ weight, barWeight }) => {
  return {
    type: CONVERT_TO_KG,
    payload: { weight, barWeight }
  };
};

export const convertToLb = ({ weight, barWeight }) => {
  return {
    type: CONVERT_TO_LB,
    payload: { weight, barWeight }
  };
};
