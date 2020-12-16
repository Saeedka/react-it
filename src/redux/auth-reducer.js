import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_CAPTCHA = 'SET_CAPTCHA';
const SET_USER_DATA = 'SET_USER_DATA';

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captchaURL: action.captchaURL
            }

        default:
            return state;
    }
}


export let setUser = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    id: id,
    login: login,
    email: email,
    isAuth: isAuth
});

export let setCaptcha = (url) => ({
    type: SET_CAPTCHA,
    captchaURL: url,
});
//export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
//export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUserData = () => {
    return (dispatch) => {
        return authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUser(response.data.data.id, response.data.data.login, response.data.data.email, true));
            }
        });
    }
}

export const login = (email, password, rememberMe,captcha) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe,captcha).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData());
            } else if (response.data.resultCode == 10) {
                dispatch(getCaptcha());
            } else {
                let errorMessage = response.data.messages[0];
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUser(null, null, null, false));
            }
        });
    }
}

export const getCaptcha = () => {
    return (dispatch) => {
        authAPI.getCaptcha().then(response => {
            dispatch(setCaptcha(response.data.url))
        })
    }
}

export default authReducer;