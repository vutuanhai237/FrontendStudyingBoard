import { combineReducers } from "redux";
import homeReducer from "./homeReducer"
import docReducer from "./docReducer"
import postReducer from "./postReducer"
import userReducer from "./userReducer"
var rootReducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    post: postReducer,
    doc: docReducer,
});


export default rootReducer;