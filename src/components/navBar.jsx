import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <span className="p-3">
                <Link to="">Main</Link>
            </span>
            <span className="p-3">
                <Link to="login">Login</Link>
            </span>
            <span className="p-3">
                <Link to="users">Users</Link>
            </span>
        </nav>
    )
}

export default NavBar
