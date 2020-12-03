/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Titlebar from 'components/common/Titlebar/Titlebar'
import PostSummary, { postSummaryType } from 'components/post/PostSummary'

import Paginator from 'components/common/Paginator/ServerPaginator'

//import for redux
import { getMyPostsList } from "services/authorized/postServices"
import { getPostCategories } from "services/postServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComboBox from 'components/common/Combobox/Combobox';
import { getSearchParamByName, setSearchParam } from 'utils/Utils'

//Sample URL: http://localhost:3000/user/my_posts?page=3&category=1
class MyPostList extends Component {
    constructor(props) {
        super();

        this.myPostsList = [];

        this.filter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Chưa phê duyệt" },
            { id: 3, name: "Đã phê duyệt" },
            { id: 4, name: "Cần xem lại" }
        ]

        this.state = { isLoading: true };

    }

    async componentDidMount() {
        //must implement: get filter, get doc, page change
        //get filter

        this.props.getMyPostsList();
        this.props.getPostCategories()
    }

    //server paginator
    onPageChange = (pageNumber) => {
        console.log(setSearchParam("page", pageNumber));
    }

    //combobox
    onFilterOptionChanged = (selectedOption) => {
        console.log(selectedOption);

    }

    render() {
        //sau nay se lam mot cai content loader.
        let myPostsList = <></>;
        console.log(this.props);

        if (this.props.myPostsList) {

            myPostsList = this.props.myPostsList.map((postItem) => (
                <PostSummary
                    type={postSummaryType.mySelf}
                    key={postItem.id}
                    id={postItem.id}
                    authorName={postItem.authorName}
                    authorID={postItem.authorID}
                    publishedDtm={postItem.publishedDtm}
                    category={postItem.category}
                    categoryID={postItem.categoryID}
                    title={postItem.title}
                    summary={postItem.summary}
                    imageURL={postItem.imageURL}
                    likedStatus={postItem.likedStatus}
                    savedStatus={postItem.savedStatus}
                    readingTime={postItem.readingTime}
                    likes={postItem.likes}
                    comments={postItem.commentCount}
                    approveStatus={false}
                ></PostSummary >)
            )
        }
        return (
            <div>
                <Titlebar title="BÀI VIẾT CỦA TÔI" />
                <div className="left-side-bar-layout-content-container">
                    <div className="two-element-filter-container">
                        <div style={{ display: "flex" }}>
                            <div className="filter-label text-align-right margin-right-5px">Danh mục:</div>
                            <div style={{ marginLeft: "5px" }}>
                                <ComboBox
                                    options={this.filter}
                                    placeHolder="Chọn danh mục"
                                    onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                    id="my-post-list-search-filter-combobox"
                                ></ComboBox>
                            </div>
                        </div>

                        <div className="filter-label display-flex">
                            <div className="margin-right-5px">Tổng số:</div>
                            <div>{this.myPostsList.length}</div>
                        </div>
                    </div>

                    {myPostsList}

                    <Paginator config={{
                        changePage: (pageNumber) => this.onPageChange(pageNumber),
                        pageCount: 20,
                        numPagesShown: 5
                    }}
                    />
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        myPostsList: store.management_post.myPostsList,
        postCategories: store.doc.categories, 
        // postLoading:store.
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMyPostsList, getPostCategories
}, dispatch);

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(MyPostList));
