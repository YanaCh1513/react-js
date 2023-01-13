import { ref, get, set, push, onValue } from "firebase/database"

import { useState, useEffect, useMemo, useCallback } from "react";

import { ButtonRender } from "../../ui/buttonRender/ButtonRender";
import { useParams, BrowserRouter } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux/es/exports';
import messagesActions from '../../store/messages/actions'
import { getUserName } from '../../store/profile/selectors';
import { getMessages } from "../../store/messages/selectors";

import { shallowEqual } from "react-redux";
import { addBotMessageWithThunk } from "../../store/messages/actions";
import { ChatsPageView } from "./ChatsPage.view";

import { db } from "../../services/firebase";

export function ChatsPage() {

    const botName = 'Bot'
    const botMessage = "Hello, I'm Bot! Let's talk!"
    const botThinkingTime = 1500 //ms
    const currentChatId = 1

    const currentAuthor = useSelector(getUserName)
    const chats = useSelector((state) => state.chats.chatList)
    const allChatsMessages = useSelector((state) => state.messages.messageList, shallowEqual)
    // (prev, next) => prev.length === next.length) здесь не сработало, чтобы добавить правльно нужно как то сразу селектор по текущему чату сделать.
    //const messages = allChatsMessages[currentChatId] || []
    const getSelectedChatMessages = useMemo(() => getMessages(currentChatId), [currentChatId]) // recalculate messages if currentChatId will change only

    // const messages = useSelector(
    //     getSelectedChatMessages,
    //     (prev, next) => prev.length === next.length // перерисовываем компонетны зависимые от Messages только если количество сообщений изменирлосью
    // )

    // manage messages from firebase
    const [messages, setMessages] = useState([])



    // const onAddMessage = useCallback(
    //     (userId, message) => {
    //         set(ref(db, `messages/${chatId}`), {
    //             userId: userId,
    //             id: message.id,
    //             text: message.text
    //         });
    //     }

    //     // (message) => {
    //     //     db.ref("messages")
    //     //         .child(currentChatId)
    //     //         .child(message.id)
    //     //         .set(message)
    //     ,
    //     [currentChatId]
    // )


    const dispatch = useDispatch()

    // add to component Stage
    const addMessage = (author, message) => {
        dispatch(messagesActions.addMessage(currentChatId, { author, text: message }))
    }

    // const onAddMessage = useCallback((message) => {
    //     dispatch(addBotMessageWithThunk(chatId, message))
    // }, [chatId, dispatch])

    // add to redux with middleware
    const addBotMessageToThunkMiddleware = (chatId, messageText) => {
        dispatch(addBotMessageWithThunk(chatId, { author: botName, text: messageText }))
    }



    const addBotMessage = (timerId) => {
        console.log('addBotMessage() interval: ' + timerId)
        clearInterval(timerId)

        if (messages.length === 0) {
            addMessage(botName, botMessage)
        }
        else if (messages[messages.length - 1].author != botName) {
            // если сюда не заходит перестает отрабатывать clearInterval(timerID) из useEffect() на уровень выше.
            addMessage(botName, botMessage)
            // window.scrollTo(0, document.body.scrollHeight);
        }
    }

    const addMessageToFirebase = (author, text) => {
        console.log('add_new_message:')
        console.log(author, text)
        try {
            push(ref(db, `messages/${currentChatId}`), {
                //set(ref(db, `chats/${currentChatId}/messages/${message}`), {
                author: author,
                text: text
            });
        }
        catch (e) {
            console.info(e)
        }
    }

    const onNewPost = (newMessage) => {
        // addMessage(currentAuthor, newMessage)
        // addBotMessageToThunkMiddleware(currentChatId, "This message from Thunk middlaware!!!")
        addMessageToFirebase(currentAuthor, newMessage)
    };

    useEffect(() => {
        const starCountRef = ref(db, `messages/${currentChatId}`);
        onValue(starCountRef, (snapshot) => {
            const newMessages = [];
            snapshot.forEach(entry => {
                newMessages.push({ id: entry.key, ...entry.val() })
            });
            setMessages(newMessages)
        });
    }, [])


    // BOT GET ANSWER ATER COMPONENT WILL BE MOUNT
    // useEffect(() => {
    //     if (messages.length > 0 && messages[messages.length - 1].author === botName)
    //         return;

    //     const id = setInterval(() => {
    //     о    addBotMessage(id)
    //     }, botThinkingTime)

    //     console.log('create interval: ' + id)

    //     return () => {
    //         console.log('release interval: ' + id)
    //         clearInterval(id)
    //     }
    // }, [messages])

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
