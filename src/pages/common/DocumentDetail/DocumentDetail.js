import React, { Component } from 'react'

import 'components/styles/DocPostSummary.scss'
// import 'components/shared/DPD_ResponsiveLayout.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_btn_element from 'assets/images/gray_btn_element.png'

import { management_getCurrentPreviewDocument } from "redux/services/docServices"
import { getCurrentUser } from "redux/services/userServices"
import { isGrantedPermissions, Document } from "utils/permissionUtils"
import { getDocumentByID } from "redux/services/docServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import gray_download_icon from 'assets/images/gray_download_icon.png'
import PDFViewer from 'pdf-viewer-reactjs'
import { PORT } from 'constants.js'
import Cookies from 'js-cookie'
import PopupMenu from 'components/common/PopupMenu/PopupMenu'


//import for pdf viewer:


class DocumentDetail extends Component {

    constructor(props) {
        super(props);

        this.documentID = "";
        this.isGrantedPermissions = isGrantedPermissions.bind(this);

        this.id = "";
        this.authorName = "Huỳnh Thị Kim Thảo";
        this.authorID = "authorID";
        this.requestedDate = "requestedDate";
        this.requestedTime = "requestedTime";
        this.category = "category";
        this.categoryID = "categoryID";
        this.semesterName = "semesterName";
        this.year = "year";
        this.subject = "subject";
        this.title = "Sức mạnh của người hướng nội";
        this.content = `This book is so much more than I had originally anticipated when beginning to outline it
            in October 2007. It started out simple: I was going to talk about the 1980s and everything
        that influenced me like comics, television, movies and videogames.I started by writing
        down what videogames I felt were notable enough that I played in that decade and found
        out I had well over 100. I decided to keep going and write all of them down that were
        released through October 2007(when I started this book) and found out I had well over
        500 total.It dawned on me that the idea of covering comics, television and movies
        needed to be passed over.I also started planning on how to split all those games up and
        decided on doing so via decades.`;
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

        this.normalMenuItemList = [
            // { id: 3, name: "Báo cáo", icon: trash_icon },
            { id: 3, name: "Báo cáo" },
        ]


    }

    componentDidMount() {
        // this.fetchCurrentNotApprovedDocument();
    }

    onLikeBtnClick = () => {

        // this.props.likeDocument(this.id);
        this.dislikes = this.isDisliked ? this.dislikes-- : this.dislikes;
        this.isDisliked = false;
        this.isLiked = !this.isLiked;
        this.likes++;
        this.calculateBar();
        this.setState({});
    }

    onDislikeBtnClick = () => {

        // this.props.dislikeDocument(this.id);
        this.likes = this.isLiked ? this.likes-- : this.likes;
        this.isLiked = false;
        this.isDisliked = !this.isDisliked;
        this.dislikes++;
        this.calculateBar();
        this.setState({});
    }


    render() {


        if (this.props.accountInformation) {

            if (this.props.document) {
                this.document = this.props.document.documentDTO;
                this.id = this.document.id;
                this.authorName = this.document.authorName;
                this.authorID = this.document.authorID;
                this.category = this.document.category;
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
                    <div className="doc-post-detail" >
                        <div>
                            <div className="doc-post-detail-main-layout">

                                <div className="doc-post-detail_Title">
                                    {this.title}
                                </div>

                                <div className="DocPost_Metadata_Header">

                                    <div className="prefix-normal-category"> </div>
                                    <div className="normal-category">
                                        {this.category}
                                    </div>
                                    {/* <img alt="*" className="metadata-icon" src={gray_btn_element} />
                                    <div className="DocPost_Metadata_Text">
                                        Môn học: &nbsp;
                                            {this.subject}
                                    </div> */}

                                </div>

                                <div className="doc-post-detail-user-info-header">
                                    <div className="display-flex">
                                        <img src={this.avartarUrl} alt="avatar" className="doc-post-detail_User_Infor_Avatar" />
                                        <div style={{ flexDirection: "vertical" }}>
                                            <div className="doc-post-detail_User_Infor_Display_Name">{this.authorName}</div>
                                            <div className="doc-post-detail_User_Infor_Posted_Time">đã đăng vào ngày {this.uploadedTime}</div>
                                        </div>
                                    </div>
                                    <PopupMenu items={this.normalMenuItemList} id={`doc-item-popup-menu-${this.props.id}`} />

                                </div>

                                <div className="doc-post-detail_Content">
                                    {this.content}
                                </div>

                                <div className="doc-file-name"
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

                                {/* <iframe src={"https://drive.google.com/file/d/" + this.linkFile + "/preview"} width="100%" height="100%"></iframe> */}
                                <iframe src={"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/preview?hl=en"} width="100%" height="100%"></iframe>
                            </div>
                        </div>
                    </div>


                    <div class="comments-container">
                        <ul id="comments-list" class="comments-list">
                            <li>
                                <div class="comment-main-level">
                                    <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>

                                    <div class="comment-box">
                                        <div class="comment-head">
                                            <h6 class="comment-name by-author"><a href="">Nguyễn Văn Đông</a></h6>

                                        </div>
                                        <div class="comment-content">
                                            Mọi người thấy bài viết này như thế nào?                                           </div>
                                    </div>
                                </div>

                                <ul class="comments-list reply-list">
                                    <li>
                                        <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" /></div>
                                        <div class="comment-box">
                                            <div class="comment-head">
                                                <h6 class="comment-name"><a href="">Lưu Biêu Nghị</a></h6>

                                            </div>
                                            <div class="comment-content">
                                                Hay nhưng mà nên có bản dịch nữa bạn, chưa ghi nguồn.
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
                                        <div class="comment-box">
                                            <div class="comment-head">
                                                <h6 class="comment-name by-author"><a href="">Nguyễn Văn Đông</a></h6>

                                            </div>
                                            <div class="comment-content">
                                                Ok, bạn
                                                              </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <div class="comment-main-level">
                                    <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" />

                                    </div>
                                    <div class="comment-box">
                                        <div class="comment-head">
                                            <h6 class="comment-name"><a href="">Lưu Biêu Nghị</a></h6>
                                        </div>
                                        <div class="comment-content">
                                            À, có một chỗ sai kìa bạn
                                     </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
                        <button className="blue-button mg-right-5px" onClick={() => this.handlerVerifyRejectRequestedPostConfirmation()}>OK</button>
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
                        <button className="blue-button mg-right-5px" onClick={() => this.handlerVerifyApproveRequestedPostConfirmation()}>OK</button>
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
            return <>{window.location.pathname = "admin/user-management/" + this.authorID}</>;

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

const mapStateToProps = (state) => {
    return {
        document: state.document.document,
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDocumentByID,
    getCurrentUser
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentDetail));