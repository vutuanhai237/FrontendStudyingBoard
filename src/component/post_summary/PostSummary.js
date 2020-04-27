import React, { Component } from 'react'

// import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import './PostSummary.scss'
import PostSummaryAuthorLink from '../shared_components/PostSummaryAuthorLink/PostSummaryAuthorLink'
import PostSummaryCategoryLink from '../shared_components/PostSummaryCategoryLink/PostSummaryCategoryLink'
import SimpleBlueButton from '../shared_components/SimpleBlueButton/SimpleBlueButton'
import SimpleRedButton from '../shared_components/SimpleRedButton/SimpleRedButton'
import BlueRedButtonGroup from '../shared_components/BlueRedButtonGroup/BlueRedButtonGroup'

//to call this component: 
//isAdmin, token Admin, ...
//authorName, authorLink or authorID
//requestedDate
//title of post
class PostSummary extends Component {
    constructor(props) {
        super();
    }


    render() {
        // Condition to choose what will be rendered

        let isAdmin = true;
        let groupBtn = <div></div>;
        if(isAdmin)
        {
            groupBtn = <BlueRedButtonGroup></BlueRedButtonGroup>;
        }   
        return (
            <div className="Post_Summary">
                <div className="Post_Summary_Author_Requested_Date_Port">
                    <div className="Author_Port">
                        {/* <PostSummaryAuthorLink authorName={this.props.authorName} authorLink={this.props.authorLink}></PostSummaryAuthorLink> */}
                        <PostSummaryAuthorLink authorName={this.props.authorName}></PostSummaryAuthorLink>
                    </div>
                    <div className="Requested_Date_Port">
                        {this.props.requestedDate}
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
                <div className = "groupBtn">
                    {groupBtn}
                </div>
            </div>
        );
    }
}
export default PostSummary;