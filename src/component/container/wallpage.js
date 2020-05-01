import React, { Component } from "react";
import anh from "../../img/board.png";
import { Carousel, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./wallpage.scss";
class WallPaper extends Component {
    render() {
        const { topWallPaper } = this.props;
        if (!topWallPaper) {
            return <div></div>;
        }
        console.log(topWallPaper);
        return (
            <div>
                <Carousel className="carousel">
                    {topWallPaper.map((item) => {
                        return <Carousel.Item>
                        <img
                            id="image"
                            className="d-block w-100 h-100"
                            src={item.img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.caption}</p>
                            <Row>
                                <Col />
                                <Col>
                                    <p style={{ display: "inline" }}>
                                        {item.date}
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topWallPaper: state.home.topWallPaper,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(WallPaper)
);
