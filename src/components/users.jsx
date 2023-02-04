// import { noConflict } from "lodash"
import React, { useState } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import User from "./user"
import PropTypes from "prop-types"

const Users = ({ users, onDelete, onHandleMark }) => {
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const userCrop = paginate(users, currentPage, pageSize)
    return (
        <>
            {userCrop.map((user) => {
                return (
                    <User
                        user={user}
                        onDelete={onDelete}
                        onHandleMark={onHandleMark}
                        status={user.bookmark}
                        key={user._id}
                    />
                )
            })}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onHandleMark: PropTypes.func.isRequired
}

export default Users
