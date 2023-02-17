import React, { useEffect, useState } from "react"
import Users from "./components/users"
import api from "./api"

function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(data)
        })
    }, [])

    const renderTypes = () => {
        const types = [
            "Имя",
            "Качества",
            "Профессия",
            "Встретился, раз",
            "Оценка",
            "Избранное"
        ]
        return types.map((type) => (
            <th key={type} scope="col">
                {type}
            </th>
        ))
    }

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId._id)
        )
    }
    const handleToggleBookMark = (id) => {
        const newUsersState = users.map((user) => {
            if (user._id === id) {
                return {
                    ...user,
                    bookmark: !user.bookmark
                }
            } else {
                return user
            }
        })
        setUsers(newUsersState)
    }
    return (
        <>
            <Users
                users={users}
                onDelete={handleDelete}
                onHandleMark={handleToggleBookMark}
                renderTypes={renderTypes}
            />
        </>
    )
}

export default App
