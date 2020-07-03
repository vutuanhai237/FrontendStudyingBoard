import React, { Component } from 'react'

// import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import './PostSummary.scss'
import PostSummaryAuthorLink from './PostSummaryAuthorLink/PostSummaryAuthorLink'
import PostReactionBar from './PostReactionBar/PostReactionBar'
import Tag from '../Tag/Tag'

class Admin_PostSummaryItem extends Component {

    constructor(props) {
        super(props);

        //for conditionally render
        // this.role = this.props.role; //"ADMIN_ROLE" or "USER_ROLE" or "CONTRIBUTOR_ROLE"
        // this.action = this.props.action; //"VIEW_MY_SELF" or "BROWSE" (only Admin) or "VIEW_PUBLIC"
        this.role = "USER";
        this.action = "VIEW_MY_SELF";
        //for show content
        this.id = this.props.id;
        this.authorName = this.props.authorName;
        this.requestedDate = this.props.requestedDate;
        this.requestedTime = this.props.requestedPost;
        this.requestedCategory = this.props.requestedCategory;
        this.title = this.props.title;
        this.content = this.props.content;
        this.image = this.props.image;
        this.tags = this.props.tags;
        this.likeCount = this.props.likeCount;
        this.commentCount = this.props.commentCount;

        this.state = {

        }
    }

    getFirstImage() {

    }

    render() {

        //Init dynamic components
        let headbar = (this.role === "ADMIN_ROLE" && this.action === "BROWSER") ?
            <div className="Post_Summary_Head_Bar">
                <div className="Post_Summary_Head_Bar_Author_Requested_Date_Post">
                    <div className="Post_Summary_Head_Bar_Author_Port">
                        <PostSummaryAuthorLink authorName={this.authorName}></PostSummaryAuthorLink>
                    </div>
                    <div className="Post_Summary_Head_Bar_Requested_Date_Port">
                        {this.requestedDate}
                    </div>
                </div>
                <div className="Post_Summary_Head_Bar_Requested_Time_Requested_Category_Port">
                    vào lúc {this.requestedTime} đã yêu cầu phê duyệt một bài viết trong danh mục
                    <div className="Post_Summary_Requested_Category">
                        {this.requestedCategory}
                    </div>
                </div>
            </div>
            :
            <div className="Post_Summary_Head_Bar">
                <div className="Post_Summary_Category">
                    {this.requestedCategory}
                </div>
            </div>;

        let tagsGroup = <div></div>; //
        let reactionBar = <div></div>; //
        let managementBar = <div></div>; //

        // Condition to choose what will be rendered: 
        // admin browser

        if (this.role === "ADMIN_ROLE" && this.action === "BROWSER") {

            managementBar =
                <div className="Post_Summary_Button_Group_Port" >
                    <div className="Simple_Blue_Button" style={{ marginRight: "10px", fontSize: "16px" }}>Xem trước</div>
                    <div className="Simple_Red_Button" style={{ fontSize: "16px" }}>Từ chối</div>
                </div>
        }
        // if{}
        //          //render reaction bar
        //          reactionBar = <div className="Post_Summary_Reaction_Bar">
        //          <PostReactionBar likeCount={this.props.likeCount} commentCount={this.props.commentCount}></PostReactionBar>
        //      </div>

        //Render tag from tags list
        tagsGroup = this.props.tags.map((tag) => {
            return (
                <Tag text={tag}></Tag>
            )
        }
        );

        return (
            <div className="Post_Summary" >
                <div className="Post_Summary_Head_Bar_Port">
                    {/* {(this.role === "ADMIN_ROLE" && this.action === "BROWSER")
                        ? */}
                    {/*  */}
                    {headbar}



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
export default Admin_PostSummaryItem;