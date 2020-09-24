import { persistStore } from "redux-persist";
import createStore from "./createStore";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import persistReducers from "./persistReducers";

import rootReducer from "./modules/rootReducer";

const middlewares: Array<string> = [];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor };
