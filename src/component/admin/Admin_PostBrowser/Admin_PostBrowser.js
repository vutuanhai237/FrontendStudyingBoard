import React, { Component } from 'react'
import './Admin_PostBrowser.scss'
import '../Admin_PageLayout.scss'
import PostSummary from '../../shared_components/PostSummary/PostSummary'
import Admin_LeftSidebar from '../_component/Admin_LeftSidebar/Admin_LeftSidebar'
import Admin_HorizontalMenubar from '../_component/Admin_HorizontalMenubar/Admin_HorizontalMenubar'
class Admin_PostBrowser extends Component {
    constructor(props) {
        super();
        this.maxPostNumber = 10;
        this.isAdminBrower = true;
        this.state = {
            requestedPosts:
                [
                    {
                        "id": 60,
                        "url": "some text",
                        "title": "Ký sự ngày ngủ 5 tiếng",
                        "Summary": "some text",
                        "authorName": "Tesla",
                        "authorID": 33,
                        "categoryID": 51,
                        "category": "requestedCategory",
                        "requestedDate": "requested Date",
                        "requestedTime": "12:30:40",
                        "contentURL": "contentURL",
                        "likeCount": 30,
                        "commentCount": 50,
                        "firstImageURL": "https://imgur.com/inBsikg.png",
                        "tags": [
                            "some tag",
                            "tag text"
                        ]
                    },
                    {
                        "id": 5,
                        "url": "some text",
                        "title": "Rảnh mà đi đặt tên, làm component đi",
                        "Summary": "Chào các bạn sinh viên Phòng Kế hoạch Tài chính Thông báo về việc thu học phí học kỳ 2, năm học 2019-2020, hạn đóng 2040, miễn giảm 200% ...",
                        "authorName": "Vu Tuan Hai",
                        "authorID": 29,
                        "categoryID": 51,
                        "category": "requestedCategory",
                        "requestedDate": "requested Date",
                        "requestedTime": "requested Time",
                        "contentURL": "contentURL",
                        "likeCount": 40,
                        "commentCount": 0,
                        "firstImageURL": "https://imgur.com/inBsikg.png",
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }
                ]
        }

    }

    render() {

        let summaryRequestedPostList = this.state.requestedPosts.map((requestedPost) =>
            <PostSummary
                role="ADMIN_ROLE"
                isAdminBrowser={this.isAdminBrower}
                authorName={requestedPost.authorName}
                requestedDate={requestedPost.requestedDate}
                requestedTime={requestedPost.requestedTime}
                requestedCategory={requestedPost.category}
                title={requestedPost.title}
                content={requestedPost.Summary}
                image={requestedPost.firstImageURL}
                tags={requestedPost.tags}
                likeCount={requestedPost.likeCount}
                commentCount={requestedPost.commentCount}
            ></PostSummary>
        )

        return (

            <div className="Admin">
                {/* Header Area */}
                <div className="Admin_Header">
                    {/* <Header></Header> */}
                </div>

                {/* Body Area */}
                <div className="Admin_Main_Port">
                    <Admin_LeftSidebar />
                    <div className="Admin_Center_Port">
                        <Admin_HorizontalMenubar />
                        <div className="Admin_Show_Port">
                            {summaryRequestedPostList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Admin_PostBrowser;