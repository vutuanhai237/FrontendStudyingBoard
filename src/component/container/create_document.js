import React, { Component } from "react";
import {
    Form,
    Button,
    DropdownButton,
    Dropdown,
    Row,
    Col,
    InputGroup,
    FormControl,
} from "react-bootstrap";
import "./create_document.scss";
class CreateDocument extends Component {
    render() {
        const category = ["A", "B", "C", "D", "E", "F"];
        return (
            <div id="create-post">
                <p className="title">UPLOAD TÀI LIỆU</p>
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Tên tài liệu</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Nhập tên tài liệu"
                            aria-label="Amount (to the nearest dollar)"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Mô tả tài liệu</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Nhập mô tả tài liệu"
                            aria-label="Amount (to the nearest dollar)"
                        />
                    </InputGroup>
                    <hr></hr>
                    <Row>
                        <Col>
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
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Chọn môn học"
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
                    <Row>
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Chọn học kỳ"
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
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Chọn năm học"
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
                    
                    <Row className="browser-upload">
                        <Col>
                        <Form.File id="formcheck-api-custom" custom>
                        <Form.File.Input isValid />
                        <Form.File.Label data-browse="Tải lên">
                            File của bạn
                        </Form.File.Label>
                        {/* <Form.Control.Feedback type="valid">
                            You did it!
                        </Form.Control.Feedback> */}
                    </Form.File>
                        </Col>
                        </Row>
                   
                    
                    <br></br>
                    <Button
                        block
                        className="btn-submit"
                        variant="success"
                        type="submit"
                    >
                        Tải lên
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreateDocument;
