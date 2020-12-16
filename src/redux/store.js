import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reduce";

let reducers=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authData: authReducer,
    form: formReducer,
    app: appReducer
})

let store=createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;