import { addMessage, ADD_MESSAGE } from "../messages/actions";

const botName = 'Bot'
const chatId = 1

export const addBotMessageMiddleware = store => next => action => {
    console.log('INSIDE MIDDLEWARE!')

    if (action.type === ADD_MESSAGE && action.message.author !== botName) {
        const botMessage = "Hi, I'm Bot. This is my message from middleware!"
        console.log('BOT IS START THINKING ON YOUR MESSAGE')
        setTimeout(() => {
            console.log('BOT HAS PUT MESSAGE')
            store.dispatch(addMessage(chatId, { author: botName, text: botMessage }))
        }, 2000)
    }

    return next(action)
}
