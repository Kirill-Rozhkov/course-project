import React, {useState} from 'react'
import api from '../api'

const Qualitie = (props) => {
    const {value} = props
    const renderQualities = (value) => {
        return value.qualities.map(qualities => ((
                <li key={qualities._id} className={`badge bg-${qualities.color} m-2`}>{qualities.name}</li>
        )))
    }
}

export default Qualitie