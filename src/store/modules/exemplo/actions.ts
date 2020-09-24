import { ExemploActionTypes, ExemploData, Types } from "./types";

export function setData(data: ExemploData): ExemploActionTypes {
  return {
    type: Types.SET_DATA,
    payload: data,
  };
}

export function getData(): ExemploActionTypes {
  return {
    type: Types.GET_DATA,
  };
}

export const ActionsExemplo = {
  setData: setData,
  getData: getData,
};
