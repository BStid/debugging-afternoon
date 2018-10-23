import reducer from "./reducer";
import reduxPromiseMiddleware from "redux-promise-middleware";
import { applyMiddleware, createStore } from "redux";

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
