/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Titlebar from 'components/common/Titlebar/Titlebar'
import PostSummary from 'components/post/PostSummary'
import Paginator from 'components/common/Paginator/ServerPaginator'
import 'pages/styles/BlankLayout.scss'
import { postSummaryType } from 'components/post/PostSummary'

//import for redux
import { getPostsList } from "redux/services/postServices"
import { getPostCategories } from "redux/services/postCategoryServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComboBox from 'components/common/Combobox/Combobox';


class PostsList extends Component {
    constructor(props) {
        super();

        this.maxItemPerPage = 5;
        this.myPostsList = [];

        this.filter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Chưa phê duyệt" },
            { id: 3, name: "Đã phê duyệt" },
            { id: 4, name: "Cần xem lại" }
        ]

    }

    componentDidMount() {
        //must implement: get filter, get doc, page change
        //get filter

        this.props.getPostsList(); //
        this.props.getPostCategories()
    }

    //server
    onPageChange = (pageNumber) => {

    }

    //
    onFilterOptionChanged = (selectedOption) => {
        console.log("Filter search: ")
        console.log(selectedOption);
    }

    render() {
        let myPostsList = <></>; //sau nay se lam mot cai content loader.
        console.log("*");
        console.log(this.props);

        if (this.props.postsList) {

            this.postsList = this.props.postsList;

            myPostsList = this.props.postsList.map((postItem) => (
                <PostSummary
                    type = {postSummaryType.normal}
                    key={postItem.id}
                    id={postItem.id}
                    authorName={postItem.authorName}
                    authorID={postItem.authorID}
                    publishDtm={postItem.publishDtm}
                    category={postItem.category}
                    categoryID={postItem.categoryID}
                    title={postItem.title}
                    summary={postItem.summary}
                    imageURL={postItem.imageURL}
                    likedStatus={postItem.likedStatus}
                    savedStatus={postItem.savedStatus}
                    readingTime={postItem.readingTime}
                    likes={3} //
                    commentCount={4} //
                    approveStatus={false}

                ></PostSummary >)
            )
        }
        return (
            <div className="blank-layout">
                <Titlebar title="BÀI VIẾT" />
                <div className="blank-layout-container">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>

                        <div className="filter-label display-flex">
                            <div className="margin-right-5px">Tổng số:</div>
                            <div>{this.postsList.length}</div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className="filter-label text-align-right margin-right-5px">Bộ lọc:</div>
                            <div style={{ marginLeft: "5px" }}>
                                <ComboBox
                                    options={this.filter}
                                    placeHolder="Chọn bộ lọc"
                                    onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                    id="my-post-list-search-filter-combobox"
                                ></ComboBox></div>
                        </div>
                    </div>

                    {myPostsList}

                    <Paginator config={{
                        changePage: (pageNumber) => this.onPageChange(pageNumber),
                        maxItemPerPage: this.maxItemPerPage,
                        numShownPage: 5,
                        bottom: "31px"
                    }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        postsList:state.post.posts,
        postCategories: state.post.categories
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostsList, getPostCategories
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsList));
