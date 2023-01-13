import { useState } from "react";
import { Link } from "@mui/material";
import { signIn } from "../../services/firebase";
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const onPassChange = (e) => {
        setPassword(e.target.value);
    };

    const onEmailChange = (e) => {
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
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={onEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={onPassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

