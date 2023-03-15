import React from "react"
import { useHistory } from "react-router-dom"
// import API from "../api"
import PropTypes from "prop-types"

const User = ({ user, qualitie }) => {
    const history = useHistory()
    const showAllUsers = () => {
        history.push("/users")
    }
    // const userId = API.users.getById(user._id).then((data) => {
    //     return data
    // })
    // console.log(userId)
    return (
        <>
            {console.log(qualitie)}
            {/* {userId ? ( */}
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession}</h2>
                <button>{qualitie}</button>
                <p>{user.completedMeetings}</p>
                <h1>{user.completedMeetings}</h1>
                <button onClick={() => showAllUsers()}>Все пользователи</button>
            </div>
            {/* ) : (
                <h1>Loading...</h1>
            )} */}
        </>
    )
}
User.propTypes = {
    user: PropTypes.object,
    qualitie: PropTypes.array
}

export default User
