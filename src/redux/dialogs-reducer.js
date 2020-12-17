import {dialogsAPI} from "../api/api";

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS_LIST = 'SET_DIALOGS_LIST';
const SET_MESSAGES_LIST = 'SET_MESSAGES_LIST'


let initState = {
    dialogs: [
        {id: 1, name: "Ivan"},

    ],
    messages: [
        {id: 1, message: "Hey, how are you?"},
        {id: 2, message: "Whats your name"},
        {id: 3, message: "Whassup"},
        {id: 4, message: "Yo"},
    ],
    newMessageText: "",
}


const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.message,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        case SET_DIALOGS_LIST:
            return {
                ...state,
                dialogs: action.dialogs
            };
        case SET_MESSAGES_LIST:
            return {
                ...state,
                messages: action.messages
            }

        default:
            return state;
    }
}

const setDialogsList = (dialogs) => ({type: SET_DIALOGS_LIST, dialogs})
const setMessagesList = (messages) => ({type: SET_MESSAGES_LIST, messages})
export let addMessage = (message) => ({type: ADD_MESSAGE, message: message});

export const getDialogsList = () => {
    return (dispatch) => {
        //  dispatch(toggleIsFetching(true));
        dialogsAPI.getDialogs().then(response => {
            // dispatch(toggleIsFetching(false));

            dispatch(setDialogsList(response.data));

        });
    }
}

export const getMessagesList = (userId) => {
    return (dispatch) => {
        //  dispatch(toggleIsFetching(true));
        dialogsAPI.getMessages(userId).then(response => {
            // dispatch(toggleIsFetching(false));
            dispatch(setMessagesList(response.data));
        });
    }
}

export const sendMessage = (userId,message) => {
    return (dispatch) => {
        //  dispatch(toggleIsFetching(true));
        dialogsAPI.sendMessage(userId,message).then(response => {
            debugger;
            dispatch(getMessagesList(userId));
        });
    }
}

export default dialogsReducer;