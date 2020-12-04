import { combineReducers } from "redux";
import HomeReducer from "redux/reducers/HomeReducer"
import DocReducer from "redux/reducers/docReducer"
import PostReducer from "redux/reducers/postReducer"
import UserReducer from "redux/reducers/userReducer"
import PostCategoryReducer from "redux/reducers/postCategoryReducer"

var RootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
    post: PostReducer,
    doc: DocReducer,
    post_category: PostCategoryReducer,
});

export default RootReducer;