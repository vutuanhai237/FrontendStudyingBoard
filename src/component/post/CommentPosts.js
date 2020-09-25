// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
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
} from "service/PostAPI"
import { getPostCommentByID } from "service/PostAPI"
import { bindActionCreators } from 'redux';
class CommentPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        }
        this.commentPost = this.commentPost.bind(this);
        this.renderCommentChilds = this.renderCommentChilds.bind(this);
    }
    commentPost() {
        const { currentPost, account } = this.props;
        const comment = {
            content: this.state.content, 
            userAvatarURL: account.avatar, //
            userID: account.id, //
            userName: account.displayName,  //
            commentSoftDeleted: false, 
            commentHidden: false, 
            commentApproved: false, 
            parentCommentID: 1, 
            postID: currentPost.id, //
        }
        console.log(comment);
        this.props.postComment(comment);
    }

    renderCommentChilds(item) {
        if (typeof item !== "undefined") {
            return <Col>
                {
                    item.map(subItem => {
                        return <Row>
                            <CommentPost isChild={true} item={subItem} />

                        </Row>

                    })
                }
            </Col>
        } return;
    }
    passValueToHeader(value) {
        console.log(value);
        this.setState({
            content: value,
        })
    }
    render() {
        const { currentComments } = this.props;
        return <div className="comment">
            <SearchBar passValueToHeader={this.passValueToHeader.bind(this)} isSearchBar={false} noBorder placeholder="Nhập bình luận" paramName="comment" icon={faArrowRight} onSearch={this.commentPost} />
            {currentComments.map((item) => {
                var commentChilds = this.renderCommentChilds(item.commentChilds);
                return (
                    <Row>
                        <CommentPost isChild={false} item={item} />
                        <Col>
                            {commentChilds}
                        </Col>
                    </Row>
                );
            })}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.post.currentPost,
        account: state.user.account,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postComment,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CommentPosts)
);
