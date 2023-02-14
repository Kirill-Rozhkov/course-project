import React, { useState, useEffect } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import User from "./user"
import PropTypes from "prop-types"
import GroupList from "./groupList"
import api from "../api"
import SearchStatus from "./searchStatus"

const Users = ({ users, onDelete, onHandleMark, renderTypes }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()

    const pageSize = 4
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
    }, [])
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession === selectedProf)
        : users
    const count = filteredUsers.length
    const userCrop = paginate(filteredUsers, currentPage, pageSize)
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
                    <table className="table">
                        <thead>
                            <tr>{renderTypes()}</tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => {
                                return (
                                    <User
                                        user={user}
                                        onDelete={onDelete}
                                        onHandleMark={onHandleMark}
                                        key={user._id}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
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
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onHandleMark: PropTypes.func.isRequired,
    renderTypes: PropTypes.func.isRequired
}

export default Users
