import React from "react";
import Home from "pages/Home/Home";
import PostsList from "pages/PostsList/PostsList";
import PostDetail from "pages/PostDetail/PostDetail";
import DocsList from "pages/DocsList/DocsList";
import DocDetail from "pages/DocDetail/DocDetail";
import EventsList from "pages/EventsList/EventsList";
import CreatePost from "pages/CreatePost/CreatePost";
import CreateDoc from "pages/CreateDocument/CreateDocument";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import Search from "pages/SearchResult/SearchResult";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminLayout from 'pages/management/AdminLayout'
import DocPreview from 'pages/management/DocPreview/DocPreview'

// import 
const App = () => {

    return (
        <div style={{ minWidth: "320px",width: "100%" }}>
            <Header />
            <div style={{ height: "65px" }}></div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/create_post" component={CreatePost} />
                    <Route exact path="/create_doc" component={CreateDoc} />
                    <Route exact path="/posts" component={PostsList} />
                    <Route exact path="/posts/:id" component={PostDetail} />
                    <Route exact path="/docs" component={DocsList} />
                    <Route exact path="/docs/:id" component={DocDetail} />
                    <Route exact path="/events" component={EventsList} />
                    <Route exact path="/search/:keywork" component={Search} />

                    {/* Account and Page (admin and collab only) management */}
                    <Route exact path="/admin" component={AdminLayout} />     {/* for admin */}
                    <Route exact path="/admin/update_password" component={AdminLayout} />
                    <Route exact path="/admin/docs_list" component={AdminLayout} />
                    <Route exact path="/admin/posts_list" component={AdminLayout} />
                    <Route exact path="/admin/notification" component={AdminLayout} />

                    <Route exact path="/user" component={AdminLayout} />{/* for user and collab */}
                    <Route exact path="/user/update_password" component={AdminLayout} />
                    <Route exact path="/user/docs_list" component={AdminLayout} />
                    <Route exact path="/user/posts_list" component={AdminLayout} />
                    <Route exact path="/user/notification" component={AdminLayout} />

                    {/* Admin and collab page content management */}
                    {/* for admin */}
                    <Route exact path="/admin/post_approving" component={AdminLayout} />
                    <Route exact path="/admin/post_approving/:id" />
                    <Route exact path="/admin/doc_approving" component={AdminLayout} />
                    <Route exact path="/admin/doc_approving/:id" component={DocPreview} />

                    {/* for collab */}
                    <Route exact path="/user/post_approving" component={AdminLayout} />
                    <Route exact path="/user/post_approving/:id" component={DocPreview} />
                    <Route exact path="/user/doc_approving" component={AdminLayout} />
                    <Route exact path="/user/doc_approving/:id" component={DocPreview} />

                    {/* for admin only */}
                    <Route exact path="/admin/page_notification" component={AdminLayout} />
                    <Route exact path="/admin/categories_management" component={AdminLayout} />
                    <Route exact path="/admin/user_management" component={AdminLayout} />
                    <Route exact path="/admin/activity_management" component={AdminLayout} />
                    <Route exact path="/admin/user_role_management" component={AdminLayout} />
                    <Route exact path="/admin/user_management/:id" component={AdminLayout} />
                    <Route exact path="/admin/statistic_management" component={AdminLayout} />


                </Switch>
                <div className="App"></div>
            </Router >
            <Footer />
        </div >
    );
}

export default App;



