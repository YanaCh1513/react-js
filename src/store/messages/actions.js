export const ADD_MESSAGE = "messages/add_message"

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message // { author, text }
})

export const addBotMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    //dispatch(addMessage(chatId, message));
    if (message.author === "Bot") {
        //const botMessage = { author: message.author, text: message.text };
        setTimeout(() => dispatch(addMessage(chatId, message)), 4000);
    }
}
 
export default {
    addMessage,
    addBotMessageWithThunk
}

