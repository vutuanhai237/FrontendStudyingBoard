import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";
import SummaryDocument from "../document/summary_document";
import "./group_document.scss";

class GroupDocument extends Component {
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
        const { topDocs } = this.props;
        const style = {
            display: this.state.isExpand
        }
        return (
            <div id="group-post">
                <div onClick={this.changeStatePost.bind(this)}>
                <p id="title">TÀI LIỆU MỚI</p>
                </div>
                
                <Card.Body style={style} id="card-body">
                    <Row>
                        {
                            topDocs.map(item => {
                                return <Col sm={4}>
                                    <SummaryDocument item={item}></SummaryDocument>
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

        topDocs: state.home.topDocs,

    };

}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupDocument));
