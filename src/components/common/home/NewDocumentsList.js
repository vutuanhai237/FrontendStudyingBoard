// Document by VTH
// function: shows the top of posts in home page.
// props from parent: none
// state: expand or not
// dependency component: summary post
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getPostNewests } from "redux/services/postServices"
import demo from 'assets/images/Untitled-1.png'
import Loader from 'components/common/Loader/Loader'
import DocSummary from 'components/doc/DocSummary'

class NewDocumentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
    }

    componentDidMount() {
        this.props.getPostNewests();
    }

    render() {
        let newDocumentsList;
        // if (!this.props.isLoading)
        //     newDocumentsList = this.props.newDocumentsList.map(item => {
        //         <DocSummary 
        //     })
        return (

            <div>
                <div className="display-flex margin-bottom-8px">
                    <div className="Highlight_Title">TÀI LIỆU MỚI</div>
                    <div className="Highlight_Title_Underline"></div>
                </div>
                {this.props.isLoading ? <Loader /> :

                    <div style={{ display: "flex" }}>

                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newDocumentsList: state.document.newDocumentsList.data,
        isLoading: state.document.newDocumentsList.isLoading,
        error: state.document.newDocumentsList.error
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostNewests,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NewDocumentsList)
);

