import React, { Component } from 'react';
import { Nav, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import "./footer_summary_post.scss"
import { faHeart, faBookmark, faComment } from '@fortawesome/free-solid-svg-icons';
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

    }
    switchSave() {
        this.setState({
            isSaved: !this.state.isSaved
        })
        console.log(this.state.isSaved);
    }
   
    render() {
        const { item } = this.props;
        return (
            <Col className="justify-content-end d-flex">
                <div id="footer" >
                    <Nav>
                        <Nav.Link>
                            {(() => {
                                if (this.state.isLiked) {
                                    return <div onClick={this.switchLike.bind(this)}><FontAwesomeIcon style={{ color: "rgb(255,59,48)", transition: "all 0.5s" }} icon={faHeart} /></div>

                                }
                                else {
                                    return <div onClick={this.switchLike.bind(this)}><FontAwesomeIcon style={{ color: "#5279db", transition: "all 0.5s" }} icon={faHeart} /></div>

                                }
                            })()}

                        </Nav.Link>
                        <Nav.Link className="sub-info">{item.likeCount}</Nav.Link>
                        <Nav.Link>
                            {(() => {
                                if (this.state.isSaved) {
                                    
                                    return <div onClick={this.switchSave.bind(this)}>
                                        <FontAwesomeIcon style={{ color: "rgb(255,59,48)", transition: "all 0.5s" }} icon={faBookmark} />

                                    </div>

                                }
                                else {
                                    return <div onClick={this.switchSave.bind(this)}><FontAwesomeIcon style={{ color: "#5279db", transition: "all 0.5s" }} icon={faBookmark} /></div>

                                }
                            })()}

                        </Nav.Link>
                        <Nav.Link className="sub-info">Lưu</Nav.Link>


                        <Nav.Link>
                            <FontAwesomeIcon style={{ color: "rgb(142,142,147)"}} icon={faComment} />
                        </Nav.Link>
                        <Nav.Link className="sub-info">{item.commentCount}</Nav.Link>
                    </Nav>
                </div>
            </Col>



        );
    }
}


export default FooterSummaryDocument;
