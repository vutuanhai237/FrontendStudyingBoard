import { combineReducers } from "redux";
import home_reducer from "./home_reducer"
import login_register_reducer from "./login_register_reducer"
var root_reducer = combineReducers({
    home: home_reducer,
    login_register: login_register_reducer,
});


export default root_reducer;