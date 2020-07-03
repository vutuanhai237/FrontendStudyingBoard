/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_component/Admin_Titlebar/Admin_Titlebar'
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
        this.isDeletePostCategoryPopupOpen = false;

        //Doc
        this.isAddDocCategoryPopupOpen = false;
        this.isEditDocCategoryPopupOpen = false;
        this.isDeleteDocCategoryPopupOpen = false;

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

        // let postCategoriesList =


        let docCategoriesList =
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
                                            <div className="Category_List_Item" name="Post_Category_List_Item" key={item.id} id={"admin-post-category-item-" + item.id} onClick={(e) => this.handlerPostCategoryItemClick(e, "admin-post-category-item-" + item.id)} >
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
                        {docCategoriesList}
                    </div>

                </div>

                <CustomModal
                    shadow={true} 
                    type="custom"
                    title="Thêm danh mục bài viết"
                    open={this.isAddPostCategoryPopupOpen}
                    closeModal={() => { this.isAddPostCategoryPopupOpen = false; this.setState({}); }}>



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

    handlerPostCategoryItemClick = (e, id) => {
        let all_item = document.getElementsByName("Post_Category_List_Item");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "Category_List_Item";
        }

        let category_item = document.getElementById(id);
        category_item.className = "Category_List_Item_Activated";

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


    handlerClickAddPostCategory = () => {
        this.isAddPostCategoryPopupOpen = true;
        this.setState({});
    }



}
export default Admin_CategoryManagement;