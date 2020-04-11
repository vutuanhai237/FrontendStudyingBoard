import React, { Component } from 'react';
import {  Nav, Col } from 'react-bootstrap';
import "./footer_summary_post.scss"
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSummaryDocument extends Component {
    render() {
        return (   
                <Col className="border justify-content-end d-flex">
                <div id="footer" >
                    <Nav>           
                        <Nav.Link>
                            <FontAwesomeIcon id="heart-icon" icon={faHeart} />
                        </Nav.Link>
                        <Nav.Link>1000</Nav.Link>
                        <Nav.Link >Lưu</Nav.Link>
                        
                        <Nav.Link>
                            <FontAwesomeIcon id="bookmark-icon" icon={faBookmark} />
                        </Nav.Link>
                        <Nav.Link>Bình luận</Nav.Link>
                        <Nav.Link>30</Nav.Link>
                    </Nav>
                </div>
            </Col>

           

        );
    }
}


export default FooterSummaryDocument;
