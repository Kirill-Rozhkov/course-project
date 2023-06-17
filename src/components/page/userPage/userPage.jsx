import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import api from "../../../api"

import UserCard from "../../ui/userCard/userCard"
import QualitiesCard from "../../ui/userCard/qualitiesCard"
import MeetingsCard from "../../ui/userCard/meetingsCard"
import CommentCreateForm from "../../ui/userCard/commentCreateForm"
import CommentsList from "../../ui/userCard/commentsList"

const UserPage = () => {
    const [user, setUser] = useState()
    const id = useParams()
    const { userId } = id
    const [comments, setComments] = useState([])

    useEffect(() => {
        api.users.getById(userId).then((data) => {
            setUser(data)
        })
    }, [])
    useEffect(() => {
        if (user) {
            api.comments.fetchCommentsForUser(user._id).then((data) => {
                setComments(data)
            })
        }
    }, [user])
    const handleAdd = (commentData) => {
        api.comments.add(commentData)
        setComments((prev) => [...prev, commentData])
    }

    const handleDelete = (id) => {
        api.comments.remove(id)
        setComments((prev) => prev.filter((comment) => comment._id !== id))
    }
    return (
        <>
            {user ? (
                <div className="container mt-3">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <UserCard user={user} />
                            <QualitiesCard user={user} />
                            <MeetingsCard meetings={user.completedMeetings} />
                        </div>

                        <div className="col-md-8">
                            <CommentCreateForm
                                user={user}
                                id={userId}
                                handleAdd={handleAdd}
                            />
                            <CommentsList
                                comments={comments}
                                handleDelete={handleDelete}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export default UserPage
