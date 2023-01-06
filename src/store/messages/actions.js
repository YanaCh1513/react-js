export const ADD_MESSAGE = "messages/add_message"

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message // { author, text }
})

export default {
    addMessage
}