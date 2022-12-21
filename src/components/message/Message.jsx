import styles from './Message.module.css'

export function Message(args) {
    return (
        <>
            <h1 className={styles.message}>{args.text}</h1>
        </>
    );
}