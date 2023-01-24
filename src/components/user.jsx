import React, {useState} from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (props) => {
        return (
            <tr key={props.user._id}>
                <td>
                    {props.user.name}
                </td>
                <td>
                    <Qualitie 
                       person={props.user}
                       _id={props.user._id} 
                       color={props.user.qualities}
                    />
                </td>
                <td>
                    {props.user.profession.name}
                </td>
                <td>
                    {props.user.completedMeetings}
                </td>
                <td>
                    {props.user.rate}
                </td>
                <td>
                    
                </td>
                <td>
                    <button
                    className='btn btn-danger' 
                    onClick={() => props.onDelete(props.user)}
                >
                    Delete
                </button></td>
            </tr>
        )
} 

export default User