import { Message } from "./components/message/Message";
import { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const [message] = useState('Это сообщение для компонента Message')

  return (
    <div className={styles.appContainer}>
      <Message text={message} />
    </div>
  );
}

