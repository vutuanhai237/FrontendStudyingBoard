import React, { Component } from "react";

import Editor from 'components/common/CustomCKE/CKEditor.js';

import "./CreatePost.scss";
import "components/common/CustomCKE/CKEditorContent.scss";

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getPostCategories } from "redux/services/postCategoryServices";
import Tag from "components/common/Tag/Tag";
import Titlebar from 'components/common/Titlebar/Titlebar';
import ComboBox from 'components/common/Combobox/Combobox';
import Validator from 'utils/validationUtils';
import { CKEToolbarConfiguration } from "components/common/CustomCKE/CKEditorConfiguration"


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //forTag
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
        // validationForm = () => {
        Validator({
            form: '#create-post-form',
            formGroupSelector: '.form-group',
            errorSelector: '.form-error-label',
            rules: [
                Validator.isRequired('#cr-post-title', 'Tên bài viết không được để trống!'),
                Validator.isNotAllowSpecialCharacter('#cr-post-title', 'Tên bài viết không được chứa ký tự đặc biệt!'),
                Validator.isRequired('#cr-post-cke', "Nội dung bài viết không được để trống")
            ]
        });
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
        this.props.postPost(post);
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
        console.log("*");

        console.log(item)

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
    handleEditorChange = (e) => {
        // console.log(e.editor.getData());
        // this.setState({
        //     content: e.editor.getData(),
        // });
    };

    handleTitleChange = () => {
        this.setState({

        })
    }

    handleFocus = () => {

    }

    handleFocus = () => {

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
            body = <div id="create-post-form" className="form-container" onSubmit={this.handleUpload} tabIndex="1">
                <div className="mg-top-10px" />

                <div className="form-group">
                    <label className="form-label-required">Tiêu đề:</label>
                    <input id="cr-post-title" placeholder="Nhập tiêu đề bài viết ..." onChange={this.handleTitleChange} type="text" className="form-input"></input>
                    <div className="form-error-label-container">
                        <span className="form-error-label" ></span>
                    </div>
                </div>

                {/* CKEditor */}

                <div className="form-group">
                    <div className="form-label-required">Nội dung:</div>

                    <input id="cr-post-cke-dummy-text-input" type="text" className="cke-dummy-text-input" />

                    <Editor

                        id="cr-post-cke"
                        placeholder='Start typing here...'
                        onChange={this.handleEditorChange}
                        onFocus={this.handleFocus}
                        data="<p>Nhập nội dung bài viết ...</p>"
                        // config={editorConfiguration}

                    />

                    <div className="form-error-label-container">
                        <span className="form-error-label" ></span>
                    </div>

                </div>

                {/* Category */}
                <div className="form-group">
                    <label className="form-label-required">Danh mục:</label>
                    <ComboBox id="create-post-category-combobox" options={this.state.categoryList} onOptionChanged={(selectedOption) => this.onCategoryOptionChanged(selectedOption)} placeHolder="Chọn danh mục">
                    </ComboBox>
                </div>

                {/* Tag */}

                <div className='form-group'>
                    <label className="form-label">Tags:</label>

                    <input onChange={this.quickSearchTags}
                        onKeyPress={(this.state.tags.length < 5) && this.keyHandler}
                        className="form-input"
                        placeholder="Nhập tag ..." />

                    <div className="form-input-dropdown-container">
                        <div className="form-input-dropdown"></div>
                    </div>

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
                    <button className="blue-button margin_auto" >Đăng bài</button>

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
        account: state.user.account,
        statusPostPostCode: state.post.statusPostPostCode,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostCategories,
    // postPost,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));

