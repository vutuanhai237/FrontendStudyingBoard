import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { Row, Accordion, Card, Col } from "react-bootstrap";
import SummaryPost from "../post/summary_post";
import "./group_post.scss";
import fetchGroupPost from "../../service/fetchGroupPost"
class GroupPost extends Component {
    componentDidMount() {
        const { fetchTopPost } = this.props;
        fetchTopPost();
    }
    render() {
        const { posts } = this.props;
        return (
            <div id="group-post">

                <Accordion defaultActiveKey="0">

                    <Card>
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
                                       
                                        posts.map(post => {
                                            
                                            return (
                                                
                                                <Col sm={4}>
                                                    <SummaryPost title={post}></SummaryPost>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        
      posts: state.home.posts,
        
    };
   
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTopPost: fetchGroupPost,
}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupPost));
