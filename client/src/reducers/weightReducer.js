import {
  SET_WEIGHT,
  RESET_WEIGHT,
  RESET_BARWEIGHT,
  CONVERT_WEIGHT_TO_KG,
  CONVERT_WEIGHT_TO_LB,
  CONVERT_BAR_TO_KG,
  CONVERT_BAR_TO_LB
} from "../actions/types";

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
        weight: action.payload.weight,
        barWeight: action.payload.barWeight
      };
    case RESET_WEIGHT:
      return {
        ...state,
        weight: 0
      };
    case RESET_BARWEIGHT:
      return {
        ...state,
        barWeight: 0
      };
    case CONVERT_WEIGHT_TO_KG:
      return {
        ...state,
        weight: action.payload.converted,
        isKilos: true
      };
    case CONVERT_WEIGHT_TO_LB:
      return {
        ...state,
        weight: action.payload.converted,
        isKilos: false
      };
    case CONVERT_BAR_TO_KG:
      return {
        ...state,
        barWeight: action.payload.converted,
        isBarKilos: true
      };
    case CONVERT_BAR_TO_LB:
      return {
        ...state,
        barWeight: action.payload.converted,
        isBarKilos: false
      };
    default:
      return state;
  }
};
