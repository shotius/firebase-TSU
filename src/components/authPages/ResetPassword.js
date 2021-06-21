import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function ResetPassword() {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const { resetPassword } = useAuth()
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await resetPassword(emailRef.current.value)
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
                <h2>Reset Password</h2>
                <div className="error">{error}</div>
                <div className="input-div">
                    <label htmlFor="email">Email</label> 
                    <input type="email" ref={emailRef} />
                </div>
                <button type="submit" className="btn-full">Reset</button>
            </form>
                <div style={{textAlign: "center"}}>
                    back to  <Link to="/login">login</Link>
                    <br/><br/>
                </div>
        </div>
    )
}