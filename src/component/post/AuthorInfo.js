// Document by VTH
// function: shows the extra infomation of a post.
// props from parent: item
// state: none
// dependency component: none
import React, { Component } from "react";
import { Nav, Navbar, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./FooterSummaryPost.scss";
import "./AuthorInfo.scss"

class AuthorInfo extends Component {
    constructor(props) {
        super(props);
        const { item } = this.props;
        this.state = {
            avatar: "https://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg",
            category: "Bí kíp",
            time: "6 Th 7",
            readTime: "15",
        };
    }

    renderTooltip(message) {
        return <Tooltip id="button-tooltip">{message}</Tooltip>;
    }
    render() {
        const { item } = this.props;
        return (
            <div id="author-info">
                <Nav className="container-fluid ">
                    <Nav.Item>
                        <Nav.Link>
                            <img src={item.authorAvatarURL} alt="Avatar" id="avatar" />
                        </Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <p>{item.authorName + " đã đăng trong"}</p>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
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