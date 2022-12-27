import styles from './Form.module.css'
import { TextField, Button, Input } from '@mui/material'

export function Form({ onAddNewPost }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        onAddNewPost(event.target.newMessage.value)
        event.target.newMessage.value = ''
    }

    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <Button type="submit" variant='contained'>Enter</Button>
            {/* <input name="newMessage" type="text" className={styles.newMessage} placeholder="new message"></input> */}
            <Input
                name="newMessage"
                placeholder="put your idea here..."
                fullWidth
                autoFocus
                className={styles.newMessageBox}
            />
        </form>
    )
}