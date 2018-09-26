import { combineReducers } from "redux";
import parkReducer from './park_reducer'

const rootReducer = combineReducers({parkReducer})

export default rootReducer