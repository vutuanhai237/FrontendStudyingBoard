/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Titlebar from 'components/common/Titlebar/Titlebar'
import DocSummary from 'components/doc/DocSummary'
import Paginator from 'components/common/Paginator/ServerPaginator';
import ComboBox from 'components/common/Combobox/Combobox';

//import for redux
import { getMyDocuments } from "services/authorized/docServices"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MyDocuments extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 5;

        this.myDocuments = [];

        this.filter = [
            { id: 1, name: "Tất cả" },
            { id: 2, name: "Chưa phê duyệt" },
            { id: 3, name: "Đã phê duyệt" },
            { id: 4, name: "Cần xem lại" }
        ]
    }

    componentDidMount() {
        this.props.getMyDocuments();
        // this.props.getDocCategory();
    }

    //server
    onPageChange = (pageNumber) => {

    }


    render() {

        let myDocumentsList = <></>;

        console.log("^^^"); console.log(this.props);
        if (this.props.myDocuments) {
            this.myDocuments = this.props.myDocuments;

            myDocumentsList = this.myDocuments.map((myDoc) => (
                < DocSummary
                    key={myDoc.id}
                    id={myDoc.id}
                    authorName={myDoc.authorName}
                    authorID={myDoc.authorID}
                    publishedDtm={myDoc.publishedDtm}
                    category={myDoc.category}
                    categoryID={myDoc.categoryID}
                    title={myDoc.title}
                    views={myDoc.views}
                    downloads={myDoc.downloads}
                    subject={myDoc.subject}
                    subjectID={myDoc.subjectID}
                    likes={myDoc.likes}
                    dislikes={myDoc.dislikes}
                    description={myDoc.description}
                    imageURL={myDoc.imageURL}


                ></DocSummary >)
            )
        }
        return (
            <div>
                <Titlebar title="TÀI LIỆU CỦA TÔI" />
                <div className="left-side-bar-layout-content-container">
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
                                    placeHolder="Chọn bộ lọc"
                                    onOptionChanged={(selectedOption) => this.onFilterOptionChanged(selectedOption)}
                                    id="my-doc-list-search-filter-combobox"
                                ></ComboBox></div>
                        </div>
                    </div>

                    {myDocumentsList}

                    <Paginator config={{
                        changePage: (pageNumber) => this.onPageChange(pageNumber),
                        pageCount: 20,
                        numShownPage: 5
                    }}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myDocuments: state.management_doc.myDocuments,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMyDocuments
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyDocuments));
