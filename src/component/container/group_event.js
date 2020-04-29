import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Accordion, Card, Col } from "react-bootstrap";
import SummaryPost from "../post/summary_post";
import "./group_post.scss";
class GroupEvent extends Component {
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
        const { topEvents } = this.props;
        const style = {
            display: this.state.isExpand
        }
        return (
            <div id="group-post">
                <div onClick={this.changeStatePost.bind(this)}>
                <p id="title">HOẠT ĐỘNG MỚI</p>
                </div>
                
                <Card.Body style={style} id="card-body">
                    <Row>
                        {
                            topEvents.map(item => {
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

        topEvents: state.home.topEvents,

    };

}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupEvent));
