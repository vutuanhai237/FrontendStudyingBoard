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
    FormGroup,
    Modal,
} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    getSemesters,
    getSubjects,
    getCategoriesDoc,
    postDoc,
} from "../../service/docAPI.js"
import "./createDoc.scss";
class CreateDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            isLoginSuccess: true,
            uploadFileName: "Chọn file (ppt, pptx, txt, pdf)",
            doc: {
                fileName: "",
                fileDescription: "",
                file: "",
                currentCategory: "Chọn danh mục",
                currentSemester: "Chọn học kì",
                currentSubject: "Chọn môn học",
            }

        };

    }

    componentDidMount() {
        this.props.getCategoriesDoc();
        this.props.getSemesters();
        this.props.getSubjects();
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

    changeCurrentCategory(evt) {
        this.setState({
            doc: {...this.state.doc, currentCategory: evt}
        })
    }

    changeCurrentSemester(evt) {
        this.setState({
            doc: {...this.state.doc, currentSemester: evt}
        })
    }

    changeCurrentSubject(evt) {
        this.setState({
            doc: {...this.state.doc, currentSubject: evt}
        })
    }

    changeUploadFileName(evt) {
        this.setState({
            doc: {...this.state.doc, uploadFileName: evt.target.files[0].name, file: evt.target.files[0]}
        })
    }
    render() {
        const { categories, semesters, subjects } = this.props;
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
                                        <Button variant="success" href="/" onClick={this.handleClose.bind(this)}>
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
                                        <Button variant="danger" onClick={this.handleClose.bind(this)}>
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
                                title={this.state.doc.currentCategory}
                            >
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
                    <Row>
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={this.state.doc.currentSubject}
                            >
                                {subjects.map((item) => {
                                    return (
                                        <Dropdown.Item onSelect={(evt) => this.changeCurrentSubject(evt)} eventKey={item.subjectName}>
                                            {item.subjectName}
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
                                title={this.state.doc.currentSemester}
                            >
                                {semesters.map((item) => {
                                    return (
                                        <Dropdown.Item onSelect={(evt) => this.changeCurrentSemester(evt)} eventKey={item.semesterNo + " . " + item.academicYear}>
                                            {item.semesterNo + " . " + item.academicYear}
                                        </Dropdown.Item>
                                    );
                                })}
                            </DropdownButton>
                        </Col>
                    </Row>

                    <br className="mb-1"></br>
                    <Row className="browser-upload">
                        <Col>

                            <Form.File id="formcheck-api-custom" onChange={this.changeUploadFileName.bind(this)} custom>
                                <Form.File.Input onChange={this.changeUploadFileName.bind(this)} isValid />
                                <Form.File.Label data-browse="Tải lên">
                                    {this.state.uploadFileName}
                                </Form.File.Label>
                            </Form.File>

                        </Col>
                    </Row>

                    <br></br>
                    <Button block className="btn-submit" variant="success" type="submit" onClick={this.handleUpload.bind(this)}>
                        Tải lên
                    </Button>
                </Form>
            </div>
        );
    }
}


const mapStatetoProps = (state) => {
    return {
        categories: state.doc.categories,
        semesters: state.doc.semesters,
        subjects: state.doc.subjects,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSemesters,
    getSubjects,
    postDoc,
    getCategoriesDoc,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CreateDoc));
