/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_admin_components/Admin_Titlebar/Admin_Titlebar'
import dropdown_btn from '../../../img/dropdown_icon.png'
import './Admin_CategoriesManagement.scss'

import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import { ClickAwayListener } from '@material-ui/core';

class Admin_CategoryManagement extends Component {
    constructor(props) {
        super();

        //Post 
        this.isAddPostCategoryPopupOpen = false;
        this.isEditPostCategoryPopupOpen = false;
        this.isVerifyDeletePostCategoryPopupOpen = false;

        //Doc
        this.isAddDocCategoryPopupOpen = false;
        this.isEditDocCategoryPopupOpen = false;
        this.isVerifyDeleteDocCategoryPopupOpen = false;

        //Notify
        this.notifyHeader = "";
        this.notifyContent = "";
        this.isNotifySuccessOpen = false;
        this.isNotifyFailOpen = false;

        //for Edit and Delete, only choose 1 item in all table
        this.selected_category_id = "";
        this.selected_category_name = "";

        this.state = {
            postCategoriesList:
                [
                    {
                        "id": 1,
                        "title": "Danh muc 1"
                    },
                    {
                        "id": 2,
                        "title": "Danh muc 2"
                    },
                    {
                        "id": 3,
                        "title": "Danh muc 3"
                    }
                ],
            docCategoriesList: [
                {
                    "id": 1,
                    "title": "Mon hoc 1"
                },
                {
                    "id": 2,
                    "title": "Mon hoc 2"
                },
                {
                    "id": 3,
                    "title": "Mon hoc 3"
                }
            ],
            canClickEditPostCategory: false,
            canClickDeletePostCategory: false,
            canClickEditDocCategory: false,
            canClickDeleteDocCategory: false,

        }
    }

    componentDidMount() {
        // console.log(process.env.path);
        this.fetchAllCategoryInPageOne();
        this.fetchAllRole();
    }

    fetchAllCategoryInPageOne = () => {
        //feta
    }

    fetchAllRole = () => {

    }

    onPageChange = () => {

    }

