// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Nav, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./FooterSummaryPost.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    faHeart,
    faBookmark,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    postLike,
    postComment,
    postSave,
} from "../../service/PostAPI"

import { bindActionCreators } from 'redux';
class FooterSummaryPost extends Component {
        constructor(props) {
            super(props);
            this.switchLike = this.switchLike.bind(this);
            this.switchSave = this.switchSave.bind(this);  
        }
        switchLike(id) {
            this.props.postLike(id);
        }
        switchSave(id) {
            this.props.postSave(id);
        }

        renderTooltip(message) {
            return <Tooltip id="button-tooltip">{message}</Tooltip>;
        }
        render() {
            const { item } = this.props;
            var likeButton, saveButton;
            if (item.isLiked) {
                likeButton = <FontAwesomeIcon style={{ color: "rgb(255,59,48)", transition: "all 0.5s", }} icon={faHeart} />
            } else {
                likeButton = <OverlayTrigger placement="right" delay={{ show: 100, hide: 200 }} overlay={this.renderTooltip("Đã like")}>
                    <FontAwesomeIcon style={{ color: "#5279db", transition: "all 0.5s", }} icon={faHeart} />
                </OverlayTrigger>
            }

            if (item.isSaved) {
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
                            <Nav.Link onClick={() => { this.switchLike(item.id); }}>
                                {likeButton}
                            </Nav.Link>
                            <Nav.Link className="info-likecount">
                                {item.likeCount}
                            </Nav.Link>
                            <Nav.Link onClick={() => { this.switchSave(item.id); }}>
                                {saveButton}
                            </Nav.Link>
                            <Nav.Link className="info-save">Lưu</Nav.Link>

                            <Nav.Link>
                                <FontAwesomeIcon
                                    style={{ color: "rgb(142,142,147)" }}
                                    icon={faComment}
                                />
                            </Nav.Link>
                            <Nav.Link className="info-commentcount">
                                {item.commentCount}
                            </Nav.Link>
                        </Nav>
                    </div>
                </Col>
            );
        }
    }

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postLike,
    postSave,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FooterSummaryPost)
);
