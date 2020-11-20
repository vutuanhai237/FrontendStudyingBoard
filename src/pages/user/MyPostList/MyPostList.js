/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Titlebar from 'components/common/Titlebar/Titlebar'
import PostSummary from 'components/post/PostSummary'

import Paginator from 'components/common/Paginator/ServerPaginator'

//import for redux
import { getUserPostsList } from "services/authorized/postServices"
import { getPostCategories } from "services/postServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComboBox from 'components/common/Combobox/Combobox';

class MyPostList extends Component {
    constructor(props) {
        super();

        this.maxItemPerPage = 5;
        this.userPostsList = [];

        this.filter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Bài viết đã lưu" },
            { id: 3, name: "Chưa phê duyệt" },
            { id: 4, name: "Đã phê duyệt" }
        ]

        this.state = {

        }
    }

    componentDidMount() {
        //must implement: get filter, get doc, page change
        //get filter


        this.props.getUserPostsList(); //
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
        // console.log(this.state.currentInteractList);
        console.log("AA");
        console.log(this.props)
        if (this.props.userPostsList) {
            console.log("AA");
            console.log(this.props)
            this.userPostsList = this.props.userPostsList;

            myPostsList = this.props.userPostsList.map((myPostItem) => (
                <PostSummary
                    key={myPostItem.id}
                    id={myPostItem.id}
                    authorName={myPostItem.authorName}
                    authorID={myPostItem.authorID}
                    publishDate={myPostItem.publishDate}
                    categoryName={myPostItem.categoryName}
                    categoryID={myPostItem.categoryID}
                    title={myPostItem.title}
                    summary={myPostItem.summary}
                    imageURL={myPostItem.imageURL}
                    likedStatus={myPostItem.likedStatus}
                    savedStatus={myPostItem.savedStatus}
                ></PostSummary >)
            )
        }
        return (
            <div>
                <Titlebar title="BÀI VIẾT CỦA TÔI" />
                <div className="left-side-bar-layout-content-container">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>

                        <div className="filter-label display-flex">
                            <div className="margin-right-5px">Tổng số:</div>
                            <div>{this.userPostsList.length}</div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className="filter-label text-align-right margin-right-5px">Bộ lọc:</div>
                            <div style={{ marginLeft: "5px" }}> <ComboBox
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
                        numPagesShown: 5,
                        bottom: "31px"
                    }}
                    />
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        userPostsList: state.management_post.userPostsList,
        postCategories: state.doc.categories
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserPostsList, getPostCategories
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(MyPostList));
