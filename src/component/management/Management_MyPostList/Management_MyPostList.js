/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import '../ManagementPage'
import Management_Titlebar from '../management_components/Management_Titlebar/Management_Titlebar'
import DocSummaryItem from 'component/shared_components/DocSummaryItem'

import Paginator from 'component/shared_components/Paginator/ClientPaginator'

//import for redux
import { management_getAllUserDocList } from "service/management_services/management_docAPIs"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Management_MyPostList extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 5;

        this.userDocList = [];

        this.state = {
            currentInteractList: []
        }

    }

    componentDidMount() {

        this.props.management_getAllUserDocList(1);
    }

    //client
    onPageChangeClient = (currentInteractList) => {
        this.setState({ currentInteractList: currentInteractList })
    }

    render() {
        let summaryMyDocList = <></>; //sau nay se lam mot cai content loader.
        // console.log(this.state.currentInteractList);
        if (this.props.userDocList) {
            this.userDocList = this.props.userDocList;

            console.log(this.userDocList)
            summaryMyDocList = this.state.currentInteractList.map((myDoc) => (
                < DocSummaryItem
                    key={myDoc.id}
                    id={myDoc.id}
                    authorName={myDoc.authorName}
                    authorID={myDoc.authorID}
                    publishedDate={myDoc.documentPublishDtm}
                    publishedTime={myDoc.myTime}
                    categoryName={myDoc.categoryName}
                    categoryID={myDoc.categoryID}
                    title={myDoc.title}
                    content={myDoc.summary}
                    viewCount={myDoc.viewCount}
                    downloadCount={myDoc.downloadCount}
                    subjectName={myDoc.subjectName}
                    subjectID={myDoc.subjectID}
                    // lost
                    semesterName={myDoc.semester}
                    year={myDoc.year}

                ></DocSummaryItem >)
            )
        }
        return (
            <div>
                <Management_Titlebar title="BÀI VIẾT CỦA TÔI" />
                <div className="Management_Show_Layout">

                    <div className="Number_Of_Item">
                        Tổng số:
                        <div style={{ width: "5px" }} />
                        {this.userDocList.length}
                    </div>

                    {summaryMyDocList}

                    <Paginator config={{
                        changePage: (currentInteractList) => this.onPageChangeClient(currentInteractList),
                        rawData: [...this.userDocList],
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

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        userDocList: state.management_doc.userDocList,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    management_getAllUserDocList
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Management_MyPostList));
