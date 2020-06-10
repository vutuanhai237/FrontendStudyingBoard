import React from "react";
import Home from "./layout/home";
import Posts from "./layout/posts";
import Documents from "./layout/documents";
import Events from "./layout/events";
import CrPost from "./layout/create_post";
import CrDocument from "./layout/create_document";
import Admin_PostBrowser from "./admin/Admin_PostBrowser/Admin_PostBrowser";
import Admin_DocBrowser from "./admin/Admin_DocBrowser/Admin_DocBrowser";
import Login from "./layout/login";
import Register from "./layout/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin_UserManager from "./admin/Admin_UserManager/Admin_UserManager"
import { RouterOutlet } from './admin/RouterOutlet'
import { Suspense, lazy } from 'react';
import AdminPage from './admin/AdminPage'
function App() {

    const admin_routeConfig = {
        fallback: <div>Loading...</div>,
        routes: [
            {
                path: '/',
                exact: true,
                component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser')),
                data: {
                    date: new Date()
                }
            },
            {
                path: '/admin/post_browser',
                component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser')),
                // canActivate: isAuthenticated,
                canActivate: true,
                routeConfig: {
                    fallback: <div>Loading friends...</div>,
                    routes: [{
                        path: 'admin/post_browser',
                        component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser')),
                        routeConfig: {
                            fallback: <div>Loading friend...</div>,
                            routes: [{
                                path: '/:id',
                                component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser'))
                            }]
                        }
                    }]
                }
            },
            {
                path: '/admin/doc_browser',
                component: lazy(() => import('./admin/Admin_DocBrowser/Admin_DocBrowser')),
                // canActivate: isAuthenticated,
                canActivate: true,
                routeConfig: {
                    fallback: <div>Loading friends...</div>,
                    routes: [{
                        path: 'admin/post_browser',
                        component: lazy(() => import('./admin/Admin_DocBrowser/Admin_DocBrowser')),
                        routeConfig: {
                            fallback: <div>Loading friend...</div>,
                            routes: [{
                                path: '/:id',
                                component: lazy(() => import('./admin/Admin_DocBrowser/Admin_DocBrowser'))
                            }]
                        }
                    }]
                }
            }


        ]
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>


                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>

                <Route exact path="/create_post">
                    <CrPost />
                </Route>
                <Route exact path="/create_document">
                    <CrDocument />
                </Route>
                <Route exact path="/posts">
                    <Posts />
                </Route>
                <Route exact path="/documents">
                    <Documents />
                </Route>
                <Route exact path="/events">
                    <Events />
                </Route>

                {/* <Route exact path="/admin/post_browser">
                    <Admin_PostBrowser />
                </Route>
                <Route exact path="/admin/doc_browser">
                    <Admin_DocBrowser />
                </Route>

                <Route exact path="/admin/user_manager">
                    <Admin_UserManager />
                </Route> */}
                <Route exact path="/admin">
                    <AdminPage routeConfig={admin_routeConfig} />
                </Route>
            </Switch>
            <div className="App"></div>
        </Router>
    );
}

export default App;

// const isAuthenticated = async () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, 200)
//     })
// }

// const routeConfig = {
//     fallback: <div>Loading...</div>,
//     routes: [{
//         path: '/',
//         exact: true,
//         component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser')),
//         data: {
//             date: new Date()
//         }
//     }, {
//         path: 'admin/home',
//         component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser')),
//         // canActivate: isAuthenticated,
//         canActivate: true,
//         routeConfig: {
//             fallback: <div>Loading friends...</div>,
//             routes: [{
//                 path: 'admin/post_browser',
//                 component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser')),
//                 routeConfig: {
//                     fallback: <div>Loading friend...</div>,
//                     routes: [{
//                         path: '/:id',
//                         component: lazy(() => import('./admin/Admin_PostBrowser/Admin_PostBrowser'))
//                     }]
//                 }
//             }]
//         }
//     }]
// }
