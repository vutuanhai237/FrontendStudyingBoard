import React, { Component } from "react";

import CKEditor from "ckeditor4-react"
import "./CreatePost.scss";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getPostCategories, postPost } from "services/postServices";
import Tag from "components/common/Tag/Tag";
import Titlebar from 'components/common/Titlebar/Titlebar';
import ComboBox from 'components/common/Combobox/Combobox';

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
        console.log("Option category: ");
        console.log(selectedOption)
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
        console.log("**");
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
        console.log(e.editor.getData());
        this.setState({
            content: e.editor.getData(),
        });
    };

    handleTitleChange = () => {
        this.setState({
            title: this.refs.title.value,
        })
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
            body = <div className="form-container" onSubmit={this.handleUpload} tabIndex="1">

                <div className="form-label-required">Tiêu đề:</div>
                <input ref="title" placeholder="Nhập tiêu đề bài viết ..." onChange={this.handleTitleChange} type="text" className="form-input"></input>

                {/* CKEditor */}
                <div className="margin-top-10px" />
                <div className="form-label-required">Nội dung:</div>
                <CKEditor

                    data="<p>Nhập nội dung bài viết</p>"
                    onChange={this.handleEditorChange}
                    config={{
                        toolbar: [
                            { name: 'clipboard', items: ['Undo', 'Redo'] },
                            { name: 'links', items: ['Link'] },
                            { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'] },
                            { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike'] },
                            { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Blockquote'] },
                            { name: 'styles', items: ['Styles', 'Format'] },
                        ]
                    }}
                />

                {/* Category */}
                <div className="form-label-required">Danh mục:</div>
                <ComboBox id="create-post-category-combobox" options={this.state.categoryList} onOptionChanged={(selectedOption) => this.onCategoryOptionChanged(selectedOption)} placeHolder="Chọn danh mục">
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
                    <button className="blue-button margin_auto" >Đăng bài</button>
                </div>

            </div>

        }
        return (
            <div>
                <Titlebar title="TẠO BÀI VIẾT MỚI" />

                <div id="create-post" class="left-side-bar-layout-content-container">

                    <div className="flex-container-end">
                    </div>

                    {body}


                </div>
            </div >
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        categories: store.post.categories,
        account: store.user.account,
        statusPostPostCode: store.post.statusPostPostCode,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostCategories,
    postPost,
}, dispatch);

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(CreatePost));



            // <Form>
            //     <Form.Control onChange={this.handleTitleChange} ref="title" id="enter-title" type="text" placeholder="Nhập tiêu đề" />
            //     <Form.Control onChange={this.handleSummaryChange} ref="summary" id="enter-summary" type="text" placeholder="Nhập tóm tắt" />
            //     <Editor initialValue={this.state.content}
            //         init={{
            //             height: 500,
            //             menubar:
            //                 "file edit view insert format tools table help",
            //             plugins: [
            //                 "advlist autolink lists link image charmap print preview anchor",
            //                 "searchreplace visualblocks code fullscreen",
            //                 "insertdatetime media table paste imagetools wordcount",
            //             ],
            //             toolbar:
            //                 "undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help",
            //         }}
            //         onChange={this.handleEditorChange}
            //     />
            //     <Row>

            // <Col>
            //     <Form.Control style={{ marginTop: "10px" }} onKeyDown={this.addTag} className="enter-tags" type="text" placeholder="Nhập tags" ref="inputtags" />
            // </Col>
            // <Col>
            //     <Tags handleClick={this.handleClickTag} tags={this.state.tags} />
            // </Col>

            //         <Col className="justify-content-end d-flex">
            //             <DropdownButton id="dropdown-basic-button" title={this.state.currentCategory} className="dropdown">
            //                 {categories.map((item) => {
            //                     return (
            //                         <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey={item.title}>
            //                             {item.title}
            //                         </Dropdown.Item>

            //                     );
            //                 })}
            //             </DropdownButton>
            //         </Col>
            //     </Row>
            //     <Form.Control style={{ marginTop: "0px" }} onChange={this.handleImageURLChange} ref="imageURL" id="enter-title" type="text" placeholder="Nhập đường link ảnh đại diện bài post" />

            //     <Button block className="btn-submit" variant="success" onClick={this.handleUpload}>
            //         Đăng bài
            //     </Button>
            // </Form>