import styles from './Form.module.css'
import { TextField, Button, Input } from '@mui/material'

export function Form({ onAddNewPost }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("---------handleSubmint-------------")
        // doesn't work 
        //https://stackoverflow.com/questions/61537296/unit-test-form-submission-with-data-using-react-testing-library/61537739#61537739
        // console.log(event.target.newMessage)
        // console.log(event.target.newMessage.value)
        const { newMessage } = event.target.elements // the same with event.target.elements['newMessage'] // by name

        // React test-framework issue: event.target.newMessage -> undefined in Jest tests!!!
        // use:  const { deviceName } = event.target.elements;  deviceName.value; instead
        //https://stackoverflow.com/questions/61537296/unit-test-form-submission-with-data-using-react-testing-library/61537739#61537739
        if (newMessage.value) {
            onAddNewPost(newMessage.value)
            newMessage.value = ''
        }
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