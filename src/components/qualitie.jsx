import React, {useState} from 'react'

const Qualitie = () => {
    const renderQualities = (value) => {
        return value.qualities.map(qualities => ((
                <li key={qualities._id} className={`badge bg-${qualities.color} m-2`}>{qualities.name}</li>
        )))
    }
}

export default Qualitie