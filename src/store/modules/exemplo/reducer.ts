import { Types, ExemploActionTypes, ExemploState } from "./types";

const initialState: ExemploState = {
  data: [],
};

export function exemploReducer(
  state = initialState,
  action: ExemploActionTypes
): ExemploState {
  switch (action.type) {
    case Types.SET_DATA:
      return {
        data: [...state.data, action.payload],
      };
    case Types.GET_DATA:
      return state;
    default:
      return state;
  }
}
