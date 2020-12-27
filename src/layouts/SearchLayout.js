/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
// import resource image, icon

//import resource string

//import scss
import 'layouts/LeftSidebarLayout.scss'
import 'styles/SimpleLabel.scss'
import "components/common/Titlebar/Titlebar.scss"
import "layouts/Layout.scss"
import "layouts/SearchLayout.scss"

//import components
import SearchTag from 'pages/common/SearchResult/SearchTag'
import SearchDocument from 'pages/common/SearchResult/SearchDocument'
import SearchPost from 'pages/common/SearchResult/SearchPost'

//utils
import { getSearchParamByName, setSearchParam } from 'utils/urlUtils'

export default class SearchLayout extends Component {
    constructor(props) {
        super(props);
        this.isTheFirstTimeLoaded = true;

    }

    componentDidMount() {
        console.log(getSearchParamByName('q') === null)
        if (!getSearchParamByName('q') === null)
            setSearchParam('q', " ");
    }

    render() {
        return (
            <div className="pr-layout" >
                <div className="search-layout">
                    <Router>
                        <div className="display-flex margin-bottom-5px">
                            <div className="gray-label">Kết quả tìm kiếm cho:  </div>
                            <div className="gray-normal-label">'{getSearchParamByName('q')}'</div>
                        </div>
                        <div className="Horizontal_Menu_Bar">

                            <NavLink to="/search-post" className="Horizontal_Menu_Item" activeClassName="Horizontal_Menu_Item Activated_Horizontal_Menu_Item" >
                                Bài viết</NavLink>

                            <NavLink to="/search-doc" className="Horizontal_Menu_Item" activeClassName=" Activated_Horizontal_Menu_Item Horizontal_Menu_Item">Tài liệu</NavLink>

                            <NavLink to="/search-courses" className="Horizontal_Menu_Item" activeClassName=" Activated_Horizontal_Menu_Item Horizontal_Menu_Item">Khoá học</NavLink>

                            <NavLink to="/search-tag" className="Horizontal_Menu_Item" activeClassName=" Activated_Horizontal_Menu_Item Horizontal_Menu_Item">Tags</NavLink>

                        </div>
                        <div className="margin-top-10px" />

                        <div className="nm-bl-layout-router-outlet" >
                            <Switch>
                                <Route exact path="/search-tag" component={SearchTag} />
                                <Route exact path="/search-post" component={SearchPost} />
                                <Route exact path="/search-doc" component={SearchDocument} />
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