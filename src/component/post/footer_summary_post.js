// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Nav, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./footer_summary_post.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    faHeart,
    faBookmark,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FooterSummaryDocument extends Component {
    constructor(props) {
        super(props);
        const { item } = this.props;
        this.state = {
            isLiked: item.liked,
            isSaved: item.saved,
        };
    }
    switchLike(id) {
        this.props.switchLike(id);
        this.forceUpdate();
    }
    switchSave(id) {
        this.props.switchSave(id);
        this.forceUpdate();
    }

    renderTooltip(message) {
        return <Tooltip id="button-tooltip">{message}</Tooltip>;
    }
    render() {
        const { item } = this.props;
        return (
            <Col className="justify-content-end d-flex">
                <div id="footer">
                    <Nav>
                        <Nav.Link>
                            {(() => {
                                if (item.liked) {
                                    return (
                                        <div
                                            onClick={() => {
                                                this.switchLike(item.id);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                style={{
                                                    color: "rgb(255,59,48)",
                                                    transition: "all 0.5s",
                                                }}
                                                icon={faHeart}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            onClick={() => {
                                                this.switchLike(item.id);
                                            }}
                                        >
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 100, hide: 200 }}
                                                overlay={this.renderTooltip(
                                                    "Đã like"
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    style={{
                                                        color: "#5279db",
                                                        transition: "all 0.5s",
                                                    }}
                                                    icon={faHeart}
                                                />
                                            </OverlayTrigger>
                                        </div>
                                    );
                                }
                            })()}
                        </Nav.Link>
                        <Nav.Link className="info-likecount">
                            {item.likeCount}
                        </Nav.Link>
                        <Nav.Link>
                            {(() => {
                                if (item.saved) {
                                    return (
                                        <div
                                            onClick={() => {
                                                this.switchSave(item.id);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                style={{
                                                    color: "rgb(255,59,48)",
                                                    transition: "all 0.5s",
                                                }}
                                                icon={faBookmark}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            onClick={() => {
                                                this.switchSave(item.id);
                                            }}
                                        >
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 100, hide: 200 }}
                                                overlay={this.renderTooltip(
                                                    "Đã lưu"
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    style={{
                                                        color: "#5279db",
                                                        transition: "all 0.5s",
                                                    }}
                                                    icon={faBookmark}
                                                />
                                            </OverlayTrigger>
                                        </div>
                                    );
                                }
                            })()}
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

const mapDispatchToProps = (dispatch) => {
    return {
        switchLike: (id) => dispatch({ type: "post/like_changed", id: id }),
        switchSave: (id) => dispatch({ type: "post/save_changed", id: id }),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FooterSummaryDocument)
);
