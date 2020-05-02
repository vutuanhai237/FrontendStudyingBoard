import React from "react";
import Home from "./layout/home";
import Posts from "./layout/posts";
import Documents from "./layout/documents";
import CrPost from "./layout/create_post";
import CrDocument from "./layout/create_document"
import Admin from "./admin/Admin.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/admin">
                    <Admin />
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
            </Switch>
            <div className="App"></div>
        </Router>
    );
}

export default App;
