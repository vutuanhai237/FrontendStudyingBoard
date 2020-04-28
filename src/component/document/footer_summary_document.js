import React, { Component } from 'react';
import { Col, Nav } from 'react-bootstrap';
import "./footer_summary_document.scss"
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSummaryDocument extends Component {
    render() {
        const {item} = this.props;
        return (
            <Col className="border justify-content-end d-flex">
            <div id="footer" >
                <Nav>
                    <Nav.Link>Lượt xem:</Nav.Link>
                    <Nav.Link>{item.viewCount}</Nav.Link>
                    <Nav.Link href="/download">
                        <FontAwesomeIcon  id="download-icon" icon={faDownload} />
                    </Nav.Link>
                    <Nav.Link>{item.downloadCount}</Nav.Link>

                </Nav>
            </div>
            </Col>
        );
    }
}


export default FooterSummaryDocument;
