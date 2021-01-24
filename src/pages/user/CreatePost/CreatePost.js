import React, { Component } from "react";

import Editor from 'components/common/CustomCKE/CKEditor.js';

import "./CreatePost.scss";
import "components/common/CustomCKE/CKEditorContent.scss";

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getPostCategories } from "redux/services/postCategoryServices";
import { getTagQuickSearchResult } from "redux/services/tagServices"

import Tag from "components/common/Tag/Tag";
import Titlebar from 'components/common/Titlebar/Titlebar';
import Combobox from 'components/common/Combobox/Combobox';

import { CKEToolbarConfiguration } from "components/common/CustomCKE/CKEditorConfiguration"
import { ClickAwayListener } from '@material-ui/core';
import { InputElementValidation, defaultFormSubmit } from 'utils/validationUtils'

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //forTag
            tags: [
            ],
            currentCategory: "Chọn danh mục",
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

            // post
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
                    // content: "Đây là mô tả của tag Đây là mô tả của tag Đây là mô tả của tag"
                },
                {
                    id: 2,
                    name: "tag2",
                    //content: "content"
                },
                {
                    id: 3,
                    name: "tag2",
                    //content: "content"
                }
            ];
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.statusPostPostCode);
        console.log(this.state.isUploading)
        if (this.state.isUploading) {
            this.statusPostPostCode = nextProps.statusPostPostCode;
            this.handleModal();
        }

    }

    componentDidMount() {
        this.props.getPostCategories();

        InputElementValidation({ //onLy apply for html inputElement not for custom Combobox and CKEditor
            form: '#create-post-form',
            formGroupSelector: '.form-group',
            errorSelector: '.form-error-label',
            rules: [
                InputElementValidation.isRequired('#cr-post-title', 'Tên bài viết không được để trống!'),
                InputElementValidation.isNotAllowSpecialCharacter('#cr-post-title', 'Tên bài viết không được chứa ký tự đặc biệt!')
            ]
        });

        defaultFormSubmit('#create-post-form');
    }

    handleModal = () => {
        console.log(this.statusPostPostCode)
        if (this.statusPostPostCode !== 1) {
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

    onCategoryOptionChanged = (selectedOption) => {

    }

    handleUpload = () => {
        const { account, categories } = this.props;
        const post = {
            title: this.state.title,
            imageURL: this.state.imageURL,
            content: this.state.content,
            authorID: account.id,
            categoryID: (categories.find(e => e.title === this.state.currentCategory)).id,
            category: this.state.currentCategory,
            tags: this.state.tags,
        }
        // this.props.postPost(post);
        this.setState({
            isUploading: true,
        })
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

        console.log(tempTags);
        this.setState({
            tags: tempTags,
        });
        this.forceUpdate();
    }

    handleClickTag = (item) => {
        console.log(item)
    }

    //#endregion

    //
    handleEditorChange = (value) => {
        console.log(value);
    };

    handleTitleChange = () => {
        this.setState({

        })
    }

    handleEditorFocus = () => {
        //
    }

    render() {
        const { categories } = this.props;
        var body = null;

        if (this.state.isPreview) {
            body = <div>
                <br></br>
                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            </div>;
        } else {
            body =
                <div id="create-post-form" className="form-container" onSubmit={this.handleUpload} tabIndex="1">
                    <div className="mg-top-10px" />

                    <div className="form-group validation">
                        <label className="form-label-required">Tiêu đề:</label>
                        <input className="form-input" id="cr-post-title" placeholder="Nhập tiêu đề bài viết ..." onChange={this.handleTitleChange} type="text" ></input>
                        <div className="form-error-label-container">
                            <span className="form-error-label" ></span>
                        </div>
                    </div>

                    {/* CKEditor */}
                    <div className="form-group validation">
                        <div className="form-label-required">Nội dung:</div>
                        <Editor
                            id="cr-post-cke"
                            placeholder='Start typing here...'
                            onChange={this.handleEditorChange}
                            onFocus={this.handleEditorFocus}
                            data="<p>Nhập nội dung bài viết ...</p>"

                            validation={{
                                //apply for CKEditor
                                form: '#create-post-form',
                                formGroupSelector: '.form-group',
                                errorSelector: '.form-error-label',
                                rules: [
                                    Editor.isRequired('Nội dung bài viết không được để trống!'),
                                ]
                            }
                            }
                        />
                        <div className="form-error-label-container">
                            <span className="form-error-label" ></span>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="form-group validation">
                        <label className="form-label-required">Danh mục:</label>
                        <Combobox id="cr-post-category-combobox"
                            options={this.state.categoryList}
                            onOptionChanged={(selectedOption) => this.onCategoryOptionChanged(selectedOption)}
                            selectedOptionID={1} // placeHolder="Chọn danh mục"

                            validation={{
                            //apply for Combobox
                            form: '#create-post-form',
                            formGroupSelector: '.form-group',
                            errorSelector: '.form-error-label',
                            rules: [
                                Combobox.isRequired('Danh mục không được để trống')
                            ]
                        }}
                        >
                        </Combobox>
                    <div className="form-error-label-container">
                        <span className="form-error-label" ></span>
                    </div>
                </div>

            {/* Tag */ }
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

            {/* Button */ }
            <div className="form-group display-flex">
                <button className="blue-button mg-auto submit-form-btn" onClick={() => this.handleUpload()}>Đăng bài</button>
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
                                <button className="white-button" >Preview</button>
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

