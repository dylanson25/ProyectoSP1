import { createStore, applyMiddleware, combineReducers } from "redux";
import  thunk  from "redux-thunk";
import userData from './reducer'


const rootReducer= combineReducers({userData})
export const Store = createStore(rootReducer, applyMiddleware(thunk));