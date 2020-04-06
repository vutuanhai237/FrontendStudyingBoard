import React, { Component } from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import logo from "../../img/logo.png"
import icon_upload from "../../img/icon_upload.png";
import icon_write from "../../img/icon_write.png";
import "./header.scss";
import SearchBar from "../search_bar";
import PropTypes from 'prop-types';
import LoginStatus from "../login_status";
class Header extends Component {
    render() {
        return (
            <div>
                <Container className="header">
                    <Navbar className="navbar" bg="white" expand="lg">
                        {/* Logo */}
                        <Navbar.Brand className="py-0" href="#home">
                            <img
                                src={logo}
                                width="144"
                                height="60"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            {/* Search bar */}
                            <SearchBar className="search-bar" noBorder placeholder='Tìm kiếm' paramName='keyword' action='/search' className='d-none flex-grow-1 d-md-flex mx-lg-5' />

                            <Nav>
                                {/* Menu */}
                                <Nav.Link className="menu-item" href="#home">Bài viết</Nav.Link>
                                <Nav.Link className="menu-item" href="#">Tài liệu</Nav.Link>
                                <Nav.Link className="menu-item" href="#">Sự kiện</Nav.Link>
                                <Nav.Link className="menu-item" href="#">Hạng</Nav.Link>
                                <Nav.Item>
                                    <Image id="write" className="write" onClick={console.log(2)} src={icon_write} fluid />
                                </Nav.Item>
                                <Nav.Item>
                                    <Image className="upload" href="#" src={icon_upload} fluid />
                                </Nav.Item>
                                <Nav.Item><LoginStatus /></Nav.Item>

                            </Nav>



                        </Navbar.Collapse>

                    </Navbar>

                </Container>
                <hr></hr>
            </div>

        );
    }
}

Header.propTypes = {
    isLogin: PropTypes.bool,
};
export default Header;
