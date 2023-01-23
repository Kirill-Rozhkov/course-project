import React, {useState} from 'react'
import User from './user'

const Users = ({ users, ...rest }) => {
    return (
    <>
        {users.map(user => {
            // {console.log(user)}
            <User
                user={user}
                // onDelete={handleDelete}
            />
        })}
    </>
    )
} 

export default Users