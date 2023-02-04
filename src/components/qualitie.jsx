import React from "react"
import PropTypes from "prop-types"

const Qualitie = ({ person }) => {
    return person.qualities.map((q) => {
        return (
            <li key={q._id} className={`badge bg-${q.color} m-2`}>
                {q.name}
            </li>
        )
    })
}
Qualitie.propTypes = {
    person: PropTypes.object.isRequired,
    _id: PropTypes.string.isRequired,
    color: PropTypes.array.isRequired
}

export default Qualitie
