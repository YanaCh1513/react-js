import styles from './Form.module.css'
import Button from '@mui/material/Button'

export function Form({ onAddNewPost }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        onAddNewPost(event.target.newMessage.value)
        return false
    }

    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <Button type="submit" variant='contained'>Enter</Button>
            <input name="newMessage" type="text" className={styles.newMessage} placeholder="new message"></input>

        </form>
    )
}