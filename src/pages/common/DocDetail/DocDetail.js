import React, { Component } from 'react'

import 'components/shared_components/DocPostDetail.scss'
import 'components/shared_components/DPD_ResponsiveLayout.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_btn_element from 'assets/images/gray_btn_element.png'

import { management_getCurrentPreviewDocument } from "services/management_services/management_docAPIs"
import { getCurrentUser } from "services/UserAPI"
import { isGrantedPermissions, DocumentPermission } from "utils/PermissionManagement"
import { getDocumentByID } from "services/DocAPI"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import gray_download_icon from 'assets/images/gray_download_icon.png'
import PDFViewer from 'pdf-viewer-reactjs'
import { PORT } from 'constants/constants'
import Cookies from 'js-cookie'

//import for pdf viewer:


class DocDetail extends Component {

    constructor(props) {
        super(props);

        this.documentID = "";
        this.isGrantedPermissions = isGrantedPermissions.bind(this);

        this.id = "";
        this.authorName = "Huỳnh Thị Kim Thảo";
        this.authorID = "authorID";
        this.requestedDate = "requestedDate";
        this.requestedTime = "requestedTime";
        this.categoryName = "categoryName";
        this.categoryID = "categoryID";
        this.semesterName = "semesterName";
        this.year = "year";
        this.subject = "subject";
        this.title = "Sức mạnh của người hướng nội";
        this.content = "Chúc mừng sinh nhật anh Đông!";
        this.image = "image";
        this.tags = "tags";
        this.uploadedTime = "22-08-2020";
        this.viewCount = "1000";
        this.downloadCount = "200";
        this.avartarUrl = 'https://i.imgur.com/SZJgL6C.jpg';
        this.fileName = "Suy tưởng - Marcus Antonius Arellius.pdf";
        this.linkFile = ""

        this.isRejectRequestedPopupOpen = false;
        this.isApproveRequestedPopupOpen = false;
        this.isAnyFailedAlertPopupOpen = false;
        this.isAnySuccessAlertPopupOpen = false;

    }

    componentDidMount() {
        this.fetchCurrentNotApprovedDocument();
    }

    fetchCurrentNotApprovedDocument = () => {
        this.documentID = this.props.match.params.id;
        this.props.getDocumentByID(this.documentID);
        this.props.getCurrentUser();
    }

