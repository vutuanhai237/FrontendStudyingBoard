import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Accordion, Card } from "react-bootstrap";
import SummaryDocument from "../document/summary_document";
import "./group_document.scss";

class GroupDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { topDocs } = this.props;
        return (
            <div id="group-post">

                <Accordion defaultActiveKey="0">


                        <Card.Header id="card-header">

                            <Accordion.Toggle id="toggle-button" as={Card.Header} variant="link" eventKey="0">
                                <span id="title"><i>TÀI LIỆU HAY</i></span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <hr></hr>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body id="card-body">
                                <Row>
                                    {
                                        topDocs.map(item => {
                                            return <Col sm={4}>
                                                <SummaryDocument item={item}></SummaryDocument>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>

                </Accordion>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        topDocs: state.home.topDocs,

    };

}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupDocument));
