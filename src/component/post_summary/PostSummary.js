import React, { Component } from 'react'

// import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import './PostSummary.scss'
import '../shared_components/SummaryAuthorLink'
class PostSummary extends Component {
    constructor(props) {
        super();

        this.state = {
            "portSummary":
            {
                "author_request": "Nguyen Van Dong",
                "requested_time": "ngày đi học lại",
                "requested_category": "Danh mục 1"
            }
        }
    }


    render() {
        // Condition to choose what will be rendered

        return (
            <div className="Post_Summary">
                <div className="Post_Summary_Author_Posted_Date_Port">
                    <div className="Author_Port">

                    </div>
                    <div className="Posted_Date_Port"></div>
                </div>
                <div className="Post_Summary_Requested_Time_Category_Port">
                    vào lúc {this.state.postSummary.requested_time} đã yêu cầu phê duyệt một bài viết trong danh mục
                </div>
                <div className="Post_Summary_Title"></div>
                <div className="Post_Summary_Content"></div>
            </div>
        );
    }
}
export default PostSummary;