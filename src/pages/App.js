import React from "react";

//common
import Home from "pages/common/Home/Home";
import PostsList from "pages/common/PostsList/PostsList";
import PostDetail from "pages/common/PostDetail/PostDetail";
import DocsList from "pages/common/DocsList/DocsList";
import DocDetail from "pages/common/DocDetail/DocDetail";
import EventsList from "pages/common/EventsList/EventsList";
import Login from "pages/common/Login/Login";
import Register from "pages/common/Register/Register";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import Search from "pages/common/SearchResult/SearchResult";


//user
import CreatePost from "pages/user/CreatePost/CreatePost";
import CreateDoc from "pages/user/UploadDocument/UploadDocument";
import UserLayout from "pages/user/UserLayout"

//management
import DocPreview from 'pages/management/DocPreview/DocPreview' // se duoc bo di, admin va cong tac vien muon preview thi tai thong qua link roi xem tren may.
import AdminLayout from 'pages/management/AdminLayout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import 
const App = () => {

    return (
        <div style={{ minWidth: "320px", width: "100%" }}>
            <Header />
            <div style={{ height: "65px" }}></div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/create_post" component={UserLayout} />
                    <Route exact path="/upload_doc" component={UserLayout} />
                    <Route exact path="/posts" component={PostsList} />
                    <Route exact path="/posts/:id" component={PostDetail} />
                    <Route exact path="/docs" component={DocsList} />
                    <Route exact path="/docs/:id" component={DocDetail} />
                    <Route exact path="/events" component={EventsList} />
                    <Route exact path="/search/:keywork" component={Search} />

                    <Route exact path="/user" component={UserLayout} />{/* for user and collab */}
                    <Route exact path="/user/update_password" component={UserLayout} />
                    <Route exact path="/user/docs_list" component={UserLayout} />
                    <Route exact path="/user/posts_list" component={UserLayout} />
                    <Route exact path="/user/notification" component={UserLayout} />

                    {/* Admin and collab page content management */}
                    {/* for admin */}
                    <Route exact path="/admin" component={AdminLayout} />
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



