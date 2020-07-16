/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import './AdminPage.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../../constant/index.js'

// import resource image, icon
import dropdown_btn from '../../img/dropdown_icon.png'
import gray_write_icon from '../../img/gray_write_icon.png'
import gray_upload_icon from '../../img/gray_upload_icon.png'
import content_management_menu_item_element from '../../img/content_management_icon.png'
import user_management_menu_item_element from '../../img/user_management_icon.png'
import account_management_menu_item_element from '../../img/account_management_icon.png'
import activity_management_menu_item_element from '../../img/activity_management_icon.png'
import user_role_management_menu_item_element from '../../img/user_role_management_icon.png'
import analysis_management_menu_item_element from '../../img/analysis_icon.png'

//import pages
import Admin_DocApprovingPage from './Admin_DocApprovingPage/Admin_DocApprovingPage';
import Admin_PostApprovingPage from './Admin_PostApprovingPage/Admin_PostApprovingPage';
import Admin_UserManagement from './Admin_UserManagement/Admin_UserManagement';
import Admin_CategoriesManagement from './Admin_CategoriesManagement/Admin_CategoriesManagement'
import Admin_PageNotification from './Admin_PageNotification/Admin_PageNotification'
import Admin_AccountInformationManagement from './Admin_AccountInformationManagement/Admin_AccountInformationManagement';
import Admin_UserRoleManagement from './Admin_UserRoleManagement/Admin_UserRoleManangement'

//import css
import '../shared_components/SimpleBlueButton/SimpleBlueButton.scss';
import './Admin_LeftSidebar.scss'

//import component
import Header from '../container/header'
import Footer from '../container/footer'

//import resource string
import { STR_LOGOUT_VN } from '../../constant/index.js';

class AdminPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "info": {
                "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                "displayName": "Nguyen Van Dong",
                "userName": "tesla",
                "gmail": "dongnv.since1999@gmail.com",
                "password_length": 10,
                "score": "1235",
                "post_count": "300",
                "doc_count": "0",
                "role": "Admin",
                "roleID": 1
            },
        }
    }

    isAuthenticated = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 200)
        })
    }

    componentDidMount() {
        // console.log('%PUBLIC_PATH');
    }

    render() {

        return (

            <div className="Admin">

                {/* Header Area */}
                <div className="Admin_Header">
                    <Header></Header>
                </div>

                {/* Body Area */}
                <div className="Admin_Main_Port">
                    {/* Left Sidebar */}
                    <Router>
                        <div>
                            < div className="Admin_Info_Menu_Port" >

                                {/* Admin Infor Port */}
                                < div className="Admin_Info_Port" >
                                    <div className="Avatar_Port">
                                        <img alt="avatar" className="Show_Avatar" src={this.state.info.avatarUrl} />
                                    </div>
                                    <div className="User_Name_Gmail_Port">
                                        <div className="Display_Name">
                                            {this.state.info.displayName}
                                        </div>
                                        <div className="Gmail">
                                            {this.state.info.gmail}
                                        </div>
                                        <div className="Logout_Btn_Port">
                                            {/* <button className="Logout_Btn">Đăng xuất</button> */}
                                            <div className="Simple_Blue_Button">{STR_LOGOUT_VN}</div>
                                        </div>
                                    </div>
                                </div >

                                {/* Role and achivement port */}
                                < div className="Role_Achivement_Port" >
                                    <div className="Own_Role_Port">
                                        Admin
                                    </div>
                                    <div className="Achivement_Port">
                                        <div className="Achivement_Score">Scrore: {this.state.info.score}</div>
                                        <div className="Achivement_Post_Doc_Count_Port">
                                            <div className="display_flex width_50_percents">
                                                <img alt="post count" src={gray_write_icon} className="User_Item_Element" ></img>
                                                <div className="margin_left_5px">{this.state.info.post_count}</div>
                                            </div>
                                            <div className="display_flex width_50_percents">
                                                <img alt="upload count" src={gray_upload_icon} className="User_Item_Element"></img>
                                                <div className="margin_left_5px"> {this.state.info.doc_count}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div >

                                {/* Admin Menu Port */}
                                < div className="Admin_Vertical_Menu_Port" >
                                    {/* Quản lý nội dung */}
                                    <div>
                                        <div className="Parent_Dropdown_Menu_Item" id="page-managent-parent-menu-item"
                                            onClick={(e) => this.handleDisplayBlockDefaultDropDownMenuClick(e, "page-managent-parent-menu-item", "page-managent-parent-menu-item-text", "page-management-dropdown-btn-element", "page-management-menu-item-container")}>
                                            <div className="display_flex">
                                                <img alt="*" className="Primary_Menu_Item_Element" src={content_management_menu_item_element} id="page-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text" id="page-managent-parent-menu-item-text">
                                                    Quản lý nội dung
                                                </div>
                                            </div>

                                            <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-management-dropdown-btn-element" />
                                        </div>

                                        <div className="Vertical_Display_Block_Default_Dropdown_Menu_Item_Container" id="page-management-menu-item-container">
                                            {/* <div classname></div> */}
                                            {
                                                window.location.pathname === "/admin/post_approving" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/post_approving"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Duyệt bài viết
                                                    </div>
                                                    </div> :
                                                    <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/post_approving"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Duyệt bài viết
                                                    </div>
                                                    </div>
                                            }
                                            {
                                                window.location.pathname === "/admin/doc_approving" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/doc_approving"} to="/admin/doc_approving" style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                            Duyệt tài liệu
                                                    </div>
                                                    </div>
                                                    :
                                                    <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = " /admin/doc_approving"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Duyệt tài liệu
                                                   </div>
                                                    </div>
                                            }
                                            {
                                                window.location.pathname === "/admin/page_notification" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/page_notification"} to="/admin/doc_approving" style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                            Thông báo trang
                                                    </div>
                                                    </div>
                                                    :
                                                    <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = " /admin/page_notification"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Thông báo trang
                                                    </div>
                                                    </div>
                                            }
                                            {
                                                window.location.pathname === "/admin/categories_management" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/categories_management"} to="/admin/doc_approving" style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                            Quản lý danh mục
                                                    </div>
                                                    </div>
                                                    :
                                                    <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/categories_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Quản lý danh mục
                                                    </div>
                                                    </div>
                                            }
                                            <div className="margin_bottom_5px" />
                                            <div className="decoration_underline " />
                                            <div className="margin_bottom_5px" />
                                            <div className="margin_bottom_5px" />
                                        </div>
                                    </div>

                                    {/* Quan ly nguoi dung */}
                                    {
                                        window.location.pathname === "/admin/users_management" ?
                                            <div className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active " onClick={() => window.location.href = "/admin/users_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={user_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Quản lý người dùng
                                                </div>
                                            </div>
                                            :
                                            <div className="Vertical_Menu_Item" onClick={() => window.location.href = "/admin/users_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={user_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Quản lý người dùng
                                                </div>
                                            </div>
                                    }

                                    {/* Quan ly hoat dong: các báo cáo người dùng  */}
                                    {
                                        window.location.pathname === "/admin/activity_management" ?
                                            <div className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/activity_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={activity_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Quản lý hoạt động
                                                </div>
                                            </div>
                                            :
                                            <div className="Vertical_Menu_Item" onClick={() => window.location.href = "/admin/activity_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={activity_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Quản lý hoạt động
                                                </div>
                                            </div>
                                    }

                                    {/* Quan ly tai khoan menu item*/}
                                    < div className="Parent_Dropdown_Menu_Item" id="account-managent-parent-menu-item"
                                        onClick={(e) => this.handleDisplayNoneDefaultDropDownMenuClick(e, "account-managent-parent-menu-item", "account-managent-parent-menu-item-text", "account-management-dropdown-btn-element", "account-management-menu-item-container")
                                        }>
                                        <div className="display_flex">
                                            <img alt="*" className="Primary_Menu_Item_Element" src={account_management_menu_item_element} id="page-managent-btn-element" />
                                            <div className="Vertical_Menu_Item_Text" id="account-managent-parent-menu-item-text">
                                                Quản lý tài khoản
                                            </div>
                                        </div>
                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="account-management-dropdown-btn-element" />
                                    </div >

                                    <div className="Vertical_Dropdown_Menu_Item_Container" id="account-management-menu-item-container">
                                        <div style={{ height: "5px" }}></div>
                                        {/* {
                                            window.location.pathname === "/admin/account_management" ?
                                                <div className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/account_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Trang cá nhân
                                                </div>
                                                :
                                                <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/account_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Trang cá nhân
                                                </div>
                                        } */}
                                        {
                                            window.location.pathname === "/admin" ?
                                                <div className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Thông tin tài khoản
                                                </div>
                                                :
                                                <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Thông tin tài khoản
                                                </div>
                                        }
                                        {
                                            window.location.pathname === "/admin/notification" ?
                                                <div className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/notification"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Thông báo
                                                </div>
                                                :
                                                <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/notification"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Thông báo
                                                </div>
                                        }
                                        {/* <div className="Sub_Dropdown_Menu_Item">
                                            Đổi avatar
                                        </div> */}
                                        {
                                            window.location.pathname === "/admin/posts_list" ?
                                                <div className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/posts_list"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Danh sách bài viết
                                                </div>
                                                :
                                                <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/posts_list"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Danh sách bài viết
                                                </div>
                                        }
                                        {
                                            window.location.pathname === "/admin/docs_list" ?
                                                <div className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/docs_list"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Danh sách tài liệu
                                                </div>
                                                :
                                                <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/docs_list"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Danh sách tài liệu
                                                </div>
                                        }
                                        {
                                            window.location.pathname === "/admin/update_passwords" ?
                                                <div className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/update_passwords"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Cập nhật mật khẩu
                                                </div>
                                                :
                                                <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/update_passwords"} style={{ display: "flex", textDecoration: "none" }}>
                                                    Cập nhật mật khẩu
                                                </div>
                                        }
                                        <div className="margin_bottom_5px" />
                                        <div className="decoration_underline " />
                                        <div className="margin_bottom_5px" />
                                        <div className="margin_bottom_5px" />
                                    </div>

                                    {/* Quan lý quyền truy cập: role */}
                                    {
                                        window.location.pathname === "/admin/user_role_management" ?
                                            <div className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/user_role_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={user_role_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Quản lý quyền truy cập
                                                </div>
                                            </div>
                                            :
                                            <div className="Vertical_Menu_Item" onClick={() => window.location.href = "/admin/user_role_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={user_role_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Quản lý quyền truy cập
                                                </div>
                                            </div>
                                    }

                                    {/* Thong ke */}
                                    {/* {
                                        window.location.pathname === "/admin/analysis" ?
                                            <div className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active" onClick={() => window.location.href = "/admin/analysis_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={analysis_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Thống kê
                                                </div>
                                            </div>
                                            :
                                            <div className="Vertical_Menu_Item" onClick={() => window.location.href = "/admin/analysis_management"} style={{ display: "flex", textDecoration: "none" }}>
                                                <img alt="*" className="Primary_Menu_Item_Element" src={analysis_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Thống kê
                                                </div>
                                            </div>
                                    } */}
                                </div >
                            </ div >
                        </div>

                        {/* Router Outlet */}
                        <div className="Admin_Router_Outlet" >
                            <Switch>
                                <Route path="/admin/post_approving">
                                    <Admin_PostApprovingPage></Admin_PostApprovingPage>
                                </Route>
                                <Route path="/admin/doc_approving">
                                    <Admin_DocApprovingPage></Admin_DocApprovingPage>
                                </Route>
                                <Route path="/admin/users_management">
                                    <Admin_UserManagement></Admin_UserManagement>
                                </Route>
                                <Route path="/admin/categories_management">
                                    <Admin_CategoriesManagement></Admin_CategoriesManagement>
                                </Route>
                                <Route path="/admin/page_notification">
                                    <Admin_PageNotification></Admin_PageNotification>
                                </Route>
                                <Route exact path="/admin">
                                    <Admin_AccountInformationManagement></Admin_AccountInformationManagement>
                                </Route>
                                <Route path="/admin/update_passwords">
                                    <Admin_AccountInformationManagement></Admin_AccountInformationManagement>
                                </Route>
                                <Route path = "/admin/user_role_management">
                                    <Admin_UserRoleManagement></Admin_UserRoleManagement>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
                <Footer></Footer>
            </div >

        );
    }

    //code style for dropdown menu
    handleDisplayNoneDefaultDropDownMenuClick = (e, parent_id, show_text_id, dropdown_element_id, container_id) => {
        e.preventDefault();
        let dropdown_container = document.getElementById(container_id);
        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
        }
        else
            dropdown_container.style.display = "block"
    }

    handleDisplayBlockDefaultDropDownMenuClick = (e, parent_id, show_text_id, dropdown_element_id, container_id) => {
        e.preventDefault();
        let dropdown_container = document.getElementById(container_id);
        dropdown_container.style.display === "none"
            ?
            dropdown_container.style.display = "block"
            :
            dropdown_container.style.display = "none"
    }
}
export default AdminPage;