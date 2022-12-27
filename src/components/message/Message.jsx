import styles from './Message.module.css'

export function Message({ author, text, isCurrentAuthor }) {
    return (
        <div className={styles.post + ' ' + (isCurrentAuthor ? styles.post__right : styles.post__letf)}>
            <div className={styles.author}>{author}</div>
            <div className={styles.message}>{text}</div>
        </div>
    );
}