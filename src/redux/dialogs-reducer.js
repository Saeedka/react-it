const ADD_MESSAGE = 'ADD-MESSAGE';


let initState = {
    dialogs: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Grisha"},
        {id: 5, name: "Elena"},
        {id: 6, name: "Andrey"}
    ],
        messages: [
        {id: 1, message: "Hey, how are you?"},
        {id: 2, message: "Whats your name"},
        {id: 3, message: "Whassup"},
        {id: 4, message: "Yo"},
    ],
        newMessageText: "",
}


const dialogsReducer = (state=initState, action)=>{
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
        default:
            return state;
    }
}

export let addMessage = (message) => ({type: ADD_MESSAGE, message: message});

export default dialogsReducer;