import React, { Component } from "react";
import {
    Form,
    Button,
    DropdownButton,
    Dropdown,
    Row,
    Col,
    Badge,
} from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import "./create_post.scss";
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: ["A", "B"],
        };
    }

    addTag(item) {
        let tags = this.state.tag;
        tags.push(item);
        this.setState({
            tag: tags,
        });
    }
    delete(item) {}

    handleEditorChange = (e) => {
        console.log("Content was updated:", e.target.getContent());
    };
    render() {
        const category = ["A", "B", "C", "D", "E", "F"];
        return (
            <div id="create-post">
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
                                className="enter-tag"
                                type="text"
                                placeholder="Nhập tag"
                            />
                        </Col>
                        <Col>
                            {this.state.tag.map((item) => {
                                return (
                                    <Button className="tag" variant="warning">
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
                            >
                                {category.map((item) => {
                                    return (
                                        <Dropdown.Item href="#/action-1">
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
                        type="submit"
                    >
                        Đăng bài
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreatePost;
