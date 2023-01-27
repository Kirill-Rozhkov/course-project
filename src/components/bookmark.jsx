import React, {useState} from 'react'

const BookMark = ({ id, onHandleMark, status }) => {
    // console.log(status)
    return (
            <i 
                className={!status ? "btn bi-bookmark btn-secondary" : "btn bi-bookmark-star-fill btn-warning" }
                id={id}
                onClick={() => onHandleMark(id)}
            ></i>
        )
}

export default BookMark