    render() {

        console.log(this.props);

        if (this.props.accountInformation) {

            if (this.props.document) {
                if (this.props.document.statusCode === 14)
                    return <>Không tìm thấy tài nguyên {window.location.href = "/"}</>;
                this.document = this.props.document.documentDTO;
                this.id = this.document.id;
                this.authorName = this.document.authorName;
                this.authorID = this.document.authorID;
                this.categoryName = this.document.categoryName;
                this.categoryID = this.document.categoryID;
                this.semesterName = this.document.semesterName;
                this.semesterID = this.document.semesterID;
                this.subject = this.document.subjectName;
                this.title = this.document.title;
                this.content = this.document.summary;
                this.uploadedTime = "22-08-2020";
                this.viewCount = this.document.viewCount;
                this.downloadCount = this.document.downloadCount;
                this.avartarUrl = this.document.authorAvatar;
                this.fileName = this.document.fileName;
                this.linkFile = this.document.url;
            }

            return (
                <div>
                    <div className="DocPost_Detail" >
                        {this.props.document ?

                            <div>
                                <div className="DocPost_Detail_Main_Layout">

                                    <div className="DocPost_Detail_Title">
                                        {this.title}
                                    </div>

                                    <div className="DocPost_Metadata_Header">

                                        <div className="Prefix_DocPost_Category"> </div>
                                        <div className="DocPost_Category">
                                            {this.categoryName}
                                        </div>
                                        <img alt="*" className="DocPost_Metadata_Icon" src={gray_btn_element} />
                                        <div className="DocPost_Metadata_Text">
                                            Môn học: &nbsp;
                                            {this.subject}
                                        </div>
                                        <img alt="*" className="DocPost_Metadata_Icon" src={gray_btn_element} />
                                        <div className="DocPost_Metadata_Text">
                                            Học kỳ: &nbsp;
                                            {this.semesterName}
                                        </div >
                                        <img alt="*" className="DocPost_Metadata_Icon" src={gray_btn_element} />
                                        <div className="DocPost_Metadata_Text">
                                            Năm học: &nbsp;
                                            {this.year}
                                        </div>
                                    </div>

                                    <div className="DocPost_User_Infor_Header">
                                        <img src={this.avartarUrl} alt="avatar" className="DocPost_Detail_User_Infor_Avatar" />
                                        <div style={{ flexDirection: "vertical" }}>
                                            <div className="DocPost_Detail_User_Infor_Display_Name">{this.authorName}</div>
                                            <div className="DocPost_Detail_User_Infor_Posted_Time">đã đăng vào ngày {this.uploadedTime}</div>
                                        </div>
                                    </div>

                                    <div className="DocPost_Detail_Content">
                                        {this.content}
                                    </div>

                                    <div className="Doc_Summary_File_Name"
                                        onClick={() => window.open("https://drive.google.com/file/d/" + this.linkFile + "/preview")}>
                                        {this.fileName}
                                    </div>

                                </div>

                                <div className="Doc_Detail_View_Count_Doc_Count">
                                    <div className="View_Count">lượt xem: {this.viewCount}</div>
                                    <div className="Down_Count" style={{ display: "flex", marginLeft: "20px" }}>
                                        <img src={gray_download_icon} alt="d" style={{ width: "20px", height: "20px" }} />
                                        <div style={{ marginLeft: "5px" }}>
                                            {this.downloadCount}
                                        </div>
                                    </div>
                                </div>
                                <div className="Document_Live_Preview">

                                    <iframe src={"https://drive.google.com/file/d/" + this.linkFile + "/preview"} width="100%" height="100%"></iframe>

                                </div>
                                {/* <div className="DocPost_Detail_Footer">
                                    <div className="blue-button" style={{ marginRight: "5px", fontSize: "16px" }} onClick={() => this.handlerApproveRequestedPost()}>Duyệt</div>
                                    <div className="red-button" style={{ fontSize: "16px" }} onClick={() => { this.handlerRejectRequestedPost() }}>Từ chối</div>
                                </div> */}
                            </div> :
                            <div className="padding_10px Simple_Gray_Label">
                                Loading ...
                            </div>
                        }
                    </div>

                    {/* Popup for reject requested post */}
                    <CustomModal
                        shadow={true}
                        type="confirmation"
                        open={this.isRejectRequestedPopupOpen}
                        title="Xác nhận?"
                        text="Xác nhận từ chối tiếp nhận bài viết này?"
                        closeModal={() => { this.isRejectRequestedPopupOpen = false; this.setState({}); }}
                    >
                        <button className="blue-button margin_right_5px" onClick={() => this.handlerVerifyRejectRequestedPostConfirmation()}>OK</button>
                        <button className="white-button" onClick={() => this.handleCancelRejectRequestedPostConfirmation()}>Cancel</button>

                    </CustomModal>

                    {/* Popup for approve requested post */}
                    <CustomModal
                        shadow={true}
                        type="confirmation"
                        open={this.isApproveRequestedPopupOpen}
                        title="Xác nhận?"
                        text="Xác nhận duyệt bài viết này?"
                        closeModal={() => { this.isApproveRequestedPopupOpen = false; this.setState({}); }}
                    >
                        <button className="blue-button margin_right_5px" onClick={() => this.handlerVerifyApproveRequestedPostConfirmation()}>OK</button>
                        <button className="white-button" onClick={() => this.handleCancelApproveRequestedPostConfirmation()}>Cancel</button>
                    </CustomModal>

                    {/* modal for notification anything */}
                    <CustomModal
                        open={this.isAnyFailedAlertPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_fail"
                        closeModal={() => { this.isAnyFailedAlertPopupOpen = false; this.setState({}) }}
                    >
                    </CustomModal>

                    <CustomModal
                        open={this.isAnySuccessAlertPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_success"
                        closeModal={() => { this.isAnySuccessAlertPopupOpen = false; this.setState({}) }}
                    >
                    </CustomModal>

                </div >
            );
        }

        return <></>
    }
    //#region navigate region
    navigateToAuthorPersonalPage = () => {

        //neu khong la admin => home
        if (window.location.pathname.substring(0, 6) === "/admin" && this.roleName === "ADMIN")
            return <>{window.location.pathname = "admin/user_management/" + this.authorID}</>;

        //neu la admin => admin
        if (window.location.pathname.substring(0, 5) === "/user" && this.roleName === "COLLABORATOR")
            return <>{window.location.pathname = "/user/" + this.authorID}</>;
        ;
    }

    navigateToSameCategoryDocsPage = () => {
        window.location.href = "/docs/category?id=" + this.categoryID;
    }
    //#endregion

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

    handlerApproveRequestedPost = () => {
        this.isApproveRequestedPopupOpen = true;
        this.setState({});
    }

    handlerVerifyApproveRequestedPostConfirmation = () => {

        fetch(`http://${PORT}/admin/docs/approved?id=${this.documentID}&sessionID=` + Cookies.get('JSESSIONID'),
            {
                method: 'GET'
            })
            .then(response => response.text())
            .then(
                result => {
                    // if (result.statusCode === 16) {
                    this.notifyHeader = "Thành công";
                    this.notifyContent = "Duyệt tài liệu thành công!";
                    this.isApproveRequestedPopupOpen = false;
                    this.isAnySuccessAlertPopupOpen = true;
                    this.setState({})
                    // }
                    // else {
                    // this.notifyHeader = "Thất bại";
                    // this.notifyContent = "Duyệt tài liệu không thành công!";
                    // this.isApproveRequestedPopupOpen = false;
                    // this.isAnyFailedAlertPopupOpen = true;
                    // console.log(result);
                    // this.setState({})
                    // }
                }
            )
            .catch(error => console.log('error', error));
    }

    handleCancelApproveRequestedPostConfirmation = () => {
        this.isApproveRequestedPopupOpen = false;
        this.setState({});
    }

}

const mapStatetoProps = (state) => {
    console.log("*");
    console.log(state);
    return {
        document: state.doc.document,
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDocumentByID,
    getCurrentUser
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(DocDetail));