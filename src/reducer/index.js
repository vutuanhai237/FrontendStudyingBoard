import { combineReducers } from "redux";
import homeReducer from "./homeReducer"
import docReducer from "./docReducer"
import postReducer from "./postReducer"
import loginRegisterReducer from "./loginRegisterReducer"
var rootReducer = combineReducers({
    home: homeReducer,
    loginRegister: loginRegisterReducer,
    post: postReducer,
    doc: docReducer,
});


export default rootReducer;