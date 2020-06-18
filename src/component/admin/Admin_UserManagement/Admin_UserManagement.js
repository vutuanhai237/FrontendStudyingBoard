
import React, { Component } from 'react'
import './Admin_UserManagement.scss'
import '../AdminPage'
import PostSummary from '../_component/Admin_UserItem/Admin_UserItem'
import Admin_Titlebar from '../_component/Admin_Titlebar/Admin_Titlebar'
import Paginator from '../../shared_components/Paginator/Paginator'


class Admin_UserManagement extends Component {
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
                tags={requestedPost.tags}
                likeCount={requestedPost.likeCount}
                commentCount={requestedPost.commentCount}
            ></PostSummary>
        )

        return (

            <div>
                <Admin_Titlebar title="PHÊ DUYỆT BÀI VIẾT" />
                <div className="Admin_Show_Port">

                    <div className="Number_Of_Item">
                        Tổng số:
                        <div style={{ width: "5px" }} />
                        {this.state.requestedPosts.length}
                    </div>

                    {summaryRequestedPostList}

                    <Paginator config={{
                        changePage: (currentInteractList) => this.onPageChange(currentInteractList),
                        rawData: this.state.requestedPosts,
                        maxItemPerPage: this.maxItemPerPage,
                        numPagesShown: 5,
                        bottom: "20px"
                    }}
                    />
                </div>
            </div>
        );
    }
}
export default Admin_UserManagement;