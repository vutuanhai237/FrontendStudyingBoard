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
import UserLayout from "pages/user/UserLayout"

//common
import BlankLayout from "pages/common/BlankLayout"

//management
import DocPreview from 'pages/management/DocPreview/DocPreview' // se duoc bo di, admin va cong tac vien muon preview thi tai thong qua link roi xem tren may.
import AdminLayout from 'pages/management/AdminLayout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import 
const App = () => {

    return (
        <div style={{ minWidth: "320px", width: "100%", background: "var(--white)" }}>

            <Header />
            <div style={{ height: "65px" }}></div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/posts" component={BlankLayout} />
                    <Route exact path="/documents" component={BlankLayout} />
                    <Route exact path="/posts/:id" component={PostDetail} />
                    <Route exact path="/documents/:id" component={DocDetail} />
                    <Route exact path="/events" component={EventsList} />
                    <Route exact path="/search/:keywork" component={Search} />

                    {/* user layout */}
                    <Route path="/user">
                        <Route exact path="" component={UserLayout} />
                        <Route exact path="/update_password" component={UserLayout} />
                        <Route exact path="/my_docs" component={UserLayout} />
                        <Route exact path="/my_posts" component={UserLayout} />
                        <Route exact path="/notification" component={UserLayout} />
                    </Route>

                    <Route exact path="/create_post" component={UserLayout} />
                    <Route exact path="/upload_doc" component={UserLayout} />

                    {/* for admin only */}
                    <Route path="/admin">
                        <Route exact path="/post_approving" component={AdminLayout} />
                        <Route exact path="/post_approving/:id" />
                        <Route exact path="/doc_approving" component={AdminLayout} />
                        <Route exact path="/doc_approving/:id" component={DocPreview} />
                        <Route exact path="/page_notification" component={AdminLayout} />
                        <Route exact path="/categories_management" component={AdminLayout} />
                        <Route exact path="/user_management" component={AdminLayout} />
                        <Route exact path="/activity_management" component={AdminLayout} />
                        <Route exact path="/user_role_management" component={AdminLayout} />
                        <Route exact path="/user_management/:id" component={AdminLayout} />
                        <Route exact path="/statistic_management" component={AdminLayout} />
                    </Route>
                    
                    <Route path="/collab">
                        <Route exact path="/post_approving" component={AdminLayout} />
                        <Route exact path="/doc_approving" component={AdminLayout} />
                    </Route>
                </Switch>
                <div className="App"></div>
            </Router >
            <Footer />
        </div >
    );
}

export default App;



