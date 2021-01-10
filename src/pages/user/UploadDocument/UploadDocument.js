import React, { Component } from "react";

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    postDoc,
} from "redux/services/docServices"
import "./UploadDocument.scss";
import Tag from "components/common/Tag/Tag";
import Titlebar from 'components/common/Titlebar/Titlebar';
import ComboBox from 'components/common/Combobox/Combobox';
import CKEditor from "ckeditor4-react";

import {getDocCategories} from "redux/services/docCategoryServices";

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
        this.props.getDocCategories();

        this.props.getSubjects();
    }


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
        const { categories } = this.props;
        return (
            <div>
                <Titlebar title="UPLOAD TÀI LIỆU" />

                <div id="create-post" className="left-side-bar-layout-content-container">

                    <div className="flex-container-end">
                    </div>
                    <div className="form-container" onSubmit={this.handleUpload} tabIndex="1">

                        <div className="form-label-required">Tiêu đề:</div>
                        <input ref="title" placeholder="Nhập tiêu đề tài liệu ..." onChange={this.handleTitleChange} type="text" className="form-input"></input>

                        {/* CKEditor */}
                        <div className="mg-top-10px" />
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

                        <div className="mg-top-10px">
                            {this.state.tags.map(item =>
                                <Tag isReadOnly={false} onDeleteTag={(item) => this.deleteTag(item)} tag={item} />
                            )}
                        </div>

                        {/* Button */}
                        <div className="mg-top-10px display-flex">
                            <button className="blue-button margin_auto" >Upload</button>
                        </div>

                    </div>



                </div>
            </div >
        );
    }
}


const mapStateToProps = (state) => {
    return {
        categories: state.doc_category.categories
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postDoc,
    getDocCategories,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadDocument));
