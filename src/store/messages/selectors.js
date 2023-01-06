export function getMessages(chatId) {
    return (state) => state.messages.messageList[chatId] || []
}