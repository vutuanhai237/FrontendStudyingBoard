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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManagementPage from './management/ManagementPage'
import Management_DocPreview from './management/Management_DocPostPreview/Management_DocPreview'
// import Management_PageNotification from "./management/Management_PageNotification/Management_PageNotification";

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

                {/* Admin management */}
                <Route exact path="/management" component={ManagementPage} />
                <Route exact path="/management/post_approving" component={ManagementPage} />
                <Route exact path="/management/categories_management" component={ManagementPage} />
                {/* <Route exact path="/management/post_approving/:id"> */}
                <Route exact path="/management/doc_approving" component={ManagementPage} />
                <Route exact path="/management/page_notification" component={ManagementPage} />
                <Route exact path="/management/users_management" component={ManagementPage} />
                <Route exact path="/management/activity_management" component={ManagementPage} />
                {/* <Route exact path="management/user/:id"> */}
                <Route exact path="/management/account_management" component={ManagementPage} />
                <Route exact path="/management/update_password" component={ManagementPage} />
                <Route exact path="/management/user_role_management" component={ManagementPage} />
                <Route exact path="/management/doc_approving/:id" component={Management_DocPreview} />

                {/* User manegement */}
                <Route exact path="/user/:id">
                    <ManagementPage></ManagementPage>
                </Route>
        

            </Switch>
            <div className="App"></div>
        </Router >
    );
}

export default App;



