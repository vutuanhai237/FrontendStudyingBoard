import React, { Component } from 'react'

import 'components/styles/DocPostSummary.scss'
import 'components/styles/DocPostDetail.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_btn_element from 'assets/images/g_btn_element.png'
import { getDocumentByID } from "redux/services/docServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import PDFViewer from 'pdf-viewer-reactjs'
//import for pdf viewer:


class PostDetail extends Component {

    constructor(props) {
        super(props);

        this.documentID = "";
        // this.isGrantedPermissions = isGrantedPermissions.bind(this);

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
        this.content = ``;
        this.image = "image";
        this.tags = "tags";
        this.uploadedTime = "22-08-2020";
        this.viewCount = "1000";

        this.avartarUrl = 'https://i.imgur.com/SZJgL6C.jpg';
        this.fileName = "Suy tưởng - Marcus Antonius Arellius.pdf";
        this.linkFile = ""

        this.comments = []

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
        // this.props.getCurrentUser();
    }

    render() {

        console.log(this.props);

        // if (this.props.accountInformation) {

            if (this.props.document) {
                if (this.props.document.statusCode === 14)
                    return <>Không tìm thấy tài nguyên {window.location.href = "/"}</>;
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
                            <div className="main-layout">
                                <div className="title">
                                    {this.title}
                                </div>

                                <div className="metadata-header">

                                    <div className="prefix-normal-category"> </div>
                                    <div className="normal-category">
                                        {this.category}
                                    </div>
                                    <img alt="*" className="metadata-icon" src={gray_btn_element} />
                                    <div className="DocPost_Metadata_Text">
                                        {/* Môn học: &nbsp;
                                            {this.subject} */}
                                    </div>

                                </div>

                                <div className="user-infor-container">
                                    <img src={this.avartarUrl} alt="avatar" className="user-avatar" />
                                    <div style={{ flexDirection: "vertical" }}>
                                        <div className="display-name">{this.authorName}</div>
                                        <div className="posted-time">đã đăng vào ngày {this.uploadedTime}</div>
                                    </div>
                                </div>

                                <div className="content">
                                    {this.content}
                                </div>
                            </div>

                            <div className="view-count-down-count">
                                <div className="gray-label">Bình luận: {this.viewCount}</div>
                                <div className="gray-label mg-left-5px">lượt xem: {this.viewCount}</div>
                                {/* <div className="Down_Count" style={{ display: "flex", marginLeft: "20px" }}>
                                    <img src={gray_download_icon} alt="d" style={{ width: "20px", height: "20px" }} />
                                    <div style={{ marginLeft: "5px" }}>
                                        {this.downloadCount}
                                    </div>
                                </div> */}
                            </div>

                        </div>

                    </div>


                    {/* comment */}
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
                </div >
            );
        // }

        // return <></>
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



    handleCancelApproveRequestedPostConfirmation = () => {
        this.isApproveRequestedPopupOpen = false;
        this.setState({});
    }

}

const mapStateToProps = (state) => {
    return {
        document: state.document.document,
        // accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDocumentByID,
    // getCurrentUser
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));