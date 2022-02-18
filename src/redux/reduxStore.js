import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import newsReducer from "./newsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;