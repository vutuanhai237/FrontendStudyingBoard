import { combineReducers } from "redux";
import home_reducer from "./home_reducer"
var root_reducer = combineReducers({
    home: home_reducer,
});


export default root_reducer;