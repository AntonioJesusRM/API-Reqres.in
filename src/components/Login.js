import React, { useState } from 'react'
import axios from 'axios'

const Login = ({ onLoginSuccess }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	};

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
				setError('Nombre de usuario o contraseña incorrectos')
			})
	}

	return (
	<div id='login' className='Form-login'>
		<h2>Iniciar Sesión</h2>
		<form onSubmit={handleSubmit}>
		<div>
			<label>Email:</label>
			<input
			type="text"
			value={email}
			onChange={handleEmailChange}
			/>
		</div>
		<div>
			<label>Contraseña:</label>
			<input
			type="password"
			value={password}
			onChange={handlePasswordChange}
			/>
		</div>
		<button type="submit">Iniciar Sesión</button>
		{error && <p className="Error-msg">{error}</p>}
		</form>
	</div>
	);
};

export default Login;