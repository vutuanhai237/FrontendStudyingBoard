// Document by VTH
// function: shows the top of posts in home page.
// props from parent: none
// state: expand or not
// dependency component: summary post
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";
import SummaryPost from "../post/SummaryPost";
import "./TopPost.scss";
class TopPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
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
        const { posts } = this.props;
        const style = {
            display: this.state.isExpand,
        };
        return (
            <div id="group-post">
                <div onClick={this.changeStatePost.bind(this)}>
                    <p className="title">BÀI VIẾT HAY</p>
                </div>

                <Card.Body style={style} className="card-body">
                    <Row>
                        {posts.slice(0,3).map((item) => {
                            return (
                                <Col sm={12} md={4}>
                                    <SummaryPost item={item}></SummaryPost>
                                </Col>
                            );
                        })}
                    </Row>
                </Card.Body>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TopPost)
);
