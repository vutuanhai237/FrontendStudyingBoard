// Document by VTH
// function: shows the top of documents in home page.
// props from parent: none
// state: expand or not
// dependency component: summary document
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import SummaryDocument from "../document/summary_document";
import "./top_document.scss";
class TopDocument extends Component {
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
    render() {
        const { topDocs } = this.props;
        const style = {
            display: this.state.isExpand,
        };
        return (
            <div id="group-post">
                <div onClick={this.changeStatePost.bind(this)}>
                    <p className="title">TÀI LIỆU MỚI</p>
                </div>

                <Card.Body style={style} className="card-body">
                    <Row>
                        {topDocs.map((item) => {
                            return (
                                <Col sm={12} md={4}>
                                    <SummaryDocument
                                        item={item}
                                    ></SummaryDocument>
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
        topDocs: state.home.topDocs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TopDocument)
);
