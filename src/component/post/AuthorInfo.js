// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Nav, Navbar, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./FooterSummaryPost.scss";
import "./AuthorInfo.scss"
import { redirect } from 'constants.js'
class AuthorInfo extends Component {
    constructor(props) {
        super(props);
    }

    renderTooltip(message) {
        return <Tooltip id="button-tooltip">{message}</Tooltip>;
    }
    render() {
        const { item } = this.props;
        return (
            <div id="author-info">
                <Nav onSelect={(selectedKey) => redirect(selectedKey)} className="container-fluid ">
                    <Nav.Item>
                        <Nav.Link eventKey={`/${item.authorID}`}>
                            <img src={item.imageURL} alt="Avatar" id="avatar" />
                        </Nav.Link>
                    </Nav.Item>     
                    <Nav.Item>
                        <p>{item.authorName + " đã đăng trong"}</p>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={`/${item.categoryID}`}>
                            {item.categoryName}
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-auto">
                        <p>{item.readTime + " phút đọc"}</p>
                        <p>{item.publishDate}</p>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default AuthorInfo;