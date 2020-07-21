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
import { getCategoriesDoc } from "../../service/DocAPI";
import Tags from "../../component/post/Tags";
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            modalShow: false,
            modalWaringAddTagOver: false,
            modalMessage: "",
            content: "",
            currentCategory: "Chọn danh mục",
            isPreview: false,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.changeCurrentCategory = this.changeCurrentCategory.bind(this);
        this.addTag = this.addTag.bind(this);
        this.handleClickTag = this.handleClickTag.bind(this);
        this.writeView = this.writeView.bind(this);
        this.previewView = this.previewView.bind(this);
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
    changeCurrentCategory(evt, name) {
        console.log(evt);
        this.setState({
            currentCategory: evt
        })
    }
    componentDidMount() {
        this.props.getCategoriesDoc();
    }

    handleUpload() {
        this.setState({
            modalShow: true,
        });
        this.forceUpdate();
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
                <Form.Control id="enter-title" type="text" placeholder="Nhập tiêu đề" />
                <Form.Control id="enter-summary" type="text" placeholder="Nhập tóm tắt" />
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
                                    <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey={item.name}>
                                        {item.name}
                                    </Dropdown.Item>

                                );
                            })}
                        </DropdownButton>
                    </Col>
                </Row>

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
        categories: state.doc.categories,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCategoriesDoc,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CreatePost));
