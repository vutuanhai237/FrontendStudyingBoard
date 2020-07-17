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
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import "./CreatePost.scss";
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: [],
            modalShow: false,
            modalWaringAddTagOver: false,
            messageModal: "",
            content: '<p>H&atilde;y viết g&igrave; đ&oacute;Trong năm 1993, tạp ch&iacute; NY Time xuất bản bộ truyện tranh của Peter Steiner, nội dung l&agrave; về một con ch&oacute; ngồi trước m&aacute;y t&iacute;nh n&oacute;i chuyện với một con ch&oacute; kh&aacute;c, con đầu ti&ecirc;n n&oacute;i,&rdquo;Tr&ecirc;n Internet, kh&ocirc;ng ai biết m&agrave;y l&agrave; ch&oacute;&rdquo;. C&acirc;u truyện n&agrave;y lấy &yacute; tưởng từ sự thật l&agrave; bạn kh&ocirc;ng biết ai đang giao tiếp với m&igrave;nh th&ocirc;ng qua m&aacute;y t&iacute;nh! C&oacute; một con ch&oacute; đang g&otilde; email đầu b&ecirc;n kia, hay một m&aacute;y t&iacute;nh giả dạng con người trong Turing Test, những điều n&agrave;y ho&agrave;n to&agrave;n c&oacute; thể xảy ra.</p>',
            category: "Bí kíp",
            title: "Hướng dẫn tán gái phần 1",
            summary: "Bài viết này rất hay và đây là tóm tắt",
        };
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }

    render() {
        const listTag = ["A", "B", "C"];
        const {currentPost} = this.props;
        return (
            <div id="create-post">
                <Modal
                    centered
                    show={this.state.modalShow}
                    onHide={this.handleClose.bind(this)}
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title contained-modal-title-vcenter>
                            Thông báo
                        </Modal.Title>
                    </Modal.Header>
                    <div>
                        <Modal.Body>{this.state.modelMessage}</Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="success"
                                href=""
                                onClick={this.handleClose.bind(this)}
                            >
                                Đồng ý
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>

                <p className="title">{currentPost.title}</p>
                <div>{currentPost.summary}</div>
                <AuthorInfo item={currentPost}/>
                <div
                    dangerouslySetInnerHTML={{ __html: currentPost.contentURL }}
                ></div>
                <Row className="justify-content-start">
                    {
                        listTag.map(item => {
                            return <div>
                                <Button>{item}</Button>
                            </div>
                        })
                    }
                </Row>
                <FooterSummaryPost item={this.props.currentPost}/>

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