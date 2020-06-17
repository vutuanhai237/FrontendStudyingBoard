import React, { Component } from 'react'
// import './Admin_PostBrowser.scss'
import '../AdminPage'
import PostSummary from '../../shared_components/PostSummary/PostSummary'
import Admin_Titlebar from '../_component/Admin_Titlebar/Admin_Titlebar'
import '../../shared_components/Paginator.scss'
import next_page_blue from './../../../img/next_page_blue_icon.png'

class Admin_PostBrowser extends Component {
    constructor({ routeConfig }) {
        super();
        this.maxItemPerPage = 2;
        this.isAdminBrowser = true;
        this.pageShowns = 5;
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
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
                        "firstImageURL": "https://imgur.com/inBsikg.png",
                        "tags": [
                            "tag1",
                            "tag2"
                        ]
                    }, {
                        "id": 110,
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
                    },

                ],
            arrayShownPages: [1, 2, 3, 4, 5], //define which number will be output
            currentPage: 1,
            pageCount: 0,
        }
    }

    componentDidMount() {

        //get true pageCount
        if (this.state.requestedPosts.length % this.maxItemPerPage === 0) {
            this.state.pageCount = Math.floor(this.state.requestedPosts.length / this.maxItemPerPage);
        }
        else {
            this.state.pageCount = Math.floor(this.state.requestedPosts.length / this.maxItemPerPage) + 1;
        }

        //initial array you want to render
        if (this.state.pageCount < this.pageShowns) {
            this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
            for (let i = 1; i <= this.state.pageCount; i++) {
                this.state.arrayShownPages.push(i);
            }
            for (let i = this.pageShowns; i > this.state.pageCount; i--) {
                this.state.arrayShownPages.push("...");
            }
        }


        this.setState(this.state);
    }

    onClickPaginationElement = (page_number, action) => {

        //handler action
        switch (action) {
            case "first":
                page_number = 1;
                break;
            case "prev":
                if (page_number > 1)
                    page_number--;
                break;
            case "next":
                if (page_number < this.state.pageCount)
                    page_number++;
                break;
            case "last":
                page_number = this.state.pageCount;
                break;
            default:
                break;
        }

        //handler page click
        switch (page_number) {
            //set number of page in the midde => update array shown pages
            case 1:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number);
                this.state.arrayShownPages.push(page_number + 1);
                this.state.arrayShownPages.push(page_number + 2);
                this.state.arrayShownPages.push(page_number + 3);
                this.state.arrayShownPages.push(page_number + 4);
                break;
            case 2:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number - 1);
                this.state.arrayShownPages.push(page_number);
                this.state.arrayShownPages.push(page_number + 1);
                this.state.arrayShownPages.push(page_number + 2);
                this.state.arrayShownPages.push(page_number + 3);
                break;
            case this.state.pageCount:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number - 4);
                this.state.arrayShownPages.push(page_number - 3);
                this.state.arrayShownPages.push(page_number - 2);
                this.state.arrayShownPages.push(page_number - 1);
                this.state.arrayShownPages.push(page_number);
                break;
            case this.state.pageCount - 1:
                this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                this.state.arrayShownPages.push(page_number - 3);
                this.state.arrayShownPages.push(page_number - 2);
                this.state.arrayShownPages.push(page_number - 1);
                this.state.arrayShownPages.push(page_number);
                this.state.arrayShownPages.push(page_number + 1);
                break;
            default:
                {
                    if (this.state.pageCount <= 5) {
                        break;
                    }
                    else {
                        this.state.arrayShownPages.splice(0, this.state.arrayShownPages.length);
                        this.state.arrayShownPages.push(page_number - 2);
                        this.state.arrayShownPages.push(page_number - 1);
                        this.state.arrayShownPages.push(page_number);
                        this.state.arrayShownPages.push(page_number + 1);
                        this.state.arrayShownPages.push(page_number + 2);
                    }
                }
        }
        this.setState({
            currentPage: page_number
        })
    }

    getContentsListByPage = (page_number) => {

    }

    render() {

        let summaryRequestedPostList = this.state.requestedPosts.map((requestedPost) =>
            <PostSummary
                key={requestedPost.id}
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

        let shownPages = this.state.arrayShownPages.map(page_number =>
            <div className="Page_Item" id={page_number} key={page_number} >
                {
                    page_number !== this.state.currentPage
                        ?
                        <div className="Deactivated_Page" onClick={() => this.onClickPaginationElement(page_number, "")}>
                            {page_number}
                        </div>
                        :
                        <div className="Activated_Page" onClick={() => this.onClickPaginationElement(page_number, "")}>
                            {page_number}
                        </div>
                }
            </div>
        );
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

                    <div className="Paginator">
                        <div className="First_Page" onClick={() => this.onClickPaginationElement(this.state.currentPage, "first")} > first</div>
                        <div className="Prev_Page" onClick={() => this.onClickPaginationElement(this.state.currentPage, "prev")}>Prev </div>
                        {shownPages}
                        <div className="Next_Page" onClick={() => this.onClickPaginationElement(this.state.currentPage, "next")}> Next</div>
                        <div className="Last_Page" onClick={() => this.onClickPaginationElement(this.state.currentPage, "last")}>last </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Admin_PostBrowser;