import React, { Component } from 'react'

import '../../shared_components/DocPostDetail.scss'
import '../../shared_components/DPD_ResponsiveLayout.scss'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import gray_btn_element from '../../../img/gray_btn_element.png'

import Management_Titlebar from '../management_components/Management_Titlebar/Management_Titlebar'
import Management_RequestedDocSummaryItem from '../management_components/Management_RequestedDocSummaryItem'

import { management_getCurrentPreviewDocument } from "../../../service/management_services/management_docAPIs"
import { getCurrentUser } from "../../../service/UserAPI"
import { isGrantedPermissions, DocumentPermission } from "../../../utils/PermissionManagement"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Footer from '../../container/Footer'
import Header from '../../container/Header'

import gray_download_icon from '../../../img/gray_download_icon.png'
import PDFViewer from 'pdf-viewer-reactjs'
import { PORT } from '../../../constant/index'
import Cookies from 'js-cookie'
//import for pdf viewer:


class Management_DocPreview extends Component {

    constructor(props) {
        super(props);

        this.currentPreviewDocumentID = "";
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
        this.avartarUrl = "https://i.imgur.com/SZJgL6C.jpg";
        this.fileName = "Suy tưởng - Marcus Antonius Arellius.pdf";
        this.linkFile = ""

        this.isRejectRequestedPopupOpen = false;
        this.isApproveRequestedPopupOpen = false;
        this.isAnyFailedAlertPopupOpen = false;
        this.isAnySuccessAlertPopupOpen = false;
        this.isAnySuccessBackAlertPopupOpen = false;
    }

    componentDidMount() {
        this.fetchCurrentNotApprovedDocument();
    }

    fetchCurrentNotApprovedDocument = () => {
        this.currentPreviewDocumentID = this.props.match.params.id;
        this.props.management_getCurrentPreviewDocument(this.currentPreviewDocumentID);
        this.props.getCurrentUser();
    }

