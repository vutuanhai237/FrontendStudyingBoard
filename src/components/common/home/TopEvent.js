// Document by VTH
// function: shows the top of events in home page.
// props from parent: none
// state: expand or not
// dependency component: summary post
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getPostNewActivities } from "services/postServices";
import { bindActionCreators } from "redux";

class TopEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
    }
    changeStatePost() {
        if (this.state.isExpand == "block") {
            this.setState({
                isExpand: "none",
            });
        } else {
            this.setState({
                isExpand: "block",
            });
        }
    }
    componentDidMount() {
        this.props.getPostNewActivities();
    }
    render() {
        const { newActivities } = this.props;
        const style = {
            display: this.state.isExpand,
        };
        return (
            <div className="display-flex">
                <div className="Highlight_Title">SỰ KIỆN</div>
                <div className="Highlight_Title_Underline"></div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        newActivities: store.post.newActivities,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostNewActivities,
}, dispatch);

export default withRouter(
    connect(mapStoreToProps, mapDispatchToProps)(TopEvent)
);