import React from "react";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Post from "./pages/post";
import Docs from "./pages/docs";
// import Doc from "./pages/doc";
import Events from "./pages/events";
import CrPost from "./pages/createPost";
import CrDoc from "./pages/createDoc";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from './admin/AdminPage'
// import Admin_PageNotification from "./admin/Admin_PageNotification/Admin_PageNotification";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/create_post" component={CrPost} />
                <Route exact path="/create_doc" component={CrDoc} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/posts/:id" component={Post} />
                <Route exact path="/docs" component={Docs} />
                <Route exact path="/docs/:id" component={Docs} />
                <Route exact path="/events" component={Events} />

                {/* Admin */}
                <Route exact path="/admin">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/post_approving">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/categories_management" component={AdminPage} />

                <Route exact path="/admin/post_approving/:id">
                    {/* Tới một bài viết cụ thể và admin có quyền duyệt*/}
                </Route>
                <Route exact path="/admin/doc_approving">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/users_management">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="admin/user/:id">
                    {/* Admin tới trang chi tiết của người dùng được chọn và toàn quyền thi triển võ công */}
                </Route>
                <Route exact path="/admin/page_notification">
                    <AdminPage></AdminPage>
                </Route>

                <Route exact path="/admin/account_management">
                    <AdminPage></AdminPage>
                </Route>

                <Route exact path="/admin/account_management/update_passwords">
                    <AdminPage></AdminPage>
                </Route>
                <Route exact path="/admin/user_role_management">
                    <AdminPage></AdminPage>
                </Route>
                {/* User, himself các kiểu */}
                <Route exact path="/user/:id">
                    <AdminPage></AdminPage>
                </Route>

            </Switch>
            <div className="App"></div>
        </Router>
    );
}

export default App;



