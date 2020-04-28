import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Accordion, Card, Col } from "react-bootstrap";
import SummaryPost from "../post/summary_post";
import "./group_post.scss";
class GroupPost extends Component {

    render() {
        const { topPosts } = this.props;
        return (
            <div id="group-post">

                <Accordion defaultActiveKey="0">

                    <Card.Header id="card-header">

                        <Accordion.Toggle id="toggle-button" as={Card.Header} variant="link" eventKey="0">
                            <span id="title"><i>BÀI VIẾT MỚI NHẤT</i></span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <hr></hr>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body id="card-body">
                            <Row>
                                {
                                    topPosts.map(item => {
                                        return <Col sm={4}>
                                            <SummaryPost item={item}></SummaryPost>
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

        topPosts: state.home.topPosts,

    };

}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupPost));
