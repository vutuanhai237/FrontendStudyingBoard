import React from "react";
import { Form, Button, Col, Modal, Image } from "react-bootstrap";
import "./register_form.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import logo from "../../img/logo-bht.png";
class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            modalMessage: "Đăng ký thất bại",
            isRegisterSuccess: false,

        };
    }
    register() {
        const {accounts} = this.props;
        var isRegisterSuccess = false;
        
        if (this.refs.password.value === this.refs.password2.value) {

            isRegisterSuccess = true;
            this.setState({
                modalMessage: "Đăng ký thành công"
            })
            accounts.map(item => {

                if (this.refs.username.value === item.username) {
                    isRegisterSuccess = false;
                    this.setState({
                        modalMessage: "Tên đăng nhập đã tồn tại"
                    })
                }
                return 0;
            })
        } else {
            this.setState({
                modalMessage: "Mật khẩu nhập lại không chính xác"
            })
        }


        if (isRegisterSuccess) {
            this.props.register(this.refs.username.value, this.refs.password.value);
            console.log(this.props.accounts);
            this.setState({
                isRegisterSuccess: true,
                modalShow: true,
            });
        } else {
            this.setState({
                isRegisterSuccess: false,
                modalShow: true,
            });
        }
        this.forceUpdate();
    }







    handleClose() {
        this.setState({
            modalShow: false,
        });
    }
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
                        if (this.state.isRegisterSuccess) {
                            return (
                                <div>
                                    <Modal.Body>{this.state.modalMessage}</Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="success"
                                            href="/login"
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
                                    <Modal.Body>{this.state.modalMessage}</Modal.Body>
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
                    <Form id="register-form">
                    <Image
                            className="rounded mx-auto d-block"
                            height="200px"
                            width="200px"
                            alt="logo"
                            src={logo}
                            center
                        ></Image>
                        <p className="title text-center">ĐĂNG KÝ</p>
                        <br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control
                                ref="username"
                                placeholder="Ví dụ: haimeohung"
                            />
                        </Form.Group>

                        <Form.Row>
                            {/* Mật khẩu mail */}
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref="password"
                                    placeholder="Ví dụ: ***"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Xác nhận Mật khẩu</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref="password2"
                                    placeholder="Ví dụ: ***"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Họ và tên</Form.Label>
                            <br />
                            <Form.Control
                                size="md"
                                type="text"
                                placeholder="Ví dụ: Nguyễn Văn A"
                            />
                            <br />
                            <Form.Label>CMND / CCCD</Form.Label>
                            <br />
                            <Form.Control
                                size="md"
                                type="text"
                                placeholder="Ví dụ: 231111111"
                            />
                            <br />
                            <Form.Row>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Ngày sinh</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ví dụ: 5/5/2020"
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                        <option>Khác</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Label>Số điện thoại</Form.Label>
                            <br />
                            <Form.Control
                                size="md"
                                type="text"
                                placeholder="Ví dụ: 0123456789"
                            />
                        </Form.Group>
                        <Button
                            className="btn-block"
                            onClick={this.register.bind(this)}
                        >
                            Đăng ký
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        accounts: state.login_register.accounts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (username, password) => dispatch({type: "REGISTER_ADD_ACCOUNT", username: username, password: password}),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
);

