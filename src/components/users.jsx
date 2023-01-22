import React, {useState} from 'react'
import User from './user'

const Users = ({ users, ...rest }) => {
    return (
        <>
            <User 
                user={...users}
                color={rest.color}
            />
            <td>
                <button
                    onClick={rest.onDelete()}
                >
                    Delete
                </button>
            </td>
        </>
    )
} 

export default Users