    render() {
        if (this.props.accountInformation) {

            this.roleName = this.props.accountInformation.roleName;

            // neu khong co quyen preview => khong cho preview
            if (!this.isGrantedPermissions(DocumentPermission.Preview))
                return <>{window.location.pathname = "/"}</>;

            //neu khong la admin => home
            if (window.location.pathname.substring(0, 6) === "/admin" && this.roleName !== "ADMIN")
                return <>{window.location.pathname = "/"}</>;

            //neu la admin => admin
            if (window.location.pathname.substring(0, 5) === "/user" && this.roleName === "ADMIN")
                return <>{window.location.pathname = "/admin" + window.location.pathname.substring(5, window.location.pathname.length)}</>;

            console.log("**");
            console.log(this.props);
            console.log(this.props.currentPreviewDocument);

            if (this.props.currentPreviewDocument) {
                if (this.props.currentPreviewDocument.statusCode === 14)
                    return <>Không tìm thấy tài nguyên {window.location.href = "/"}</>;
                this.currentPreviewDocument = this.props.currentPreviewDocument.documentDTO;
                this.id = this.currentPreviewDocument.id;
                this.authorName = this.currentPreviewDocument.authorName;
                this.authorID = this.currentPreviewDocument.authorID;
                this.categoryName = this.currentPreviewDocument.categoryName;
                this.categoryID = this.currentPreviewDocument.categoryID;
                this.semesterName = this.currentPreviewDocument.semesterName;
                this.semesterID = this.currentPreviewDocument.semesterID;
                this.subject = this.currentPreviewDocument.subjectName;
                this.title = this.currentPreviewDocument.title;
                this.content = this.currentPreviewDocument.summary;
                this.uploadedTime = "22-08-2020";
                this.viewCount = this.currentPreviewDocument.viewCount;
                this.downloadCount = this.currentPreviewDocument.downloadCount;
                this.avartarUrl = this.currentPreviewDocument.authorAvatar;
                this.fileName = this.currentPreviewDocument.fileName;
                this.linkFile = this.currentPreviewDocument.url;
            }

            return (
                <div>
                    <div className="DocPost_Detail" >
                        {this.props.currentPreviewDocument ?

                            <div>
                                <div className="DocPost_Detail_Main_Layout">

                                    <div className="DocPost_Detail_Title">
                                        {this.title}
                                    </div>

                                    <div className="DocPost_Detail_Category_Header">

                                        <div className="Prefix_DocPost_Detail_Category"> </div>
                                        <div className="DocPost_Detail_Category">
                                            {this.categoryName}
                                        </div>
                                        <img alt="*" className="DocPost_Detail_Time_Semester_Subject_Icon" src={gray_btn_element} />
                                        <div className="DocPost_Detail_Time_Semester_Subject_Text">
                                            Môn học: &nbsp;
                                            {this.subject}
                                        </div>
                                        <img alt="*" className="DocPost_Detail_Time_Semester_Subject_Icon" src={gray_btn_element} />
                                        <div className="DocPost_Detail_Time_Semester_Subject_Text">
                                            Học kỳ: &nbsp;
                                            {this.semesterName}
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
                                            <div className="DocPost_Detail_User_Infor_Posted_Time">đã đăng vào ngày {this.uploadedTime}</div>
                                        </div>
                                    </div>

                                    <div className="DocPost_Detail_Content">
                                        {this.content}
                                    </div>

                                    <div className="Doc_Detail_File_Name"
                                        onClick={() => window.open("https://drive.google.com/file/d/" + this.linkFile + "/preview")}
                                    >
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

                                    {/* <PDFViewer
                                        document={{
                                            // url: this.url
                                            url: "https://drive.google.com/uc?export=pdf&id=0BxMDBIZ9xXAUd3R5RlJ6T3FaUUE",
                                        }}

                                        hideRotation={true}
                                        loader={true}
                                        alert={true}
                                        navbarOnTop={true}

                                    /> */}
                                    <iframe src={"https://drive.google.com/file/d/" + this.linkFile + "/preview"} width="100%" height="100%"></iframe>
                                </div>
                                <div className="DocPost_Detail_Footer">
                                    <div className="Simple_Blue_Button" style={{ marginRight: "5px", fontSize: "16px" }} onClick={() => this.handlerApproveRequestedPost()}>Duyệt</div>
                                    {/* <div className="Simple_Red_Button" style={{ fontSize: "16px" }} onClick={() => { this.handlerRejectRequestedPost() }}>Từ chối</div> */}
                                </div>
                            </div>
                            :
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
                        <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyRejectRequestedPostConfirmation()}>OK</button>
                        <button className="Simple_White_Button" onClick={() => this.handleCancelRejectRequestedPostConfirmation()}>Cancel</button>

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
                        <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyApproveRequestedPostConfirmation()}>OK</button>
                        <button className="Simple_White_Button" onClick={() => this.handleCancelApproveRequestedPostConfirmation()}>Cancel</button>
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
                        open={this.isAnySuccessBackAlertPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_success"
                        closeModal={() => { this.isAnySuccessBackAlertPopupOpen = false; window.location.pathname = "/admin/doc_approving"; this.setState({}) }}
                    >
                    </CustomModal>

                    {/* success back */}
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

        fetch(`http://${PORT}/admin/docs/approved?id=${this.currentPreviewDocumentID}&sessionID=` + Cookies.get('JSESSIONID'),
            {
                method: 'GET'
            })
            .then(response => response.text())
            .then(
                result => {
                    if (JSON.parse(result).statusCode === 16) {
                        this.notifyHeader = "Thành công";
                        this.notifyContent = "Duyệt tài liệu thành công!";
                        this.isApproveRequestedPopupOpen = false;
                        this.isAnySuccessBackAlertPopupOpen = true;

                        this.setState({})
                    }
                    else {
                        this.notifyHeader = "Thất bại";
                        this.notifyContent = "Duyệt tài liệu không thành công!";
                        this.isApproveRequestedPopupOpen = false;
                        this.isAnyFailedAlertPopupOpen = true;
                        console.log(result);
                        this.setState({})
                    }
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
    return {
        currentPreviewDocument: state.management_doc.currentPreviewDocument,
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    management_getCurrentPreviewDocument,
    getCurrentUser
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Management_DocPreview));