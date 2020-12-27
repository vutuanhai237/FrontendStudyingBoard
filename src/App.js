import React from "react";

//common
import Home from "pages/common/Home/Home";
//import PostsList from "pages/common/PostsList/PostsList";
import PostDetail from "pages/common/PostDetail/PostDetail";
//import DocumentsList from "pages/common/DocumentsList/DocumentsList";
import DocDetail from "pages/common/DocumentDetail/DocumentDetail";
import EventsList from "pages/common/EventsList/EventsList";
import Login from "pages/common/Login/Login";
import Register from "pages/common/Register/Register";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import SearchLayout from "layouts/SearchLayout";
import SearchTagLayout from "layouts/SearchTagLayout";

//user
import UserLayout from "layouts/UserLayout"

//common
import NormalBlankLayout from "layouts/NormalBlankLayout"

//management
import AdminLayout from 'layouts/AdminLayout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import
const App = () => {

    return (
        <div style={{ minWidth: "320px", width: "100%", background: "white" }}>
            <Router>
                <Header />
                <div id="header" style={{ height: "65px" }}></div>


                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/posts" component={NormalBlankLayout} />
                    <Route exact path="/documents" component={NormalBlankLayout} />
                    <Route exact path="/posts/:id" component={PostDetail} />
                    <Route exact path="/documents/:id" component={DocDetail} />
                    <Route exact path="/events" component={EventsList} />

                    {/* Search Tag */}
                    <Route exact path="/search-tag" component={SearchLayout} />
                    <Route exact path="/search-tag/:id/post" component={SearchTagLayout} />
                    <Route exact path="/search-tag/:id/doc" component={SearchTagLayout} />
                    <Route exact path="/search-post/" component={SearchLayout} />
                    <Route exact path="/search-doc/" component={SearchLayout} />



                    {/* user layout */}
                    <Route path="/user">
                        <Route exact path="" component={UserLayout} />
                        <Route exact path="/update-password" component={UserLayout} />
                        <Route exact path="/my-docs" component={UserLayout} />
                        <Route exact path="/my-posts" component={UserLayout} />
                        <Route exact path="/notification" component={UserLayout} />
                    </Route>

                    <Route exact path="/create-post" component={UserLayout} />
                    <Route exact path="/upload-doc" component={UserLayout} />

                    {/* for admin only */}
                    <Route path="/admin">
                        <Route exact path="" component={AdminLayout} />
                        <Route exact path="/post-approving" component={AdminLayout} />
                        <Route exact path="/post-approving/:id" />
                        <Route exact path="/doc-approving" component={AdminLayout} />
                        <Route exact path="/page-notification" component={AdminLayout} />
                        <Route exact path="/categories-management" component={AdminLayout} />
                        <Route exact path="/user-management" component={AdminLayout} />
                        <Route exact path="/activity_management" component={AdminLayout} />
                        <Route exact path="/user_role_management" component={AdminLayout} />
                        <Route exact path="/user-management/:id" component={AdminLayout} />
                        <Route exact path="/statistic_management" component={AdminLayout} />
                    </Route>

                    <Route path="/collab">
                        <Route exact path="/post-approving" component={AdminLayout} />
                        <Route exact path="/doc-approving" component={AdminLayout} />
                    </Route>
                </Switch>
                <div className="App"></div>
            </Router >
            <Footer />
        </div >
    );
}

export default App;



