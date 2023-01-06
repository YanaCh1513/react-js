import styles from "./ChatsPage.module.css";

import { Form } from "../../components/form/Form"
import { MessageBox } from "../../components/messageBox/MessageBox";
import { ChatList } from "../../components/chatList/ChatList";

export function ChatsPageView({
    currentAuthor,
    messages,
    handleNewPost
}) {
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
    )
}