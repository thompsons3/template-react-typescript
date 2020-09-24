import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: process.env.REACT_APP_HASH,
      storage: storageSession,
      whitelist: ["exemplo", "auth"],
    },
    reducers
  );

  return persistedReducer;
};
