// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Nav, Row, Form, Button, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./FooterSummaryPost.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    faHeart,
    faBookmark,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
    postComment,
} from "service/PostAPI"
import {
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import "./CommentPost.scss"
class CommentPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replyMessage: "Phản hồi",
            isReply: false,
        }
        this.commentPost = this.commentPost.bind(this);
        this.replyComment = this.replyComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }
    replyComment() {
        if (this.state.isReply) {
            this.setState({
                replyMessage: "Phản hồi",
                isReply: false,
            })
        } else {
            this.setState({
                replyMessage: "Hủy bỏ",
                isReply: true,
            })
        }
    }

    deleteComment() {

    }
    commentPost(comment) {
        this.props.postComment(comment);
    }
    render() {
        const { item, account } = this.props;
        var replyButton, deleteButton, commentSection, comment, searchBar = null;
        if (account.roleName === "ADMIN") {
            deleteButton= <Button id="replyButton" onClick={this.deleteComment} variant="link">Xóa</Button>
            
        }
        if (!this.props.isChild) {
            replyButton = <Button id="replyButton" onClick={this.replyComment} variant="link">{this.state.replyMessage}</Button>
            
        }
        if (this.state.isReply) {
            searchBar = <div style={{ marginLeft: "-10px", marginTop: "5px" }} >
                <SearchBar isSearchBar={false} noBorder placeholder="Nhập bình luận" paramName="comment" icon={faArrowRight} action={this.postComment} />

            </div>

        } else {
            searchBar = null;
        }
        commentSection = <div>
            <Row>
                <Nav className="container-fluid ">
                    <Nav.Item>
                        <Nav.Link>
                            <img src={item.userAvatarURL} alt="Avatar" id="avatar" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Row>
                            <p id="username">{item.username}</p>
                        </Row>
                        <Row>
                            <p id="timestamp">{item.postTimeStamp}</p>
                        </Row>
                    </Nav.Item>

                </Nav>
            </Row>
            <Row>
                <Nav className="container-fluid ">
                    <Nav.Item>
                        <p id="content">{item.content}</p>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row>
                <Nav className="container-fluid ">
                    <Nav.Item>
                        {replyButton}
                        {deleteButton}
                    </Nav.Item>
                </Nav>
            </Row>
        </div>
        if (!this.props.isChild) {
            return <div style={{ width: "100%" }} id="comment">
                {commentSection}
                {searchBar}
            </div>
        } else {
            return <div style={{ marginLeft: "50px", marginTop: "0px" }} id="comment">
                {commentSection}
            </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.user.account,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postComment
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CommentPost)
);
