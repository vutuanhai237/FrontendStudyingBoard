/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
// import resource image, icon

//import resource string

//import scss
import 'layouts/LeftSidebarLayout.scss'
import 'components/styles/SimpleLabel.scss'
import "components/common/Titlebar/Titlebar.scss"
import "layouts/Layout.scss"
import "layouts/SearchPage.scss"

//utils
import { getSearchParamByName, setSearchParam, isSearchParamHasValue } from 'utils/urlUtils'

//components
import SearchPost from 'pages/common/SearchResult/SearchPost'
import SearchDocument from 'pages/common/SearchResult/SearchDocument'
import SearchTag from 'pages/common/SearchResult/SearchTag'

export default class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.types = ["post", "document", "course", "tag"];

    }

    componentDidMount() {
        if (!getSearchParamByName('q') === null)
            setSearchParam('q', " ");
        if (!getSearchParamByName('type') === null || !isSearchParamHasValue('type', this.types))
            setSearchParam('type', "post");

    }

    changeSearchTypeParam = (type) => {
        setSearchParam('type', type);
        this.setState({});
    }
    render() {

        let searchResult = <></>;

        //conditional rendering
        if (getSearchParamByName('type') === 'post') {
            searchResult = <SearchPost />;
        }
        else if (getSearchParamByName('type') === 'document') {
            searchResult = <SearchDocument />;
        }
        else if (getSearchParamByName('type') === 'course') {
            searchResult = <div>Search Courses</div>
        }
        else if (getSearchParamByName('type') === 'tag') {
            searchResult = <SearchTag />
        }
        return (

            <div className="pr-layout" >
                <div className="search-layout">

                    <div className="display-flex mg-bottom-5px">
                        <div className="gray-label">Kết quả tìm kiếm cho:  </div>
                        <div className="gray-normal-label">'{getSearchParamByName('q')}'</div>
                    </div>

                    {/* horizontal-menu-bar */}
                    <div className="h-menu-bar">

                        {getSearchParamByName('type') === "post" ?
                            < div className="h-menu-item a-h-menu-item"  >
                                Bài viết
                                    </div>
                            :
                            < div className="h-menu-item " onClick={() => this.changeSearchTypeParam('post')} >
                                Bài viết
                                    </div>
                        }

                        {getSearchParamByName('type') === "document" ?
                            < div className="h-menu-item a-h-menu-item"  >
                                Tài liệu
                                    </div>
                            :
                            < div className="h-menu-item " onClick={() => this.changeSearchTypeParam('document')} >
                                Tài liệu
                                    </div>
                        }

                        {getSearchParamByName('type') === "course" ?
                            < div className="h-menu-item a-h-menu-item"  >
                                Khoá học
                                    </div>
                            :
                            < div className="h-menu-item " onClick={() => this.changeSearchTypeParam('course')} >
                                Khoá học
                                    </div>
                        }
                        {getSearchParamByName('type') === "tag" ?
                            < div className="h-menu-item a-h-menu-item"  >
                                Tag
                                    </div>
                            :
                            < div className="h-menu-item " onClick={() => this.changeSearchTypeParam('tag')} >
                                Tag
                                    </div>
                        }


                    </div>

                    <div className="mg-top-10px" />

                    <div className="nm-bl-layout-router-outlet" >
                        {searchResult}
                    </div>
                </div >
            </div >
        );
    }


}

