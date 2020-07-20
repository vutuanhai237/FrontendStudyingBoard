import React, { Component } from "react";
import {
    Form,
    Button,
    DropdownButton,
    Dropdown,
    Row,
    Col,
    Modal,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import AuthorInfo from "../post/AuthorInfo";
import FooterSummaryPost from "../post/FooterSummaryPost";
import CommentPosts from "../post/CommentPosts";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import "./CreatePost.scss";
import "./Post.scss"
import Tags from "../post/Tags"
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: ["BIKIP", "TANGAI"],
            modalShow: false,
            modalWaringAddTagOver: false,
            messageModal: "",
            content: '<p><strong>Trung Quốc &ldquo;gồng m&igrave;nh&rdquo; ngăn lũ, c&aacute;c l&aacute;ng giềng ch&acirc;u &Aacute; chung cảnh ngập lụt</strong></p><p>C&aacute;c đợt mưa lớn k&eacute;o d&agrave;i từ cuối th&aacute;ng 5 đ&atilde; khiến nhiều quốc gia ở ch&acirc;u &Aacute; rơi v&agrave;o cảnh ngập lụt, h&agrave;ng triệu người phải sơ t&aacute;n, thiệt hại kinh tế l&ecirc;n đến h&agrave;ng tỷ USD.</p><p><img src="https://icdn.dantri.com.vn/2020/07/20/20200714-t-025615-z-1293354825-rc-2-qsh-93-uqqirtrmadp-3-chinafloods-1595237294600.jpg" /></p>',
            category: "Bí kíp",
            title: "Hướng dẫn tán gái phần 1",
            summary: "Bài viết này rất hay và đây là tóm tắt",
            
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }

    render() {
        const {currentPost} = this.props;
        return (
            <div id="create-post">
                <Modal centered show={this.state.modalShow} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title contained-modal-title-vcenter>
                            Thông báo
                        </Modal.Title>
                    </Modal.Header>
                    <div>
                        <Modal.Body>{this.state.modelMessage}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" href="" onClick={this.handleClose}>
                                Đồng ý
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>

                <p className="title">{currentPost.title}</p>
                <div>{currentPost.summary}</div>
                <AuthorInfo item={currentPost}/>
                <div id="contentPost" dangerouslySetInnerHTML={{ __html: currentPost.contentURL }}/>
                <Tags tags={currentPost.tags}/>
                <FooterSummaryPost item={this.props.currentPost}/>
                <CommentPosts/>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        currentPost: state.post.currentPost,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Post));