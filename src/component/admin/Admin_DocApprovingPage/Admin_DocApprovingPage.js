/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_admin_components/Admin_Titlebar/Admin_Titlebar'
import Admin_RequestedDocSummaryItem from '../_admin_components/Admin_RequestedDocSummaryItem'
import { admin_getAllNotApprovedDocuments } from "../../../service/admin_services/admin_docAPIs"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Admin_DocApprovingPage extends Component {
    constructor(props) {
        super();
        this.maxDocNumber = 10;
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
                }]
        }

    }

    componentDidMount() {
        this.props.admin_getAllNotApprovedDocuments();
    }
    render() {
        let summaryRequestedDocList = <></>; //sau nay se lam mot cai content loader.

        if (this.props.requestedDocs) {
            summaryRequestedDocList =
                this.props.requestedDocs.map((requestedDoc) => (
                    < Admin_RequestedDocSummaryItem
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

                    ></Admin_RequestedDocSummaryItem >)
                )
        }
        return (
            <div>
                <Admin_Titlebar title="PHÊ DUYỆT TÀI LIỆU" />
                <div className="Admin_Show_Port">
                    {summaryRequestedDocList}
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    // console.log("*Map state to props function has been called!  ");
    console.log(state.admin_doc);
    return {
        requestedDocs: state.admin_doc.requestedDocs
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    admin_getAllNotApprovedDocuments
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Admin_DocApprovingPage));
