import { Message } from '../message/Message'
import styles from './MessageBox.module.css'

import { useRef, useEffect } from "react";

import PropTypes from 'prop-types'

export function MessageBox({ currentAuthor, messageList }) {
    const divRef = useRef(null);

    useEffect(() => {
        console.log(divRef.scrollTop)
        //divRef.current.scrollIntoView({ behavior: 'smooth' }); // пыталась скролл выставить в конец, есил будет переполнение сообщений в контейнере
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

MessageBox.propTypes = {
    currentAuthor: PropTypes.string,
    messageList: PropTypes.array // скорее всего тут нужно сделать .arrayOf<T>(...)
}