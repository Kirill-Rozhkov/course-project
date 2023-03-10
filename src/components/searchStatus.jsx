import React from "react"
import PropTypes from "prop-types"

const SearchStatus = (props) => {
    if (props.size > 0) {
        return (
            <span className="badge text-bg-primary m-2 ">
                <h2>{props.size} человек тусанёт с тобой сегодня</h2>
            </span>
        )
    } else {
        return (
            <span className="badge text-bg-danger m-2">
                <h2>Никто с тобой не тусанёт</h2>
            </span>
        )
    }
}
SearchStatus.propTypes = {
    size: PropTypes.number.isRequired
}

export default SearchStatus
