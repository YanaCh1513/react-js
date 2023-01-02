import { Checkbox } from '@mui/material'
import { ProfileState } from '../state/ProfileState';
import { useContext, useState } from 'react';


export function ProfilePage() {

    //let contextValue = useContext(ProfileState)

    const [cbValue, setcbValue] = useState(true);

    const handleChange = (event) => {
        // console.log(event.target.checked)
        // console.log(cbxValue)
        //ProfileState.cbxValue = event.target.checked
        // contextValue = event.target.checked
        setcbValue(event.target.checked)
        console.log(useContext(ProfileState))
    }

    return (
        <>
            <ProfileState.Provider value={cbValue}>
                <h1>
                    Profile Page
                </h1>

                {/* <span>{contextValue + ""}</span> */}

                <Checkbox checked={cbValue} onChange={handleChange} />
            </ProfileState.Provider>
        </>
    )
}