    render() {
        return (
            <div>
                <Admin_Titlebar title="QUẢN LÝ DANH MỤC" />
                <div className="Admin_Show_Port">
                    {/* Danh mục bài viết */}
                    <div className="Category_Type_Dropdown" id="admin-post-categories-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("admin-post-categories-dropdown", "admin-post-categories-container")}>
                        <div>
                            DANH MỤC BÀI VIẾT
                        </div>
                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                    </div>

                    <div className="Category_Type_Dropdown_Container" id="admin-post-categories-container">
                        <div className="Category_Component_List">
                            <div className="Category_Component">
                                <div className="Category_Component_Title">
                                    Danh sách danh mục:
                                </div>
                                <ClickAwayListener onClickAway={() => { this.closeAllPostCategoryListItemActivated() }}>

                                    <div className="Category_List_Port">
                                        <div className="Category_List_Header">
                                            <div className="Category_List_CODE_Header">Mã danh mục</div>
                                            <div className="Category_List_NAME_Header">Tên danh mục</div>
                                        </div>

                                        {this.state.postCategoriesList.map(item =>
                                            <div className="Category_List_Item" name="Post_Category_List_Item" key={item.id} id={"admin-post-category-item-" + item.id} onClick={(e) => this.handlerPostCategoryItemClick(e, item.id, item.title)} >
                                                <div className="Category_List_Item_CODE">{item.id}</div>
                                                <div className="Category_List_Item_NAME">{item.title}</div>
                                            </div>
                                        )}

                                    </div>
                                </ClickAwayListener>
                                <div className="Category_Buttons_Port">
                                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerClickAddPostCategory()}>Thêm</button>
                                    <button className="Simple_White_Button margin_right_5px" disabled={!this.state.canClickEditPostCategory} onClick={() => this.handlerClickEditPostCategory()}>Sửa</button>
                                    <button className="Simple_Red_Button" disabled={!this.state.canClickDeletePostCategory} onClick={() => this.handlerClickDeletePostCategory()}>Xóa</button>
                                </div>
                            </div>
                            <div style={{ height: "30px" }}></div>
                        </div>
                    </div>

                    <div style={{ height: "5px" }}></div>

                    <div className="Category_Type_Dropdown" id="admin-doc-categories-dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("admin-doc-categories-dropdown", "admin-doc-categories-container")}>
                        <div>
                            DANH MỤC TÀI LIỆU
                        </div>
                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                    </div>

                    <div className="Category_Type_Dropdown_Container" id="admin-doc-categories-container">
                        <div className="Category_Component_List">
                            <div className="Category_Component">
                                <div className="Category_Component_Title">
                                    Danh sách môn học:
                                </div>

                                <div className="Category_List_Port">
                                    <div className="Category_List_Header">
                                        <div className="Category_List_CODE_Header">Mã môn học</div>
                                        <div className="Category_List_NAME_Header">Tên môn học</div>
                                    </div>
                                    <div className="Category_List_Port">
                                        {this.state.docCategoriesList.map(item =>
                                            <div className="Category_List_Item" key={item.id}>
                                                <div className="Category_List_Item_CODE">{item.id}</div>
                                                <div className="Category_List_Item_NAME">{item.title}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="Category_Buttons_Port" >
                                    <div className="Simple_Blue_Button margin_right_5px">Thêm</div>
                                    <div className="Simple_White_Button margin_right_5px">Sửa</div>
                                    <div className="Simple_Red_Button">Xóa</div>
                                </div>
                            </div>
                        </div>;
                    </div>

                </div>

                {/* Popup for add new post category */}
                <CustomModal
                    shadow={true}
                    type="custom"
                    title="Thêm danh mục bài viết"
                    open={this.isAddPostCategoryPopupOpen}
                    closeModal={() => { this.isAddPostCategoryPopupOpen = false; this.setState({}); }}
                >
                    <div className="Custom_Modal_Body">
                        <div className="Simple_Gray_Label_18px"> Tên danh mục mới: </div>
                        <input type="text" className="Simple_Text_Input" placeholder="Nhập tên danh mục ..." />
                    </div>

                    <div className="Custom_Modal_Footer">
                        <div className="Simple_Gray_Label_18px">Xác nhận?</div>
                        <div style={{ display: "flex" }}>
                            <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyAddNewPostCategoryConfirmation()}>OK</button>
                            <button className="Simple_White_Button" onClick={() => { this.isAddPostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                        </div>
                    </div>
                </CustomModal>

                {/* Popup for update a new post category */}
                <CustomModal
                    shadow={true}
                    type="custom"
                    title="Cập nhật danh mục bài viết"
                    open={this.isEditPostCategoryPopupOpen}
                    closeModal={() => { this.isEditPostCategoryPopupOpen = false; this.setState({}); }}
                >
                    <div className="Custom_Modal_Body">
                        <div className="Simple_Gray_Label_18px"> Tên danh mục: </div>
                        <input type="text" className="Simple_Text_Input" defaultValue={this.selected_category_name} />
                    </div>

                    <div className="Custom_Modal_Footer">
                        <div className="Simple_Gray_Label_18px">Xác nhận?</div>
                        <div style={{ display: "flex" }}>
                            <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyEditPostCategoryConfirmation()}>OK</button>
                            <button className="Simple_White_Button" onClick={() => { this.isEditPostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                        </div>
                    </div>
                </CustomModal>

                {/* Popup for verifying delete post category */}
                <CustomModal
                    shadow={true}
                    type="confirmation"
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    open={this.isVerifyDeletePostCategoryPopupOpen}
                    closeModal={() => { this.isVerifyDeletePostCategoryPopupOpen = false; this.setState({}); }}
                >
                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyDeletePostCategoryConfirmation()}>OK</button>
                    <button className="Simple_White_Button" onClick={() => { this.isVerifyDeletePostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                </CustomModal>

                {/* Custom for notifing success */}
                <CustomModal
                    open={this.isNotifySuccessOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_success"
                    closeModal={() => { this.isNotifySuccessOpen = false; this.setState({}) }}
                >
                </CustomModal>

                {/* Custom for notifing fail */}
                <CustomModal
                    open={this.isNotifyFailOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_fail"
                    closeModal={() => { this.isNotifyFailOpen = false; this.setState({}) }}
                >
                </CustomModal>

            </div >
        );
    }

    handlerCategoryTypeDropDownClick = (dropdown_id, container_id) => {
        let dropdown = document.getElementById(dropdown_id);
        let container = document.getElementById(container_id);

        if (container.style.display === "none") {
            container.style.display = "block";
            dropdown.style.width = "100%";
        }
        else {
            container.style.display = "none";
            dropdown.style.width = "30%";
        }
    }

    //post category area:
    handlerPostCategoryItemClick = (e, id, name) => {
        let all_item = document.getElementsByName("Post_Category_List_Item");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Category_List_Item";
        }

        let category_item = document.getElementById("admin-post-category-item-" + id);
        category_item.className = "Category_List_Item_Activated";

        this.selected_category_id = id;
        this.selected_category_name = name;

        this.setState({
            canClickDeletePostCategory: true,
            canClickEditPostCategory: true
        });

    }

    closeAllPostCategoryListItemActivated = () => {
        let all_item = document.getElementsByName("Post_Category_List_Item");
        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Category_List_Item";
        }
        this.setState({
            canClickDeletePostCategory: false,
            canClickEditPostCategory: false
        });
    }

    //Add post category area:
    handlerClickAddPostCategory = () => {
        this.isAddPostCategoryPopupOpen = true;
        this.setState({});
    }

    handlerVerifyAddNewPostCategoryConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Thêm danh mục bài viết thành công!";
        this.isAddPostCategoryPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }

    //Edit post category item
    handlerClickEditPostCategory = () => {
        this.isEditPostCategoryPopupOpen = true;
        this.setState({});
    }

    handlerVerifyEditPostCategoryConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Cập nhật danh mục bài viết thành công!";
        this.isEditPostCategoryPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }

    //Delete post category item
    handlerClickDeletePostCategory = () => {
        this.notifyHeader = "Xác nhận?";
        this.notifyContent = "Xác nhận xóa danh mục bài viết được chọn?";
        this.isVerifyDeletePostCategoryPopupOpen = true;
        this.setState({});
    }

    handlerVerifyDeletePostCategoryConfirmation = () => {
        this.notifyHeader = "Thành công";
        this.notifyContent = "Xóa danh mục bài viết thành công!";
        this.isVerifyDeletePostCategoryPopupOpen = false;
        this.isNotifySuccessOpen = true;
        this.setState({});
    }


}
export default Admin_CategoryManagement;