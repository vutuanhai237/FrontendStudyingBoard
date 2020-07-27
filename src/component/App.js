import React from "react";
import Home from "./page/Home";
import Posts from "./page/Posts";
import Post from "./page/Post";
import Docs from "./page/Docs";
// import Doc from "./pages/doc";
import Events from "./page/Events";
import CrPost from "./page/CreatePost";
import CrDoc from "./page/CreateDoc";
import Login from "./page/Login";
import Register from "./page/Register";
import Search from "./page/Search"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManagementPage from './management/ManagementPage'
import Management_DocPreview from './management/Management_DocPostPreview/Management_DocPreview'

// import 
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
                <Route exact path="/search/:keywork" component={Search} />

                {/* Account and Page (admin and collab only) management */}
                <Route exact path="/admin" component={ManagementPage} />     {/* for admin */}
                <Route exact path="/admin/update_password" component={ManagementPage} />
                <Route exact path="/user" component={ManagementPage} />{/* for user and collab */}
                <Route exact path="/user/update_password" component={ManagementPage} />

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
    );
}

export default App;



