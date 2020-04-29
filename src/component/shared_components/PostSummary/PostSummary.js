import React, { Component } from 'react'

// import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import './PostSummary.scss'
import PostSummaryAuthorLink from '../PostSummaryAuthorLink/PostSummaryAuthorLink'
// import PostSummaryCategoryLink from '../PostSummaryCategoryLink/PostSummaryCategoryLink'
// import SimpleBlueButton from '../SimpleBlueButton/SimpleBlueButton'
// import SimpleRedButton from '../SimpleRedButton/SimpleRedButton'
import BlueRedButtonGroup from '../BlueRedButtonGroup/BlueRedButtonGroup'
import PostReactionBar from '../PostReactionBar/PostReactionBar'
import Tag from '../Tag/Tag'

//to call this component: 
//isAdminBrowser
//isOwnerManagement
//isNormal

//authorName, authorLink or authorID
//requestedDate
//title of post 
//...

//Thanh tác giả và thời gian có hai cách hiển thị: admin duyệt bài (tác giả, thời gian yêu cầu, ngày yêu cầu, danh mục) 
//                                        (undone) và view bình thường (tác giả, ngày publish, thời gian đọc ước tính, danh mục)
//Reaction bar lúc admin view chờ duyệt thì không xuất hiện, còn lại hiện hết.
//Đối với các nút thao tác:
// + Khi admin view chờ duyệt: preview và reject.
// + Khi trong màn hình quản lý của mình: Đọc tiếp và Xoá.
// + Còn lại: Đọc tiếp.

class PostSummary extends Component {
    getFirstImage() {

    }

    render() {

        //Init dynamic components
        let headBar = <div></div>; //
        let tagsGroup = <div></div>; //
        let reactionBar = <div></div>; //
        let managementBar = <div></div>; //

        // Condition to choose what will be rendered
        if (this.props.isAdminBrowser) {
            //render headbar: author, time, category ...
            headBar = <div className="Post_Summary_Head_Bar">
                <div className="Post_Summary_Head_Bar_Author_Requested_Date_Post">
                    <div className="Post_Summary_Head_Bar_Author_Port">
                        <PostSummaryAuthorLink authorName={this.props.authorName}></PostSummaryAuthorLink>
                    </div>
                    <div className="Post_Summary_Head_Bar_Requested_Date_Port">
                        {this.props.requestedDate}
                    </div>
                </div>
                <div className="Post_Summary_Head_Bar_Requested_Time_Requested_Category_Port">
                    vào lúc {this.props.requestedTime} đã yêu cầu phê duyệt một bài viết trong danh mục  {this.props.requestedCategory}
                </div>
            </div>;
            //render reaction bar
            reactionBar = <div className = "Post_Summary_Reaction_Bar">
                <PostReactionBar likeCount = {this.props.likeCount} commentCount = {this.props.commentCount}></PostReactionBar>
            </div>
            //render manager bar
            managementBar = <BlueRedButtonGroup blueText="Preview" redText="Reject"></BlueRedButtonGroup>;
        }


        //render reaction bar via user's role



        //Render tag from tags list
        tagsGroup = this.props.tags.map((tag) => {
            return (
                <div>
                    <Tag text={tag}></Tag>
                </div>
            )
        }
        );

        return (
            <div className="Post_Summary" >
                <div className="Post_Summary_Head_Bar_Port">
                    {headBar}
                </div>

                <div className="Post_Summary_Title">
                    {this.props.title}
                </div>
                <div className="Post_Summary_Content_Port">
                    {this.props.content}
                </div>
                <div className="Post_Summary_Image_Port">
                    <img alt="post" className="Post_Summary_Image" src={this.props.image}></img>
                </div>
                <div className="Post_Summary_Requested_Tags_Port">
                    {tagsGroup}
                </div>
                <div className="Post_Summary_Reaction_Bar_Port">
                    {reactionBar}
                </div>
                <div className="Post_Summary_Management_Bar_Bar_Port">
                    {managementBar}
                </div>
            </div >
        );
    }
}
export default PostSummary;