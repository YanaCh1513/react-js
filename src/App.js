import styles from "./App.module.css";

import { useState, useEffect } from "react";

import { Form } from "./components/form/Form"
import { MessageBox } from "./components/messageBox/MessageBox";
import { ChatList } from "./components/chatList/ChatList";

import { ButtonRender } from "./ui/buttonRender/ButtonRender";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";


import { HomePage } from "./pages/HomePage";
import { ChatsPage } from "./pages/ChatsPage";
import { ProfilePage } from "./pages/ProfilePage";

export function App() {

  const [messageList, setMeesageList] = useState([
    // { id: 0, author: 'Bot', text: "Hey, wat's up?" },
    // { id: 1, author: 'You', text: 'So so...' },
    // { id: 2, author: 'Bot', text: 'Need more details to proceed...' }
  ])

  const botName = 'Bot'
  const botMessage = "Hello, I'm Bot! Let's talk!"
  const botThinkingTime = 1500 //ms

  const [currentAuthor] = useState('Me')

  const getNextId = () => {
    if (messageList.length === 0) return 0
    return messageList[messageList.length - 1]['id'] + 1
  }

  const handleNewPost = (newMessage) => {
    const newPost = { id: getNextId(), author: currentAuthor, text: newMessage }
    setMeesageList([...messageList, newPost])
  };

  const addBotMessage = (timerId) => {
    console.log('addBotMessage() interval: ' + timerId)
    //    clearInterval(timerId)

    if (messageList.length === 0) setMeesageList([...messageList, { id: 0, author: botName, text: botMessage }])
    else if (messageList[messageList.length - 1].author != botName) {
      setMeesageList([...messageList, { id: getNextId(), author: botName, text: botMessage }])
      // window.scrollTo(0, document.body.scrollHeight);
    }
  }

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === botName) return;
    const id = setInterval(() => {
      addBotMessage(id)
    }, botThinkingTime)

    console.log('create interval: ' + id)

    return () => {
      console.log('release interval: ' + id)
      clearInterval(id)
    }
  }, [messageList])

  const mainPageRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/chats",
      element: <ChatsPage />
    },
    {
      path: "/profile",
      element: <ProfilePage />
    }
  ])

  return (
    <>
      <nav>
        <div className={styles.nav}>
          <a className={styles.navItem} href={`chats`}>Chats</a>
          <a className={styles.navItem} href={`profile`}>Profile</a>
        </div>
      </nav>

      <RouterProvider router={mainPageRouter} />

      {/* <div className={styles.chat}>
          <div className={styles.chatList}>
            <ChatList />
          </div>
          <div className={styles.chatPanel}>
            <MessageBox currentAuthor={currentAuthor} messageList={messageList}></MessageBox>
            <Form onAddNewPost={handleNewPost}></Form>
          </div>
        </div> */}


    </>
  );
}

