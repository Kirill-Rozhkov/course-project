import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import api from "./api"

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())

    const renderTypes = () => {
        const  types = ['Имя', 'Качества', 'Профессия', 'Встретился, раз', 'Оценка', 'Избранное']
        return types.map(type => (
                <th key={type} scope="col">{type}</th>
        ))
    }
    
    const handleDelete = (userId) => {
        console.log(userId)
        setUsers(prevState => prevState.filter(user => user._id !== userId._id))
    }
    const handleToggleBookMark = (id) => {

    }
    return (
        <>
            <SearchStatus 
                size={users.length}
            />
            <table class="table">
                <thead>
                    <tr>
                        {renderTypes()}
                    </tr>
                </thead>
                <tbody>
                    <Users 
                        users={users}
                        onDelete={handleDelete}
                    />
                </tbody>
            </table>
        </>
    )
}

export default App