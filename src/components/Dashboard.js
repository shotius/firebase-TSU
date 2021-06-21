import React, { useState, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router'
import firebase  from '../firebase'

export default function Dashboard() {
    const [error, setError] = useState()
    const {logout, currentUser} = useAuth()
    const history = useHistory()
    const todoRef = useRef()

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

    const handleSubmit = (e) => {
        e.preventDefault()


        const database = firebase.database().ref('/TODOs')
        database.push(todoRef.current.value)
        // fi ebase.child('Todos').push(todoRef.current.value)
    }
    
    return (
        <div>
            <div className="error">{error}</div>
            <div style={{textAlign: "end"}}>{currentUser.email}</div>
            <h1>Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <h2>Create TODO</h2>
                <input type="text" ref={todoRef} />
                <button type="submit">Create</button>
            </form>
            <div style={{textAlign: 'center'}}>
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
