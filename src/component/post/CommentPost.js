// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Nav, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
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
} from "../../service/PostAPI"

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindActionCreators } from 'redux';
import "./CommentPost.scss"
class CommentPost extends Component {
    constructor(props) {
        super(props);
        this.commentPost = this.commentPost.bind(this);
        this.replyComment = this.replyComment.bind(this);
    }
    replyComment() {
        console.log(1);
    }
    commentPost(comment) {
        this.props.postComment(this.props.item.id, comment);
    }
    render() {
        const { item } = this.props;
        return (
            <div id="comment">
                <Row>
                    <Nav className="container-fluid ">
                        <Nav.Item>
                            <Nav.Link>
                                <img src={item.userAvatarURL} alt="Avatar" id="avatar" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Row>
                                <p id="username">{item.userName}</p>
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
                            <a onClick={this.replyComment()}>
                                Click me
                            </a>
                        </Nav.Item>
                    </Nav>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postComment
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CommentPost)
);
