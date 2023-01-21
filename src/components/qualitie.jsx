import React from 'react'

const Qualitie = ({ color, name, _id }) => {
        return <li key={_id} className={`badge bg-${color} m-2`}>{name}</li>
}

export default Qualitie