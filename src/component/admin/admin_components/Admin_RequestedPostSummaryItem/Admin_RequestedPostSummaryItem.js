import React, { Component } from 'react'

import '../../../shared_components/PostSummary/PostSummary.scss'
import Tag from '../../../shared_components/Tag/Tag'

class Admin_RequestedPostSummaryItem extends Component {

    constructor(props) {
        super(props);

        this.id = this.props.id;
        this.authorName = this.props.authorName;
        this.authorID = this.props.authorID;
        this.requestedDate = this.props.requestedDate;
        this.requestedTime = this.props.requestedTime;
        this.requestedCategory = this.props.requestedCategory;
        this.requestedCategoryID = this.props.requestedCategoryID;
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

        // Render tag from tags list

        let tagsGroup = this.tags.map((tag) => {
            return (
                <Tag text={tag}></Tag>
            )
        }
        );

        return (

            <div className="Requested_Post_Summary_Item" >
                <div className="Requested_Post_Summary_Item_Main_Port">
                    <div className="Requested_Post_Summary_Item_Header_1">
                        <div className="Requested_Post_Summary_Item_Author_Link" onClick={() => this.navigateToAuthorPersonalPage()}>
                            {this.authorName}
                        </div>
                        <div className="Requested_Post_Summary_Item_Requested_Date">
                            {this.requestedDate}
                        </div>
                    </div>

                    <div className="Requested_Post_Summary_Item_Header_2">
                        vào lúc {this.requestedTime} đã yêu cầu phê duyệt một bài viết trong danh mục
                    <div className="Requested_Post_Summary_Item_Category" onClick = {() => this.navigateToSameCategoryPostsPage()}>
                            {this.requestedCategory}
                        </div>
                    </div>

                    <div className="Post_Summary_Title">
                        {this.props.title}
                    </div>

                    <div className="Post_Summary_Content">
                        {this.props.content}
                    </div>

                    <div className="Post_Summary_Image_Port">
                        <img alt="post" className="Post_Summary_Image" src={this.props.image}></img>
                    </div>

                    <div className="Post_Summary_Requested_Tags_Port">
                        {tagsGroup}
                    </div>
                </div>
                <div className="Requested_Post_Summary_Item_Footer">
                    <div className="Simple_Blue_Button" style={{ marginRight: "5px", fontSize: "16px" }}>Xem trước</div>
                    <div className="Simple_Red_Button" style={{ fontSize: "16px" }}>Từ chối</div>
                </div>
            </div>
        );
    }

    navigateToAuthorPersonalPage = () => {
        window.location.href = "/admin/user/" + this.authorID;
    }

    navigateToSameCategoryPostsPage = () => {
        window.location.href = "/post/category?id=" + this.requestedCategoryID;
    }


}
export default Admin_RequestedPostSummaryItem;