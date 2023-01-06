import { ADD_MESSAGE } from "./actions";

const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]} 
    messageList: {} // using object as dictionary
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currenetChatMessages = state.messageList[action.chatId] || []
            state = {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currenetChatMessages,
                        {
                            ...action.message,
                            id: `${action.chatId}_${currenetChatMessages.length}`
                        }
                    ]
                }
            }
        }
        default:
            return state
    }
}

// export default messagesReducer
