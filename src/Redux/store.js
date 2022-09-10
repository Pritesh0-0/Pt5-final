import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import {productsReducer} from "./Products/reducer";
import {loginReducer} from "./Login/reducer";
import thunk from "redux-thunk";
// import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  login: loginReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));