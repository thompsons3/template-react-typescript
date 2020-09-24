import { UserActionTypes, UserData, Types } from "./types";

export function setData(data: UserData): UserActionTypes {
  return {
    type: Types.SET_DATA,
    payload: data,
  };
}

export function getData(): UserActionTypes {
  return {
    type: Types.GET_DATA,
  };
}

export const ActionsUser = {
  setData: setData,
  getData: getData,
};
