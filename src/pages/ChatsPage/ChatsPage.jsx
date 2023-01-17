import { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux/es/exports';
import { initMssageTrackning, addMessageToFirebase } from '../../store/messages/actions'
import { getUserName } from '../../store/profile/selectors';

import { shallowEqual } from "react-redux";
import { ChatsPageView } from "./ChatsPage.view";

export function ChatsPage() {
    const botName = 'Bot'
    const botMessage = "Hello, I'm Bot! Let's talk!"
    const botThinkingTime = 1500 //ms
    const currentChatId = 1

    const currentAuthor = useSelector(getUserName)
    const chats = useSelector((state) => state.chats.chatList)
    const allChatsMessages = useSelector((state) => state.messages.messageList, shallowEqual)
    // (prev, next) => prev.length === next.length) здесь не сработало, чтобы добавить правльно нужно как то сразу селектор по текущему чату сделать.
    const messages = allChatsMessages[currentChatId] || []
    //const getSelectedChatMessages = useMemo(() => getMessages(currentChatId), [currentChatId]) // recalculate messages if currentChatId will change only

    const dispatch = useDispatch()

    const addBotMessage = (timerId) => {
        console.log('addBotMessage() interval: ' + timerId)
        clearInterval(timerId)

        if (messages.length === 0 || messages[messages.length - 1].author != botName) {
            dispatch(addMessageToFirebase(currentChatId, botName, botMessage))
        }
    }

    const onNewPost = (newMessage) => {
        console.log('_____Chatspage: const onNewPost = (newMessage')
        console.log(newMessage)
        dispatch(addMessageToFirebase(currentChatId, currentAuthor, newMessage))
    };

    useEffect(() => {
        console.log('________ChatsPage: useEffect(() => { ')
        dispatch(initMssageTrackning(currentChatId))
    }, [])


    // BOT GET ANSWER ATER COMPONENT WILL BE MOUNT
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === botName)
            return;

        const id = setInterval(() => {
            addBotMessage(id)
        }, botThinkingTime)

        console.log('create interval: ' + id)

        return () => {
            console.log('release interval: ' + id)
            clearInterval(id)
        }
    }, [messages])

    return (
        <>
            <ChatsPageView
                currentAuthor={currentAuthor}
                messages={messages}
                handleNewPost={onNewPost}
            />
        </>
    )
}
