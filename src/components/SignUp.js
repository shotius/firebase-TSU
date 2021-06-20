import React, {useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const { signup } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordConfirmRef.current.value !== passwordRef.current.value) {
            setError('password dosn\'t matgh')
            setTimeout(() => {setError(null)}, 2000)
            return 
        }

        try {
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch(err) {
            console.log(err);
            setError(err.message)
            setTimeout(() => setError(''), 3000)
        }
    }
    return (
        <div className="singUp-constainer">
            <form className="signUp-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="error">{error}</div>
                <div className="input-div">
                    <label htmlFor="email">Email</label> 
                    <input type="email" ref={emailRef} />
                </div>
                <div className="input-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" ref={passwordRef}  /> 
                </div>
                <div className="input-div">
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="password" ref={passwordConfirmRef}  /> 
                </div>
                <button type="submit">Sign Up</button>
            </form>
                <div>
                    Already have an account? <Link to='/login'>Log In</Link>
                </div>
        </div>
    )
}

export default SignUp