import { createStore, compose, applyMiddleware } from "redux";

export default (reducers: any, middlewares: any) => {
  const enhacer =
    process.env.NODE_ENV === "development"
      ? compose(applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhacer);
};
