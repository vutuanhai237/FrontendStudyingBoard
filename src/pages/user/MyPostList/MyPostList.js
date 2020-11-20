/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Titlebar from 'components/common/Titlebar/Titlebar'
import DocSummaryItem from 'components/shared_components/DocSummaryItem'

import Paginator from 'components/common/Paginator/ServerPaginator'

//import for redux
import { management_getAllUserDocList } from "services/management_services/management_docAPIs"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComboBox from 'components/common/Combobox/Combobox';

class MyPostList extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 5;

        this.userDocList = [];

        this.state = {
            currentInteractList: []
        }

        this.filter = [
            { id: 1, value: "Tất cả" },
            { id: 2, value: "Bài viết đã lưu" },
            { id: 3, value: "Chưa phê duyệt" },
            { id: 4, value: "Đã phê duyệt" }
        ]

        this.state = {

        }
    }

    componentDidMount() {

        this.props.management_getAllUserDocList(1);
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
        let myPostList = <></>; //sau nay se lam mot cai content loader.
        // console.log(this.state.currentInteractList);
        if (this.props.userDocList) {
            this.userDocList = this.props.userDocList;

            myPostList = this.state.currentInteractList.map((myPostItem) => (
                < DocSummaryItem
                    key={myPostItem.id}
                    id={myPostItem.id}
                    authorName={myPostItem.authorName}
                    authorID={myPostItem.authorID}
                    publishedDate={myPostItem.documentPublishDtm}
                    publishedTime={myPostItem.myTime}
                    categoryName={myPostItem.categoryName}
                    categoryID={myPostItem.categoryID}
                    title={myPostItem.title}
                    content={myPostItem.summary}
                    subjectName={myPostItem.subjectName}
                    subjectID={myPostItem.subjectID}
                ></DocSummaryItem >)
            )
        }
        return (
            <div>
                <Titlebar title="BÀI VIẾT CỦA TÔI" />
                <div className="left-side-bar-layout-content-container">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div className="gray-label">
                            Tổng số:
                            <div style={{ width: "5px" }} />
                            {this.userDocList.length}
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className="gray-label">Bộ lọc:</div>
                            <div style={{ marginLeft: "5px" }}> <ComboBox
                                options={this.filter}
                                placeHolder="Chọn bộ lọc"
                                onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                id="my-post-list-search-filter-combobox"
                            ></ComboBox></div>
                        </div>
                    </div>

                    {myPostList}

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
    return {
        userDocList: state.management_doc.userDocList,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    management_getAllUserDocList
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(MyPostList));
