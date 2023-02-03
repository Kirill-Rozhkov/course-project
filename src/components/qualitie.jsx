import React from "react"

const Qualitie = ({ person }) => {
    return person.qualities.map((q) => {
        return (
            <li key={q._id} className={`badge bg-${q.color} m-2`}>
                {q.name}
            </li>
        )
    })
}

export default Qualitie
