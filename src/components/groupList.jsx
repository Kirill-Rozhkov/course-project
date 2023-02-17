import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    // Нужно реализовать код, который определяет объект это или массив
    // Если это объект, то нужно оставить то же самое
    // Если массив, то нужно брать items и создавать map почти такой же
    if (Array.isArray(items) || (typeof items === "object" && items !== null)) {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        )
    }
}
GroupList.defaultProps = {
    valueProperty: "id",
    contentProperty: "name"
}
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
}

export default GroupList