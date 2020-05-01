import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Card, Col, Dropdown } from "react-bootstrap";
import SummaryPost from "../post/summary_post";
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
        }
    }


    render() {
        const { topPosts } = this.props;

        return (
            <div id="group-post">
                <div>
                    <p id="title">DANH SÁCH BÀI VIẾT</p>
                </div>
                <div>
                    <Row className="filter">
                        <Col>
                            <p style={{ display: "inline" }}>Thời gian</p>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Mới nhất
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Muộn nhất</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        <Col>
                            <p style={{ display: "inline" }}>Thời gian</p>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Buttonadaaadadadaa
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>





                <Card.Body id="card-body">
                    <Row>
                        {
                            topPosts.map(item => {
                                return <Col sm={12} md={4}>
                                    <SummaryPost item={item}></SummaryPost>
                                </Col>
                            })
                        }

                    </Row>
                </Card.Body>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
