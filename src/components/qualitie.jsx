import React from "react"
import PropTypes from "prop-types"

const Qualitie = ({ qualitie }) => {
    return <li className={`badge bg-${qualitie.color} m-2`}>{qualitie.name}</li>
}
Qualitie.propTypes = {
    qualitie: PropTypes.object.isRequired
}

export default Qualitie
