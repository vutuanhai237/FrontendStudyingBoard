import React from "react";
import Home from "./layout/home";
import Posts from "./layout/posts";
import Documents from "./layout/documents";
import Events from "./layout/events";
import CrPost from "./layout/create_post";
import CrDocument from "./layout/create_document";
import Login from "./layout/login";
import Register from "./layout/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from './admin/AdminPage'

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/create_post">
                    <CrPost />
                </Route>
                <Route exact path="/create_document">
                    <CrDocument />
                </Route>
                <Route exact path="/posts">
                    <Posts />
                </Route>
                <Route exact path="/documents">
                    <Documents />
                </Route>
                <Route exact path="/events">
                    <Events />
                </Route>
                <Route exact path="/admin">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/post_browser">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/doc_browser">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/user_management">
                    <AdminPage></AdminPage>
                </Route>
            </Switch>
            <div className="App"></div>
        </Router>
    );
}

export default App;



