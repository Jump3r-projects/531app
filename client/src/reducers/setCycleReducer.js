import { CYCLE_A, CYCLE_B, CYCLE_C, DELOAD, WARM_UP } from "../actions/types";

const initialState = {
  isCycleA: true,
  isCycleB: false,
  isCycleC: false,
  isDeload: false,
  warmUpToggle: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CYCLE_A:
      return {
        ...state,
        isCycleA: true,
        isCycleB: false,
        isCycleC: false,
        isDeload: false
      };
    case CYCLE_B:
      return {
        ...state,
        isCycleA: false,
        isCycleB: true,
        isCycleC: false,
        isDeload: false
      };
    case CYCLE_C:
      return {
        ...state,
        isCycleA: false,
        isCycleB: false,
        isCycleC: true,
        isDeload: false
      };
    case DELOAD:
      return {
        ...state,
        isCycleA: false,
        isCycleB: false,
        isCycleC: false,
        isDeload: true,
        warmUpToggle: false
      };
    case WARM_UP:
      return {
        ...state,
        warmUpToggle: !state.warmUpToggle
      };
    default:
      return state;
  }
};
