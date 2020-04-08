import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

import "./wallpage.scss";
import SummaryDocument from "../summary_document"
class WallPaper extends Component {
    render() {
        return (

            <Container >
                <Row>
                    <Col  id="jumbo" md={4}>
                        <Jumbotron>
                            <h1>Hello, world!</h1>
                            <p>
                                This is a simple hero unit, calling
                              
                        </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                    <Col id="top-post" md={8}>
                        <SummaryDocument id="wallpaper" />
                    </Col>
                </Row>
            </Container>

        );
    }
}


export default WallPaper;
