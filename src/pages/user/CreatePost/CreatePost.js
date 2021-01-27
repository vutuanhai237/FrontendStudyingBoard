import React, { Component } from "react";

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getPostCategories } from "redux/services/postCategoryServices";
import { getTagQuickSearchResult } from "redux/services/tagServices"

import gray_btn_element from 'assets/images/g_btn_element.png'

import "./CreatePost.scss";
import "components/common/CustomCKE/CKEditorContent.scss";
import 'components/styles/DocPostSummary.scss'
import 'components/styles/DocPostDetail.scss'

//components
import Tag from "components/common/Tag/Tag";
import Titlebar from 'components/common/Titlebar/Titlebar';
import Combobox from 'components/common/Combobox/Combobox';
import Editor from 'components/common/CustomCKE/CKEditor.js';

//utils
import { ClickAwayListener } from '@material-ui/core';
import { validation, styleFormSubmit } from 'utils/validationUtils'

const validationCondition = {
    form: '#create-post-form',
    formGroupSelector: '.form-group',
    errorSelector: '.form-error-label',
    rules: [
        //truyen vao id, loai component, message
        validation.isRequired('cr-post-title', 'form-input', 'Tên bài viết không được để trống!'),
        validation.isNotAllowSpecialCharacter('cr-post-title', 'form-input', 'Tên bài viết không được chứa ký tự đặc biệt!'),
        validation.isRequired('cr-post-category-combobox', 'form-combobox', 'Danh mục không được để trống'),
        validation.isRequired('cr-post-cke', 'form-ckeditor', 'Nội dung bài viết không được để trống')
    ],
}

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: "",
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
            isUploading: false,
            isPreview: false,

            title: "",//
            content: "",//
            authorID: "",//
            categoryID: ""//

        };

        this.quickSearchTagResult =
            [
                {
                    id: 1,
                    name: "tag1",
                },
                {
                    id: 2,
                    name: "tag2",
                },
                {
                    id: 3,
                    name: "tag2",
                }
            ];
    }

    componentDidMount() {
        this.props.getPostCategories();
        validation(validationCondition);
    }

    handleModal = () => {

    }

    onCategoryOptionChanged = (selectedOption) => {

    }

    handleUpload = () => {
        // const { account, categories } = this.props;
        const post = {
            title: this.state.title,
            imageURL: this.state.imageURL,
            content: this.state.content,
            // authorID: account.id,
            // categoryID: (categories.find(e => e.title === this.state.currentCategory)).id,
            category: this.state.currentCategory,
            tags: this.state.tags,
        }

    }

    handleUploadBtnClick = () => {
        styleFormSubmit(validationCondition);
        this.handleUpload();
    }

    handleClose = () => {
        this.setState({
            modalShow: false,
        });
    }

    //#region  tag region
    closeQuickSearchTag = () => {
        document.getElementById("cr-post-qs-tag-result-container").classList.add('hidden');
        document.getElementById("cr-post-qs-tag-result-container").classList.remove('show');
    }

    quickSearchTags = (e) => {

        if (!e.target.value) {
            this.closeQuickSearchTag();
            return;
        }
        document.getElementById("cr-post-qs-tag-result-container").classList.add('show');
        document.getElementById("cr-post-qs-tag-result-container").classList.remove('hidden');

        //send API cac kieu o cho nay
    }

    keyHandler = (e) => {
        let tags = this.state.tags;
        if (e.charCode === 13) { //press Enter    

            //check voi 3 ket qua tim kiem duoc, neu khong match thi tao moi

            //neu chua search duoc thi khong cho bam enter

            document.getElementById("cr-post-qs-tag-result-container").classList.add('hidden');
            document.getElementById("cr-post-qs-tag-result-container").classList.remove('show');

            //tao moi
            tags.push({ name: e.target.value }); //tao ra tag moi
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
    handleEditorChange = (value) => {

        console.log("change");
        console.log(value);
        this.setState({ content: value })
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleEditorFocus = () => {
        //
    }

    render() {
        const { categories } = this.props;
        var body = null;

        if (this.state.isPreview) {
            body =
                <div className="doc-post-detail" >
                    <div>
                        <div className="main-layout">
                            <div className="title">
                                {this.state.title}
                            </div>
                            <div className="DocPost_Metadata_Header">
                                <div className="prefix-normal-category"> </div>
                                <div className="normal-category">
                                    {this.state.category}
                                </div>
                                <img alt="*" className="metadata-icon" src={gray_btn_element} />
                            </div>
                            <div className="user-infor-container">
                                <img src={this.avartarUrl} alt="avatar" className="user-avatar" />
                                <div style={{ flexDirection: "vertical" }}>
                                    <div className="display-name">{this.authorName}</div>
                                    <div className="posted-time">đã đăng vào ngày {this.uploadedTime}</div>
                                </div>
                            </div>
                            <div className="content">
                                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
                            </div>
                        </div>
                        <div className="view-count-down-count">
                            <div className="gray-label">Bình luận: {this.viewCount}</div>
                            <div className="gray-label mg-left-5px">lượt xem: {this.viewCount}</div>
                        </div>
                    </div>
                </div>;
        } else {
            body =
                <div id="create-post-form" className="form-container" onSubmit={this.handleUpload} tabIndex="1">
                    <div className="mg-top-10px" />

                    <div className="form-group">
                        <label className="form-label-required">Tiêu đề:</label>
                        <input className="form-input" id="cr-post-title" placeholder="Nhập tiêu đề bài viết ..." onChange={e => this.handleTitleChange(e)} type="text" ></input>
                        <div className="form-error-label-container">
                            <span className="form-error-label" ></span>
                        </div>
                    </div>

                    {/* CKEditor */}
                    <div className="form-group">
                        <div className="form-label-required">Nội dung:</div>
                        <Editor
                            id="cr-post-cke"
                            placeholder='Start typing here...'
                            onChange={this.handleEditorChange}
                            onFocus={this.handleEditorFocus}
                            data="<p>Nhập nội dung bài viết ...</p>"
                            validation
                        />
                        <div className="form-error-label-container">
                            <span className="form-error-label" ></span>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="form-group">
                        <label className="form-label-required">Danh mục:</label>
                        <Combobox id="cr-post-category-combobox"
                            options={this.state.categoryList}
                            onOptionChanged={(selectedOption) => this.onCategoryOptionChanged(selectedOption)}
                            placeHolder="Chọn danh mục"
                            validation
                        >
                        </Combobox>
                        <div className="form-error-label-container">
                            <span className="form-error-label" ></span>
                        </div>
                    </div>

                    {/* Tag */}
                    <div className='form-group'>
                        <label className="form-label">Tags:</label>

                        <input onChange={(e) => this.quickSearchTags(e)}
                            onKeyPress={(this.state.tags.length < 5) && this.keyHandler}
                            className="form-input"
                            placeholder="Nhập tag ..." />

                        <ClickAwayListener onClickAway={() => this.closeQuickSearchTag()}>
                            <div id="cr-post-qs-tag-result-container" className="form-input-dropdown-container hidden">
                                <div className="form-input-dropdown">
                                    <div className="display-flex">
                                        {this.quickSearchTagResult.map(tag => {
                                            return <div className="tag-search-item">
                                                <div className="tag-search-item-name">  {tag.name}</div>
                                                <div className="tag-search-item-content">  {tag.content}</div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </ClickAwayListener>
                        <div className="form-tip-label-container">
                            <div className="form-tip-label">Có thể nhập tối đa 5 tag.</div>
                        </div>

                        <div className="mg-top-10px" >
                            {this.state.tags.map(item =>
                                <Tag isReadOnly={false} onDeleteTag={(item) => this.deleteTag(item)} tag={item} />
                            )}
                        </div>
                        <div className="form-line" />

                    </div>

                    {/* Button */}
                    <div className="form-group display-flex">
                        <button className="blue-button mg-auto form-submit-btn" onClick={() => this.handleUploadBtnClick()}>Đăng bài</button>
                    </div>
                </div >
        }
        return (
            <div>
                <Titlebar title="TẠO BÀI VIẾT MỚI" />
                <div className="left-side-bar-layout-content-container">
                    <div className="form-container">
                        <div className="flex-container-end">
                            <div className="flex-container-end" >
                                <button className="blue-button" disabled={!this.state.isPreview} onClick={() => this.setState({ isPreview: !this.state.isPreview })} >Soạn bài viết</button>
                                <div className="mg-right-5px" />
                                <button className="white-button" disabled={this.state.isPreview} onClick={() => this.setState({ isPreview: !this.state.isPreview })} >Preview</button>
                            </div>
                        </div>
                        <div className="mg-top-10px decoration-line" />
                    </div>
                    {body}

                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.post.categories,
        // account: state.user.account,
        statusPostPostCode: state.post.statusPostPostCode,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostCategories, getTagQuickSearchResult, getPostCategories

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));

