import React, { useState } from 'react'
import axios from 'axios'
import './style/Login.css'

const Login = ({ onLoginSuccess }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setError('')
		axios.post('https://reqres.in/api/login', { email, password })
			.then((response) => {
				const token = response.data.token
				onLoginSuccess(token)
			})
			.catch((error) => {
				setEmail('')
				setPassword('')
				setError('Credenciales incorrectas')
			})
	}

	return (
		<div className='Login'>
			<div id='login' className='Form-body'>
				<h2 className='Text'>Iniciar Sesión</h2>
				<form className='Login-form' onSubmit={handleSubmit}>
					<div>
						<input
						type="text"
						placeholder='Email'
						value={email}
						onChange={handleEmailChange}
						/>
					</div>
					<div>
						<input
						type="password"
						placeholder='Contraseña'
						value={password}
						onChange={handlePasswordChange}
						/>
					</div>
					<button type="submit">Iniciar Sesión</button>
					{error && <p className="Error-msg">{error}</p>}
				</form>
			</div>
		</div>
	)
}

export default Login