import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import API from "../../../api"
import Comment from "./comment"

const CommentsList = ({ handleDelete, comments }) => {
    const sortedComments = comments.sort()
    console.log(sortedComments)
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2>Comments</h2>
                <hr />
                {sortedComments.length > 0 ? (
                    sortedComments.map((comment) => (
                        <Comment
                            key={comment._id}
                            comment={comment}
                            handleDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p>Нет комментариев</p>
                )}
            </div>
        </div>
    )
}
CommentsList.propTypes = {
    comments: PropTypes.array,
    handleDelete: PropTypes.func
}

export default CommentsList
