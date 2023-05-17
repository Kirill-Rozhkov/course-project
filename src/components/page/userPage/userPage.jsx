import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import api from "../../../api"
import PropTypes from "prop-types"
import QualitiesList from "../../ui/qualities/qualitiesList"

const UserPage = () => {
    const [user, setUser] = useState()
    const id = useParams()
    const { userId } = id
    useEffect(() => {
        api.users.getById(userId).then((data) => {
            setUser(data)
        })
    }, [])
    return (
        <>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <>{<QualitiesList user={user} />}</>
                    <p>CompletedMeetings: {user.completedMeetings}</p>
                    <h1>Rate: {user.rate}</h1>
                    <Link
                        to={{
                            pathname: `/users/${user._id}/edit`,
                            state: { user }
                        }}
                    >
                        <button>Изменить</button>
                    </Link>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export default UserPage
