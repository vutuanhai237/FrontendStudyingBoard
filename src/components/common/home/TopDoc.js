// Document by VTH
// function: shows the top of documents in home page.
// props from parent: none
// state: expand or not
// dependency component: summary document
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Row, Col, Card } from "react-bootstrap";
// import SummaryDocument from "components/common/document/SummaryDocument/SummaryDocument";
import { bindActionCreators } from 'redux';
import { getTopDoc } from "redux/services/docServices"

class TopDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: "block",
        };
    }

    componentDidMount() {
        this.props.getTopDoc();
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
    render() {
        const { topDoc } = this.props;
        const style = {
            display: this.state.isExpand,
        };
        return (
            // <div id="group-post">
            //     <div onClick={this.changeStatePost.bind(this)}>
            //         <p className="title">TÀI LIỆU MỚI</p>
            //     </div>

            //     <Card.Body style={style} className="card-body">
            //         <Row>
            //             {topDoc.slice(0,3).map((item) => {
            //                 return (
            //                     <Col sm={12} md={4}>
            //                         <SummaryDocument
            //                             item={item}
            //                         ></SummaryDocument>
            //                     </Col>
            //                 );
            //             })}
            //         </Row>
            //     </Card.Body>
            // </div>
            // <div className = "Home_"
            <div className="display-flex">
                <div className="Highlight_Title">TÀI LIỆU MỚI</div>
                <div className="Highlight_Title_Underline"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topDoc:state.document.topDoc,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getTopDoc
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopDoc));
