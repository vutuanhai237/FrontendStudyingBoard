/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import '../ManagementPage'
import Management_Titlebar from 'components/management/Management_Titlebar/Management_Titlebar'
import Management_RequestedDocSummaryItem from 'components/management/Management_RequestedDocSummary/Management_RequestedDocSummary'

import Paginator from 'components/common/Paginator/ClientPaginator'

//import for redux
import { management_getAllNotApprovedDocuments } from "services/management_services/management_docAPIs"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Management_DocApprovingPage extends Component {
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
                    "categoryName": "De thi",
                    "subjectID": 1,
                    "subjectName": "Nh?p môn l?p trình",
                    "viewCount": 0,
                    "downloadCount": 0,
                    "documentPublishDtm": "Jul 13, 2020"
                }],
            currentInteractList: []
        }

    }

    componentDidMount() {
        this.props.management_getAllNotApprovedDocuments();
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
                < Management_RequestedDocSummaryItem
                    key={requestedDoc.id}
                    id={requestedDoc.id}
                    authorName={requestedDoc.authorName}
                    authorID={requestedDoc.authorID}
                    requestedDate={requestedDoc.requestedDate}
                    requestedTime={requestedDoc.requestedTime}
                    requestedCategory={requestedDoc.categoryName}
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
                    publishDate={requestedDoc.documentPublishDtm}

                ></Management_RequestedDocSummaryItem >)
            )
        }
        return (
            <div>
                <Management_Titlebar title="PHÊ DUYỆT TÀI LIỆU" />
                <div className="Management_Show_Layout">

                    <div className="Number_Of_Item">
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

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        requestedDocs: state.management_doc.requestedDocs,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    management_getAllNotApprovedDocuments
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Management_DocApprovingPage));
