import styles from './ProfilePage.module.css'

import { Button, Checkbox, Input } from '@mui/material'
import { HourglassEmptySharp } from '@mui/icons-material';

import { ProfileContextComponent } from './TestUseContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import { WithClasses } from '../../HOC/WithClasses/WithClasses';

const TestTextComponent = (props) => {
    return (
        <span>
            {props.children}
        </span>
    )
}

const TestWithClasses = WithClasses(TestTextComponent)

export function ProfilePageView({
    nameValue,
    userName,
    showName,
    dummyValue,
    cbValue,
    handleNameChange,
    profileStore,
    setNameInStore,
    setShowNameCallback2,
    setcbValue,
    setShowNameCallback
}
) {
    return (
        <>
            <div className={styles.userform}>
                <h1>
                    Task 6. Profile. React-Redux.
                </h1>

                <div>
                    <Input
                        name="userName"
                        placeholder="user name"
                        fullWidth
                        autoFocus
                        value={nameValue}
                        onChange={handleNameChange}
                    />
                </div>

                <div className={styles.userNameBtn}>
                    <Button
                        variant='contained'
                        onClick={setNameInStore}
                    >
                        Enter
                    </Button>
                </div>

                <span className={styles.userName}>user name from redux: </span>
                <span className={styles.userName}>{userName}</span>
            </div>
            <br />
            <br />
            <br />
            <br />


            <ProfileContext.Provider value={{ cccValue: cbValue }}>
                <h1> Task 5. Profile Page. Context, Raw Redux </h1>
                <h2>Check Context</h2>
                <Checkbox checked={cbValue} onChange={(event) => { setcbValue(event.target.checked); console.log(cbValue) }} />
                {/* <ProfileComponentWithContext /> */}
                {/* <WithContext></WithContext> */}
                <ProfileContextComponent></ProfileContextComponent>

                <h2>Check HOC</h2>

                <TestTextComponent>Simple Component without HOC </TestTextComponent>
                <TestWithClasses classes={styles.bordered}>HOC Bordered component</TestWithClasses>
            </ProfileContext.Provider>

            <div>
                <h2>Check Clean Redux </h2>
                <Button variant='contained' onClick={() => { console.log(profileStore.getState()) }}>Log redux state: </Button>
                {/* <Checkbox defaultChecked={profileStore.getState().showName} onChange={setShowName} /> */}
                <Checkbox defaultChecked={profileStore.getState().showName} onChange={setShowNameCallback} />
                <Checkbox disabled checked={profileStore.getState().showName} />
                <span>{dummyValue}</span>
            </div>

            <div>
                <h2>Check Redux-React</h2>
                <Button variant='contained' onClick={() => { console.log(showName) }}>Log redux state:</Button>
                <Checkbox defaultChecked={showName} onChange={setShowNameCallback2} />
                <Checkbox disabled checked={showName} />
                <span>{dummyValue}</span>
            </div>
        </>
    )
}