import { combineReducers } from "redux";
import parkReducer from './park_reducer'
import userReducer from './user_reducer'

const rootReducer = combineReducers({parkReducer, userReducer})

export default rootReducer