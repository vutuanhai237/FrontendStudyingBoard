import React, { Component } from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import SummaryDocument from "../document/summary_document";
import "./group_document.scss";

class GroupDocument extends Component {
    render() {
        return (
            <div id="group-post">

                <Accordion defaultActiveKey="0">
               
                    <Card>
                        <Card.Header id="card-header">
                         
                            <Accordion.Toggle id="toggle-button"as={Card.Header} variant="link" eventKey="0">
                                <span id="title"><i>TÀI LIỆU HAY</i></span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <hr></hr>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body id="card-body">
                                <Row>
                                    <Col sm={4}>
                                        <SummaryDocument></SummaryDocument>
                                    </Col>
                                    <Col sm={4}>
                                        <SummaryDocument></SummaryDocument>
                                    </Col>
                                    <Col sm={4}>
                                        <SummaryDocument></SummaryDocument>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default GroupDocument;
