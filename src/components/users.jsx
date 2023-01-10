import React, {useState} from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    
    const handleDelete = (userId) => {
        setUsers(users.filter(user => user == userId))
    }

    const renderPhrase = (number) => {
        return <span className='badge text-bg-primary m-2'>{number} человек тусанёт с тобой сегодня</span>
    }

    const renderTypes = () => {
        const  types = ['Имя', 'качества', 'Профессия', 'Встретился, раз', 'Оценка']
    
        return types.map(type => (
                <th key={type} scope="col">{type}</th>
        ))
    }

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
            <tr key={person._id}>
                <td>{person.name}</td>
                <td>{createUserQualities(users)}</td>
                <td>{person.profession}</td>
                <td></td>
                <td><button
                 className='btn btn-danger' 
                 onClick={handleDelete}
                 >
                    Delete
                </button></td>
            </tr>
        ))
    }

    return (
        <>
        {renderPhrase(users.length)}

        <table class="table">
            <thead>
                <tr>
                    {renderTypes()}
                </tr>
            </thead>
            <tbody>
                {renderUserList(users)}
            </tbody>
        </table>
        </>
    )
} 

export default Users