import { Button, Checkbox } from '@mui/material'
import { ProfileContext } from '../../contexts/ProfileContext';
import { useCallback, Component, createContext, useContext, useState } from 'react';
//import WithContext from './TestUseContext'
import { ProfileContextComponent } from './TestUseContext';
import { WithClasses } from '../../HOC/WithClasses/WithClasses';
import styles from './ProfilePage.module.css'
import { profileStore } from '../../store';
import { HourglassEmptySharp } from '@mui/icons-material';

const TestTextComponent = (props) => {
    return (
        <span>
            {props.children}
        </span>
    )
}

const TestWithClasses = WithClasses(TestTextComponent)
const toggleShowNameAction = { type: 'profile/switch_name' }

console.log(styles)
console.log(profileStore.getState())

export function ProfilePage() {
    const [cbValue, setcbValue] = useState(true);
    const [dummyValue, setDummyValue] = useState('dummy');
    const dispatch = profileStore.dispatch

    // пробовала, без useCallback работает! ))
    const setShowName = (e) => {
        const isChecked = e.target.checked
        dispatch(toggleShowNameAction)
        setDummyValue(isChecked.toString())
    }

    // через useCallback, пока не поняла, в чем преимущетсво, вроде должен сохранжять результат между вызховами, 
    // но я пока не поняла, что это значит
    const setShowNameCallback = useCallback((e) => {
        const isChecked = e.target.checked
        dispatch(toggleShowNameAction)
        setDummyValue(isChecked.toString())
    }, [dispatch])

    return (
        <>
            <ProfileContext.Provider value={{ cccValue: cbValue }}>
                <h1>
                    Profile Page
                </h1>
                <Checkbox checked={cbValue} onChange={(event) => { setcbValue(event.target.checked); console.log(cbValue) }} />
                {/* <ProfileComponentWithContext /> */}
                {/* <WithContext></WithContext> */}
                <ProfileContextComponent></ProfileContextComponent>
                <TestTextComponent>Simple Component without HOC </TestTextComponent>
                <TestWithClasses classes={styles.bordered}>HOC Bordered component</TestWithClasses>
            </ProfileContext.Provider>

            <div>
                <h2>Check Clean Redux </h2>
                <Button variant='contained' onClick={() => { console.log(profileStore.getState()) }}>Log redux in console: </Button>
                {/* <Checkbox defaultChecked={profileStore.getState().showName} onChange={setShowName} /> */}
                <Checkbox defaultChecked={profileStore.getState().showName} onChange={setShowNameCallback} />
                <Checkbox checked={profileStore.getState().showName} />
                <span>{dummyValue}</span>
            </div>
        </>
    )
}