import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initState = {
    posts: [
        {id: 1, post: "Blabla", likesCount: 25},
        {id: 2, post: "Heyy", likesCount: 34},
        {id: 3, post: "Have are good day", likesCount: 54},
        {id: 4, post: "Yeaah boy", likesCount: 2},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        default:
            return state;
    }
}


export let addPost = (postText) => ({type: ADD_POST, postText});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setStatus = (status) => ({type: SET_STATUS, status})


export const getProfileInfo = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            debugger
            dispatch(setUserProfile(data.data));

        });
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));

        });
    }
}

export const setProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}


export default profileReducer;

