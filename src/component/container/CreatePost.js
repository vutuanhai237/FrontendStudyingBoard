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
import { Editor } from "@tinymce/tinymce-react";
import "./CreatePost.scss";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getCategoriesPost, postPost } from "../../service/PostAPI";
import Tags from "../../component/post/Tags";
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            modalShow: false,
            modalWaringAddTagOver: false,
            modalMessage: "",

            currentCategory: "Chọn danh mục",
            isPreview: false,
            // post
            title: "",//
            imageURL: "",//
            content: "",//
            //submitDate: "Dec 24, 2020 7:00:00 AM",
            //publishDate: "Dec 29, 2020 7:00:00 AM",
            readTime: 0,//
            likeCount: 0,
            numView: 0,//
            postSoftDeleted: false,
            postHidden: false,
            postApproved: false,
            authorID: "",//
            authorName: "",//
            categoryID: "",//
            categoryName: "",//
            authorAvatarURL: "",//
            summary: "", //
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.changeCurrentCategory = this.changeCurrentCategory.bind(this);
        this.addTag = this.addTag.bind(this);
        this.handleClickTag = this.handleClickTag.bind(this);
        this.writeView = this.writeView.bind(this);
        this.previewView = this.previewView.bind(this);
        this.getReadingTime = this.getReadingTime.bind(this);

        // post
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleImageURLChange = this.handleImageURLChange.bind(this);
    }

    // getDateTime() {
    //     const monthNames = ["January", "February", "March", "April", "May", "June",
    //         "July", "August", "September", "October", "November", "December"
    //     ];
    //     const d = new Date();
    //     const month = monthNames[d.getMonth()].slice(0,3);
    //     const date = d.getDate();
    //     const year = d.getFullYear();
    //     const hour = d.getHours();

    //     //submitDate: "Dec 24, 2020 7:00:00 AM"

    // }
    getReadingTime(text) {
        const wordsPerMinute = 200;
        const noOfWords = text.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
    }
    writeView() {
        this.setState({
            isPreview: false,
        })
    }
    previewView() {
        this.setState({
            isPreview: true,
        })
    }

    changeCurrentCategory(evt) {
        console.log(evt);
        this.setState({
            currentCategory: evt
        })
    }
    componentDidMount() {
        this.props.getCategoriesPost();
    }

    handleUpload() {
        const { account, categories } = this.props;
        this.setState({
            modalShow: true,
        });


        this.setState({
            authorID: account.id,
            authorName: account.displayName,
            authorAvatarURL: account.avatar,
            categoryName: this.state.currentCategory,
            categoryID: (categories.find(e => e.title === this.state.currentCategory)).id,
            readTime: this.getReadingTime(this.state.content),
        })
        const post = {
            title: this.state.title,
            imageURL: this.state.imageURL,
            content: this.state.content,
         
            readTime: this.state.readTime,//
            likeCount: 0,
            numView: 0,//
            postSoftDeleted: false,
            postHidden: false,
            postApproved: false,
            authorID: this.state.authorID,
            authorName: this.state.authorName,
            categoryID: this.state.categoryID,
            categoryName: this.state.categoryName,
            authorAvatarURL: this.state.authorAvatarURL,
            summary:this.state.summary,
        }
        this.props.postPost(post);
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }

    addTag(e) {
        let oldLength = this.state.tags.length;
        let tags = this.state.tags;

        if (e.keyCode === 13 && e.target.value.length > 0) {
            if (tags.length < 5) {
                tags.push(e.target.value);
                this.setState({
                    tags: tags,
                    modalShow: false,
                });
            } else {
                this.setState({
                    modalShow: true,
                    modelMessage: "Số lượng tags không được vượt quá 5",
                });
            }
        }
        if (e.keyCode === 13 && e.target.value.length === 0) {
            this.setState({
                modalShow: true,
                modelMessage: "Hãy nhập tags có nghĩa!",
            });
        }
        if (this.state.tags.length - oldLength === 1) this.refs.inputtags.value = "";
        this.forceUpdate();
    }
    deletetags(item) {
        let tempttags = this.state.tags;
        tempttags = tempttags.filter((e) => e !== item);
        this.setState({
            tags: tempttags,
        });
        this.forceUpdate();
    }

    handleClickTag(item) {
        console.log(item)
    }

    handleEditorChange = (e) => {
        console.log(e.target.getContent());
        this.setState({
            content: e.target.getContent(),
        });
    };

    handleTitleChange() {
        this.setState({
            title: this.refs.title.value,
        })
    }

    handleSummaryChange() {
        this.setState({
            summary: this.refs.summary.value,
        })
    }
    handleImageURLChange() {
        this.setState({
            imageURL: this.refs.imageURL.value,
        })
    }
    render() {
        const { categories } = this.props;
        var body = null;
        if (this.state.isPreview) {
            body = <div>
                <br></br>
                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </div>;
        } else {
            body = <Form>
                <Form.Control onChange={this.handleTitleChange} ref="title" id="enter-title" type="text" placeholder="Nhập tiêu đề" />
                <Form.Control onChange={this.handleSummaryChange} ref="summary" id="enter-summary" type="text" placeholder="Nhập tóm tắt" />
                <Editor initialValue={this.state.content}
                    init={{
                        height: 500,
                        menubar:
                            "file edit view insert format tools table help",
                        plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste imagetools wordcount",
                        ],
                        toolbar:
                            "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",
                    }}
                    onChange={this.handleEditorChange}
                />
                <Row>
                    <Col>
                        <Form.Control style={{ marginTop: "10px" }} onKeyDown={this.addTag} className="enter-tags" type="text" placeholder="Nhập tags" ref="inputtags" />
                    </Col>
                    <Col>
                        <Tags handleClick={this.handleClickTag} tags={this.state.tags} />
                    </Col>
                    <Col className="justify-content-end d-flex">
                        <DropdownButton id="dropdown-basic-button" title={this.state.currentCategory} className="dropdown">
                            {categories.map((item) => {
                                return (
                                    <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey={item.title}>
                                        {item.title}
                                    </Dropdown.Item>

                                );
                            })}
                        </DropdownButton>
                    </Col>
                </Row>
                <Form.Control style={{marginTop: "0px"}} onChange={this.handleImageURLChange} ref="imageURL" id="enter-title" type="text" placeholder="Nhập đường link ảnh đại diện bài post" />

                <Button block className="btn-submit" variant="success" onClick={this.handleUpload}>
                    Đăng bài
                </Button>
            </Form>
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

                <Row>
                    <Col md={12} lg={6}>
                        <p onClick={this.writeView} className="title">VIẾT BÀI</p>
                    </Col>
                    <Col md={12} lg={6}>
                        <p onClick={this.previewView} className="title">PREVIEW</p>
                    </Col>
                </Row>
                {body}


            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        categories: state.post.categories,
        account: state.user.account,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCategoriesPost,
    postPost,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CreatePost));
