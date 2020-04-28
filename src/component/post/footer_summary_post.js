import React, { Component } from 'react';
import { Nav, Col } from 'react-bootstrap';
import "./footer_summary_post.scss"
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSummaryDocument extends Component {
    constructor(props) {
        super(props);
        const { item } = this.props;

        this.state = {
            isLiked: item.liked,
            isSaved: item.saved,
        }
        
    }
    switchLike() {
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log(this.state.isLiked);
    }
    render() {
        const { item } = this.props;
        return (
            <Col className="border justify-content-end d-flex">
                <div id="footer" >
                    <Nav>
                        <Nav.Link>
                            {(() => {
                                if (this.state.isLiked) {
                                    return <div onClick={this.switchLike.bind(this)}><FontAwesomeIcon style={{color: "rgb(255,59,48)", transition: "all 0.5s"}} icon={faHeart} /></div>
                                   
                                }
                                else {
                                    return <div onClick={this.switchLike.bind(this)}><FontAwesomeIcon style={{color: "#5279db", transition: "all 0.5s"}} icon={faHeart} /></div>
                                   
                                }
                            })()}
                            
                        </Nav.Link>
                        <Nav.Link>{item.likeCount}</Nav.Link>
                        <Nav.Link >Lưu</Nav.Link>

                        <Nav.Link>
                            <FontAwesomeIcon id="bookmark-icon" icon={faBookmark} />
                        </Nav.Link>
                        <Nav.Link>Bình luận</Nav.Link>
                        <Nav.Link>{item.commentCount}</Nav.Link>
                    </Nav>
                </div>
            </Col>



        );
    }
}


export default FooterSummaryDocument;
