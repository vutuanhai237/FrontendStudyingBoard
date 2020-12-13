/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import resource image, icon

//import resource string

//import scss
import '../styles/LeftSidebarLayout.scss'
import 'styles/SimpleLabel.scss'

//import components
import SearchTag from 'pages/common/SearchResult/SearchTag'
import SearchDoc from 'pages/common/SearchResult/SearchDoc'
import SearchPost from 'pages/common/SearchResult/SearchPost'

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'redux/services/userServices'
import Titlebar from 'components/common/Titlebar/Titlebar'
import "components/common/Titlebar/Titlebar.scss"
import "../styles/BlankLayout.scss"
import "../styles/SearchLayout.scss"

export default class SearchLayout extends Component {
    constructor(props) {
        super(props);
        this.isTheFirstTimeLoaded = true;

    }

    render() {
        return (
            <div className="normal-container" >
                <div className="search-layout">
                    <Router>
                        <div className="Horizontal_Menu_Bar">
                            {window.location.pathname === "/search-post" ?
                                <Link className="Horizontal_Menu_Item Activated_Horizontal_Menu_Item" >
                                    Bài viết</Link> :
                                <Link className="Horizontal_Menu_Item " to={"/search-post"}>
                                    <div onClick={() => this.setState({})}>
                                        Bài viết
                                        </div>
                                </Link >
                            }
                            {window.location.pathname === "/search-doc" ?
                                <Link className="Horizontal_Menu_Item Activated_Horizontal_Menu_Item">Tài liệu</Link> :
                                <Link className="Horizontal_Menu_Item " to={"/search-doc"}>
                                    <div onClick={() => this.setState({})}>
                                        Tài liệu
                                    </div>
                                </Link>
                            }
                            {window.location.pathname === "/search-course" ?
                                <Link className="Horizontal_Menu_Item Activated_Horizontal_Menu_Item"  >Khoá học</Link > :
                                <Link className="Horizontal_Menu_Item " to={"/search-courses"}>Khoá học</Link>
                            }
                            {window.location.pathname === "/search-tag" ?
                                <Link className="Horizontal_Menu_Item Activated_Horizontal_Menu_Item" >Tag</Link> :
                                <Link className="Horizontal_Menu_Item " to={"/search-tag"} >
                                    <div onClick={() => this.setState({})}>
                                        Tag
                                    </div>
                                </Link>
                            }
                        </div>
                        <div className="margin-top-10px" />

                        <div className="blank-layout-router-outlet" >
                            <Switch>
                                <Route exact path="/search-tag" component={SearchTag} />
                                <Route exact path="/search-post" component={SearchPost} />
                                <Route exact path="/search-doc" component={SearchPost} />
                            </Switch>
                        </div>
                    </Router>
                </div >
            </div >
        );
    }


}



// //#region for redux
// const mapStateToProps = (state) => {
//     // (state);
//     return {
//         accountInformation: state.user.account
//     };
// }

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     getCurrentUser
// }, dispatch);

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlankLayout));
// //#endregion