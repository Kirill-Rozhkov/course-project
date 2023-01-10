import React from "react"

const renderTypes = () => {
    const  types = ['Имя', 'качества', 'Профессия', 'Встретился, раз', 'Оценка']
    return types.map(type => (
            <th key={type} scope="col">{type}</th>
    ))
}

export default renderTypes