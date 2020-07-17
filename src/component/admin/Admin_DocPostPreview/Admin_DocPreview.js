import React, { Component } from 'react'

import '../../shared_components/DocPostDetail.scss'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import gray_btn_element from '../../../img/gray_btn_element.png'

import Admin_Titlebar from '../_admin_components/Admin_Titlebar/Admin_Titlebar'
import Admin_RequestedDocSummaryItem from '../_admin_components/Admin_RequestedDocSummaryItem'
import { admin_getAllNotApprovedDocuments } from "../../../service/admin_services/admin_docAPIs"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Footer from '../../container/Footer'
import Header from '../../container/Header'

import gray_download_icon from '../../../img/gray_download_icon.png'
import PDFViewer from 'pdf-viewer-reactjs'

//import for pdf viewer:


class Admin_DocPreview extends Component {

    constructor(props) {
        super(props);

        // this.id = this.props.id;
        // this.authorName = this.props.authorName;
        // this.authorID = this.props.authorID;
        // this.requestedDate = this.props.requestedDate;
        // this.requestedTime = this.props.requestedTime;
        // this.requestedCategory = this.props.requestedCategory;
        // this.requestedCategoryID = this.props.requestedCategoryID;
        // this.semester = this.props.semester;
        // this.year = this.props.year;
        // this.subject = this.props.subject;
        // this.title = this.props.title;
        // this.content = this.props.content;
        // this.image = this.props.image;
        // this.tags = this.props.tags;
        // this.viewCount = this.props.viewCount;
        // this.downCount = this.props.downCount;

        this.id = "id";
        this.authorName = "Huỳnh Thị Kim Thảo";
        this.authorID = "authorID";
        this.requestedDate = "requestedDate";
        this.requestedTime = "requestedTime";
        this.requestedCategory = "requestedCategory";
        this.requestedCategoryID = "requestedCategoryID";
        this.semester = "semester";
        this.year = "year";
        this.subject = "subject";
        this.title = "Sức mạnh của người hướng nội";
        this.content = "Chúc mừng sinh nhật anh Đông!";
        this.image = "image";
        this.tags = "tags";
        this.postedTime = "22-08-2020";
        this.viewCount = "1000";
        this.downCount = "200";
        this.avartarUrl = "https://i.imgur.com/SZJgL6C.jpg";
        this.fileName = "Suy tưởng - Marcus Antonius Arellius.pdf";
        this.linkFile = "https://drive.google.com/file/d/1iozyo94uVp60oIjPkcD8BzdY7N7r2oLo/view?usp=sharing"
        // this.introduction = ""

        this.isRejectRequestedPopupOpen = false;


    }


    componentDidMount() {

    }

    getFirstImage() {

    }

