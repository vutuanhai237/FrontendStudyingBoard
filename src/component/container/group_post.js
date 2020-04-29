import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Accordion, Card, Col } from "react-bootstrap";
import SummaryPost from "../post/summary_post";
import "./group_post.scss";
class GroupPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        }
    }
    changeStatePost() {
        if (this.state.isExpand == "block") {
            this.setState({
                isExpand: "none",
            })
        } else {
            this.setState({
                isExpand: "block",
            })
        }
      
    }
    
    render() {
        const { topPosts } = this.props;
        const style = {
            display: this.state.isExpand
        }
        return (
            <div id="group-post">
                <div onClick={this.changeStatePost.bind(this)}>
                <p id="title">BÀI VIẾT HAY</p>
                </div>
                
                <Card.Body style={style} id="card-body">
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
