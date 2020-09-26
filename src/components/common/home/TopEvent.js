// Document by VTH
// function: shows the top of events in home page.
// props from parent: none
// state: expand or not
// dependency component: summary post
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";
import SummaryPost from "components/common/post/SummaryPost/SummaryPost";
import { getPostNewActivities } from "services/PostAPI";
import { bindActionCreators } from "redux";
import "./TopPost.scss";
class TopEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
    }
    changeStatePost() {
        if (this.state.isExpand == "block") {
            this.setState({
                isExpand: "none",
            });
        } else {
            this.setState({
                isExpand: "block",
            });
        }
    }
    componentDidMount() {
        this.props.getPostNewActivities();
    }
    render() {
        const { newActivities } = this.props;
        const style = {
            display: this.state.isExpand,
        };
        return (
            <div id="group-post">
                <div onClick={this.changeStatePost.bind(this)}>
                    <p style={{marginTop: "20px"}} className="title">HOẠT ĐỘNG MỚI</p>
                </div>

                <Card.Body style={style} className="card-body">
                    <Row>
                        {newActivities.map((item) => {
                            return (
                                <Col sm={12} md={4}>
                                    <SummaryPost item={item}></SummaryPost>
                                </Col>
                            );
                        })}
                    </Row>
                </Card.Body>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newActivities: state.post.newActivities,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostNewActivities,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TopEvent)
);