    render() {

        return (
            <div>
                <Header />
                <div className="DocPost_Detail" >
                    <div className="DocPost_Detail_Main_Port">
                        <div className="DocPost_Detail_Title">
                            {this.title}
                        </div>

                        <div className="DocPost_Detail_Category_Header">

                            <div className="Prefix_DocPost_Detail_Category"> </div>
                            <div className="DocPost_Detail_Category">
                                {this.requestedCategory}
                            </div>
                            <img alt="*" className="DocPost_Detail_Time_Semester_Subject_Icon" src={gray_btn_element} />
                            <div className="DocPost_Detail_Time_Semester_Subject_Text">
                                Môn học: &nbsp;
                              {this.subject}
                            </div>
                            <img alt="*" className="DocPost_Detail_Time_Semester_Subject_Icon" src={gray_btn_element} />
                            <div className="DocPost_Detail_Time_Semester_Subject_Text">
                                Học kỳ: &nbsp;
                              {this.semester}
                            </div >
                            <img alt="*" className="DocPost_Detail_Time_Semester_Subject_Icon" src={gray_btn_element} />
                            <div className="DocPost_Detail_Time_Semester_Subject_Text">
                                Năm học: &nbsp;
                                 {this.year}
                            </div>
                        </div>

                        <div className="DocPost_User_Infor_Header">
                            <img src={this.avartarUrl} alt="avatar" className="DocPost_Detail_User_Infor_Avatar" />
                            <div style={{ flexDirection: "vertical" }}>
                                <div className="DocPost_Detail_User_Infor_Display_Name">{this.authorName}</div>
                                <div className="DocPost_Detail_User_Infor_Posted_Time">đã đăng và ngày {this.postedTime}</div>
                            </div>
                        </div>

                        <div className="DocPost_Detail_Content">
                            {this.content}
                        </div>

                        <div className="Doc_Detail_File_Name" onClick={() => window.open(this.linkFile)}>
                            {this.fileName}
                        </div>

                    </div>

                    <div className="Doc_Detail_View_Count_Doc_Count">
                        <div className="View_Count">lượt xem: {this.viewCount}</div>
                        <div className="Down_Count" style={{ display: "flex", marginLeft: "20px" }}>
                            <img src={gray_download_icon} alt="d" style={{ width: "20px", height: "20px" }} />
                            <div style={{ marginLeft: "5px" }}>
                                {this.downCount}
                            </div>
                        </div>
                    </div>
                    <div className="Document_Live_Preview">
                        <PDFViewer
                            document={{
                                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                            }}

                            hideRotation={true}
                            loader={true}
                            alert={true}
                            navbarOnTop={true}
                            css={{
                                navbarWrapper: "background: green",
                                zoomOutBtn: "background: green"
                            }}
                        // shape={
                        //     navbarWrapper: "background: green ",
                        //     zoomOutBtn: String,  // CSS Class for the ZoomOut Button
                        //     resetZoomBtn: String,  // CSS Class for the Reset Zoom Button
                        //     zoomInBtn: String,  // CSS Class for the ZoomIn Button
                        //     previousPageBtn: String,  // CSS Class for the PreviousPage button
                        //     pageIndicator: String,  // CSS Class for the Page Indicator
                        //     nextPageBtn: String,  // CSS Class for the NextPage button
                        //     rotateLeftBtn: String,  // CSS Class for the RotateLeft button
                        //     resetRotationBtn: String,  // CSS Class for the Reset Rotation button
                        //     rotateRightBtn: String  // CSS Class for the RotateRight button
                        // }
                        />
                    </div>
                    <div className="DocPost_Detail_Footer">
                        <div className="Simple_Blue_Button" style={{ marginRight: "5px", fontSize: "16px" }} onClick={() => this.handlerPreviewRequestedPost()}>Duyệt</div>
                        <div className="Simple_Red_Button" style={{ fontSize: "16px" }} onClick={() => { this.handlerRejectRequestedPost() }}>Từ chối</div>
                    </div>
                </div>



                {/* </div> */}

                {/* Popup for reject requested post */}
                <CustomModal
                    shadow={true}
                    type="confirmation"
                    open={this.isRejectRequestedPopupOpen}
                    title="Xác nhận?"
                    text="Xác nhận từ chối tiếp nhận bài viết này?"
                    closeModal={() => { this.isRejectRequestedPopupOpen = false; this.setState({}); }}
                >
                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyRejectRequestedPostConfirmation()}>OK</button>
                    <button className="Simple_White_Button" onClick={() => this.handleCancelRejectRequestedPostConfirmation()}>Cancel</button>

                </CustomModal>

                <Footer />
            </div >
        );
    }

    navigateToAuthorPersonalPage = () => {
        window.location.href = "/admin/user/" + this.authorID;
    }

    navigateToSameCategoryDocsPage = () => {
        window.location.href = "/docs/category?id=" + this.requestedCategoryID;
    }

    handlerPreviewRequestedPost = () => {
        window.location.href = "/admin/doc_approving/" + this.id;
    }

    handlerRejectRequestedPost = () => {
        this.isRejectRequestedPopupOpen = true;
        this.setState({});
    }

    handleCancelRejectRequestedPostConfirmation = () => {
        this.isRejectRequestedPopupOpen = false;
        this.setState({});
    }

    handlerVerifyRejectRequestedPostConfirmation = () => {
        this.isRejectRequestedPopupOpen = false;
        this.setState({});
    }

}
export default Admin_DocPreview;