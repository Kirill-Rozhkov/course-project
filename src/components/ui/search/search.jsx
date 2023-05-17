import React from "react"
import PropTypes from "prop-types"

const Search = ({ handleChange, text }) => {
    return (
        <div className="input-group">
            <input
                className="form-control"
                type="text"
                placeholder="Search..."
                value={text}
                onChange={handleChange}
            />
        </div>
    )
}

Search.propTypes = {
    users: PropTypes.array,
    handleChange: PropTypes.func,
    text: PropTypes.string
}

export default Search
