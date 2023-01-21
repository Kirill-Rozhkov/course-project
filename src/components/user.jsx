import React, {useState} from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (props) => {
    const {name} = props
    const {_id} = props
    const renderTypes = () => {
        const  types = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка']
    
        return types.map(type => (
                <th key={type} scope="col">{type}</th>
        ))
    }
    
        return props.map(person => (
            <tr key={person._id}>
                <td>
                    {person.name}
                </td>
                <td>
                    {<Qualitie 
                       name={name}
                       _id={_id} 
                       color={person.qualities.color}
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

export default User