import { ref, get, set, push, onValue } from "firebase/database"

import { db } from "../../services/firebase"

export const ADD_MESSAGE = "messages/add_message"
export const CHANGE_MESSAGES = "messages/change_messages"

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

export const addMessageToFirebase = (chatId, author, text) => () => {
    console.log('_______actions: addMessageToFirebase = (chatId, author, text) => () => {')
    try {
        push(ref(db, `messages/${chatId}`), {
            //set(ref(db, `chats/${currentChatId}/messages/${message}`), {
            author: author,
            text: text
        });
    }
    catch (e) {
        console.info(e)
    }
}

export const initMssageTrackning = (chatId) => (dispatch) => {
    console.log('____actions.js:  initMssageTrackning = () => (dispatch)')
    const starCountRef = ref(db, `messages/${chatId}`);
    onValue(starCountRef, (snapshot) => {
        console.log('____actions.js:  onValue(starCountRef, (snapshot) => {')
        const newMessages = [];
        snapshot.forEach(entry => {
            newMessages.push({ id: entry.key, ...entry.val() })
        });
        console.log(newMessages)
        // setMessages(newMessages)
        dispatch({
            type: CHANGE_MESSAGES,
            chatId: chatId,
            messages: newMessages
        })
    });
}

export default {
    addMessage,
    addBotMessageWithThunk
}

