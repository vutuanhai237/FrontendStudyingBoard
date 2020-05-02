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
    Modal,
} from "react-bootstrap";
import "./create_document.scss";
class CreateDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            isLoginSuccess: true,
        };
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
                    {(() => {
                        if (this.state.isLoginSuccess) {
                            return (
                                <div>
                                    <Modal.Body>
                                        Tải lên thành công
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="success"
                                            href="/"
                                            onClick={this.handleClose.bind(
                                                this
                                            )}
                                        >
                                            Đồng ý
                                        </Button>
                                    </Modal.Footer>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <Modal.Body>Tải lên thất bại</Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="danger"
                                            onClick={this.handleClose.bind(
                                                this
                                            )}
                                        >
                                            Đồng ý
                                        </Button>
                                    </Modal.Footer>
                                </div>
                            );
                        }
                    })()}
                </Modal>

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

                    <Row>
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Chọn danh mục"
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
                        <Col className="dropdown-year">
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Chọn năm học"
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
                    <br className="mb-1"></br>
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
                        onClick={this.handleUpload.bind(this)}
                    >
                        Tải lên
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CreateDocument;
