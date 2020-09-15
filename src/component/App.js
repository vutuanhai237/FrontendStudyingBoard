import React from "react";
import Home from "./page/Home";
import PostsList from "./page/PostsList/PostsList";
import PostDetail from "./page/PostDetail";
import DocsList from "./page/DocsList";
import DocDetail from "./page/DocDetail";
import EventsList from "./page/EventsList";
import CreatePost from "./page/CreatePost";
import CreateDoc from "./page/CreateDoc";
import Login from "./page/Login";
import Register from "./page/Register";
import Search from "./page/Search";
import Header from "./container/Header";
import Footer from "./container/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManagementPage from './management/ManagementPage'
import Management_DocPreview from './management/Management_DocPostPreview/Management_DocPreview'

// import 
const App = () => {

    return (
        <div>
            <Header />
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
                    <Route exact path="/admin" component={ManagementPage} />     {/* for admin */}
                    <Route exact path="/admin/update_password" component={ManagementPage} />
                    <Route exact path="/admin/docs_list" component={ManagementPage} />
                    <Route exact path="/admin/posts_list" component={ManagementPage} />

                    <Route exact path="/user" component={ManagementPage} />{/* for user and collab */}
                    <Route exact path="/user/update_password" component={ManagementPage} />
                    <Route exact path="/user/docs_list" component={ManagementPage} />
                    <Route exact path="/user/posts_list" component={ManagementPage} />

                    {/* Admin and collab page content management */}
                    {/* for admin */}
                    <Route exact path="/admin/post_approving" component={ManagementPage} />
                    <Route exact path="/admin/post_approving/:id" />
                    <Route exact path="/admin/doc_approving" component={ManagementPage} />
                    <Route exact path="/admin/doc_approving/:id" component={Management_DocPreview} />

                    {/* for collab */}
                    <Route exact path="/user/post_approving" component={ManagementPage} />
                    {/* <Route exact path="/user/post_approving/:id" component = {}/> */}
                    <Route exact path="/user/doc_approving" component={ManagementPage} />
                    <Route exact path="/user/doc_approving/:id" component={Management_DocPreview} />

                    {/* for admin only */}
                    <Route exact path="/admin/page_notification" component={ManagementPage} />
                    <Route exact path="/admin/categories_management" component={ManagementPage} />
                    <Route exact path="/admin/user_management" component={ManagementPage} />
                    <Route exact path="/admin/activity_management" component={ManagementPage} />
                    <Route exact path="/admin/user_role_management" component={ManagementPage} />
                    <Route exact path="/admin/user_management/:id" component={ManagementPage} />

                </Switch>
                <div className="App"></div>
            </Router >
            <Footer />
        </div>
    );
}

export default App;



