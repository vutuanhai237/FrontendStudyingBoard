import React, { Component } from "react";

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  
    getSubjects,
    getCategoriesDoc,
    postDoc,
} from "services/docServices"
import "./UploadDocument.scss";
import Tag from "components/common/Tag/Tag";
import Titlebar from 'components/common/Titlebar/Titlebar';
import ComboBox from 'components/common/Combobox/Combobox';
import CKEditor from "ckeditor4-react";

class UploadDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [
                {
                    id: 1,
                    content: "tag1"
                },
                {
                    id: 2,
                    content: "tag2"
                }
            ],

            quickTagsResults:
                [
                    {
                        id: 1,
                        content: "tag1"
                    },
                    {
                        id: 2,
                        content: "tag2"
                    },
                    {
                        id: 3,
                        content: "tag2"
                    }
                ],


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
            categoryList: [
                {
                    id: 1,
                    name: "Danh muc 1"
                },
                {
                    id: 2,
                    name: "Danh muc 2"
                },
                {
                    id: 3,
                    name: "Danh muc 3"
                }
            ],
            selectedOption: {
                id: "",
                name: ""
            }
            ,
            subjectList: [
                {
                    id: 1,
                    name: "Mon hoc 1"
                },
                {
                    id: 2,
                    name: "Mon hoc 2"
                },
                {
                    id: 3,
                    name: "Mon hoc 3"
                }
            ],
        };


        // this.statusPostDocCode = 0;
        // this.handleClose = this.handleClose.bind(this);
        // this.changeUploadFileName = this.changeUploadFileName.bind(this);
        // this.changeFileName = this.changeFileName.bind(this);
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
     
        this.props.getSubjects();
    }

    // handleModal() {
    //     console.log(this.statusPostDocCode)
    //     if (this.statusPostDocCode !== 18) {
    //         this.setState({
    //             modalShow: true,
    //             modalMessage: "Tải lên thất bại",
    //         });
    //     } else {
    //         this.setState({
    //             modalShow: true,
    //             modalMessage: "Tải lên thành công",
    //         });
    //     }
    //     this.setState({
    //         isUploading: false,
    //     })
    // }
    // handleUpload() {

    //     console.log(this.state.doc);
    //     this.props.postDoc(this.state.doc);
    //     this.setState({
    //         isUploading: true,
    //     })
    // }

    // handleClose() {
    //     this.setState({
    //         modalShow: false,
    //     });
    // }

    // changeCurrentCategory(evt) {
    //     const { categories } = this.props;
    //     this.setState({
    //         doc: {
    //             ...this.state.doc,
    //             currentCategory: evt,
    //             categoryID: categories.find(e => e.name === evt).id
    //         }
    //     })

    // }

    // changeFileName() {
    //     this.setState({
    //         doc: {
    //             ...this.state.doc,
    //             title: this.refs.title.value,
    //             summary: this.refs.summary.value,

    //         }
    //     })
    // }
    // changeCurrentSubject(evt) {
    //     const { subjects } = this.props;

    //     this.setState({
    //         doc: {
    //             ...this.state.doc,
    //             currentSubject: evt,
    //             subjectID: subjects.find(e => e.subjectName === evt).subjectId,
    //         }
    //     })
    // }

    changeUploadFileName(evt) {
        this.setState({
            doc: { ...this.state.doc, fileName: evt.target.files[0].name, file: evt.target.files[0] }
        })
    }

    onSubjectOptionChanged = (selectedOption) => {
        console.log("Option subject: ");
        console.log(selectedOption);
    }


    onCategoryOptionChanged = (selectedOption) => {
        console.log("Option category: ");
        console.log(selectedOption)
    }

    //#region Tag handler region

    quickSearchTags = (e) => {
        console.log("quickSearchTag")
    }

    keyHandler = (e) => {
        let tags = this.state.tags;
        if (e.charCode === 13) { //press Enter    
            tags.push({ id: 1, content: e.target.value });
            this.setState({
                tags: tags
            });
            e.target.value = ""
        }
    }

    deleteTag = (item) => {
        let tempTags = this.state.tags;
        tempTags = tempTags.filter(_item => _item.content !== item.content);
        this.setState({
            tags: tempTags,
        });
        this.forceUpdate();
    }

    handleClickTag = (item) => {
        console.log(item)
    }

    //#endregion

    render() {
        const { categories, semesters, subjects } = this.props;
        //var modalBody = null;
        // if (this.statusPostDocCode === 18) {
        //     modalBody = <div>
        //         <Modal.Body>
        //             {this.state.modalMessage}
        //         </Modal.Body>
        //         <Modal.Footer>
        //             <Button variant="success" href="/" onClick={this.handleClose}>
        //                 Đồng ý
        //                 </Button>
        //         </Modal.Footer>
        //     </div>
        // } else {
        //     modalBody = <div>
        //         <Modal.Body>{this.state.modalMessage}</Modal.Body>
        //         <Modal.Footer>
        //             <Button variant="danger" onClick={this.handleClose}>
        //                 Đồng ý
        //             </Button>
        //         </Modal.Footer>
        //     </div>
        // }
        return (
            <div>
                <Titlebar title="UPLOAD TÀI LIỆU" />

                <div id="create-post" class="left-side-bar-layout-content-container">

                    <div className="flex-container-end">
                    </div>
                    <div className="form-container" onSubmit={this.handleUpload} tabIndex="1">

                        <div className="form-label-required">Tiêu đề:</div>
                        <input ref="title" placeholder="Nhập tiêu đề tài liệu ..." onChange={this.handleTitleChange} type="text" className="form-input"></input>

                        {/* CKEditor */}
                        <div className="margin-top-10px" />
                        <div className="form-label-required">Mô tả:</div>
                        <textarea className="form-text-area" placeholder="Nhập mô tả tài liệu ..." draggable={false}></textarea>

                        {/* Category */}
                        <div className="form-label-required">Danh mục:</div>
                        <ComboBox id="upload-doc-category-combobox"
                            options={this.state.categoryList}
                            onOptionChanged={(selectedOption) => this.onCategoryOptionChanged(selectedOption)}
                            placeHolder="Chọn danh mục">
                        </ComboBox>

                        {/* Subject */}
                        <div id="upload-doc-subject-combobox" className="form-label-required" >Môn học:</div>
                        <ComboBox options={this.state.subjectList}
                            placeHolder="none"
                            onOptionChanged={(selectedOption) => this.onSubjectOptionChanged(selectedOption)}
                            selectedOptionID={2} >
                        </ComboBox>

                        {/* Tag */}
                        <div className="form-label">Tags:</div>
                        <input onChange={this.quickSearchTags} onKeyPress={(this.state.tags.length < 5) && this.keyHandler} className="form-input" placeholder="Nhập tag ..." ref="inputtags" />
                        <div className="form-dropdown-container">
                            <div className="form-dropdown"></div>
                        </div>
                        <div className="form-tip-label" on>Có thể nhập tối đa 5 tag.</div>

                        <div className="margin-top-10px">
                            {this.state.tags.map(item =>
                                <Tag isReadOnly={false} onDeleteTag={(item) => this.deleteTag(item)} tag={item} />
                            )}
                        </div>

                        {/* Button */}
                        <div className="margin-top-10px display-flex">
                            <button className="blue-button margin_auto" >Upload</button>
                        </div>

                    </div>



                </div>
            </div >

            // <div id="create-post">
            //     <Modal centered show={this.state.modalShow} onHide={this.handleClose} animation={false}>
            //         <Modal.Header closeButton>
            //             <Modal.Title contained-modal-title-vcenter>
            //                 Thông báo
            //             </Modal.Title>
            //         </Modal.Header>
            //         {modalBody}
            //     </Modal>

            //     <p className="title">UPLOAD TÀI LIỆU</p>
            //     <Form>
            //         <InputGroup className="mb-3">
            //             <InputGroup.Prepend>
            //                 <InputGroup.Text>Tên tài liệu</InputGroup.Text>
            //             </InputGroup.Prepend>
            //             <FormControl onChange={this.changeFileName} ref="title" placeholder="Nhập tên tài liệu" aria-label="Amount (to the nearest dollar)" />
            //         </InputGroup>

            //         <InputGroup className="mb-3">
            //             <InputGroup.Prepend>
            //                 <InputGroup.Text>Mô tả tài liệu</InputGroup.Text>
            //             </InputGroup.Prepend>
            //             <FormControl ref="summary" placeholder="Nhập mô tả tài liệu" aria-label="Amount (to the nearest dollar)" />
            //         </InputGroup>

            //         <Row>
            //             <Col>
            //                 <DropdownButton title={this.state.doc.currentCategory}>
            //                     {categories.map((item) => {
            //                         return (
            //                             <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey={item.name}>
            //                                 {item.name}
            //                             </Dropdown.Item>
            //                         );
            //                     })}
            //                 </DropdownButton>
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col>
            //                 <DropdownButton title={this.state.doc.currentSubject}>
            //                     {subjects.map((item) => {
            //                         return (
            //                             <Dropdown.Item onSelect={(evt) => this.changeCurrentSubject(evt)} eventKey={item.subjectName}>
            //                                 {item.subjectName}
            //                             </Dropdown.Item>
            //                         );
            //                     })}
            //                 </DropdownButton>
            //             </Col>
            //         </Row>
            //         <Row>
            //             <Col>
            //                 <DropdownButton title={this.state.doc.currentSemester}>
            //                     {semesters.map((item) => {
            //                         return (
            //                             <Dropdown.Item onSelect={(evt) => this.changeCurrentSemester(evt)} eventKey={item.semesterNo + " . " + item.academicYear}>
            //                                 {item.semesterNo + " . " + item.academicYear}
            //                             </Dropdown.Item>
            //                         );
            //                     })}
            //                 </DropdownButton>
            //             </Col>
            //         </Row>

            //         <br className="mb-1"></br>
            //         <Row className="browser-upload">
            //             <Col>
            //                 <Form.File id="formcheck-api-custom" onChange={this.changeUploadFileName} custom>
            //                     <Form.File.Input onChange={this.changeUploadFileName} isValid />
            //                     <Form.File.Label data-browse="Tải lên">
            //                         {this.state.uploadFileName}
            //                     </Form.File.Label>
            //                 </Form.File>

            //             </Col>
            //         </Row>

            //         <br></br>
            //         <Button block className="btn-submit" variant="success" onClick={this.handleUpload.bind(this)}>
            //             Tải lên
            //         </Button>
            //     </Form>
            // </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        categories: state.doc.categories,
        subjects: state.doc.subjects,
        statusPostDocCode: state.doc.statusPostDocCode,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
 
    getSubjects,
    postDoc,
    getCategoriesDoc,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadDocument));
