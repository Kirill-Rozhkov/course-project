import React, {useState} from 'react'
import api from '../api'
import renderUserList from './renderUserList'
import renderPhrase from './renderPhrase'
import renderTypes from './renderTypes'
import handleDelete from './handleDelete'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())


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
            {renderUserList(users)}
        </tbody>
    </table>
        </>
    )
} 

export default Users