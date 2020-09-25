// Document by VTH
// function: shows the list of document in ducment page.
// props from parent: none
// state: none
// dependency component: summary document, paging, filter
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";
import SummaryDoc from "../doc/SummaryDoc";
import FilterDoc from "../doc/FilterDoc";
import Paging from "../Paging";
import { getSearchDoc } from "service/DocAPI.js"
import { bindActionCreators } from 'redux';
class ListDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
        };
    }

    render() {
        const { searchDocs } = this.props;
        return (
            <div id="group-post">
                <div>
                    <p style={{ marginTop: "20px" }} className="title">DANH SÁCH TÀI LIỆU</p>
                </div>
                <FilterDoc />
                <Card.Body id="card-body">
                    <Row>
                        {searchDocs.map((item) => {
                            return (
                                <Col sm={12} md={6}>
                                    <SummaryDoc
                                        item={item}
                                    ></SummaryDoc>
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

const mapStatetoProps = (state) => {
    return {
        searchDocs: state.doc.searchDocs
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchDoc
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ListDoc));
