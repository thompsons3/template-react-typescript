export interface UserData {
  name: string;
  created_at?: Date;
}

export interface UserState {
  data: UserData;
}

export enum Types {
  SET_DATA = "user/SET_DATA",
  GET_DATA = "user/GET_DATA",
}

interface SetDataAction {
  type: typeof Types.SET_DATA;
  payload: UserData;
}

interface GetDataAction {
  type: typeof Types.GET_DATA;
}

export type UserActionTypes = SetDataAction | GetDataAction;
