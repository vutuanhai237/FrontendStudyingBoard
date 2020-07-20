// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "./FooterSummaryPost.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar";
import CommentPost from "./CommentPost"
import {
    postComment,
} from "../../service/PostAPI"

import { bindActionCreators } from 'redux';
class CommentPosts extends Component {
    constructor(props) {
        super(props);
        this.commentPost = this.commentPost.bind(this);
    }
    commentPost(comment) {
        this.props.postComment(this.props.item.id, comment);
    }
    render() {
        const { currentComments } = this.props;
        return <div className="comment">
            <SearchBar noBorder placeholder="Nhập bình luận" paramName="comment" icon={faArrowRight} action={this.postComment} />
            {currentComments.map((item) => {
                return (
                    <Row>
                        <CommentPost item={item}/>
                    </Row>
                );
            })}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        currentComments: state.post.currentComments,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postComment
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CommentPosts)
);
