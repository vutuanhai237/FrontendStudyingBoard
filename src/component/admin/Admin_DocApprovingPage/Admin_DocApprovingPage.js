/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../admin_components/Admin_Titlebar/Admin_Titlebar'
import Admin_RequestedDocSummaryItem from '../admin_components/Admin_RequestedDocSummaryItem'
import { admin_getAllNotApprovedDocuments } from "../../../service/admin_services/admin_docAPIs"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS } from '../../../constant';

class Admin_DocApprovingPage extends Component {
    constructor(props) {
        super();
        this.maxDocNumber = 10;
        this.isAdminBrower = true;

        this.state = {
            requestedDocs:
                [
                    {
                        "id": 60,
                        "url": "some text",
                        "title": "Ký sự ngày ngủ 5 tiếng",
                        "Summary": "some text",
                        "authorName": "Tesla",
                        "authorID": 33,
                        "categoryID": 51,
                        "category": "requestedCategory",
                        "requestedDate": "requested Date",
                        "requestedTime": "12:30:40",
                        "contentURL": "contentURL",
                        "downCount": 30,
                        "viewCount": 50,
                        "subject": "Cấu trúc rời rạc",
                        "semester": "Học kỳ I",
                        "year": "2019 - 2020",

                        "tags": [
                            "some tag",
                            "tag text"
                        ]
                    },
                    {
                        "id": 5,
                        "url": "some text",
                        "title": "Rảnh mà đi đặt tên, làm component đi",
                        "Summary": "Chào các bạn sinh viên Phòng Kế hoạch Tài chính Thông báo về việc thu học phí học kỳ 2, năm học 2019-2020, hạn đóng 2040, miễn giảm 200% ...",
                        "authorName": "Vu Tuan Hai",
                        "authorID": 29,
                        "categoryID": 51,
                        "category": "requestedCategory",
                        "requestedDate": "requested Date",
                        "requestedTime": "requested Time",
                        "contentURL": "contentURL",
                        "downCount": 40,
                        "viewCount": 0,
                        "subject": "Nhập môn mạch số",
                        "semester": "Học kỳ II",
                        "year": "2019 - 2020",

                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }
                ]
        }

    }

    componentDidMount() {

        this.props.admin_getAllNotApprovedDocuments();
    }
    render() {

        let { requestedDocs } = this.props;

        let summaryRequestedDocList =
            requestedDocs.map((requestedDoc) => (
                < Admin_RequestedDocSummaryItem
                    key={requestedDoc.id}
                    role="ADMIN_ROLE"
                    isAdminBrowser={this.isAdminBrower}
                    authorName={requestedDoc.authorName}
                    authorID={requestedDoc.authorID}
                    semester={requestedDoc.semester}
                    year={requestedDoc.year}
                    requestedDate={requestedDoc.requestedDate}
                    requestedTime={requestedDoc.requestedTime}
                    requestedCategory={requestedDoc.category}
                    title={requestedDoc.title}
                    content={requestedDoc.Summary}
                    tags={requestedDoc.tags}
                    likeCount={requestedDoc.likeCount}
                    commentCount={requestedDoc.commentCount}
                    subject={requestedDoc.subject}
                ></Admin_RequestedDocSummaryItem >)
            )


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
    console.log("*Map state to props function has been called!  ");
    console.log(state.admin_doc);
    return {
        requestedDocs: state.admin_doc.requestedDocs
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    admin_getAllNotApprovedDocuments
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Admin_DocApprovingPage));
