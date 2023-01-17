import {
    Link, NavLink, Outlet
} from "react-router-dom";

import { useState } from 'react'
import { Button, Input } from '@mui/material'
import { signUp } from '../../services/firebase'

import { useNavigate } from 'react-router-dom'

import appStyles from "./../../App.module.css"

export const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            const userCredential = await signUp(email, password)
            navigate('/login')
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use')
                navigate('/')
            setError(error.message)
        }
    }


    return (
        <div className={appStyles.lazureContainer}>

            <form onSubmit={handleSubmit}>
                <h3>Create new account</h3>
                <div>
                    <Input
                        name="email"
                        placeholder="Email"
                        fullWidth
                        autoFocus
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <Input
                        name="password"
                        placeholder="Password"
                        fullWidth
                        type='password'
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    {/* <button type="submit">Login</button> */}

                    <Button style={{ 'margin': '10px 5px' }} type="submit" variant='contained'>Create User</Button>
                </div>
                <p>
                    Already have an account?
                    <Link to="/login" >Login</Link>
                    {/* <Link to="/login">Login</Link> */}
                </p>
            </form >
        </div >
    )
}

