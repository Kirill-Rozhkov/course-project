import React from "react"
import Qualitie from "./qualitie"
import PropTypes from "prop-types"

const QualitiesList = ({ user }) => {
    return (
        <>
            {user.qualities.map((qualitie) => (
                <Qualitie key={qualitie._id} qualitie={qualitie} />
            ))}
        </>
    )
}
QualitiesList.propTypes = {
    user: PropTypes.object.isRequired
}

export default QualitiesList
