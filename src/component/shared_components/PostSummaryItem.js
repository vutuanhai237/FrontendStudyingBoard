// import React, { Component } from 'react'

// import 'component/shared_components/DocPostSummary.scss'
// import Tag from 'component/shared_components/Tag/Tag'
// import CustomModal from 'component/shared_components/CustomModalPopup/CustomModal'

// class Management_RequestedPostSummaryItem extends Component {

//     constructor(props) {
//         super(props);

//         this.id = this.props.id;
//         this.authorName = this.props.authorName;
//         this.authorID = this.props.authorID;
//         this.requestedDate = this.props.requestedDate;
//         this.requestedTime = this.props.requestedTime;
//         this.requestedCategory = this.props.requestedCategory;
//         this.requestedCategoryID = this.props.requestedCategoryID;
//         this.title = this.props.title;
//         this.content = this.props.content;
//         this.image = this.props.image;
//         this.tags = this.props.tags;
//         this.likeCount = this.props.likeCount;
//         this.commentCount = this.props.commentCount;

//         this.isRejectRequestedPopupOpen = false;

//         this.state = {
//             // isRejectRequestedPopupOpen: false,
//         }
//     }

//     getFirstImage() {

//     }

//     render() {

//         // Render tag from tags list

//         let tagsGroup = this.tags.map((tag) => {
//             return (
//                 <Tag text={tag}></Tag>
//             )
//         }
//         );

//         return (

//             <div className="DocPost_Summary_Item" >
//                 <div className="DocPost_Summary_Item_Main_Layout">
//                     <div className="DocPost_Summary_Item_Header_1">
//                         <div className="DocPost_Summary_Item_Author_Link" onClick={() => this.navigateToAuthorPersonalPage()}>
//                             {this.authorName}
//                         </div>
//                         <div className="DocPost_Summary_Item_Requested_Date">
//                             {this.requestedDate}
//                         </div>
//                     </div>

//                     <div className="Requested_DocPost_Summary_Item_Header_2">
//                         vào lúc {this.requestedTime} đã yêu cầu phê duyệt một bài viết trong danh mục 
//                     <div className="Requested_DocPost_Summary_Item_Category" onClick={() => this.navigateToSameCategoryPostsPage()}>
//                             {this.requestedCategory}
//                         </div>
//                     </div>

//                     <div className="DocPost_Summary_Title">
//                         {this.props.title}
//                     </div>

//                     <div className="DocPost_Summary_Content">
//                         {this.props.content}
//                     </div>

//                     <div className="DocPost_Summary_Image_Layout">
//                         <img alt="post" className="DocPost_Summary_Image" src={this.props.image}></img>
//                     </div>

//                     <div className="DocPost_Summary_Requested_Tags_Layout">
//                         {tagsGroup}
//                     </div>
//                 </div>
//                 <div className="DocPost_Summary_Item_Footer">
//                     <div className="Simple_Blue_Button" style={{ marginRight: "5px", fontSize: "16px" }} onClick={() => this.handlerPreviewRequestedPost()}>Xem trước</div>
//                     <div className="Simple_Red_Button" style={{ fontSize: "16px" }} onClick={() => { this.handlerRejectRequestedPost() }}>Từ chối</div>
//                 </div>

//                 {/* Popup for reject requested post */}
//                 <CustomModal
//                     shadow={true}
//                     type="confirmation"
//                     open={this.isRejectRequestedPopupOpen}
//                     title="Xác nhận?"
//                     text="Xác nhận từ chối tiếp nhận bài viết này?"
//                     closeModal={() => { this.isRejectRequestedPopupOpen = false; this.setState({}); }}
//                 >
//                     <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyRejectRequestedPostConfirmation()}>OK</button>
//                     <button className="Simple_White_Button" onClick={() => this.handleCancelRejectRequestedPostConfirmation()}>Cancel</button>

//                 </CustomModal>


//             </div>
//         );
//     }

//     navigateToAuthorPersonalPage = () => {
//         window.location.href = "/management/user/" + this.authorID;
//     }

//     navigateToSameCategoryPostsPage = () => {
//         window.location.href = "/post/category?id=" + this.requestedCategoryID;
//     }

//     handlerPreviewRequestedPost = () => {
//         window.location.href = "/management/post_browser/" + this.id;
//     }

//     handlerRejectRequestedPost = () => {
//         this.isRejectRequestedPopupOpen = true;
//         this.setState({});
//     }

//     handleCancelRejectRequestedPostConfirmation = () => {
//         this.isRejectRequestedPopupOpen = false;
//         this.setState({});
//     }

//     handlerVerifyRejectRequestedPostConfirmation = () => {
//         this.isRejectRequestedPopupOpen = false;
//         this.setState({});
//     }



// }
// export default Management_RequestedPostSummaryItem;