/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import './AdminPage.scss'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
// import analysis_management_menu_item_element from '../../img/analysis_icon.png's

//import pages
import Admin_DocApprovingPage from './Admin_DocApprovingPage/Admin_DocApprovingPage';
import Admin_PostApprovingPage from './Admin_PostApprovingPage/Admin_PostApprovingPage';
import Admin_UserManagement from './Admin_UserManagement/Admin_UserManagement';
import Admin_CategoriesManagement from './Admin_CategoriesManagement/Admin_CategoriesManagement'
import Admin_PageNotification from './Admin_PageNotification/Admin_PageNotification'
import Admin_AccountInformationManagement from './Admin_AccountInformationManagement/Admin_AccountInformationManagement';
import Admin_UserRoleManagement from './Admin_UserRoleManagement/Admin_UserRoleManangement'

//import css
import '../shared_components/SimpleButton.scss';

//for Left Sidebar
import './Admin_LeftSidebar.scss'
import './Admin_LSBScrollLayout.scss'

//import component
import Header from '../container/Header'
import Footer from '../container/Footer'

//import resource string
import { STR_LOGOUT_VN } from '../../constant/index.js';

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from '../../service/UserAPI'

class AdminPage extends Component {
    constructor(props) {
        super(props);

        this.score = 0;
        this.post_count = 0;
        this.doc_count = 0;
        this.avatarUrl = "https://i.imgur.com/SZJgL6C.jpg";
        this.state = {

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
        this.props.getCurrentUser();
        // this
    }

    render() {
        if (this.props.accountInformation !== null && this.props.accountInformation !== undefined) {

            this.score = this.props.accountInformation.score;
            this.post_count = this.props.accountInformation.postCount;
            this.doc_count = this.props.accountInformation.documentCount;
            // this.avatarUrl = this.props.accountInformation.avatar;

            return (
                <div className="Admin">
                    {window.onscroll = () => this.scrollFunction()}

                    {/* Header Area */}
                    <div className="Admin_Header">
                        <Header></Header>
                    </div>

                    {/* Body Area */}
                    <div className="Admin_Main_Port">
                        {/* Left Sidebar */}

                        <Router>
                            <div>
                                <div>
                                    <div className="Fake_Admin_Info_Menu_Port" id="fake-admin-info-menu-port"></div>
                                    < div className="Admin_Info_Menu_Port" id="admin-left-sidebar" >

                                        {/* bounded for animation */}
                                        <div className="Bounded_Class_Infor_And_Archivement_Port" id="bounded-class-infor-and-archivement-port">
                                            {/* Admin Infor Port */}
                                            < div className="Admin_Info_Port" >
                                                <div className="Avatar_Port">
                                                    <img alt="avatar" className="Show_Avatar" src={this.avatarUrl} />
                                                </div>
                                                <div className="Achivement_Port">
                                                    {/* <div className="margin_auto"> */}
                                                    <div className="Achivement_Score">Scrore: {this.score}</div>
                                                    <div className="Achivement_Post_Doc_Count_Port">
                                                        <div className="display_flex width_50_percents">
                                                            <img alt="post count" src={gray_write_icon} className="User_Item_Element" ></img>
                                                            <div className="margin_left_5px">{this.post_count}</div>
                                                        </div>

                                                        <div className="display_flex width_50_percents">
                                                            <img alt="upload count" src={gray_upload_icon} className="User_Item_Element"></img>
                                                            <div className="margin_left_5px"> {this.doc_count}</div>
                                                        </div>
                                                    </div>
                                                    {/* </div> */}
                                                </div>
                                                {/* <div className="User_Name_Gmail_Port">
                                                <div className="Display_Name">
                                                    {this.displayName}
                                                </div>
                                                <div className="Gmail">
                                                    {this.gmail}
                                                </div> */}
                                                {/* <div className="Logout_Btn_Port"> */}
                                                {/* <button className="Logout_Btn">Đăng xuất</button> */}
                                                {/* <div className="Simple_Blue_Button">{STR_LOGOUT_VN}</div> */}
                                                {/* </div> */}
                                                {/* </div> */}
                                            </div >

                                            {/* Role and achivement port */}
                                            < div className="Role_Achivement_Port" >
                                                <div className="Own_Role_Port">
                                                    Admin
                                            </div>

                                            </div >
                                        </div>

                                        {/* Admin Menu Port */}
                                        < div className="Admin_Vertical_Menu_Port" id="admin-vertical-menu-port" >
                                            {/* <div className="Fake_Admin_Info_Menu_Port" id="fake-admin-info-menu-port"></div> */}
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
                                                    <div className="margin_bottom_5px"></div>
                                                    {
                                                        window.location.pathname === "/admin/post_approving" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/admin/post_approving">
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Duyệt bài viết
                                                        </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                                to="/admin/post_approving">
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Duyệt bài viết
                                                        </div>
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/admin/doc_approving" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/admin/doc_approving">
                                                                <div className="Sub_Dropdown_Menu_Item_Text">
                                                                    Duyệt tài liệu
                                                    </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to="/admin/doc_approving"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                            >
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Duyệt tài liệu
                                                        </div>
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/admin/page_notification" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/admin/doc_approving"  >
                                                                <div className="Sub_Dropdown_Menu_Item_Text">
                                                                    Thông báo trang
                                                    </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to="/admin/page_notification"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                            >
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Thông báo trang
                                                        </div>
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/admin/categories_management" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/admin/categories_management">
                                                                <div className="Sub_Dropdown_Menu_Item_Text">
                                                                    Quản lý danh mục
                                                    </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to="/admin/categories_management"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                <div className="Sub_Dropdown_Menu_Item_Text">
                                                                    Quản lý danh mục
                                                        </div>
                                                            </Link>
                                                    }
                                                    <div className="margin_bottom_5px" />
                                                    <div className="decoration_underline " />
                                                    <div className="margin_bottom_5px" />
                                                    <div className="margin_bottom_5px" />
                                                </div>
                                            </div>
                                            {/* {(window.location.pathname)} */}
                                            {/* Quan ly nguoi dung */}
                                            {
                                                window.location.pathname === "/admin/users_management" ?
                                                    <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to="/admin/users_management">
                                                        <img alt="*"
                                                            className="Primary_Menu_Item_Element"
                                                            src={user_management_menu_item_element}
                                                            id="users-managent-btn-element" />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Quản lý người dùng
                                                </div>
                                                    </Link>
                                                    :
                                                    <Link className="Vertical_Menu_Item"
                                                        to="/admin/users_management"
                                                        onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={user_management_menu_item_element}
                                                            id="users-managent-btn-element"
                                                        />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Quản lý người dùng
                                                </div>
                                                    </Link>
                                            }

                                            {/* Quan ly hoat dong: các báo cáo người dùng  */}
                                            {
                                                window.location.pathname === "/admin/activity_management" ?
                                                    <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to="/admin/activity_management"
                                                    >
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={activity_management_menu_item_element}
                                                            id="users-managent-btn-element" />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Quản lý hoạt động
                                                </div>
                                                    </Link>
                                                    :
                                                    <Link className="Vertical_Menu_Item"
                                                        to="/admin/activity_management"
                                                        onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={activity_management_menu_item_element}
                                                            id="users-managent-btn-element"
                                                        />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Quản lý hoạt động
                                                </div>
                                                    </Link>
                                            }

                                            {/* Quan ly tai khoan menu item*/}
                                            < div className="Parent_Dropdown_Menu_Item" id="account-managent-parent-menu-item"
                                                onClick={(e) => this.handleDisplayNoneDefaultDropDownMenuClick(e, "account-managent-parent-menu-item", "account-managent-parent-menu-item-text", "account-management-dropdown-btn-element", "account-management-menu-item-container")
                                                }>
                                                <div className="display_flex">
                                                    <img alt="*" className="Primary_Menu_Item_Element"
                                                        src={account_management_menu_item_element}
                                                        id="page-managent-btn-element" />
                                                    <div className="Vertical_Menu_Item_Text"
                                                        id="account-managent-parent-menu-item-text">
                                                        Quản lý tài khoản
                                            </div>
                                                </div>
                                                <img alt="v" className="Dropdown_Btn_Element"
                                                    src={dropdown_btn}
                                                    id="account-management-dropdown-btn-element" />
                                            </div >

                                            <div className="Vertical_Dropdown_Menu_Item_Container"
                                                id="account-management-menu-item-container">
                                                <div className="margin_bottom_5px"></div>
                                                {/* {
                                            window.location.pathname === "/admin/account_management" 
                                            ?
                                                <Link
                                             className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" to = "/admin/account_management">
                                                    Trang cá nhân
                                                </Link>:<Link className="Sub_Dropdown_Menu_Item" to = "/admin/account_management">
                                                    Trang cá nhân
                                                </div>
                                        } */}
                                                {
                                                    window.location.pathname === "/admin" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/admin">
                                                            Thông tin tài khoản
                                                </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/admin"
                                                            //  onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                            onClick={() => this.handleAccountInformationMenuItemClick()}
                                                        >

                                                            Thông tin tài khoản
                                                </Link>
                                                }
                                                {
                                                    window.location.pathname === "/admin/notification" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/admin/notification">
                                                            Thông báo
                                                </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/admin/notification"
                                                            onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                            Thông báo
                                                </Link>
                                                }
                                                {/* <div className="Sub_Dropdown_Menu_Item">
                                            Đổi avatar
                                        </div> */}
                                                {
                                                    window.location.pathname === "/admin/posts_list" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/admin/posts_list">
                                                            Danh sách bài viết
                                                </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/admin/posts_list"
                                                            onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                            Danh sách bài viết
                                                </Link>
                                                }
                                                {
                                                    window.location.pathname === "/admin/docs_list" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/admin/docs_list">
                                                            Danh sách tài liệu
                                                 </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/admin/docs_list"
                                                            onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                            Danh sách tài liệu
                                                </Link>
                                                }
                                                {
                                                    window.location.pathname === "/admin/update_password" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/admin/update_password">
                                                            Cập nhật mật khẩu
                                              </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/admin/update_password"
                                                            onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                            Cập nhật mật khẩu
                                                </Link>
                                                }
                                                <div className="margin_bottom_5px" />
                                                <div className="decoration_underline " />
                                                <div className="margin_bottom_5px" />
                                                <div className="margin_bottom_5px" />
                                            </div>

                                            {/* Quan lý quyền truy cập: role */}
                                            {
                                                window.location.pathname === "/admin/user_role_management" ?
                                                    <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to="/admin/user_role_management">
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={user_role_management_menu_item_element}
                                                            id="users-managent-btn-element" />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Quản lý quyền truy cập
                                                </div>
                                                    </Link>
                                                    :
                                                    <Link className="Vertical_Menu_Item"
                                                        to="/admin/user_role_management"
                                                        onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={user_role_management_menu_item_element}
                                                            id="users-managent-btn-element" />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Quản lý quyền truy cập
                                                </div>
                                                    </Link>
                                            }

                                            {/* Thong ke */}
                                            {/* {
                                        window.location.pathname === "/admin/analysis" ?
                                            <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active" to = "/admin/analysis_management">
                                                <img alt="*" className="Primary_Menu_Item_Element" src={analysis_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Thống kê
                                                </div>
                                        </Link>:<Link className="Vertical_Menu_Item" to = "/admin/analysis_management">
                                                <img alt="*" className="Primary_Menu_Item_Element" src={analysis_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Thống kê
                                                </div>
                                            </div>
                                    } */}
                                        </div >
                                    </ div >
                                </div>
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
                                    <Route exact path="/admin" >
                                        <Admin_AccountInformationManagement></Admin_AccountInformationManagement>
                                    </Route>
                                    <Route exact path="/admin/update_password">
                                        <Admin_AccountInformationManagement></Admin_AccountInformationManagement>
                                    </Route>
                                    <Route path="/admin/user_role_management">
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
        return <></>
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

    //code style for animation when change to account information
    handleAccountInformationMenuItemClick = () => {
        // let bounded_class = document.getElementById("bounded-class-infor-and-archivement-port");
        // let vertical_menu_port = document.getElementById("admin-vertical-menu-port");
        // bounded_class.style.height = "0px";
        // vertical_menu_port.style.borderTop = "5px solid #5279db";
        this.setState({});
    }

    handleOnNotAccountInformationMenuItemClick = () => {
        // let bounded_class = document.getElementById("bounded-class-infor-and-archivement-port");
        // let vertical_menu_port = document.getElementById("admin-vertical-menu-port");
        // bounded_class.style.height = "100%";
        // vertical_menu_port.style.borderTop = "1px solid #c4c4c4";
        this.setState({});
    }

    //#region for handle on scroll
    scrollFunction = () => {

        let left_sidebar = document.getElementById("admin-left-sidebar");
        let footer = document.getElementById("footer");
        let header = document.getElementById("header");

        function getRectTop(el) {
            var rect = el.getBoundingClientRect();
            return rect.top;
        }

        function getRectBottom(el) {
            var rect = el.getBoundingClientRect();
            return rect.bottom;
        }

        if (getRectBottom(header) <= 0 - 21) {
            left_sidebar.classList.add("Left_Sidebar_After_Header");
            left_sidebar.classList.remove("Left_Sidebar_Reach_Footer");
            document.getElementById("fake-admin-info-menu-port").style.display = "block";
        }
        if (getRectBottom(header) > 0 - 21) {
            left_sidebar.classList.replace("Left_Sidebar_After_Header", "Left_Sidebar_Before_Header");
            left_sidebar.classList.remove("Left_Sidebar_Reach_Footer");
            document.getElementById("fake-admin-info-menu-port").style.display = "hidden";
        }

        //Handler for Footer
        if ((getRectBottom(left_sidebar)) >= getRectTop(footer) - 45) {
            left_sidebar.classList.replace("Left_Sidebar_After_Header", "Left_Sidebar_Reach_Footer");
        }
    }
    //#endregion

}

//#region for redux
const mapStatetoProps = (state) => {
    // (state);
    return {
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(AdminPage));
//#endregion