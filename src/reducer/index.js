import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer"
import DocReducer from "./DocReducer"
import PostReducer from "./PostReducer"
import UserReducer from "./UserReducer"
var RootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
    post: PostReducer,
    doc: DocReducer,
});


export default RootReducer;