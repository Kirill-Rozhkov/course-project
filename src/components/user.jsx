import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"
import PropTypes from "prop-types"

const User = (props) => {
    return (
        <tr key={props.user._id}>
            <td>{props.user.name}</td>
            <td>
                <Qualitie
                    person={props.user}
                    _id={props.user._id}
                    color={props.user.qualities}
                />
            </td>
            <td>{props.user.profession.name}</td>
            <td>{props.user.completedMeetings}</td>
            <td>{props.user.rate}</td>
            <td>
                <BookMark
                    id={props.user._id}
                    onHandleMark={props.onHandleMark}
                    status={props.status}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => props.onDelete(props.user)}
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
    onHandleMark: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired
}

export default User
