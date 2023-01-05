export function getChatById(chatId) {
    return (state) => state.chats.chatList[chatId]
}

