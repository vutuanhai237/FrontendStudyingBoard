import React from "react";
import { Form, Button, Modal, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import logo from "../../img/logo-bht.png";
import { HOST } from "../../constant/index"
import { postLogin, getCurrentUser } from "../../service/UserAPI"

import { bindActionCreators } from 'redux';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            modalShow: false,
            isLoginSuccess: false,
            
        };
        this.statusLoginCode = 0;
        this.modalMessage = "";
        this.modalOKMessage = "Đồng ý";

    }


    login() {
        const account = {
            username: this.refs.username.value,
            password: this.refs.password.value,
        }
        this.props.postLogin(account);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.statusLoginCode);
        this.statusLoginCode = nextProps.statusLoginCode;
        console.log(this.statusLoginCode);
        this.handleModal();
    }

    handleModal() {
        if (this.statusLoginCode === 3) {
            this.setState({
                isLoginSuccess: true,
                modalShow: true,
            });
            this.modalMessage = "Đăng nhập thành công";
        } else {
            this.setState({
                isLoginSuccess: false,
                modalShow: true,
            });
            switch(this.statusLoginCode) {
                case 0:
                    this.modalMessage = "Đăng nhập thất bại, sai tài khoản";
                    break;
                case 1:
                    this.modalMessage = "Đăng nhập thất bại, sai mật khẩu";
                    break;
                default:
                    break;
                
            }
        }
    }
    handleClose() {
        this.setState({
            modalShow: false,
        });
        if (this.statusLoginCode === 3) {
            const createHistory = require("history").createBrowserHistory;
            let history = createHistory();
            history.push("/");
            let pathUrl = window.location.href;
            window.location.href = pathUrl;
        }
    }
    register() {
        this.props.getCurrentUser();
    }
    forgotpassword() { }

    render() {
        return (
            <div>
                <Modal
                    centered
                    show={this.state.modalShow}
                    onHide={this.handleClose.bind(this)}
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title contained-modal-title-vcenter>
                            Thông báo
                        </Modal.Title>
                    </Modal.Header>
                    {(() => {
                        if (this.state.isLoginSuccess) {
                            return (
                                <div>
                                    <Modal.Body>
                                        {this.modalMessage} &#128540;
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="success"
                                            href="/"
                                            onClick={this.handleClose.bind(
                                                this
                                            )}
                                        >
                                            {this.modalOKMessage}
                                        </Button>
                                    </Modal.Footer>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <Modal.Body>
                                        {this.modalMessage} &#128517;
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="danger"
                                            onClick={this.handleClose.bind(
                                                this
                                            )}
                                        >
                                            {this.modalOKMessage}
                                        </Button>
                                    </Modal.Footer>
                                </div>
                            );
                        }
                    })()}
                </Modal>

                <div className="d-flex justify-content-center">
                    <Form id="login-form">
                        <Image
                            className="rounded mx-auto d-block"
                            height="200px"
                            width="200px"
                            alt="logo"
                            src={logo}
                            center
                        ></Image>

                        <p className="title text-center">ĐĂNG NHẬP</p>
                        <br />
                        {/* Mail */}
                        <Form.Group
                            className="email-input"
                            controlId="formBasicEmail"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Nhập username"
                                ref="username"
                            />
                        </Form.Group>
                        {/* Password */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu"
                                ref="password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Ghi nhớ đăng nhập"
                            />
                        </Form.Group>
                        {/* Submit */}
                        <Button
                            className="btn-block"
                            onClick={this.login.bind(this)}
                        >
                            Đăng nhập
                        </Button>
                        <Link to="/">
                            <p className="text-center pt-3">
                                Hoặc xem với tư cách khách &#128526;
                            </p>
                        </Link>
                        <Row>
                            <Col className="btn-register">
                                <Button onClick={this.register.bind(this)} className="btn-block" >
                                    Đăng ký
                                </Button>
                            </Col>

                            <Col className="btn-forgot">
                                <Button
                                    className="btn-block"
                                    href="/forgotpass"
                                >
                                    Quên mật khẩu
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        statusLoginCode: state.user.statusLoginCode,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    postLogin,
    getCurrentUser,
}, dispatch);


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
