import { Types, UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  data: {
    name: "",
  },
};

export function authReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
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
