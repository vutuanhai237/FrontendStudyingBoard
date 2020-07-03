/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_component/Admin_Titlebar/Admin_Titlebar'
import dropdown_btn from '../../../img/dropdown_icon.png'
import './Admin_CategoriesManagement.scss'

// import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'

class Admin_CategoryManagement extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 10;
        this.isAdminBrower = true;
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
            ]
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

        let postCategoriesList =
            <div className="Category_Component_List">
                <div className="Category_Component">
                    <div className="Category_Component_Title">
                        Danh sách danh mục:
                </div>

                    <div className="Category_List_Port">
                        <div className="Category_List_Header">
                            <div className="Category_List_CODE_Header">Mã danh mục</div>
                            <div className="Category_List_NAME_Header">Tên danh mục</div>
                        </div>
                        {this.state.postCategoriesList.map(item =>
                            <div className="Category_List_Item">
                                <div className="Category_List_Item_CODE">{item.id}</div>
                                <div className="Category_List_Item_NAME">{item.title}</div>
                            </div>
                        )}
                    </div>

                    <div className="Category_Buttons_Port">
                        <div className="Simple_Blue_Button margin_right_5px">Thêm</div>
                        <div className="Simple_White_Button margin_right_5px">Sửa</div>
                        <div className="Simple_Red_Button">Xóa</div>
                    </div>
                </div>
                <div style={{ height: "30px" }}></div>
            </div>;

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
                                <div className="Category_List_Item">
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
                    <div className="Category_Type_Dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("admin-post-categories-container")}>
                        <div>
                            DANH MỤC BÀI VIẾT
                        </div>
                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                    </div>

                    <div className="Category_Type_Dropdown_Container" id="admin-post-categories-container">
                        {postCategoriesList}
                    </div>

                    <div style={{ height: "5px" }}></div>

                    <div className="Category_Type_Dropdown" onClick={() => this.handlerCategoryTypeDropDownClick("admin-doc-categories-container")}>
                        <div>
                            DANH MỤC TÀI LIỆU
                        </div>
                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                    </div>

                    <div className="Category_Type_Dropdown_Container" id="admin-doc-categories-container">
                        {docCategoriesList}
                    </div>

                </div>
            </div>
        );
    }

    handlerCategoryTypeDropDownClick = (container_id) => {
        let container = document.getElementById(container_id);
        console.log(container);
        if (container.style.display === "none") {
            container.style.display = "block";
        }
        else {
            container.style.display = "none";
        }
    }

}
export default Admin_CategoryManagement;