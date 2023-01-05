import { ADD_CHAT } from "./actions";

const initialState = {
    chatList: []
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    action.name
                ]
            }
        default:
            return state
    }
}

//export default chatsReducer
