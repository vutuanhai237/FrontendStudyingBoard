/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import './ManagementPage.scss'
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
import Management_DocApprovingPage from './Management_DocApprovingPage/Management_DocApprovingPage';
import Management_PostApprovingPage from './Management_PostApprovingPage/Management_PostApprovingPage';
import Management_UserManagement from './Management_UserManagement/Management_UserManagement';
import Management_CategoriesManagement from './Management_CategoriesManagement/Management_CategoriesManagement'
import Management_PageNotification from './Management_PageNotification/Management_PageNotification'
import Management_AccountInformationManagement from './Management_AccountInformationManagement/Management_AccountInformationManagement';
import Management_UserRoleManagement from './Management_UserRoleManagement/Management_UserRoleManangement'

//import css
import '../shared_components/SimpleButton.scss';

//for Left Sidebar
import './Management_LeftSidebar.scss'
import './Management_LSBScrollLayout.scss'

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

//import for permission
import { logAllPermissionByRoleName, getRoleNameByName } from '../../utils/PermissionManagement'

class ManagementPage extends Component {
    constructor(props) {
        super(props);

        this.score = 0;
        this.post_count = 0;
        this.doc_count = 0;
        this.avatarUrl = "https://i.imgur.com/SZJgL6C.jpg";
        this.roleName = "User";

        this.roleNamesList = [
            {

            }
        ]
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
            this.roleName = this.props.accountInformation.roleName;

            // logAllPermissionByRoleName("ADMIN");
            // this.avatarUrl = this.props.accountInformation.avatar;

            return (
                <div className="Management">
                    {window.onscroll = () => this.scrollFunction()}

                    {/* Header Area */}
                    <div className="Management_Header">
                        <Header></Header>
                    </div>

                    {/* Body Area */}
                    <div className="Management_Main_Port">
                        {/* Left Sidebar */}

                        <Router>
                            <div>
                                <div>
                                    <div className="Fake_Management_Info_Menu_Port" id="fake-management-info-menu-port"></div>
                                    < div className="Management_Info_Menu_Port" id="management-left-sidebar" >

                                        {/* bounded for animation */}
                                        <div className="Bounded_Class_Infor_And_Archivement_Port" id="bounded-class-infor-and-archivement-port">
                                            {/* Management Infor Port */}
                                            < div className="Management_Info_Port" >
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
                                                    {getRoleNameByName(this.roleName)}
                                                </div>

                                            </div >
                                        </div>

                                        {/* Management Menu Port */}
                                        < div className="Management_Vertical_Menu_Port" id="management-vertical-menu-port" >
                                            {/* <div className="Fake_Management_Info_Menu_Port" id="fake-management-info-menu-port"></div> */}
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
                                                        window.location.pathname === "/management/post_approving" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/management/post_approving">
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Duyệt bài viết
                                                        </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                                to="/management/post_approving">
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Duyệt bài viết
                                                        </div>
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/management/doc_approving" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/management/doc_approving">
                                                                <div className="Sub_Dropdown_Menu_Item_Text">
                                                                    Duyệt tài liệu
                                                    </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to="/management/doc_approving"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                            >
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Duyệt tài liệu
                                                        </div>
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/management/page_notification" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/management/doc_approving"  >
                                                                <div className="Sub_Dropdown_Menu_Item_Text">
                                                                    Thông báo trang
                                                    </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to="/management/page_notification"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                            >
                                                                <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                    Thông báo trang
                                                        </div>
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/management/categories_management" ?
                                                            <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                to="/management/categories_management">
                                                                <div className="Sub_Dropdown_Menu_Item_Text">
                                                                    Quản lý danh mục
                                                    </div>
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to="/management/categories_management"
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
                                                window.location.pathname === "/management/users_management" ?
                                                    <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to="/management/users_management">
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
                                                        to="/management/users_management"
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
                                                window.location.pathname === "/management/activity_management" ?
                                                    <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to="/management/activity_management"
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
                                                        to="/management/activity_management"
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
                                            window.location.pathname === "/management/account_management" 
                                            ?
                                                <Link
                                             className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active" to = "/management/account_management">
                                                    Trang cá nhân
                                                </Link>:<Link className="Sub_Dropdown_Menu_Item" to = "/management/account_management">
                                                    Trang cá nhân
                                                </div>
                                        } */}
                                                {
                                                    window.location.pathname === "/management" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/management">
                                                            Thông tin tài khoản
                                                </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/management"
                                                            //  onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                            onClick={() => this.handleAccountInformationMenuItemClick()}
                                                        >

                                                            Thông tin tài khoản
                                                </Link>
                                                }
                                                {
                                                    window.location.pathname === "/management/notification" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/management/notification">
                                                            Thông báo
                                                </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/management/notification"
                                                            onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                            Thông báo
                                                </Link>
                                                }
                                                {/* <div className="Sub_Dropdown_Menu_Item">
                                            Đổi avatar
                                        </div> */}
                                                {
                                                    window.location.pathname === "/management/posts_list" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/management/posts_list">
                                                            Danh sách bài viết
                                                </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/management/posts_list"
                                                            onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                            Danh sách bài viết
                                                </Link>
                                                }
                                                {
                                                    window.location.pathname === "/management/docs_list" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/management/docs_list">
                                                            Danh sách tài liệu
                                                 </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/management/docs_list"
                                                            onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                            Danh sách tài liệu
                                                </Link>
                                                }
                                                {
                                                    window.location.pathname === "/management/update_password" ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to="/management/update_password">
                                                            Cập nhật mật khẩu
                                              </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to="/management/update_password"
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
                                                window.location.pathname === "/management/user_role_management" ?
                                                    <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to="/management/user_role_management">
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={user_role_management_menu_item_element}
                                                            id="users-managent-btn-element" />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Quản lý quyền truy cập
                                                </div>
                                                    </Link>
                                                    :
                                                    <Link className="Vertical_Menu_Item"
                                                        to="/management/user_role_management"
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
                                        window.location.pathname === "/management/analysis" ?
                                            <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active" to = "/management/analysis_management">
                                                <img alt="*" className="Primary_Menu_Item_Element" src={analysis_management_menu_item_element} id="users-managent-btn-element" />
                                                <div className="Vertical_Menu_Item_Text"  >
                                                    Thống kê
                                                </div>
                                        </Link>:<Link className="Vertical_Menu_Item" to = "/management/analysis_management">
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
                            <div className="Management_Router_Outlet" >
                                <Switch>
                                    <Route path="/management/post_approving">
                                        <Management_PostApprovingPage></Management_PostApprovingPage>
                                    </Route>
                                    <Route path="/management/doc_approving">
                                        <Management_DocApprovingPage></Management_DocApprovingPage>
                                    </Route>
                                    <Route path="/management/users_management">
                                        <Management_UserManagement></Management_UserManagement>
                                    </Route>
                                    <Route path="/management/categories_management">
                                        <Management_CategoriesManagement></Management_CategoriesManagement>
                                    </Route>
                                    <Route path="/management/page_notification">
                                        <Management_PageNotification></Management_PageNotification>
                                    </Route>
                                    <Route exact path="/management" >
                                        <Management_AccountInformationManagement></Management_AccountInformationManagement>
                                    </Route>
                                    <Route exact path="/management/update_password">
                                        <Management_AccountInformationManagement></Management_AccountInformationManagement>
                                    </Route>
                                    <Route path="/management/user_role_management">
                                        <Management_UserRoleManagement></Management_UserRoleManagement>
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
        // let vertical_menu_port = document.getElementById("management-vertical-menu-port");
        // bounded_class.style.height = "0px";
        // vertical_menu_port.style.borderTop = "5px solid #5279db";
        this.setState({});
    }

    handleOnNotAccountInformationMenuItemClick = () => {
        // let bounded_class = document.getElementById("bounded-class-infor-and-archivement-port");
        // let vertical_menu_port = document.getElementById("management-vertical-menu-port");
        // bounded_class.style.height = "100%";
        // vertical_menu_port.style.borderTop = "1px solid #c4c4c4";
        this.setState({});
    }

    //#region for handle on scroll
    scrollFunction = () => {

        let left_sidebar = document.getElementById("management-left-sidebar");
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
            document.getElementById("fake-management-info-menu-port").style.display = "block";
        }
        if (getRectBottom(header) > 0 - 21) {
            left_sidebar.classList.replace("Left_Sidebar_After_Header", "Left_Sidebar_Before_Header");
            left_sidebar.classList.remove("Left_Sidebar_Reach_Footer");
            document.getElementById("fake-management-info-menu-port").style.display = "hidden";
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

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ManagementPage));
//#endregion