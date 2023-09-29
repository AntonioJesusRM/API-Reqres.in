import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './Person'
import './style/UserList.css'

const UserList = ({LogOut}) => {
	const [users, setUsers] = useState([])
	const [pagina, setPagina] = useState(1)
	const usersPorPag = 3
	
	useEffect(() => {
		axios.get('https://reqres.in/api/users')
			.then((response) => {
				setUsers(response.data.data)
			})
			.catch((error) => {
			console.error('Error al cargar los usuarios:', error)
			})
	}, [])

	const cambiarPagina = (direccion) => {
		if (direccion === 'anterior' && pagina > 1) {
		  setPagina(pagina - 1)
		} else if (direccion === 'siguiente' && pagina < Math.ceil(users.length / usersPorPag)) {
		  setPagina(pagina + 1)
		}
	}

	const usersPag1 = users.slice(0, usersPorPag);
	const usersPag2 = users.slice(usersPorPag, usersPorPag * 2)

	return (
		<div className='Container-User'>
			<h2>Listado de Usuarios</h2>
			<div className='Container-Person'>
				{pagina === 1
					?usersPag1.map(user=>(<Person key={user.id} user={user}/>))
					: usersPag2.map(user =>(<Person key={user.id} user={user}/>))}
			</div>
			<div className='Container-Button'>
				<button onClick={() => cambiarPagina('anterior')} disabled={pagina === 1}>Anterior</button>
				<button onClick={LogOut}>Cerrar Sesion</button>
				<button onClick={() => cambiarPagina('siguiente')} disabled={pagina === Math.ceil(users.length / usersPorPag)}>Siguiente</button>
			</div>
		</div>
	)
}

export default UserList