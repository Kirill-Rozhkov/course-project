import React, {useState} from 'react'
import User from './user'

const Users = ({ users, ...rest }) => {
    // console.log(rest)
    return (
    <>
        {users.map(user => {
            // {console.log(user)}
            return (
                <User
                    user={user}
                    onDelete={rest}
                />
            )
        })}
    </>
    )
} 

export default Users