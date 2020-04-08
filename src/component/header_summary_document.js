import React, { Component } from 'react';
import { Button, Image, Container, Row, Col } from 'react-bootstrap';
import "./header_summary_document.scss"


class HeaderSummaryDocument extends Component {
    render() {
        return (

            <div>
                <Row id="info_title" className="content-right">
                    <Col id="head"><p>|</p></Col>
                    <Col id="category">
                        <Button className="">
                            Toán học
                        </Button>
                    </Col>
                    <Col id="author">
                        Third, but second
                    </Col>
                </Row>
            </div>
        );
    }
}


export default HeaderSummaryDocument;
