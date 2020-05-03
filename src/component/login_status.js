import React, { Component } from "react";
import { Nav, Dropdown, OverlayTrigger, Popover, Badge } from "react-bootstrap";
import "./login_status.scss";
import avatar from "../img/anh.jpg";
class LoginStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        };
    }
    handleLogin() {
        this.setState({ isLogin: true });
        console.log(this.state.isLogin);
    }
    handleLogout() {
        this.setState({
            isLogin: false,
        });
    }
    render() {
        if (!this.state.isLogin) {
            return (
                <Nav.Link
                    onClick={this.handleLogin.bind(this)}
                    className="menu-item"
                    href=""
                >
                    Đăng nhập
                </Nav.Link>
            );
        } else {
            return (
                <div id="login-status">
                    <OverlayTrigger
                        trigger="click"
                        key={"bottom"}
                        placement={"bottom"}
                        overlay={
                            <Popover id={`popover-positioned-${"bottom"}`}>
                                <Popover.Content>
                                    <Dropdown.Item>Xin chào</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-1">
                                        Trang cá nhân
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <p style={{ display: "inline" }}>
                                            Thông báo{" "}
                                        </p>
                                        <Badge variant="success">9</Badge>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        Bài viết của tôi
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">
                                        Tài liệu của tôi
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={this.handleLogout.bind(this)}
                                    >
                                        Đăng xuất
                                    </Dropdown.Item>
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        <img src={avatar} alt="Avatar" id="avatar" />
                    </OverlayTrigger>{" "}
                </div>
            );
        }
    }
}

export default LoginStatus;
