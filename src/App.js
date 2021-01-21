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
import SearchPage from "layouts/SearchPage";
import SearchTagLayout from "layouts/SearchTagLayout";

//user
import UserLayout from "layouts/UserLayout"

//common
import NormalBlankLayout from "layouts/NormalBlankLayout"

//management
import AdminLayout from 'layouts/AdminLayout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPostByTag from "pages/common/SearchResult/SearchPostByTag";
import AccountInformation from "pages/user/AccountInformation/AccountInformation";
import UpdatePassword from "pages/user/AccountInformation/UpdatePassword";
import MyDocumentsList from "pages/user/MyDocumentsList/MyDocumentsList";
import MyPostsList from "pages/user/MyPostsList/MyPostsList";
import SearchTag from "pages/common/SearchResult/SearchTag";
import SearchPost from "pages/common/SearchResult/SearchPost";
import SearchDocument from "pages/common/SearchResult/SearchDocument";
import Artical from "pages/common/ChapterDetail/Artical"
import Exercise from "pages/common/ChapterDetail/Exercise"
import Video from "pages/common/ChapterDetail/Video"
import CoursesList from "pages/common/CoursesList/CoursesList"
import ChaptersList from "pages/common/ChaptersList/ChaptersList"
import PostsList from 'pages/common/PostsList/PostsList'
import DocumentsList from 'pages/common/DocumentsList/DocumentsList'
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
                    <Route exact path="/posts" component={PostsList} />
                    <Route exact path="/documents" component={DocumentsList} />
                    <Route exact path="/posts/:id" component={PostDetail} />
                    <Route exact path="/documents/:id" component={DocDetail} />
                    <Route exact path="/courses" component={CoursesList} />

                    {/* Search Tag */}
                    <Route path="/tags/:id/">
                        <SearchTagLayout>
                            <Switch>
                                <Route exact path="/tags/:id/post" component={SearchPostByTag} />
                                {/* <Route exact path="/:id/doc" component={} /> */}
                            </Switch>
                        </SearchTagLayout>
                    </Route>



                    {/* user layout */}
                    <Route path="/user/:path? ">
                        <UserLayout>
                            <Switch>
                                <Route exact path="/user" component={AccountInformation} />
                                <Route exact path="/user/update-password" component={UpdatePassword} />
                                <Route exact path="/user/my-docs" component={MyDocumentsList} />
                                <Route exact path="/user/my-posts" component={MyPostsList} />

                            </Switch>
                        </UserLayout>
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

                    <Route path="/search" exact component={SearchPage} />

                </Switch>
                <div className="App"></div>
            </Router >
            <Footer />
        </div >
    );
}

export default App;



