import {
  SET_WEIGHT,
  RESET_WEIGHT,
  RESET_BARWEIGHT,
  CONVERT_WEIGHT_TO_KG,
  CONVERT_WEIGHT_TO_LB,
  CONVERT_BAR_TO_KG,
  CONVERT_BAR_TO_LB
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

export const convertWeightToKg = ({ converted }) => {
  return {
    type: CONVERT_WEIGHT_TO_KG,
    payload: { converted }
  };
};

export const convertWeightToLb = ({ converted }) => {
  return {
    type: CONVERT_WEIGHT_TO_LB,
    payload: { converted }
  };
};

export const convertBarToKg = ({ converted }) => {
  return {
    type: CONVERT_BAR_TO_KG,
    payload: { converted }
  };
};

export const convertBarToLb = ({ converted }) => {
  return {
    type: CONVERT_BAR_TO_LB,
    payload: { converted }
  };
};
