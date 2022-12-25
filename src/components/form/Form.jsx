import styles from './Form.module.css'

export function Form({ onAddNewPost }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        onAddNewPost(event.target.newMessage.value)
        return false
    }

    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <button type="submit" className={styles.addBtn}>add</button>
            <input name="newMessage" type="text" className={styles.newMessage} placeholder="new message"></input>
        </form>
    )
}