import React, { Component } from 'react';
import anh from "../../img/board.png"
import { Carousel, Row, Col } from "react-bootstrap"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./wallpage.scss";
class WallPaper extends Component {
    render() {
        // const { topWallPaper } = this.props;
        return (

            <div>
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                            id="image"
                            className="d-block w-100 h-50"
                            src={anh}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Training Cuối học kì I</h3>
                            <p>Buổi training đã thành công tốt đẹp tại giảng đường 1</p>
                            <Row>
                                <Col />
                                <Col>
                                    <p style={{ display: "inline" }}>21.01.2020</p>
                                   
                                </Col>
                                <Col />

                            </Row>

                        </Carousel.Caption>
                    </Carousel.Item>

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

const mapStateToProps = state => {
    return {

        topWallPaper: state.home.topWallPaper,

    };

}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WallPaper));
