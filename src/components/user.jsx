import React, {useState} from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (props) => {
    console.log(props)
    const {name} = props.name
    const {_id} = props._id
    
        return (
            <tr key={_id}>
                <td>
                    {name}
                </td>
                <td>
                    {<Qualitie 
                       name={name}
                       _id={_id} 
                       color={props.qualities.color}
                    />}
                </td>
                <td>
                    {props.profession.name}
                </td>
                <td>
                    {props.completedMeetings}
                </td>
                <td>
                    {props.rate}
                </td>
                <td><button
                    className='btn btn-danger' 
                    // onClick={() => props.onDelete(props)}
                >
                    Delete
                </button></td>
            </tr>
        )
} 

export default User