import {
    Link, NavLink, Outlet
} from "react-router-dom";

import { useState } from "react";
import { Button, Input } from '@mui/material'
import { signIn } from "../../services/firebase";
import { useNavigate } from "react-router-dom"
import appStyles from "./../../App.module.css"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const userCredential = await signIn(email, password)
            console.log(userCredential)
            console.log("loing - sucessfull")
            navigate('/chats')
        } catch (error) {
            console.log(error)
            console.warn(error)
            setError(error.message);
            console.log("loing - failed")
        }
    };

    return (
        <div className={appStyles.lazureContainer}>
            <form onSubmit={handleSubmit}>
                <h3>Login to Chats</h3>
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

                    <Button style={{ 'margin': '10px 5px' }} type="submit" variant='contained'>Login</Button>
                </div>
                <p>
                    Create account <Link to="/signup">Sign up</Link>
                </p>
            </form >
        </div>
    );
};

