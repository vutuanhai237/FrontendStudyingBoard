import React, { Component } from 'react';
import { Col, Nav } from 'react-bootstrap';
import "./footer_summary_document.scss"
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSummaryDocument extends Component {
    render() {
        return (
            <Col className="border justify-content-end d-flex">
            <div id="footer" >
                <Nav>
                    <Nav.Link >Lượt xem:</Nav.Link>
                    <Nav.Link>1000</Nav.Link>
                    <Nav.Link>
                        <FontAwesomeIcon id="download-icon" icon={faDownload} />
                    </Nav.Link>
                    <Nav.Link>30</Nav.Link>

                </Nav>
            </div>
            </Col>
        );
    }
}


export default FooterSummaryDocument;
