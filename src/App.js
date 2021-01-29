import React from "react";

//common
import Home from "pages/common/Home/Home";
//import PostsList from "pages/common/PostsList/PostsList";
import PostDetail from "pages/common/PostDetail/PostDetail";
//import DocumentsList from "pages/common/DocumentsList/DocumentsList";
import DocDetail from "pages/common/DocumentDetail/DocumentDetail";
import Login from "pages/common/Login/Login";
import Register from "pages/common/Register/Register";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import SearchTagLayout from "layouts/SearchTagLayout";

//user
import UserLayout from "layouts/UserLayout"

//common
import NormalBlankLayout from "layouts/NormalBlankLayout"

//management
import AdminLayout from 'layouts/AdminSidebar'

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
import ChaptersList from "pages/common/HeadingsList/HeadingsList"
import PostsList from 'pages/common/PostsList/PostsList'
import DocumentsList from 'pages/common/DocumentsList/DocumentsList'
import ItemHorizontalSlider from 'components/common/ItemHorizontalSlider/ItemHorizontalSlider'
import PostApproving from 'pages/management/PostApproving/PostApproving'
import DocumentApproving from 'pages/management/DocumentApproving/DocumentApproving'
import NotificationManagement from 'pages/management/NotificationManagement/NotificationManagement'
import CategoryManagement from 'pages/management/NotificationManagement/NotificationManagement'
import Statistic from 'pages/management/Statistic/Statistic'
import UserRoleManagement from 'pages/management/UserRoleManagement/UserRoleManagement'
import UserManagement from 'pages/management/UserManagement/UserManagement'
import PostManagement from 'pages/management/PostManagement/PostManagement'
import AdminSidebar from 'layouts/AdminSidebar'
import SearchCourses from 'pages/common/SearchResult/SearchCourses'

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
                    <Route exact path="/courses/:id" component={ChaptersList} />

                    {/* Search Tag */}
                    <Route path="/tags/:id/">
                        <SearchTagLayout>
                            <Switch>
                                <Route exact path="/tags/:id/post" component={SearchPostByTag} />
                                {/* <Route exact path="/:id/doc" component={} /> */}
                            </Switch>
                        </SearchTagLayout>
                    </Route>
                    <Route exact path="/demo-component" component={ItemHorizontalSlider} />


                    {/* user layout */}
                    <Route path="/user">
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

                    {/* Admin and collab page content admin */}
                    {/* for admin */}
                    <Route exact path="/admin" component={PostApproving} />
                    <Route exact path="/admin/post-approving" component={PostApproving} />
                    <Route exact path="/admin/doc-approving" component={DocumentApproving} />

                    {/* for collab */}
                    {/* <Route exact path="/user/post-approving" component={PostApproving} />
                    <Route exact path="/user/doc-approving" component={DocumentApproving} /> */}

                    {/* for admin only */}
                    <Route exact path="/admin-sidebar" component={AdminSidebar} />
                    <Route exact path="/admin/post-management" component={PostManagement} />

                    <Route exact path="/admin/page-notification" component={NotificationManagement} />
                    <Route exact path="/admin/categories-management" component={CategoryManagement} />
                    <Route exact path="/admin/user-management" component={UserManagement} />
                    <Route exact path="/admin/activity_management" component={AdminLayout} />
                    <Route exact path="/admin/user_role_management" component={UserRoleManagement} />
                    <Route exact path="/admin/user-management/:id" component={AdminLayout} />
                    <Route exact path="/admin/statistic_management" component={Statistic} />
                    <Route path="/collab">
                        <Route exact path="/post-approving" component={AdminLayout} />
                        <Route exact path="/doc-approving" component={AdminLayout} />
                    </Route>

                    <Route path="/search/posts" exact component={SearchPost} />
                    <Route path="/search/documents" exact component={SearchDocument} />
                    <Route path="/search/tags" exact component={SearchTag} />
                    <Route path="/search/courses" exact component={SearchCourses} />

                </Switch>
                <div className="App"></div>
            </Router >
            <Footer />
        </div >
    );
}

export default App;



