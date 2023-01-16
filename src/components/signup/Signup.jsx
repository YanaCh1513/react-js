import { useState } from 'react'
import { Input, Link } from '@mui/material'
import { signUp } from '../../services/firebase'

import { useNavigate } from 'react-router-dom'

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
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form to login to your accoute</p>
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
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Already have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    )
}

