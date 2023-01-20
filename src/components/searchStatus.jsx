import React, {useState} from 'react'
import api from '../api'

const SearchStatus = (props) => {
    const renderPhrase = () => {
        if (props > 0) {
            return <span className='badge text-bg-primary m-2 '><h2>{props} человек тусанёт с тобой сегодня</h2></span>
        } else {
            return <span className='badge text-bg-danger m-2'><h2>Никто с тобой не тусанёт</h2></span>
        }
    }
}

export default SearchStatus