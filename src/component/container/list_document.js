// Document by VTH
// function: shows the list of document in ducment page.
// props from parent: none
// state: none
// dependency component: summary document, paging, filter
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";
import SummaryDocument from "../document/summary_document";
import FilterDocument from "../document/filter_document";
import Paging from "../paging";
import "./top_post.scss";
import "./list_post.scss";
class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
        };
    }

    render() {
        const { document } = this.props;

        return (
            <div id="group-post">
                <div>
                    <p className="title">DANH SÁCH TÀI LIỆU</p>
                </div>
                <FilterDocument />
                <Card.Body id="card-body">
                    <Row>
                        {document.map((item) => {
                            return (
                                <Col sm={12} md={6}>
                                    <SummaryDocument
                                        item={item}
                                    ></SummaryDocument>
                                </Col>
                            );
                        })}
                    </Row>
                </Card.Body>
                <Paging type="documents"></Paging>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        document: state.document.documents,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ListPost)
);
