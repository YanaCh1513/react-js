import { ADD_MESSAGE, CHANGE_MESSAGES } from "./actions";

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

        case CHANGE_MESSAGES: {
            console.log('____messagesReducer: case CHANGE_MESSAGES: {')
            console.log(action.payload)
            state = {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: action.messages
                }
            }
            return state
        }

        default:
            return state
    }
}

// export default messagesReducer
