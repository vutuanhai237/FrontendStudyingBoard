import React, { Component } from 'react'

import '../../shared_components/DocPostSummary.scss'
import Tag from '../../shared_components/Tag/Tag'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import gray_btn_element from '../../../img/gray_btn_element.png'

class Admin_RequestedDocSummaryItem extends Component {

    constructor(props) {
        super(props);

        this.id = this.props.id;
        this.authorName = this.props.authorName;
        this.authorID = this.props.authorID;
        this.requestedDate = this.props.requestedDate;
        this.requestedTime = this.props.requestedTime;
        this.requestedCategory = this.props.requestedCategory;
        this.requestedCategoryID = this.props.requestedCategoryID;
        this.semester = this.props.semester;
        this.year = this.props.year;
        this.subject = this.props.subject;
        this.title = this.props.title;
        this.content = this.props.content;
        this.image = this.props.image;
        this.tags = this.props.tags;
        this.viewCount = this.props.viewCount;
        this.downCount = this.props.downCount;

        this.isRejectRequestedPopupOpen = false;

        this.state = {
            // isRejectRequestedPopupOpen: false,
        }
    }

    getFirstImage() {

    }

    render() {

        // Render tag from tags list

        let tagsGroup = this.tags.map((tag) => {
            return (
                <Tag text={tag}></Tag>
            )
        }
        );

        return (

            <div className="DocPost_Summary_Item" >
                <div className="DocPost_Summary_Item_Main_Port">
                    <div className="DocPost_Summary_Item_Header_1">
                        <div className="DocPost_DocPost_Summary_Item_Author_Link" onClick={() => this.navigateToAuthorPersonalPage()}>
                            {this.authorName}
                        </div>
                        <div className="DocPost_Summary_Item_Requested_Date">
                            {this.requestedDate}
                        </div>
                    </div>

                    <div className="Requested_DocPost_Summary_Item_Header_2">
                        vào lúc {this.requestedTime} đã yêu cầu phê duyệt một tài liệu trong danh mục
                    <div className="Requested_DocPost_Summary_Item_Category" onClick={() => this.navigateToSameCategoryDocsPage()}>
                            {this.requestedCategory}
                        </div>
                    </div>

                    <div className="Doc_Category_Time_Semester_Subject_Header">

                        <img alt="*" className="Doc_Category_Time_Semester_Subject_Icon" src={gray_btn_element} />
                        <div className="Doc_Category_Time_Semester_Subject_Text">
                            Môn học: &nbsp;
                        {this.subject}
                        </div>
                        <img alt="*" className="Doc_Category_Time_Semester_Subject_Icon" src={gray_btn_element} />
                        <div className="Doc_Category_Time_Semester_Subject_Text">
                            Học kỳ: &nbsp;
                        {this.semester}
                        </div >
                        <img alt="*" className="Doc_Category_Time_Semester_Subject_Icon" src={gray_btn_element} />
                        <div className="Doc_Category_Time_Semester_Subject_Text">
                            Năm học: &nbsp;
                        {this.year}
                        </div>
                    </div>

                    <div className="Requested_Doc_Summary_Item_Header_3">
                        {/* {this.props.title} */}
                    </div>

                    <div className="DocPost_Summary_Title">
                        {this.props.title}
                    </div>

                    <div className="DocPost_Summary_Content">
                        {this.props.content}
                    </div>

                    <div className="DocPost_Summary_Image_Port">
                        <img alt="post" className="DocPost_Summary_Image" src={this.props.image}></img>
                    </div>

                    {/* <div className="DocPost_Summary_Requested_Tags_Port">
                        {tagsGroup}
                    </div> */}
                </div>
                <div className="DocPost_Summary_Item_Footer">
                    <div className="Simple_Blue_Button" style={{ marginRight: "5px", fontSize: "16px" }} onClick={() => this.handlerPreviewRequestedPost()}>Xem trước</div>
                    <div className="Simple_Red_Button" style={{ fontSize: "16px" }} onClick={() => { this.handlerRejectRequestedPost() }}>Từ chối</div>
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
        window.location.href = "/admin/user/" + this.authorID;
    }

    navigateToSameCategoryDocsPage = () => {
        window.location.href = "/post/category?id=" + this.requestedCategoryID;
    }

    handlerPreviewRequestedPost = () => {
        window.location.href = "/admin/post_browser/" + this.id;
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
export default Admin_RequestedDocSummaryItem;