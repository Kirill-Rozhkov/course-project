import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import api from "./api"

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId._id))
    }
    const handleToggleBookMark = (id) => {

    }
    return (
        <>
            <SearchStatus 
                lenght={users.length}
            />
            <div>
                {users.map(user => {
                    <Users 
                        onDelete={handleDelete}
                    />
                })}
            </div>
        </>
    )
}

export default App