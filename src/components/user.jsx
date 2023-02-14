import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"
import PropTypes from "prop-types"

const User = ({ user, onDelete, onHandleMark }) => {
    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                <Qualitie person={user} _id={user._id} color={user.qualities} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <BookMark
                    id={user._id}
                    onHandleMark={onHandleMark}
                    status={user.bookmark}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(user)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
User.propTypes = {
    user: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onHandleMark: PropTypes.func.isRequired
}

export default User
