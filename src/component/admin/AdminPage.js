/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import './AdminPage.scss'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import './Admin_LeftSidebar.scss'

// import btn_element from '../../img/btn_element.png'
// import white_btn_element from '../../img/white_btn_element.png'
// import white_dropdown_btn from '../../img/white_dropdown_icon.png'
import dropdown_btn from '../../img/dropdown_icon.png'
import gray_write_icon from '../../img/gray_write_icon.png'
import gray_upload_icon from '../../img/gray_upload_icon.png'

import content_management_menu_item_element from '../../img/content_management_icon.png'
import user_management_menu_item_element from '../../img/user_management_icon.png'
import account_management_menu_item_element from '../../img/account_management_icon.png'
import activity_management_menu_item_element from '../../img/activity_management_icon.png'
import user_role_management_menu_item_element from '../../img/user_role_management_icon.png'
import analysis_management_menu_item_element from '../../img/analysis_icon.png'

// import { Suspense, lazy } from 'react';
import Admin_DocBrowser from './Admin_DocBrowser/Admin_DocBrowser';
import Admin_PostBrowser from './Admin_PostBrowser/Admin_PostBrowser';
import Admin_UserManagement from './Admin_UserManagement/Admin_UserManagement';
import SimpleBlueButton from '../shared_components/SimpleBlueButton/SimpleBlueButton';

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
        console.log(window.location.pathname);
    }

    render() {

        return (

            <div className="Admin">

                {/* Header Area */}
                <div className="Admin_Header">
                    {/* <Header></Header> */}
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
                                            <SimpleBlueButton text="Đăng xuất"></SimpleBlueButton>
                                        </div>
                                    </div>
                                </div >

                                {/* Role and achivement port */}
                                < div className="Role_Achivement_Port" >
                                    <div className="Role_Port">
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
                                            onClick={(e) => this.handleDropDownMenuClick(e, "page-managent-parent-menu-item", "page-managent-parent-menu-item-text", "page-management-dropdown-btn-element", "page-management-menu-item-container")}>
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
                                                window.location.pathname === "/admin/post_browser" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/post_browser"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Duyệt bài viết
                                                    </div>
                                                    </div> :
                                                    <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/post_browser"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Duyệt bài viết
                                                    </div>
                                                    </div>
                                            }
                                            {
                                                window.location.pathname === "/admin/doc_browser" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/doc_browser"} to="/admin/doc_browser" style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                            Duyệt tài liệu
                                                    </div>
                                                    </div>
                                                    :
                                                    <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = " /admin/doc_browser"} style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                            Duyệt tài liệu
                                                   </div>
                                                    </div>
                                            }
                                            {
                                                window.location.pathname === "/admin/page_notification" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/page_notification"} to="/admin/doc_browser" style={{ display: "flex", textDecoration: "none" }}>
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
                                                window.location.pathname === "/admin/category_management" ?
                                                    <div className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/category_management"} to="/admin/doc_browser" style={{ display: "flex", textDecoration: "none" }}>
                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                            Quản lý danh mục
                                                    </div>
                                                    </div>
                                                    :
                                                    <div className="Sub_Dropdown_Menu_Item" onClick={() => window.location.href = "/admin/category_management"} style={{ display: "flex", textDecoration: "none" }}>
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

                                    {/* <Link className="Vertical_Menu_Item" style={{ textDecoration: "none" }}>
                                        <img alt="*" className="Primary_Menu_Item_Element" src={activity_management_menu_item_element} id="activity-managent-btn-element" />
                                        <div className="Vertical_Menu_Item_Text">
                                            Quản lý hoạt động
                                        </div>
                                    </Link> */}

                                    {/* Quan ly tai khoan menu item*/}
                                    < div className="Parent_Dropdown_Menu_Item" id="account-managent-parent-menu-item"
                                        onClick={(e) => this.handleDropDownMenuClick(e, "account-managent-parent-menu-item", "account-managent-parent-menu-item-text", "account-management-dropdown-btn-element", "account-management-menu-item-container")
                                        }>
                                        <div className="display_flex">
                                            <img alt="*" className="Primary_Menu_Item_Element" src={account_management_menu_item_element} id="page-managent-btn-element" />
                                            <div className="Vertical_Menu_Item_Text" id="account-managent-parent-menu-item-text">
                                                Quản lý tài khoản
                                            </div>
                                        </div>
                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="account-management-dropdown-btn-element" />
                                        {/* <div className="gray_thin_decoration_underline" /> */}
                                    </div >

                                    <div className="Vertical_Dropdown_Menu_Item_Container" id="account-management-menu-item-container">
                                        <div style={{ height: "5px" }}></div>
                                        <div className="Sub_Dropdown_Menu_Item">
                                            Trang cá nhân
                                        </div>
                                        <div className="Sub_Dropdown_Menu_Item">
                                            Thông tin tài khoản
                                        </div>
                                        <div className="Sub_Dropdown_Menu_Item">
                                            Thông báo
                                        </div>
                                        <div className="Sub_Dropdown_Menu_Item">
                                            Đổi avatar
                                        </div>
                                        <div className="Sub_Dropdown_Menu_Item">
                                            Danh sách bài viết
                                        </div>
                                        <div className="Sub_Dropdown_Menu_Item">
                                            Danh sách tài liệu
                                        </div>
                                        <div className="Sub_Dropdown_Menu_Item">
                                            Đổi mật khẩu
                                        </div>
                                        <div className="margin_bottom_5px" />
                                        <div className="decoration_underline " />
                                        <div className="margin_bottom_5px" />
                                        <div className="margin_bottom_5px" />
                                    </div>

                                    {/* Quan lý quyền truy cập: role */}
                                    <div className="Vertical_Menu_Item">
                                        <img alt="*" className="Primary_Menu_Item_Element" src={user_role_management_menu_item_element} id="role-managent-btn-element" />
                                        <Link className="Vertical_Menu_Item_Text" to="/admin/user_role_management" style={{ textDecoration: "none" }}>
                                            Quản lý quyền truy cập
                                        </Link>
                                    </div>

                                    {/* Thong ke */}
                                    <div className="Vertical_Menu_Item">
                                        <img alt="*" className="Primary_Menu_Item_Element" src={analysis_management_menu_item_element} id="analysis-managent-btn-element" />
                                        <div className="Vertical_Menu_Item_Text">
                                            Thống kê
                                    </div>
                                    </div>
                                </div >
                            </ div >
                        </div>

                        {/* Router Outlet */}
                        <div className="Admin_Router_Outlet" >
                            <Switch>
                                <Route path="/admin/post_browser">
                                    <Admin_PostBrowser></Admin_PostBrowser>
                                </Route>
                                <Route path="/admin/doc_browser">
                                    <Admin_DocBrowser></Admin_DocBrowser>
                                </Route>
                                <Route path="/admin/users_management">
                                    <Admin_UserManagement></Admin_UserManagement>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div >

        );
    }

    //code style for dropdown menu
    handleDropDownMenuClick = (e, parent_id, show_text_id, dropdown_element_id, container_id) => {
        e.preventDefault();
        let parent_menu_item = document.getElementById(parent_id);
        // let menu_item_btn_element = document.getElementById(btn_element_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let show_text = document.getElementById(show_text_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            parent_menu_item.style.background = "white";
            parent_menu_item.style.paddingLeft = "0px";
            show_text.style.color = "#363636";
            // menu_item_btn_element.src = btn_element;
            dropdown_element.src = dropdown_btn;
        }
        else {
            // parent_menu_item.style.background = "#c4c4c4"
            dropdown_container.style.display = "block";
            // parent_menu_item.style.paddingLeft = "10px";
            // show_text.style.color = "white";
            // parent_menu_item.style.borderRadius = "5px";
            // menu_item_btn_element.src = white_btn_element;
            // dropdown_element.src = white_dropdown_btn;
        }
    }
}
export default AdminPage;