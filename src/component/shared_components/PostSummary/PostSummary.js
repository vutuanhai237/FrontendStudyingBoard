import React, { Component } from 'react'

// import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import './PostSummary.scss'
import PostSummaryAuthorLink from '../PostSummaryAuthorLink/PostSummaryAuthorLink'
import PostSummaryCategoryLink from '../PostSummaryCategoryLink/PostSummaryCategoryLink'
import SimpleBlueButton from '../SimpleBlueButton/SimpleBlueButton'
import SimpleRedButton from '../SimpleRedButton/SimpleRedButton'
import BlueRedButtonGroup from '../BlueRedButtonGroup/BlueRedButtonGroup'
import Tag from '../Tag/Tag'
//to call this component: 
//isAdmin, token Admin, ...
//authorName, authorLink or authorID
//requestedDate
//title of post
class PostSummary extends Component {
    getFirstImage() {

    }

    render() {
        // Condition to choose what will be rendered

        let groupBtn = <div></div>;

        //Render tag from tags list
        let tagsList = this.props.tags.map((tag) => {
            return (
                <div>
                    <Tag text={tag}></Tag>
                </div>
            )
        }
        );

        //for User
        if (this.props.isAdmin) {
            groupBtn = <BlueRedButtonGroup></BlueRedButtonGroup>;
        }

        return (
            <div className="Post_Summary" >
                <div className="Post_Summary_Author_Requested_Date_Port">
                    <div className="Author_Port">
                        <PostSummaryAuthorLink authorName={this.props.authorName}></PostSummaryAuthorLink>
                    </div>
                    <div className="Requested_Published_Date_Port">
                        {this.props.isAdmin ? this.props.requestedDate : this.props.publishedDate}
                    </div>
                </div>
                <div className="Post_Summary_Requested_Time_Requested_Category_Port">
                    vào lúc {this.props.requestedTime} đã yêu cầu phê duyệt một bài viết trong danh mục  {this.props.requestedCategory}
                </div>
                <div className="Post_Summary_Title">
                    {this.props.title}
                </div>
                <div className="Post_Summary_Content_Port">
                    {this.props.content}
                </div>
                <div className="Post_Summary_Image_Port">
                    <img className="Post_Summary_Image" src={this.props.image}></img>
                </div>
                <div className="Post_Summary_Requested_Tags_Port">
                    {tagsList}
                </div>
                <div className="Post_Summary_GroupBtn_Port">
                    {groupBtn}
                </div>
            </div >
        );
    }
}
export default PostSummary;