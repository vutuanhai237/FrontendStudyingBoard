import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import logo from "../../img/logo.png"
import "./footer.scss"

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <hr></hr>
                <Row>
                    <Col id="logo" sm={2}>
                        <img
                            src={logo}
                            width="144"
                            height="60"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Col>
                    <Col id="caption" sm={7}>
                        Kênh thông tin Sinh viên của BHT khoa CNPM - Trường ĐH CNTT - ĐHQG-HCM. Website do Ban học tập CNPM thực hiện và quản lý.
                        </Col>
                    <Col sm={2}>
                        {/* <Button className="button-social" >
                            T
                        </Button>
                        <Button className="button-social">
                            Đ
                        </Button> */}


                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={4}>
                        <h4>Thông tin liên hệ</h4>
                        <p>Email: bht.cnpm.uit@gmail.com</p>
                        <p>Hotline: 0366272703</p>
                    </Col>

                    <Col xs={12} sm={4}>
                        <h4>Chính sách</h4>
                        <p>Điểm thưởng</p>
                        <p>Dịch vụ</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4>Chịu trách nhiệm nội dung</h4>
                        <p>Lưu Biêu Nghị</p>

                    </Col>
                </Row>

            </div>

        );
    }
}

export default Footer;
