import { Types, AuthActionTypes, AuthState, AuthData } from "./types";

const initialState: AuthState = {
  data: {
    token: null,
    signed: false,
  },
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case Types.SET_DATA:
      return {
        data: action.payload,
      };
    case Types.GET_DATA:
      return state;
    default:
      return state;
  }
}
