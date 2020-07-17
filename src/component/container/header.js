import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../img/logo.png";
import {
    faFileSignature,
    faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import "./Header.scss";
import SearchBar from "../SearchBar";
import LoginStatus from "../home/LoginStatus";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { getCurrentUser } from "../../service/UserAPI"
class Header extends Component {
    redirect(url) {
        const createHistory = require("history").createBrowserHistory;
        let history = createHistory();
        history.push(url);
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
    }
    componentDidMount() {
        console.log(this.props.topDoc);
        this.props.getCurrentUser();
        console.log(this.props.topDoc);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    render() {
        return (
            <div>
                <Navbar className="navbar" bg="white" expand="lg">
                    {/* Logo */}

                    <Navbar.Brand className="py-0" href="/">
                        <img
                            src={logo}
                            width="144"
                            height="60"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <div
                        onClick={() =>
                            this.redirect("/create_post")
                        }
                    >
                        <FontAwesomeIcon
                            id="write-icon"
                            icon={faFileSignature}
                        />
                    </div>
                    <div
                        onClick={() =>
                            this.redirect("/create_document")
                        }
                    >
                        <FontAwesomeIcon
                            id="upload-icon"
                            icon={faCloudUploadAlt}
                        />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Search bar */}
                        <div id="search">
                            <SearchBar
                                noBorder
                                placeholder="Tìm kiếm"
                                paramName="keyword"
                                action="/search"
                            />
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
                            <LoginStatus account={this.props.account} id="login" className="float-right" />
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
        topDoc: state.doc.topDoc,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser,
}, dispatch);


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Header)
);

