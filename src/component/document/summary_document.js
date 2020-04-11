import React, { Component } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import anh from "../../img/anh.jpg"
import "./summary_document.scss"
import FooterSummaryDocument from "./footer_summary_document"
class SummaryDocument extends Component {
    render() {
      
        return (

            <div id="summary">
                <Container>
                    <Card className="card-body">

                        <Card.Body >
                            <Card.Img variant="top" src={anh} />
                            <Card.Title className="card-title">Tài liệu ôn tập giải tích</Card.Title>
                            <Row >
                                <Card.Link className="card-category" href="#">Danh mục Toán học </Card.Link>
                                <Card.Text className="card-author">
                                    được viêt bởi
                                </Card.Text >
                                <Card.Link className="card-author" href="#">Hải</Card.Link>
                            </Row>
                            <Row>
                                <Card.Text className="card-date">
                                    21 - 07 - 2020
                                </Card.Text>
                                <Col className="text-right">
                                    <Card.Text className="card-time">
                                        10 phút đọc
                                </Card.Text>
                                </Col>

                            </Row>
                          
                            <Row>
                                <FooterSummaryDocument />
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}


export default SummaryDocument;
