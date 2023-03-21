import React, { useEffect, useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/navBar"
import Users from "./components/layouts/users"
import MainPage from "./components/layouts/main"
import Login from "./components/layouts/login"
import NotFound from "./components/not-found"
import User from "./components/user"
import api from "./api"

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" render={() => <User />} />
                <Route path="/users" component={Users} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    )
}

export default App
