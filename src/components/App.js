import React, { useEffect, useState } from 'react'
import UserList from './UserList.js'
import Login from './Login.js'
import './style/App.css'

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const token = localStorage.getItem('token')
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			setIsAuthenticated(true)
		}
	}, [])
	
	const handleLoginSuccess = (token) => {
		localStorage.setItem('token', token)
		setIsLoggedIn(true)
	}

	const handleLogout = () => {
		localStorage.removeItem('token')
		setIsAuthenticated(false)
		window.location.reload()
	}

	return (
	<div className="App">
		<header>
			{(isLoggedIn || isAuthenticated) ? (
          		<UserList LogOut={handleLogout}/>
        	) : (
          		<Login onLoginSuccess={handleLoginSuccess} token={token}/>
			)}
		</header>
	</div>
	)
}

export default App