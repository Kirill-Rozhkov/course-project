import React, {useState} from "react"
import handleDelete from "./handleDelete"

const renderUserList = (user) => {
    const createUserQualities = (people) => {
        return people.map(person => (
            <li
            key={person}
            className={`badge bg-${users.forEach(el => {
                return el.filter(element => el.qualities) 
            })}`}
            >

            </li>
        ))
    }
    return users.map(person => (
        <tr key={person.id}>
            <td>{person.name}</td>
            <td>{createUserQualities(users)}</td>
            <td>{person.profession}</td>
            <td></td>
            <td><button className='btn btn-danger' onClick={handleDelete}>Delete</button></td>
        </tr>
    ))
}

export default renderUserList