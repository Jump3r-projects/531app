import { CYCLE_A, CYCLE_B, CYCLE_C, DELOAD, WARM_UP } from "./types";

export const setCycleA = () => {
  return {
    type: CYCLE_A
  };
};

export const setCycleB = () => {
  return {
    type: CYCLE_B
  };
};

export const setCycleC = () => {
  return {
    type: CYCLE_C
  };
};

export const setDeload = () => {
  return {
    type: DELOAD
  };
};

export const setWarmUp = () => {
  return {
    type: WARM_UP
  };
};
