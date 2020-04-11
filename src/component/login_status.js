import React, { Component } from 'react';
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "./login_status.scss"
import avatar from "../img/anh.jpg"
class LoginStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false };
    }
    handleLogin = () => {
        this.setState({ isLogin: true });
    }
    handleLogout = () => {
        this.setState({ isLogin: false });
    }
    render() {
        let myButton = null;
        if (!this.state.isLogin) {
            myButton = <Button id="login-button" variant="primary" onClick={this.handleLogout.bind(this)}>Login</Button>
        }
        else {
            myButton = <div onClick={this.handleLogin.bind(this)}>
                <Dropdown id="login-button" as={ButtonGroup}>
                    <img src={avatar} alt="Avatar" id="avatar" />
                    <Dropdown.Toggle variant="primary" id=" dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Trang cá nhân</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">

                            Thông báo
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Bài viết của tôi</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Tài liệu của tôi</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


            </div>

        }

        return myButton;
    }
}

export default LoginStatus;