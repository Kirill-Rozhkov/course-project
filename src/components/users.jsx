import React, {useState} from 'react'
import User from './user'

const Users = ({ users, ...rest }) => {
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