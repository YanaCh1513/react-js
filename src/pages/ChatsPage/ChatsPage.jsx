import styles from "./ChatsPage.module.css";

import { useState, useEffect, useMemo } from "react";

import { Form } from "../../components/form/Form"
import { MessageBox } from "../../components/messageBox/MessageBox";
import { ChatList } from "../../components/chatList/ChatList";

import { ButtonRender } from "../../ui/buttonRender/ButtonRender";
import { useParams, BrowserRouter } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux/es/exports';
import messagesActions from '../../store/messages/actions'
import { getUserName } from '../../store/profile/selectors';
import { getMessages } from "../../store/messages/selectors";

import { shallowEqual } from "react-redux";


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
    const getSelectedChatMessages = useMemo(() => getMessages(currentChatId), [currentChatId])
    const messages = useSelector(
        getSelectedChatMessages,
        (prev, next) => prev.length === next.length
    )

    const dispatch = useDispatch()

    const addMessage = (author, message) => {
        dispatch(messagesActions.addMessage(currentChatId, { author, text: message }))
    }

    const handleNewPost = (newMessage) => {
        addMessage(currentAuthor, newMessage)
    };

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
            <div className={styles.chat}>
                <div className={styles.chatList}>
                    <ChatList />
                </div>
                <div className={styles.chatPanel}>
                    <MessageBox currentAuthor={currentAuthor} messageList={messages}></MessageBox>
                    <Form onAddNewPost={handleNewPost}></Form>
                </div>
            </div>
        </>
    );
}

