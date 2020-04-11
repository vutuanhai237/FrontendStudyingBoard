import React, { Component } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import anh from "../../img/anh.jpg"
import "./summary_post.scss"
import PropTypes from 'prop-types';
import FooterSummaryPost from "../post/footer_summary_post"
class SummaryPost extends Component {
    render() {
        const {posts} = this.props;
        if (!posts) return <div>Không có bài post nào</div>;
        return (

            <div id="summary">
                <Container>
                    <Card className="card-body">

                        <Card.Body >
                            <Card.Img variant="top" src={anh} />
                            <Card.Title className="card-title">{this.props.title}</Card.Title>
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
                            <line></line>
                            <Row>
                                <FooterSummaryPost />
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

SummaryPost.propTypes = {
    title: PropTypes.string.isRequired,
}
export default SummaryPost;
