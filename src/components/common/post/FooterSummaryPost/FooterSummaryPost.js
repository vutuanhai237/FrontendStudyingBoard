// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: currentPost
// state: none
// dependency component: none
import React, { Component } from "react";
import { Nav, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "components/common/post/FooterSummaryPost/FooterSummaryPost.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    faHeart,
    faBookmark,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    postLike,
    delUnlike,
    postComment,
    postSave,
} from "services/PostAPI"

import { bindActionCreators } from 'redux';
class FooterSummaryPost extends Component {
    constructor(props) {
        super(props);
        this.switchLike = this.switchLike.bind(this);
        this.switchSave = this.switchSave.bind(this);
        this.state = {
            liked: false,
        };
    }
    switchLike() {
        var currentPost = null;
        const { isFetchSuccess, isSummary } = this.props;
        if (isSummary) {
            currentPost = this.props.item;
        } else {
            currentPost = this.props.currentPost;
        }
        console.log(isSummary);
        console.log(currentPost);
        if (currentPost.liked) {
            this.props.delUnlike(2, currentPost.id);
            this.setState({
                liked: false
            })
        }
        else {
            this.props.postLike(2, currentPost.id);
            this.setState({
                liked: true
            })
        }
    }
    switchSave() {
        
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.currentPost.liked);
        this.setState({
            liked: nextProps.currentPost.liked
        })
    }
    renderTooltip(message) {
        return <Tooltip id="button-tooltip">{message}</Tooltip>;
    }
    render() {
        var currentPost = null;
        const { isFetchSuccess, isSummary } = this.props;
        if (isSummary) {
            currentPost = this.props.item;
        } else {
            currentPost = this.props.currentPost;
        }
        var likeButton, saveButton;
        if (this.state.liked) {
            likeButton = <OverlayTrigger placement="right" delay={{ show: 100, hide: 200 }} overlay={this.renderTooltip("Đã like")}>
                <FontAwesomeIcon style={{ color: "rgb(255,59,48)", transition: "all 0.5s", }} icon={faHeart} />
            </OverlayTrigger>
        } else {
            likeButton = <FontAwesomeIcon style={{ color: "#5279db", transition: "all 0.5s", }} icon={faHeart} />

        }

        if (currentPost.saved) {
            saveButton = <FontAwesomeIcon style={{ color: "rgb(255,59,48)", transition: "all 0.5s", }} icon={faBookmark} />
        } else {
            saveButton = <OverlayTrigger placement="right" delay={{ show: 100, hide: 200 }} overlay={this.renderTooltip("Đã lưu")}>
                <FontAwesomeIcon style={{ color: "#5279db", transition: "all 0.5s", }} icon={faBookmark} />
            </OverlayTrigger>
        }
        return (
            <Col className="justify-content-end d-flex">
                <div id="footer">
                    <Nav>
                        <Nav.Link onClick={ this.switchLike}>
                            {likeButton}
                        </Nav.Link>
                        <Nav.Link className="info-likecount">
                            {currentPost.likeCount}
                        </Nav.Link>
                        <Nav.Link onClick={this.switchSave}>
                            {saveButton}
                        </Nav.Link>
                        <Nav.Link className="info-save">Lưu</Nav.Link>

                        <Nav.Link>
                            <FontAwesomeIcon
                                style={{ color: "rgb(142,142,147)" }}
                                icon={faEye}
                            />
                        </Nav.Link>
                        <Nav.Link className="info-commentcount">
                            {currentPost.numView}
                        </Nav.Link>
                    </Nav>
                </div>
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.post.currentPost,
        isFetchSuccess: state.post.isFetchSuccess,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postLike,
    delUnlike,
    postSave,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FooterSummaryPost)
);
