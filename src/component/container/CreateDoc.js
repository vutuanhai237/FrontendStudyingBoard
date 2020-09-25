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
} from "service/DocAPI.js"
import "./CreateDoc.scss";
class CreateDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            modalMessage: "",
            isLoginSuccess: true,
            uploadFileName: "Chọn file (ppt, pptx, txt, pdf)",
            doc: {
                fileName: "",
                summary: "",
                title: "",
                currentCategory: "Chọn danh mục",
                currentSemester: "Chọn học kì",
                currentSubject: "Chọn môn học",
                categoryID: -1,
                semesterID: -1,
                subjectID: -1,
            },
            
            isUploading: false,

        };
        this.statusPostDocCode = 0;
        this.handleClose = this.handleClose.bind(this);
        this.changeUploadFileName = this.changeUploadFileName.bind(this);
        //this.handleUpload = this.handleUpload.bind(this);
        this.changeFileName = this.changeFileName.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.statusPostDocCode);
        console.log(this.state.isUploading)
        if (this.state.isUploading) {
            this.statusPostDocCode = nextProps.statusPostDocCode;
            this.handleModal();
        }
        
    }
    componentDidMount() {
        this.props.getCategoriesDoc();
        this.props.getSemesters();
        this.props.getSubjects();
    }

    handleModal() {
        console.log(this.statusPostDocCode)
        if (this.statusPostDocCode !== 18) {
            this.setState({
                modalShow: true,
                modalMessage: "Tải lên thất bại",
            });
        } else {
            this.setState({
                modalShow: true,
                modalMessage: "Tải lên thành công",
            });
        }
        this.setState({
            isUploading: false,
        })
    }
    handleUpload() {
        
        console.log(this.state.doc);
        this.props.postDoc(this.state.doc);
        this.setState({
            isUploading: true,
        })
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }

    changeCurrentCategory(evt) {
        const { categories } = this.props;
        this.setState({
            doc: { 
                ...this.state.doc, 
                currentCategory: evt, 
                categoryID: categories.find(e => e.name === evt).id 
            }
        })

    }

    changeCurrentSemester(evt) {
        const { semesters } = this.props;
        this.setState({
            doc: { 
                ...this.state.doc, 
                currentSemester: evt,
                semesterID: semesters.find(e => (e.semesterNo + " . " + e.academicYear) === evt).semesterId, 
            }
        })
    }

    changeFileName() {
        this.setState({
            doc: { 
                ...this.state.doc, 
                title: this.refs.title.value,
                summary: this.refs.summary.value,
                
            }
        })
    }
    changeCurrentSubject(evt) {
        const { subjects } = this.props;

        this.setState({
            doc: { 
                ...this.state.doc, 
                currentSubject: evt,
                subjectID: subjects.find(e => e.subjectName === evt).subjectId, 
            }
        })
    }

    changeUploadFileName(evt) {
        this.setState({
            doc: { ...this.state.doc, fileName: evt.target.files[0].name, file: evt.target.files[0] }
        })
    }
    render() {
        const { categories, semesters, subjects } = this.props;
        var modalBody = null;
        if (this.statusPostDocCode === 18) {
            modalBody = <div>
                <Modal.Body>
                    {this.state.modalMessage}
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" href="/" onClick={this.handleClose}>
                        Đồng ý
                        </Button>
                </Modal.Footer>
            </div>
        } else {
            modalBody = <div>
                <Modal.Body>{this.state.modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.handleClose}>
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </div>
        }
        return (
            <div id="create-post">
                <Modal centered show={this.state.modalShow} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title contained-modal-title-vcenter>
                            Thông báo
                        </Modal.Title>
                    </Modal.Header>
                    {modalBody}
                </Modal>

                <p className="title">UPLOAD TÀI LIỆU</p>
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Tên tài liệu</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={this.changeFileName} ref="title" placeholder="Nhập tên tài liệu" aria-label="Amount (to the nearest dollar)"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Mô tả tài liệu</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl ref="summary"placeholder="Nhập mô tả tài liệu" aria-label="Amount (to the nearest dollar)"/>
                    </InputGroup>

                    <Row>
                        <Col>
                            <DropdownButton title={this.state.doc.currentCategory}>
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
                            <DropdownButton title={this.state.doc.currentSubject}>
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
                            <DropdownButton title={this.state.doc.currentSemester}>
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
                            <Form.File id="formcheck-api-custom" onChange={this.changeUploadFileName} custom>
                                <Form.File.Input onChange={this.changeUploadFileName} isValid />
                                <Form.File.Label data-browse="Tải lên">
                                    {this.state.uploadFileName}
                                </Form.File.Label>
                            </Form.File>

                        </Col>
                    </Row>

                    <br></br>
                    <Button block className="btn-submit" variant="success" onClick={this.handleUpload.bind(this)}>
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
        statusPostDocCode: state.doc.statusPostDocCode,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSemesters,
    getSubjects,
    postDoc,
    getCategoriesDoc,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CreateDoc));
