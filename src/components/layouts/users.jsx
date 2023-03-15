import React, { useState, useEffect } from "react"
import { paginate } from "../../utils/paginate"
import Pagination from "../pagination"
// import PropTypes from "prop-types"
import GroupList from "../groupList"
import api from "../../api"
import SearchStatus from "../searchStatus"
import UserTabel from "../usersTable"
import _ from "lodash"

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })
    const pageSize = 4

    const [users, setUsers] = useState([])
    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(data)
        })
    }, [])
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

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const handelSort = (item) => {
        setSortBy(item)
    }
    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => user.profession._id === selectedProf._id)
            : users
        const count = filteredUsers.length
        const sortedUsers = _.orderBy(filteredUsers, sortBy.path, sortBy.order)
        const userCrop = paginate(sortedUsers, currentPage, pageSize)
        const clearFilter = () => {
            setSelectedProf()
        }

        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}

                <div className="d-flex flex-column">
                    <SearchStatus size={count} />
                    {count > 0 && (
                        <UserTabel
                            users={userCrop}
                            onDelete={handleDelete}
                            onHandleMark={handleToggleBookMark}
                            onSort={handelSort}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
    return "loading..."
}

export default Users
