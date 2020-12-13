/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import resource image, icon

//import resource string

//import scss
import '../styles/LeftSidebarLayout.scss'
import 'styles/SimpleLabel.scss'

//import components
import SearchPostByTag from 'pages/common/SearchResult/SearchPostByTag'

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'redux/services/userServices'
// import Titlebar from 'components/common/Titlebar/Titlebar'
import Tag from 'components/common/Tag/Tag'
import "components/common/Titlebar/Titlebar.scss"
import "../styles/BlankLayout.scss"
import "../styles/SearchLayout.scss"
import "../styles/SearchTagLayout.scss"

export default class SearchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags:
                [
                    {
                        id: 1,
                        content: "tag1"
                    },
                    {
                        id: 2,
                        content: "tag2"
                    },
                    {
                        id: 3,
                        content: "tag2"
                    }
                ],
        }

    }

    navigateToSeachByTag = (id) => { window.location.pathname = `search-tag/${id}/post` }

    render() {
        return (
            <div className="normal-container" >
                <div className="search-layout">

                    <div className="Searching_Tag">
                        Tag: Đại học
                   </div>

                    <div className="display-flex">
                        <div className="search-tag-side-bar">
                            Tag liên quan:
                            <div className="margin-top-10px">
                                {this.state.tags.map(item =>
                                    <Tag isReadOnly={true} tag={item} onTagClick={(id) => this.navigateToSeachByTag(id)} />
                                )
                                }
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: "100%" }}>

                            <div className="Horizontal_Menu_Bar">
                                <div className="Horizontal_Menu_Item">Bài viết</div>
                                <div className="Horizontal_Menu_Item">Tài liệu</div>
                                <div className="Horizontal_Menu_Item">Học tập</div>
                            </div>

                            <Router>
                                <div className="search-tag-router-outlet" >
                                    <Switch>
                                        <Route exact path="/search-tag/:id/post" component={SearchPostByTag} />
                                        {/* <Route exact path="/search-tag/:id/docs" component={SearchTag} /> */}
                                    </Switch>
                                </div>
                            </Router>

                        </div >
                    </div>
                </div>
            </div>
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