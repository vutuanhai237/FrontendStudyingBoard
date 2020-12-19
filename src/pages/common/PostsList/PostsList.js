/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Titlebar from 'components/common/Titlebar/Titlebar'
import PostSummary from 'components/post/PostSummary'
import Paginator from 'components/common/Paginator/ServerPaginator'
import 'layouts/Layout.scss'
import { summaryItemType } from 'constants.js'

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
        this.postsList = [];

        this.categoryFilter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Chưa phê duyệt" },
            { id: 3, name: "Đã phê duyệt" },
            { id: 4, name: "Cần xem lại" }
        ]

        this.timeFilter = [
            { id: 1, name: "Mới nhất" },
            { id: 2, name: "Cũ nhất" }
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
        let postsList = <></>;
        if (this.props.postsList) {

            this.postsList = this.props.postsList;

            postsList = this.props.postsList.map((postItem) => (
                <PostSummary
                    type={summaryItemType.normal}
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
            <div className = "nm-bl-layout">
                <Titlebar title="BÀI VIẾT" />
                <div className="layout-container">
                    <div className="margin-top-10px" />
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div style={{ display: "flex" }}>
                            <div className="filter-label text-align-right margin-right-5px">Thời gian:</div>
                            <div style={{ marginLeft: "5px" }}>
                                <ComboBox
                                    options={this.timeFilter}
                                    placeHolder="Chọn bộ lọc"
                                    onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                    id="post-list-time-filter-combobox"
                                ></ComboBox></div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className="filter-label text-align-right margin-right-5px">Danh mục:</div>
                            <div style={{ marginLeft: "5px" }}>
                                <ComboBox
                                    options={this.categoryFilter}
                                    placeHolder="Chọn danh mục"
                                    onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                    id="my-post-list-category-filter-combobox"
                                ></ComboBox></div>
                        </div>

                    </div>
                    <div className="margin-top-10px" />

                    {postsList}

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
        postsList: state.post.posts,
        postCategories: state.post.categories
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostsList, getPostCategories
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsList));
