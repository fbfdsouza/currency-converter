import { reducer as formReducer } from "redux-form";
import { isNil, reject } from "ramda";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import currencyConverterReducer from "./modules/currencyConverter/currencyConverterReducer";
import { getHistory } from "../utils";

export const rootReducer = combineReducers({
  currencyConverter: currencyConverterReducer,
  form: formReducer,
  router: connectRouter(getHistory()),
});

window.__REDUX_DEVTOOLS_EXTENSION__ =
  window.__REDUX_DEVTOOLS_EXTENSION__ ||
  function (f) {
    return f;
  };

const middlewares = reject(isNil)([
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(getHistory())),
  window.__REDUX_DEVTOOLS_EXTENSION__(),
]);

export const createStoreWithMiddleWare = compose(...middlewares)(createStore);
export default createStoreWithMiddleWare(rootReducer);
