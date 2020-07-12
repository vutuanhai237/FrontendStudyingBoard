import React from "react";
import { Form, Button, Modal, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./login.scss";
import logo from "../../img/logo-bht.png";
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            modalShow: false,
            isLoginSuccess: false,
        };
    }
    handleClick = async (event) => {
        event.preventDefault();
        if (this.state.login) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: this.refs.username.value, password: this.refs.password.value })
            };
            console.log(requestOptions);
            let response = await fetch('api/v1/auth/login', requestOptions);
            if(!response.ok) {
                this.setState({
                    isLoginSuccess: false
                })
                return;
            }
            else {
                let data = await response.json();
                sessionStorage.setItem("token", data.accessToken);
                this.setState({
                    isLoginSuccess: true
                })
            }
        }
    }

    login() {
        
        const { accounts } = this.props;
        this.setState({
            isLoginSuccess: false,
            modalShow: true,
        });
        accounts.map((item) => {
            if (
                this.refs.username.value === item.username &&
                this.refs.password.value === item.password
            ) {
                this.setState({
                    isLoginSuccess: true,
                    modalShow: true,
                });
                sessionStorage.setItem("token", "ok");
            }
            return 0;
        });

        this.forceUpdate();
    }
    handleClose() {
        this.setState({
            modalShow: false,
        });
    }
    register() {}
    forgotpassword() {}

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
                                        Đăng nhập thành công &#128540;
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="success"
                                            href="/"
                                            onClick={this.handleClose.bind(
                                                this
                                            )}
                                        >
                                            Đồng ý
                                        </Button>
                                    </Modal.Footer>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <Modal.Body>
                                        Đăng nhập thất bại &#128517;
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="danger"
                                            onClick={this.handleClose.bind(
                                                this
                                            )}
                                        >
                                            Đồng ý
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
                                <Button className="btn-block" href="/register">
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
       // accounts: state.login_register.accounts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
