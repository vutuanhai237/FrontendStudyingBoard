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
import { getPostByID, getPostCommentByID, getIsLikePostByUID } from "../../service/PostAPI"
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: ["BIKIP", "TANGAI"],
            modalShow: false,
            modalWaringAddTagOver: false,
            messageModal: "",
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }

    componentDidMount() {
        this.props.getPostByID(2, 3)
        this.props.getPostCommentByID(3);
     
       
    }
    render() {
        const { currentPost, currentComments } = this.props;
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
                <AuthorInfo item={currentPost} />
                <div id="contentPost" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
                {/* <Tags tags={currentPost.tags} /> */}
                <FooterSummaryPost isSummary={false} item={currentPost} />
                <CommentPosts currentComments={currentComments} />
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        currentPost: state.post.currentPost,
        currentComments: state.post.currentComments,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostByID,
    getPostCommentByID,
    getIsLikePostByUID,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Post));