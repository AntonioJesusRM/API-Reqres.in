import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './Person'

const UserList = ({LogOut}) => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios.get('https://reqres.in/api/users')
			.then((response) => {
				setUsers(response.data.data)
			})
			.catch((error) => {
			console.error('Error al cargar los usuarios:', error)
			})
	}, [])

	return (
	<div>
		<h2>Listado de Usuarios</h2>
		<div className='Flex'>
			{users.map(user => <Person key={user.id} user={user}/>)}
		</div>
		<button onClick={LogOut}>Cerrar Sesion</button>
	</div>
	)
}

export default UserList;