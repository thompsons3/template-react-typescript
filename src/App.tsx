import React from "react";

import { ToastContainer } from "react-toastify";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Routers from './routes';

import GlobalStyles from "./styles/global";

import { store, persistor } from "./store";

import "./config/ReactotronConfig";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
        <GlobalStyles />
        <ToastContainer autoClose={4000} />
      </PersistGate>
    </Provider>
  );
};

export default App;
