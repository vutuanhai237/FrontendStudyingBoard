import React, { Component } from 'react'

import './DocPostSummary.scss'
// import Tag from 'component/shared_components/Tag/Tag'
import CustomModal from './CustomModalPopup/CustomModal'
import gray_btn_element from 'assets/images/gray_btn_element.png'
import DocReactionBar from './DocReactionBar'

class DocSummaryItem extends Component {

    constructor(props) {
        super(props);

        this.id = this.props.id;
        this.authorName = this.props.authorName;
        this.authorID = this.props.authorID;
        this.categoryName = this.props.categoryName;
        this.categoryID = this.props.categoryID;
        this.semesterName = this.props.semesterName;
        this.semesterID = this.props.semesterID;
        this.subject = this.props.subjectName;
        this.title = this.props.title;
        this.content = this.props.summary;
        this.publishedDate = this.props.publishedDate;
        this.viewCount = this.props.viewCount;
        this.downloadCount = this.props.downloadCount;
        this.avartarUrl = this.props.title.authorAvatar;
        this.fileName = this.props.fileName;
        this.linkFile = this.props.url;

        this.isRejectRequestedPopupOpen = false;

        this.state = {
            // isRejectRequestedPopupOpen: false,
        }
    }


    componentDidMount() {

    }


    render() {

        return (

            <div className="DocPost_Summary" >
                <div className="DocPost_Summary_Main_Layout">
                    <div className="DocPost_Summary_Author_Date_Metadata">
                        <div className="DocPost_Summary_Author_Link" onClick={() => this.navigateToAuthorPersonalPage()}>
                            {this.authorName}
                        </div>
                        <div className="DocPost_Summary_Requested_Date">
                            {this.publishedDate}
                        </div>
                    </div>

                    {/* <div className="Requested_DocPost_Summary_Header_2">
                        vào lúc {this.requestedTime} đã yêu cầu phê duyệt một tài liệu trong danh mục
                    <div className="Requested_DocPost_Summary_Category" onClick={() => this.navigateToSameCategoryDocsPage()}>
                            {this.requestedCategory}
                        </div>
                    </div> */}

                    <div className="DocPost_Metadata_Header">

                        <div className="Prefix_DocPost_Category" />
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

                    <div className="DocPost_Summary_Title">
                        {this.props.title}
                    </div>

                    <div className="DocPost_Summary_Content">
                        {this.props.content}
                    </div>

                    {/* <div className="DocPost_Summary_Image_Layout">
                        {/* <img alt="post" className="DocPost_Summary_Image" src={this.props.image}></img> */}


                    {/* </div> */}

                    <div className="Doc_Summary_File_Name"
                        onClick={() => window.open("https://drive.google.com/file/d/" + this.linkFile + "/preview")}
                    >
                        {this.fileName}
                    </div>

                    {/* <div className="DocPost_Summary_Requested_Tags_Layout">
                        {tagsGroup}
                    </div> */}
                </div>

                <DocReactionBar></DocReactionBar>

                <div className="DocPost_Summary_Continue_Reading_Layout">
                    <div className="Simple_Blue_Button DocPost_Summary_Continue_Reading"
                        onClick={() => { window.location.pathname = "/docs/" + this.id }}>
                        Đọc tiếp
                        </div>
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


            </div>
        );
    }

    navigateToAuthorPersonalPage = () => {
        if (window.location.pathname.substring(0, 6) === "/admin") {
            window.location.href = "/admin/user_management/user/" + this.authorID;
            return;
        }
        if (window.location.pathname.substring(0, 5) === "/user")
            window.location.href = "/user/" + this.authorID;
    }

    navigateToSameCategoryDocsPage = () => {
        window.location.href = "/docs/category?id=" + this.requestedCategoryID;
    }

    handlerPreviewRequestedPost = () => {
        if (window.location.pathname.substring(0, 6) === "/admin") {
            window.location.href = "/admin/doc_approving/" + this.id;
            return;
        }
        if (window.location.pathname.substring(0, 5) === "/user")
            window.location.href = "/user/doc_approving/" + this.id;

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
export default DocSummaryItem;