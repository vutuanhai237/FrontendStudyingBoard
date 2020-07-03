/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_component/Admin_Titlebar/Admin_Titlebar'
import Paginator from '../../shared_components/Paginator/ClientPaginator'

import './Admin_CategoriesManagement.scss'

// import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'

class Admin_CategoryManagement extends Component {
    constructor(props) {
        super();
        this.maxItemPerPage = 10;
        this.isAdminBrower = true;
        this.state = {
            categoriesList:
                [
                    {
                        "id": 1,
                        "categoryName": "Danh muc 1"
                    },
                    {
                        "id": 2,
                        "categoryName": "Danh muc 2"
                    },
                    {
                        "id": 3,
                        "categoryName": "Danh muc 3"
                    }
                ],
            subjectsList: [
                {
                    "id": 1,
                    "categoryName": "Mon hoc 1"
                },
                {
                    "id": 2,
                    "categoryName": "Mon hoc 2"
                },
                {
                    "id": 3,
                    "categoryName": "Mon hoc 3"
                }
            ]
        }
    }

    componentDidMount() {
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

        let categoriesList = <div className="Category_Component_List">
            <div className="Category_Component">
                <div className="Category_Component_Title">
                    Danh sách danh mục:
                </div>

                <div className="Category_List_Port">
                    <div className="Category_List_Header">
                        <div className="Category_List_CODE_Header">Mã danh mục</div>
                        <div className="Category_List_NAME_Header">Tên danh mục</div>
                    </div>
                    <div className="Category_List_Item">
                        <div className="Category_List_Item_CODE">DM_01</div>
                        <div className="Category_List_Item_NAME">Danh mục 1</div>
                    </div>
                    <div className="Category_List_Item">
                        <div className="Category_List_Item_CODE">DM_02</div>
                        <div className="Category_List_Item_NAME">Danh mục 2</div>
                    </div>
                </div>

                <div className="Category_Buttons_Port">
                    <div className="Simple_Blue_Button margin_right_5px">Thêm</div>
                    <div className="Simple_White_Button margin_right_5px">Sửa</div>
                    <div className="Simple_Red_Button">Xóa</div>
                </div>
            </div>
            <div className="Category_Component">
                <div className="Category_Component_Title">
                    Danh sách môn học:
                </div>

                <div className="Category_List_Port">
                    <div className="Category_List_Header">
                        <div className="Category_List_CODE_Header">Mã danh mục</div>
                        <div className="Category_List_NAME_Header">Tên danh mục</div>
                    </div>
                    <div className="Category_List_Item">
                        <div className="Category_List_Item_CODE">DM_01</div>
                        <div className="Category_List_Item_NAME">Danh mục 1</div>
                    </div>
                    <div className="Category_List_Item">
                        <div className="Category_List_Item_CODE">DM_02</div>
                        <div className="Category_List_Item_NAME">Danh mục 2</div>
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

                    {/* <div className="Number_Of_Item">
                        Tổng số:
                        <div style={{ width: "5px" }} />
                        {this.state.categoriesList.length}
                    </div> */}

                    {categoriesList}


                    <Paginator config={{
                        changePage: (currentInteractList) => this.onPageChange(currentInteractList),
                        rawData: this.state.categoriesList,
                        maxItemPerPage: this.maxItemPerPage,
                        numPagesShown: 5,
                        bottom: "20px"
                    }}
                    />
                </div>
            </div>
        );
    }
}
export default Admin_CategoryManagement;