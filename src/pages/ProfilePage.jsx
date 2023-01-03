import { Checkbox } from '@mui/material'

import { ProfileState as ProfileContext } from '../state/ProfileState';

import { Component, createContext, useContext, useState } from 'react';

//import WithContext from './TestUseContext'

import { WithClasses } from '../HOC/WithClasses/WithClasses';
import styles from './ProfilePage.module.css'

const TestTextComponent = (props) => {
    return (
        <span>
            {props.children}
        </span>
    )
}

const TestWithClasses = WithClasses(TestTextComponent)

// const ProfileComponentWithContext = function (Component) {
//     const context = useContext(ProfileContext)
//     return <Component cccValue={context.cccValue} />
// }

// const withContext = function (Component) {
//     return (props) => {
//         const contextValue = useContext(ProfileContext);
//         return <Component {...props} cccValue={contextValue.cccValue} />
//     }
// }

// export default WithContext(Component)

// export function ProfileComponent(props) {
//     return (
//         <>
//             <Checkbox checked={props.cccValue} />
//         </>
//     )
// }
console.log(styles)
export function ProfilePage() {

    const [cbValue, setcbValue] = useState(true);

    return (
        <>
            <ProfileContext.Provider value={{ cccValue: cbValue }}>
                <h1>
                    Profile Page
                </h1>

                <Checkbox checked={cbValue} onChange={(event) => { setcbValue(event.target.checked); console.log(cbValue) }} />


                {/* <ProfileComponentWithContext /> */}
                {/* <WithContext></WithContext> */}

                <TestTextComponent>Hello, This is a test component !!!!!!</TestTextComponent>

                <TestWithClasses classes={styles.bordered}>TestTextComponent component</TestWithClasses>
            </ProfileContext.Provider>
        </>
    )
}