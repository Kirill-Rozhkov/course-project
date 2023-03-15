import React from "react"
import PropTypes from "prop-types"

const BookMark = ({ id, onHandleMark, status }) => {
    return (
        <i
            className={
                status
                    ? "btn bi-bookmark-star-fill btn-warning"
                    : "btn bi-bookmark btn-secondary"
            }
            id={id}
            onClick={() => onHandleMark(id)}
        ></i>
    )
}
BookMark.propTypes = {
    id: PropTypes.string.isRequired,
    onHandleMark: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired
}

export default BookMark
