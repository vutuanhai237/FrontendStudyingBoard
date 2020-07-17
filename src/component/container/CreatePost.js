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
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: [],
            modalShow: false,
            modalWaringAddTagOver: false,
            messageModal: "",
            content: "",
            category: "",
        };
    }
    setCategory(item) {
        this.setState({
            category: item,
        });
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
        let oldLength = this.state.tag.length;
        let tags = this.state.tag;

        if (e.keyCode === 13 && e.target.value.length > 0) {
            if (tags.length < 5) {
                tags.push(e.target.value);
                this.setState({
                    tag: tags,
                    modalShow: false,
                });
            } else {
                this.setState({
                    modalShow: true,
                    modelMessage: "Số lượng tag không được vượt quá 5",
                });
            }
        }
        if (e.keyCode === 13 && e.target.value.length === 0) {
            this.setState({
                modalShow: true,
                modelMessage: "Hãy nhập tag có nghĩa !",
            });
        }
        if (this.state.tag.length - oldLength === 1) this.refs.inputTag.value = "";
        this.forceUpdate();
    }
    deleteTag(item) {
        let temptTag = this.state.tag;

        temptTag = temptTag.filter((e) => e !== item);

        this.setState({
            tag: temptTag,
        });

        this.forceUpdate();
    }

    handleEditorChange = (e) => {
        console.log(e.target.getContent());
        this.setState({
            content: e.target.getContent(),
        });
    };
    render() {
        const category = ["A", "B", "C", "D", "E", "F"];
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
                <div
                    dangerouslySetInnerHTML={{ __html: this.state.content }}
                ></div>
                <p className="title">VIẾT BÀI</p>
                <Form>
                    <Form.Control
                        id="enter-title"
                        type="text"
                        placeholder="Nhập tiêu đề"
                    />
                    <Form.Control
                        id="enter-summary"
                        type="text"
                        placeholder="Nhập tóm tắt"
                    />
                    <Editor
                        initialValue="<p>Hãy viết gì đó</p>"
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
                            <Form.Control
                                onKeyDown={this.addTag.bind(this)}
                                className="enter-tag"
                                type="text"
                                placeholder="Nhập tag"
                                ref="inputTag"
                            />
                        </Col>
                        <Col>
                            {this.state.tag.map((item) => {
                                return (
                                    <Button
                                        onClick={() => this.deleteTag(item)}
                                        className="tag"
                                        variant="secondary"
                                    >
                                        {item}
                                    </Button>
                                );
                            })}
                        </Col>
                        <Col className="justify-content-end d-flex">
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Chọn danh mục"
                                className="dropdown"
                                onSelect={(evt) => this.setCategory(evt)}
                            >
                                {category.map((item) => {
                                    return (
                                        <Dropdown.Item eventKey={item}>
                                            {item}
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        </Col>
                    </Row>

                    <Button
                        block
                        className="btn-submit"
                        variant="success"
                        onClick={this.handleUpload.bind(this)}
                    >
                        Đăng bài{" "}
                        {this.state.category.length > 0
                            ? "trong danh mục " + this.state.category
                            : ""}
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreatePost;
