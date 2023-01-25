import React, {useState} from 'react'
import User from './user'

const Users = ({ users, onDelete, onHandleMark, status  }) => {
    // console.log(rest)
    return (
    <>
        {users.map(user => {
            // {console.log(user)}
            return (
                <User
                    user={user}
                    onDelete={onDelete}
                    onHandleMark={onHandleMark}
                    status={status}
                />
            )
        })}
    </>
    )
} 

export default Users