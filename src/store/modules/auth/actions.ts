import { AuthActionTypes, AuthData, Types } from "./types";

function setData(data: AuthData): AuthActionTypes {
  return {
    type: Types.SET_DATA,
    payload: data,
  };
}

function getData(): AuthActionTypes {
  return {
    type: Types.GET_DATA,
  };
}

export const ActionsAuth = {
  setData: setData,
  getData: getData,
};
