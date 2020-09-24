export interface ExemploData {
  campo_1: string;
  campo_2: number;
  campo_3: object;
  campo_4: boolean;
}

export interface ExemploState {
  data: ExemploData[];
}

export enum Types {
  SET_DATA = "exemplo/SET_DATA",
  GET_DATA = "exemplo/GET_DATA",
}

interface SetDataAction {
  type: typeof Types.SET_DATA;
  payload: ExemploData;
}

interface GetDataAction {
  type: typeof Types.GET_DATA;
}

export type ExemploActionTypes = SetDataAction | GetDataAction;
