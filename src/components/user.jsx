import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import api from "../api"
import PropTypes from "prop-types"
import QualitiesList from "./qualitiesList"

const User = () => {
    const [user, setUser] = useState()
    const id = useParams()
    const { userId } = id
    useEffect(() => {
        api.users.getById(userId).then((data) => {
            setUser(data)
        })
    }, [])
    console.log(user)
    const history = useHistory()
    const showAllUsers = () => {
        history.push("/users")
    }
    return (
        <>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <>{<QualitiesList user={user} />}</>
                    <p>{user.completedMeetings}</p>
                    <h1>Rate: {user.rate}</h1>
                    <button onClick={() => showAllUsers()}>
                        Все пользователи
                    </button>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}
User.propTypes = {
    users: PropTypes.array
}

export default User
