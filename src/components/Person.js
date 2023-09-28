import React from "react"

const Person = ({user}) =>
{
	return(
		<div className="Person-flex">
			<p><strong>{user.first_name} {user.last_name}</strong></p>
			<p>{user.email}</p>
			<img src={user.avatar} alt="Imagen de usuario"/>
		</div>
	)
}

export default Person