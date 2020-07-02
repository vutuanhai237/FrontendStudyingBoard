import React from "react";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Docs from "./pages/docs";
import Events from "./pages/events";
import CrPost from "./pages/createPost";
import CrDocument from "./pages/createDoc";
import Login from "./pages/login";
import Register from "./pages/register";
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
                <Route exact path="/docs">
                    <Docs />
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
                {/* <Route exact path="/admin/post_browser">
                    3
                </Route> */}
                <Route exact path="/admin/post_browser/:id">
                    {/* Tới một bài viết cụ thể */}
                    {/* <AdminPage></AdminPage> */}
                </Route>
                <Route exact path="/admin/doc_browser">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/users_management">
                    <AdminPage></AdminPage>
                </Route>
            </Switch>
            <div className="App"></div>
        </Router>
    );
}

export default App;



