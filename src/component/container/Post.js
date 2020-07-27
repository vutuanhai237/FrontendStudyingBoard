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
import "./Post.scss";
import Tags from "../post/Tags";
import Cookies from 'js-cookie';
import { getPostByID, getPostCommentByID, getIsLikePostByUID, getTagsByID } from "../../service/PostAPI";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: ["BIKIP", "TANGAI"],
            modalShow: false,
            modalWaringAddTagOver: false,
            messageModal: "",
        };
        this.isLogin = false;
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }

    componentDidMount() {

        const url = window.location.href;
        const index = url.search("posts/");
        const idPost = url.slice(index + 6, url.length);
        const userID = Cookies.get(`UID`);
        console.log(userID);
        if (typeof userID === `undefined`) {
            this.props.getPostByID(-1, idPost);
        } else {
            this.isLogin = true;
            this.props.getPostByID(userID, idPost);
        }


    }
    render() {
        const { currentPost, currentComments, tags } = this.props;
        var footer = null;
        if (this.isLogin) {
             footer = <FooterSummaryPost isSummary={false} item={currentPost} />;
        }
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
                <Tags tags={tags} />
                {footer}
                <CommentPosts currentComments={currentComments} />
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        currentPost: state.post.currentPost,
        currentComments: state.post.currentComments,
        tags: state.post.tags,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostByID,
    getPostCommentByID,
    getIsLikePostByUID,
    getTagsByID,

}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Post));