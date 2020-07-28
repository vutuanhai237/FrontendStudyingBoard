import React, { Component } from "react";
import anh from "../../img/board.png";
import { Carousel, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Wallpage.scss";
class WallPaper extends Component {
    imageClick() {
        console.log(1)
    }
    render() {
        const { newActivities } = this.props;
        if (!newActivities) {
            return <div></div>;
        }
        return (
            <div>
                <Carousel className="carousel">
                    {newActivities.map((item) => {
                        return <Carousel.Item>
                            <img id="image" className="d-block w-100 h-100" src={item.imageURL} alt="First slide"
                                onClick={() => this.imageClick()} />
                            <Carousel.Caption>
                                <h3 style={{ textShadow: "2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black" }}>{item.title}</h3>
                                <p style={{ textShadow: "2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black" }}>{item.summary}</p>
                                <Row>
                                    <Col />
                                    <Col>
                                        <p style={{ display: "inline" }}>
                                            {item.publishDate}
                                        </p>
                                    </Col>
                                    <Col />
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
                <div className="animation-area">
                    <ul className="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newActivities: state.post.newActivities,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(WallPaper)
);
