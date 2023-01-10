import React, {useState} from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {

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

    const createUserList = (user) => {
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
            <tr key={person}>
                <td key={person}>{person.name}</td>
                <td key={person}>{person.qualities}</td>
                <td key={person}>{person.profession}</td>
                <td key={person}></td>
                <td key={person}><button className='btn btn-danger'>Delete</button></td>
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
            {createUserList(users)}
        </tbody>
    </table>
        </>
    )
} 

export default Users