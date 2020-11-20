import { combineReducers } from "redux";
import HomeReducer from "reducers/HomeReducer"
import DocReducer from "reducers/docReducer"
import PostReducer from "reducers/postReducer"
import UserReducer from "reducers/userReducer"

import management_docReducer from "reducers/authorized/docReducer"
import management_userReducer from "reducers/authorized/userReducer"
import management_postReducer from "reducers/authorized/postReducer"


var RootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
    post: PostReducer,
    doc: DocReducer,
    management_doc: management_docReducer, 
    management_user: management_userReducer,
    management_post: management_postReducer

});


export default RootReducer;