import { Message } from '../message/Message'
import styles from './MessageBox.module.css'

import { useRef, useEffect } from "react";


export function MessageBox({ currentAuthor, messageList }) {

    const divRef = useRef(null);

    useEffect(() => {
        console.log(divRef.scrollTop)
        //divRef.current.scrollIntoView({ behavior: 'smooth' });
        divRef.scrollTop = divRef.scrollHeight - divRef.clientHeight;
    }, []);

    return (
        <>
            <div className={styles.messageBox} ref={divRef}>
                {messageList.map((item) => <Message isCurrentAuthor={item.author === currentAuthor} key={item.id} author={item.author} text={item.text} />)}
            </div>
        </>
    )
}