import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router'

export default function Dashboard() {
    const [error, setError] = useState()
    const {logout, currentUser} = useAuth()
    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault()
        setError('')
        try {
            logout()
            history.push('/login')
        } catch(err) {
            setError(err.message)
        }
    }
    
    return (
        <div>
            <div className="error">{error}</div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
            {console.log(currentUser, 'user')}
        </div>
    )
}
