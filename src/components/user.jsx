import React, {useState} from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (props) => {
    


    const renderTypes = () => {
        const  types = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка']
    
        return types.map(type => (
                <th key={type} scope="col">{type}</th>
        ))
    }
    
    const renderUserList = () => {
        return props.map(person => (
            <tr key={person._id}>
                <td>
                    {person.name}
                </td>
                <td>
                    {<Qualitie 
                        user={person}
                    />}
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
}

export default User