import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const { login } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch(err) {
            console.log(err);
            setError(err.message)
            setTimeout(() => setError(''), 3000)
        }
    }
    return (
        <div className="singUp-constainer">
            <form className="signUp-form" onSubmit={handleSubmit}>
                <h2>Login In</h2>
                <div className="error">{error}</div>
                <div className="input-div">
                    <label htmlFor="email">Email</label> 
                    <input type="email" ref={emailRef} />
                </div>
                <div className="input-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" ref={passwordRef}  /> 
                </div>
                <button type="submit" className="btn-full">Login</button>
            </form>
                <div style={{textAlign: "center"}}>
                    Want to create an account? <Link to="/signup">Sign Up</Link>
                    <br/><br/>
                    <Link to="/reset-password">Reset Password</Link>
                </div>
        </div>
    )
}

export default SignUp