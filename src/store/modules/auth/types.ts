export interface AuthData {
  token: string | null;
  signed: boolean;
}

export interface AuthState {
  data: AuthData;
}

export enum Types {
  SET_DATA = "auth/SET_DATA",
  GET_DATA = "auth/GET_DATA",
}

interface SetDataAction {
  type: typeof Types.SET_DATA;
  payload: AuthData;
}

interface GetDataAction {
  type: typeof Types.GET_DATA;
}

export type AuthActionTypes = SetDataAction | GetDataAction;
