export const ADD_CHAT = "chats/add_chat"

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

export default {
    addChat
}