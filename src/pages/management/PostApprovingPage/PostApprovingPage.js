/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import 'layouts/AdminLayout'
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

                    <div className="number-of-item">
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
                        numShownPage: 5,
                        bottom: "31px"
                    }}
                    />
                </div>
            </div>
        );
    }
}
export default PostApprovingPage;