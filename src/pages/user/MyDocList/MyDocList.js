/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Titlebar from 'components/common/Titlebar/Titlebar'
import DocSummaryItem from 'components/shared/DocSummaryItem'
import Paginator from 'components/common/Paginator/ServerPaginator';
import ComboBox from 'components/common/Combobox/Combobox';

//import for redux
import { management_getAllNotApprovedDocuments, management_getAllUserDocList } from "services/authorized/docServices"
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Management_MyDocList extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 5;

        this.userDocList = [];

        this.state = {
            currentInteractList: []
        }

    }

    componentDidMount() {

        this.props.getAllUserDocList(1);
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
                    publishDate={myDoc.documentPublishDtm}
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
                <Titlebar title="TÀI LIỆU CỦA TÔI" />
                <div className="Management_Show_Layout">

                    <div className="number-of-item">
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

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Management_MyDocList));
