import React, {useState} from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    
    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId._id))
    }

    const renderPhrase = () => {
        if (users.length > 0) {
            return <span className='badge text-bg-primary m-2 '><h2>{users.length} человек тусанёт с тобой сегодня</h2></span>
        } else {
            return <span className='badge text-bg-danger m-2'><h2>Никто с тобой не тусанёт</h2></span>
        }
    }

    const renderTypes = () => {
        const  types = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка']
    
        return types.map(type => (
                <th key={type} scope="col">{type}</th>
        ))
    }

    const renderUserList = () => {
        return users.map(person => (
            <tr key={person._id}>
                <td>
                    {person.name}
                </td>
                <td>
                    {renderQualities(person)}
                </td>
                <td>
                    {person.profession.name}
                </td>
                <td>
                    {person.completedMeetings}
                </td>
                <td>
                    {person.rate}
                </td>
                <td><button
                 className='btn btn-danger' 
                 onClick={() => handleDelete(person)}
                 >
                    Delete
                </button></td>
            </tr>
        ))
    } 

    const renderQualities = (person) => {
        return person.qualities.map(qualities => ((
                <li key={qualities._id} className={`badge bg-${qualities.color} m-2`}>{qualities.name}</li>
        )))
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
                {renderUserList()}
            </tbody>
        </table>
        </>
    )
} 

export default Users