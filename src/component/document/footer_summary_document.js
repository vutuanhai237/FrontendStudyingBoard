import React, { Component } from 'react';
import { Col, Nav } from 'react-bootstrap';
import "./footer_summary_document.scss"
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSummaryDocument extends Component {
    render() {
        const { item } = this.props;
        return (
            <Col className="justify-content-end d-flex">
                <div id="footer" >
                    <Nav>
                        <Nav.Link><FontAwesomeIcon id="view-icon" icon={faEye} /></Nav.Link>
                        <Nav.Link className="sub-info">{item.viewCount}</Nav.Link>
                        <Nav.Link href="/download">
                            <FontAwesomeIcon id="download-icon" icon={faDownload} />
                        </Nav.Link>
                        <Nav.Link className="sub-info">{item.downloadCount}</Nav.Link>

                    </Nav>
                </div>
            </Col>
        );
    }
}


export default FooterSummaryDocument;
