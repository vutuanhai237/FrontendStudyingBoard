import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../img/logo.png";
import {
    faFileSignature,
    faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router-dom";
import "./Header.scss";
import SearchBar from "../SearchBar";
import LoginStatus from "../home/LoginStatus";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { getCurrentUser } from "../../service/UserAPI"
import { HOST, PORT } from '../../constant/index';
import { redirect } from "../../constant"
import FormData from 'form-data';
import Cookies from 'js-cookie';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: null,
        }
        
        
    }

    componentDidMount() {
      
        this.props.getCurrentUser();
        this.myInterval = null;
     
        function myTimer() {
            if (this.props.account === null) {
                this.setState({
                    account: null,
                });
            } else {
                console.log(this.props.account);
                this.setState({
                    account: this.props.account,
                });
                window.clearInterval(this.myInterval);
                this.myInterval = null;
                return;
            }
        }
      
        this.myInterval = setInterval(myTimer.bind(this), 2000);
    }
    render() {
        let loginStatus;
        if (this.state.account === null) {
            loginStatus = <Nav.Link className="menu-item" href="/login"> Đăng nhập </Nav.Link>
        } else {
            loginStatus = <LoginStatus account={this.state.account} id="login" className="float-right" />
        }
        return (
            <div id = "header">
                <Navbar className="navbar" bg="white" expand="lg">
                    <Navbar.Brand className="py-0" href="/">
                        <img src={logo} width="144" height="60" className="d-inline-block align-top" alt="logo"/>
                    </Navbar.Brand>
                    <div onClick={() => redirect("/create_post")}>
                        <FontAwesomeIcon id="write-icon" icon={faFileSignature}/>
                    </div>
                    <div onClick={() => redirect("/create_document")}>
                        <FontAwesomeIcon id="upload-icon"icon={faCloudUploadAlt}/>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div id="search">
                            <SearchBar noBorder placeholder="Tìm kiếm" paramName="keyword" action="/search" icon={faSearch}/>
                        </div>
                        <Nav className="justify-content-center">
                            {/* Menu */}
                            <Nav.Link className="menu-item" href="/posts">
                                Bài viết
                            </Nav.Link>
                            <Nav.Link className="menu-item" href="/docs">
                                Tài liệu
                            </Nav.Link>
                            <Nav.Link className="menu-item" href="/events">
                                Sự kiện
                            </Nav.Link>
                            <Nav.Link className="menu-item" href="/rank">
                                Hạng
                            </Nav.Link>
                            {loginStatus}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <hr></hr>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.user.account,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser,
}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Header)
);

