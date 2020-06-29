import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducer/"
import thunk from 'redux-thunk';



var store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);
store.subscribe(() => {
    //var str = store.getState();

})


export default store;