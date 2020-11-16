import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";
import SummaryPost from "components/common/post/SummaryPost/SummaryPost";

import { bindActionCreators } from "redux";
import { getPostNewests } from "services/PostAPI"
class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
    }

    componentDidMount() {
        this.props.getPostNewests();
    }
    changeStatePost() {
        if (this.state.isExpand === "block") {
            this.setState({
                isExpand: "none",
            });
        } else {
            this.setState({
                isExpand: "block",
            });
        }
    }

    render() {
        const { newests } = this.props;
        const style = {
            display: this.state.isExpand,
        };
        return (
            <div className="flex_container">
                <div className="Highlight_Title">BÀI HỌC NỔI BẬT</div>
                <div className="Highlight_Title_Underline"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newests: state.post.newests,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostNewests,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NewPost)
);

