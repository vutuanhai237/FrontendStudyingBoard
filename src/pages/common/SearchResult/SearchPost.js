import React, { Component } from "react";
import Tag from "components/common/Tag/Tag"
import { getPostSearchResult } from "redux/services/postServices"
import { getPostCategories } from "redux/services/postCategoryServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComboBox from 'components/common/Combobox/Combobox';
import { getSearchParamByName, isContainSpecialCharacter, setSearchParam } from 'utils/urlUtils'
import Paginator from 'components/common/Paginator/ServerPaginator'
import PostSummary from 'components/post/PostSummary'
import Loader from 'components/common/Loader/Loader'
import { summaryItemType } from 'constants.js'

class SearchPost extends Component {
    constructor(props) {
        super(props);

        this.postSearchResult = [];
        this.categoryFilters = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Danh mục 1" },
            { id: 3, name: "Danh mục 2" },
            { id: 4, name: "Danh mục 3" }
        ]
        this.timeFilters = [
            { id: 1, name: "Mới nhất" },
            { id: 2, name: "Cũ nhất" },
            { id: 3, name: "7 ngày qua" },
            { id: 4, name: "Hôm nay" }
        ]
    }

    async componentDidMount() {

        let page = getSearchParamByName('page');
        let category = getSearchParamByName('category');
        let searchTerm = getSearchParamByName('q'); //querry
        this.props.getPostSearchResult(page ? page : 1, category ? category : "", searchTerm ? searchTerm : ""); //api khác, tìm bằng tag
    }

    //server paginator
    onPageChange = (pageNumber) => {
        setSearchParam("page", pageNumber);
        let page = getSearchParamByName('page');
        let category = getSearchParamByName('category');
        let searchTerm = getSearchParamByName('q'); //querry
        this.props.getPostSearchResult(page ? page : 1, category ? category : "", searchTerm ? searchTerm : ""); //api khác, tìm bằng tag
        this.setState({});
    }
    
    render() {

        if (!this.props.isListLoading) {
            this.postSearchResult = this.props.postSearchResult.map((postItem) => (

                <PostSummary
                    type={summaryItemType.normal}
                    key={postItem.id}
                    id={postItem.id}
                    authorName={postItem.authorName}
                    authorID={postItem.authorID}
                    publishDtm={postItem.publishDtm}
                    category={postItem.categoryName}
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

                <div className="two-element-filter-container">
                    <div style={{ display: "flex" }}>
                        <div className="filter-label text-align-right mg-right-5px">Thời gian:</div>
                        <div style={{ marginLeft: "5px" }}>
                            <ComboBox
                                // selectedOptionID={getSearchParamByName('category') ? getSearchParamByName('category') : 1}
                                options={this.timeFilters}
                                placeHolder="Chọn thời gian"
                                onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                id="search-post-time-filter-combobox"
                            ></ComboBox>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="filter-label text-align-right mg-right-5px">Danh mục:</div>
                        <div style={{ marginLeft: "5px" }}>
                            <ComboBox
                                // selectedOptionID={getSearchParamByName('category') ? getSearchParamByName('category') : 1}
                                options={this.categoryFilters}
                                placeHolder="Chọn danh mục"
                                onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                id="search-post-category-filter-combobox"
                            ></ComboBox>
                        </div>
                    </div>
                </div>

                {
                    this.props.isListLoading ?
                        < Loader /> :
                        <div>
                            <div className="gray-label margin-bottom-10px"> Tổng số kết quả: {"20"}  </div>
                            <div className="list-item-container">{this.postSearchResult}</div>
                        </div>
                }

                < Paginator config={{
                    changePage: (pageNumber) => this.onPageChange(pageNumber),
                    pageCount: 1200,
                    currentPage: getSearchParamByName('page')
                }} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        postSearchResult: state.post.postsList.data,
        postCategories: state.post_category.categories.data,
        isListLoading: state.post.postsList.isLoading,
        isCategoryLoading: state.post_category.categories.isLoading
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostSearchResult, getPostCategories
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPost));
