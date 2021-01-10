import React, { Component } from 'react'

import 'components/styles/DocPostSummary.scss'
import 'components/styles/DocPostDetail.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_btn_element from 'assets/images/gray_btn_element.png'

import { getCurrentUser } from "redux/services/userServices"
import { getDocumentByID } from "redux/services/docServices"

import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import gray_download_icon from 'assets/images/gray_download_icon.png'
// import PDFViewer from 'pdf-viewer-reactjs'
import { PORT } from 'constants.js'
import Cookies from 'js-cookie'

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
        this.content = `This book is so much more than I had originally anticipated when beginning to outline it in October 2007. What you are reading now is the first book, Growing Up 8-Bit. It covers my gaming
        experiences of games released that I played from birth to the end of 1990. This book
        simply is me talking about my experiences with over 100 games in those years.To give
        some background on my unique experiences with gaming, I’ll give you some
        background.I was born in St.Paul on July 4, 1976. I was born without a left eye or an
        iris nerve in my left eye socket, making it impossible for me to see even if a transplant
        was possible.I’ve lived my whole life only being able to see out of my right eye.
            Surprisingly, I’ve never had much in the way of problems with what fully sighted people
        are capable of.You might think it is hard to play videogames just being able to see out of
        one eye, but it isn’t.With that in mind, this book constitutes my experiences with
        gaming through 1990 and further books will cover the newer decades.
        I took a cue from the Uncle John’s Bathroom Reader series of books in how my
        experiences with the games are laid out.For the most part they are divided by the first or
        primary system they were released on.There are many games that I played on multiple
        systems(I do note what systems I played each game on under the game name).Each
        game has its own page for the most part and I created a Table of Contents that can easily
        be traversed.Little did I know when I started this book that eReaders like the Amazon
        Kindle and Barnes and Noble Nook would become so popular and make the Table of
        Contents that much more valuable.You can certainly read the whole book if you want to
        as well.
            It’s taken me almost three years to complete this book.There has been a lot of downtime
                in those years and as soon as this book is done I expect to really pour into the second
        book and get it done in far less time.
        I hope you enjoy this book.I certainly hope my unique experiences on these games will
        spark memories of when you played these games in your younger years.I also hope that
        you can share these and your own experiences with your children, showing them how
        important these games were to your childhood.It started out simple: I was going to 
        talk about the 1980s and everything that influenced me like comics, television, movies
        and videogames.I started by writing down what videogames I felt were notable enough that 
        I played in that decade and found out I had well over 100. I decided to keep going and write 
        all of them down that were released through October 2007(when I started this book) and found
         out I had well over 500 total.It dawned on me that the idea of covering comics, television and
         movies needed to be passed over.I also started planning on how to split all those games up and 
         decided on doing so via decades.`;
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
                        {/* {this.props.document ? */}

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
                                    <img alt="*" className="metadata-icon" src={gray_btn_element} />
                                    <div className="DocPost_Metadata_Text">
                                        {/* Môn học: &nbsp;
                                            {this.subject} */}
                                    </div>

                                </div>

                                <div className="doc-post-detail-user-info-header">
                                    <img src={this.avartarUrl} alt="avatar" className="doc-post-detail_User_Infor_Avatar" />
                                    <div style={{ flexDirection: "vertical" }}>
                                        <div className="doc-post-detail_User_Infor_Display_Name">{this.authorName}</div>
                                        <div className="doc-post-detail_User_Infor_Posted_Time">đã đăng vào ngày {this.uploadedTime}</div>
                                    </div>
                                </div>

                                <div className="doc-post-detail_Content">
                                    {this.content}
                                </div>
                            </div>

                            <div className="Doc_Detail_View_Count_Doc_Count">
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));