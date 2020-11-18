/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import '../AdminLayout'
import Titlebar from 'components/common/Titlebar/Titlebar'
import Paginator from 'components/common/Paginator/ClientPaginator'

class PostApprovingPage extends Component {
    constructor({ routeConfig }) {
        super();
        this.isManagementBrowserPost = true;
        this.maxItemPerPage = 2;
        this.apiPrefix = "/api/v1/browser_post/";
        // this.pageCount = 0;
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "some tag",
                            "tag text"
                        ]
                    },
                    {
                        "id": 19,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }, {
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }, {
                        "id": 9,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    },
                    {
                        "id": 100,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }, {
                        "id": 101,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    },
                    {
                        "id": 104,
                        "url": "some text",
                        "title": "Bài cuối cùng rồi!",
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    },
                    {
                        "id": 105,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "some tag",
                            "tag text"
                        ]
                    },
                    {
                        "id": 106,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }, {
                        "id": 107,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }, {
                        "id": 108,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    },
                    {
                        "id": 109,
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }, {
                        "id": 110,
                        "url": "some text",
                        "title": "Rảnh mà đi đặt tên, làm component đi nhé!",
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
                        "firstImageURL": 'https://imgur.com/inBsikg.png',
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    },

                ],
            currentInteractList: [],
            page_number: 1,
            pageCount: 0

        }
    }

    componentDidMount() {

        // this.pageCount = 4;
        this.setState({
            currentInteractList: this.state.requestedPosts
        })
    
    }


    //client
    onPageChangeClient = (currentInteractList) => {
        this.setState({ currentInteractList: currentInteractList })
    }

    //client
    onPageChangeServer = (page_number) => {
        console.log(page_number)
        this.setState({ page_number: page_number })

    }

    render() {
       
        return (
            <div>
                <Titlebar title="PHÊ DUYỆT BÀI VIẾT" />
                <div className="left-side-bar-layout-content-container">

                    <div className="Number_Of_Item">
                        Tổng số:
                        <div style={{ width: "5px" }} />
                        {this.state.requestedPosts.length}
                    </div>

                    {/* {summaryRequestedPostList} */}

                    <Paginator config={{
                        changePage: (currentInteractList) => this.onPageChangeClient(currentInteractList), //client
                        rawData: this.state.requestedPosts, //client
                        // changePage: (page_number) => this.onPageChangeServer(page_number), //server   
                        pageCount: this.state.pageCount, //server
                        maxItemPerPage: this.maxItemPerPage,
                        numPagesShown: 5,
                        bottom: "31px"
                    }}
                    />
                </div>
            </div>
        );
    }
}
export default PostApprovingPage;