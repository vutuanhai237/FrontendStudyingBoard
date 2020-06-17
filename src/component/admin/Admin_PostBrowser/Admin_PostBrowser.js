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
        this.maxPostNumber = 10;
        this.isAdminBrowser = true;
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
                ],
            arrayShownPages: [1, 2, 3, 4, 5], //define which number will be output
            currentPage: 1,
            itemPerPage: 5,
            pageCount: 0

        }
    }

    componentDidMount() {
        this.setState({ pageCount: Math.floor(this.state.requestedPosts.length / this.state.itemPerPage) })
    }

    onClickPageNumber = (e, page_number) => {
        console.log(this.state.pageCount)
        switch (page_number) {
            case 1:
                console.log("1");
                break;
            case 2:
                console.log("2");
                break;
            case this.state.pageCount:
                console.log("last page");
                break;
            default:
                console.log("default");
        }
        this.setState({
            currentPage: page_number
        })

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
            <div className="Page_Item" id={page_number} key={page_number} onClick={this.onClickPageNumber}>
                {
                    page_number !== this.state.currentPage
                        ?
                        <div className="Deactivated_Page" onClick={e => this.onClickPageNumber(e, page_number)}>
                            {page_number}
                        </div>
                        :
                        <div className="Activated_Page">
                            {page_number}
                        </div>
                }
            </div>
        );
        return (
            <div>
                <Admin_Titlebar title="PHÊ DUYỆT BÀI VIẾT" />
                <div className="Admin_Show_Port">
                    {summaryRequestedPostList}

                    <div className="Paginator">
                        <div className="First_Page" >
                            first
                        </div>
                        <div className="Prev_Page">
                            Prev
                        </div>
                        {shownPages}
                        <div className="Next_Page">
                            Next
                        </div>
                        <div className="Last_Page">
                            last
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Admin_PostBrowser;