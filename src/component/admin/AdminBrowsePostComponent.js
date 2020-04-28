import React, { Component } from 'react'
import './AdminBrowsePostComponent.scss'
import PostSummary from '../post_summary/PostSummary'

class AdminBrowsePostComponent extends Component {
    constructor(props) {
        super();
        this.maxPostNumber = 10;
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
        let summaryRequestedPostList = this.state.requestedPosts.map((requestedPost) => {
            return (
                <PostSummary
                    isAdmin="true"
                    authorName={requestedPost.authorName}
                    requestedDate={requestedPost.requestedDate}
                    requestedTime={requestedPost.requestedTime}
                    requestedCategory={requestedPost.category}
                    title={requestedPost.title}
                    content={requestedPost.Summary}
                    image={requestedPost.firstImageURL}
                    tags = {requestedPost.tags}
                ></PostSummary>
            );
        })

        return (
            <div className="Root_Admin_Post_List_Component">
                {summaryRequestedPostList}
            </div>
        );
    }
}
export default AdminBrowsePostComponent;