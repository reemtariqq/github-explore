import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { UsersList } from '../user/list';
import { UserDetails } from '../user/details';


const GithubRouter = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/users" />
                <Route exact path="/users">
                    <UsersList />
                </Route>
                <Route exact path="/users/:id">
                    <UserDetails />
                </Route>
            </Switch>
        </Router >
    )
}

export { GithubRouter }