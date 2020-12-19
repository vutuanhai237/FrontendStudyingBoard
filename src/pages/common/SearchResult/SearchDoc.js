import React, { Component } from "react";
import Tag from "components/common/Tag/Tag"
import { getMyDocumentsList } from "redux/services/docServices"
import { getDocCategories } from "redux/services/docCategoryServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ComboBox from 'components/common/Combobox/Combobox';
import { getSearchParamByName, isContainSpecialCharacter, setSearchParam } from 'utils/utils'
import Paginator from 'components/common/Paginator/ServerPaginator'
import DocSummary from 'components/doc/DocSummary'
import Loader from 'components/common/Loader/Loader'
import { summaryItemType } from 'constants.js'

class SearchDoc extends Component {
    constructor(props) {
        super(props);

        this.documentResult = [];

        this.filter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Chưa phê duyệt" },
            { id: 3, name: "Đã phê duyệt" },
            { id: 4, name: "Cần xem lại" }
        ]
    }

    async componentDidMount() {
        this.props.getDocCategories();

        let page = getSearchParamByName('page');
        let category = getSearchParamByName('category');

        this.props.getMyDocumentsList(page, category); //api khác, tìm bằng tag
    }

    //server paginator
    onPageChange = (pageNumber) => {
        setSearchParam("page", pageNumber);
        let page = getSearchParamByName('page');
        let category = getSearchParamByName('category');
        this.props.getMyDocumentsList(page, category);
        this.setState({});
    }

    //combobox
    onFilterOptionChanged = (selectedOption) => {
        setSearchParam("category", selectedOption.id);
        let page = getSearchParamByName('page');
        let category = getSearchParamByName('category');
        this.props.getMyDocumentsList(page, category);
        this.setState({});
    }
    render() {

        if (!this.props.isListLoading) {
            this.myDocumentsList = this.props.myDocumentsList.map((documentItem) => (
                <DocSummary
                    type={summaryItemType.normal}
                    key={documentItem.id}
                    id={documentItem.id}
                    authorName={documentItem.authorName}
                    authorID={documentItem.authorID}
                    publishDtm={documentItem.publishDtm}
                    category={documentItem.categoryName}
                    categoryID={documentItem.categoryID}
                    title={documentItem.title}
                    summary={documentItem.summary}
                    imageURL={documentItem.imageURL}
                    likedStatus={documentItem.likedStatus}
                    savedStatus={documentItem.savedStatus}
                    readingTime={documentItem.readingTime}
                    likes={documentItem.likes}
                    comments={documentItem.commentCount}
                    approveStatus={false}
                ></DocSummary >)
            )
        }
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>

                    <div className="filter-label display-flex">
                        <div className="margin-right-5px">Tổng số:</div>
                        <div>{this.myDocuments.length}</div>
                    </div>

                    <div style={{ display: "flex" }}>
                        <div className="filter-label text-align-right margin-right-5px">Bộ lọc:</div>
                        <div style={{ marginLeft: "5px" }}>
                            <ComboBox
                                options={this.filter}
                                selectedOptionID={1}
                                onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                id="search-doc-result-search-filter-combobox"
                            ></ComboBox></div>
                    </div>
                </div>
                <div>
                    {
                        this.props.isListLoading ?
                            < Loader /> :
                            <>{this.myDocumentsList}</>
                    }

                    < Paginator config={{
                        changePage: (pageNumber) => this.onPageChange(pageNumber),
                        pageCount: 7,
                        currentPage: getSearchParamByName('page')
                    }} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        myDocumentsList: state.document.myDocuments.data,
        docCategories: state.doc_category.categories.data,
        isListLoading: state.document.myDocuments.isLoading,
        isCategoryLoading: state.doc_category.categories.isLoading
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMyDocumentsList, getDocCategories
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocSummary));
