/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import '../AdminLayout'
import Titlebar from 'components/common/Titlebar/Titlebar'
import RequestedDocSummary from 'components/doc/RequestedDocSummary'

import Paginator from 'components/common/Paginator/ClientPaginator'

//import for redux
import { getNotApprovedDocumentsList } from "services/authorized/docServices"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class DocApprovingPage extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 5;

        this.notApprovedDocumentsList = [];

        this.state = {
            requestedDocs: [
                {
                    "id": 14,
                    "title": "tieu de tai lieu",
                    "authorName": "phucnh",
                    "authorID": 1,
                    "categoryID": 1,
                    "category": "De thi",
                    "subjectID": 1,
                    "subjectName": "Nh?p môn l?p trình",
                    "viewCount": 0,
                    "downloadCount": 0,
                    "documentpublishedDtm": "Jul 13, 2020"
                }],
            currentInteractList: []
        }

    }

    componentDidMount() {
        this.props.getNotApprovedDocumentsList();
    }

    //client
    onPageChangeClient = (currentInteractList) => {
        this.setState({ currentInteractList: currentInteractList })
    }

    render() {
        let summaryRequestedDocList = <></>; //sau nay se lam mot cai content loader.
        // console.log(this.state.currentInteractList);
        if (this.props.requestedDocs) {
            this.notApprovedDocumentsList = this.props.requestedDocs;

            summaryRequestedDocList = this.state.currentInteractList.map((requestedDoc) => (
                < RequestedDocSummary
                    key={requestedDoc.id}
                    id={requestedDoc.id}
                    authorName={requestedDoc.authorName}
                    authorID={requestedDoc.authorID}
                    requestedDate={requestedDoc.requestedDate}
                    requestedTime={requestedDoc.requestedTime}
                    requestedCategory={requestedDoc.category}
                    requestedCategoryID={requestedDoc.categoryID}
                    title={requestedDoc.title}
                    content={requestedDoc.summary}
                    viewCount={requestedDoc.viewCount}
                    downloadCount={requestedDoc.downloadCount}
                    subject={requestedDoc.subjectName}
                    subjectID={requestedDoc.subjectID}
                    // lost
                    semester={requestedDoc.semester}
                    year={requestedDoc.year}
                    //not need
                    publishedDtm={requestedDoc.documentpublishedDtm}

                ></RequestedDocSummary >)
            )
        }
        return (
            <div>
                <Titlebar title="PHÊ DUYỆT TÀI LIỆU" />
                <div className="left-side-bar-layout-content-container">

                    <div className="number-of-item">
                        Tổng số:
                        <div style={{ width: "5px" }} />
                        {this.notApprovedDocumentsList.length}
                    </div>

                    {summaryRequestedDocList}

                    <Paginator config={{
                        changePage: (currentInteractList) => this.onPageChangeClient(currentInteractList),
                        rawData: [...this.notApprovedDocumentsList],
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

const mapStoreToProps = (store) => {
    return {
        requestedDocs: store.management_doc.requestedDocs,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNotApprovedDocumentsList
}, dispatch);

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(DocApprovingPage));
