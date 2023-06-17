import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { array } from "i/lib/util"
import API from "../../../api"

const Comment = ({ comment, handleDelete }) => {
    const [user, setUser] = useState({})

    const timeDifference = (Date.now() - comment.created_at) / 1000

    const showTime = () => {
        const date = new Date(timeDifference * 1000)
        console.log(date)
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
        if (timeDifference <= 60 || NaN) {
            return "1 минуту назад"
        } else if (timeDifference > 60 && timeDifference <= 5 * 60) {
            return "5 минуту назад"
        } else if (timeDifference > 5 * 60 && timeDifference <= 10 * 60) {
            return "10 минуту назад"
        } else if (timeDifference > 10 * 60 && timeDifference <= 30 * 60) {
            return "30 минуту назад"
        } else if (timeDifference > 30 * 60 && timeDifference <= 24 * 60 * 60) {
            const hours = date.getHours()
            const minutes = date.getMinutes()
            console.log(date)
            return `${hours < 10 ? "0" + hours : hours}:${
                minutes < 10 ? "0" + minutes : minutes
            }`
        } else if (
            timeDifference >
            24 * 60 * 60
            // timeDifference <= 365.25 * 24 * 60 * 60
        ) {
            const day = date.getDay()
            const monthIndex = date.getMonth()
            const monthName = monthNames[monthIndex]
            return `${day} ${monthName}`
        }
    }

    useEffect(() => {
        API.users.getById(comment.userId).then((data) => {
            setUser(data)
        })
    }, [])
    return (
        <>
            <div className="bg-light card-body mb-3">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-start">
                            <img
                                src="https://avatars.dicebear.com/api/avataaars/qweqasdas.svg"
                                className="
                                rounded-circle
                                shadow-1-strong
                                me-3
                            "
                                alt="avatar"
                                width="65"
                                height="65"
                            />
                            <div
                                className="
                                flex-grow-1 flex-shrink-1
                            "
                            >
                                <div className="mb-4">
                                    <div
                                        className="
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                    "
                                    >
                                        <p className="mb-1">
                                            {user.name}

                                            <span className="small">
                                                {" - "}
                                                {showTime()}
                                            </span>
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleDelete(comment._id)
                                            }
                                            className="
                                            btn btn-sm
                                            text-primary
                                            d-flex
                                            align-items-center
                                        "
                                        >
                                            <i
                                                className="
                                                bi bi-x-lg
                                            "
                                            ></i>
                                        </button>
                                    </div>
                                    <p className="small mb-0">
                                        {comment.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
Comment.propTypes = {
    comment: PropTypes.object,
    handleDelete: PropTypes.func
}

export default Comment
