import React from "react"
import PropTypes from "prop-types"

const Qualitie = ({ person }) => {
    return person.qualities.map((qualitie) => {
        return (
            <li key={qualitie._id} className={`badge bg-${qualitie.color} m-2`}>
                {qualitie.name}
            </li>
        )
    })
}
Qualitie.propTypes = {
    person: PropTypes.object.isRequired
}

export default Qualitie
