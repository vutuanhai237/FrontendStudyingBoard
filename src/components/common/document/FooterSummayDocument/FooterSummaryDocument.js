// Document by VTH
// function: shows the extra infomation of a document.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Col, Nav } from "react-bootstrap";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "components/common/document/FooterSummayDocument/FooterSummaryDocument.scss";

class FooterSummaryDocument extends Component {
    render() {
        const { item } = this.props;
        if (!item) {
            return <div></div>;
        }
        return (
            <Col className="justify-content-end d-flex">
                <div id="footer">
                    <Nav>
                        <Nav.Link>
                            <FontAwesomeIcon id="icon-view" icon={faEye} />
                        </Nav.Link>
                        <Nav.Link className="info-view">
                            {item.viewCount}
                        </Nav.Link>
                        <Nav.Link href="">
                            <FontAwesomeIcon
                                id="icon-downcount"
                                icon={faDownload}
                            />
                        </Nav.Link>
                        <Nav.Link className="info-downcount">
                            {item.downloadCount}
                        </Nav.Link>
                    </Nav>
                </div>
            </Col>
        );
    }
}

export default FooterSummaryDocument;
