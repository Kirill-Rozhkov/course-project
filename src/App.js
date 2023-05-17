import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/ui/navBar"
import MainPage from "./layouts/main"
import Login from "./layouts/login"
import NotFound from "./layouts/not-found"
import UserPage from "./components/page/userPage"
import Users from "./layouts/users"
import ChangeUser from "./components/ui/editUser"

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login/:type?" component={Login} />
                <Route path={"/users/:userId/edit"} component={ChangeUser} />
                <Route path="/users/:userId" render={() => <UserPage />} />
                <Route path="/users" render={() => <Users />} />
                <Route path="/" exact component={MainPage} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    )
}

export default App
