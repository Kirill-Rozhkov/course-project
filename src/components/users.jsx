import React, {useState} from 'react'
import User from './user'

const Users = ({ users, onDelete, onHandleMark }) => {
    // console.log(rest)
    return (
    <>
        {users.map(user => {
            {console.log(user.bookmark)}
            return (
                <User
                    user={user}
                    onDelete={onDelete}
                    onHandleMark={onHandleMark}
                    status={user.bookmark}
                />
            )
        })}
    </>
    )
} 

export default Users