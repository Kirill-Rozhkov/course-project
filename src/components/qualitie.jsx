import React, {useState} from 'react'

const Qualitie = ({ color, name, _id }) => {
        return props.qualities.map(qualities => ((
                <li key={_id} className={`badge bg-${props.color} m-2`}>{qualities.name}</li>
        )))
}

export default Qualitie