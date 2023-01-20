import React, {useState} from 'react'
import api from '../api'
import User from './user'
import SearchStatus from './searchStatus'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    return (
        <>
        <SearchStatus 
            length={users.length}
        />

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