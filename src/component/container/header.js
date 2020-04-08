import React, { Component } from 'react';
import { Nav, Navbar, Button, Image } from 'react-bootstrap';
import logo from "../../img/logo.png"
import { faFileSignature, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./header.scss";
import SearchBar from "../search_bar";
import PropTypes from 'prop-types';
import LoginStatus from "../login_status";
class Header extends Component {
    render() {
        return (
            <div>
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
                    
                    <FontAwesomeIcon id="write-icon" onClick={console.log(2)} icon={faFileSignature} />
                    <FontAwesomeIcon id="upload-icon"icon={faCloudUploadAlt} />

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        {/* Search bar */}
                        <div id="search" >
                            <SearchBar noBorder placeholder='Tìm kiếm' paramName='keyword' action='/search' />
                        </div>
                        <Nav className="justify-content-center">
                            {/* Menu */}
                            <Nav.Link className="menu-item" href="#home">Bài viết</Nav.Link>
                            <Nav.Link className="menu-item" href="#">Tài liệu</Nav.Link>
                            <Nav.Link className="menu-item" href="#">Sự kiện</Nav.Link>
                            <Nav.Link className="menu-item" href="#">Hạng</Nav.Link>
                          
                            <LoginStatus id="login" className="float-right" />
                          
                        </Nav>

                       

                    </Navbar.Collapse>
                  

                </Navbar>


                <hr></hr>
            </div>

        );
    }
}

Header.propTypes = {
    isLogin: PropTypes.bool,
};
export default Header;
