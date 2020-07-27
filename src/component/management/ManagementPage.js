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
import management_icon from '../../img/gray_management_icon.png'
import gray_nb_upload_icon from '../../img/gray_nb_upload_icon.png'
import gray_nb_write_icon from '../../img/gray_nb_write_icon.png'

//import pages
import Management_DocApprovingPage from './Management_DocApprovingPage/Management_DocApprovingPage';
import Management_PostApprovingPage from './Management_PostApprovingPage/Management_PostApprovingPage';
import Management_UserManagement from './Management_UserManagement/Management_UserManagement';
import Management_CategoriesManagement from './Management_CategoriesManagement/Management_CategoriesManagement'
import Management_NotificationManagement from './Management_NotificationManagement/Management_NotificationManagement'
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
import {
    getRoleNameByName,
    isGrantedPermissions
} from '../../utils/PermissionManagement'

import {
    DocumentPermission,
    PostPermission,
    ContentManagementPermission,
    NotificationPermission,
    CategoryPermission,
    UserPermission,
    ActivityPermission,
    RolePermission
} from '../../utils/PermissionManagement'

class ManagementPage extends Component {
    constructor(props) {
        super(props);

        this.score = 0;
        this.post_count = 0;
        this.doc_count = 0;
        this.avatarUrl = "https://i.imgur.com/SZJgL6C.jpg";
        this.roleName = "User";

        this.isTheFirstTimeLoaded = true;

        this.isGrantedPermissions = isGrantedPermissions.bind(this);
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
    }

    render() {
        if (this.props.accountInformation !== null && this.props.accountInformation !== undefined) {

            this.roleName = this.props.accountInformation.roleName;

            //neu khong la admin => home
            if (window.location.pathname.substring(0, 6) === "/admin" && this.roleName !== "ADMIN")
                return <>{window.location.pathname = "/"}</>;

            //neu la admin => admin
            if (window.location.pathname.substring(0, 5) === "/user" && this.roleName === "ADMIN")
                return <>{window.location.pathname = "/admin"}</>;

            this.score = this.props.accountInformation.score;
            this.post_count = this.props.accountInformation.postCount;
            this.doc_count = this.props.accountInformation.documentCount;
            // this.avatarUrl = this.props.accountInformation.avatar;
            // console.log(this.isGrantedPermissions(ContentManagementPermission.Management));

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
                                    <div className="Fake_Management_Info_Menu_Port" id="fake-admin-info-menu-port"></div>
                                    < div className="Management_Info_Menu_Port" id="admin-left-sidebar" >

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
                                            </div >

                                            {/* Role and achivement port */}
                                            < div className="Role_Achivement_Port" >
                                                <div className="Own_Role_Port">
                                                    {getRoleNameByName(this.roleName)}
                                                </div>
                                            </div >
                                            {(this.roleName === "ADMIN" || this.roleName === "COLLABORATOR") ?
                                                <div className="Tab_Menu">
                                                    <div className="Tab_Menu_Item_Port_50_percents" >
                                                        <div className="Tab_Menu_Item_Port" id="account-management-tab-menu-item" onClick={() => this.onAccountManagementTabMenuItemClicked()}>
                                                            <div className="Tab_Menu_Item" >
                                                                <img src={account_management_menu_item_element} alt="ac" className="Icon_Size_24_x_24" />
                                                                <div className="Tab_Menu_Item_Text" >
                                                                    Tài khoản
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="Tab_Menu_Item_Port_50_percents">
                                                        <div className="Tab_Menu_Item_Port" id="page-management-tab-menu-item" onClick={() => this.onPageManagementTabMenuItemClicked()}>
                                                            <div className="Tab_Menu_Item">
                                                                <img src={management_icon} alt="ac" className="Icon_Size_24_x_24" />

                                                                <div className="Tab_Menu_Item_Text" >
                                                                    {this.roleName === "ADMIN" ?
                                                                        "Quản trị" : "Cộng tác"
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> :
                                                <></>
                                            }
                                        </div>

                                        {this.isTheFirstTimeLoaded ?
                                            this.initiateTabMenuItem()
                                            :
                                            <></>
                                        }

                                        {/* Management Menu Port */}
                                        < div className="Management_Vertical_Menu_Port" id="admin-vertical-menu-port" >

                                            <div id="account-management-vertical-menu-port-container" style={{ display: "block" }}>
                                                {/* Quan ly tai khoan menu item*/}
                                                <div className="Parent_Dropdown_Menu_Item" id="account-managent-parent-menu-item"
                                                    onClick={(e) => this.handleDisplayBlockDefaultDropDownMenuClick(e, "account-managent-parent-menu-item", "account-managent-parent-menu-item-text", "account-admin-dropdown-btn-element", "account-admin-menu-item-container")
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
                                                        id="account-admin-dropdown-btn-element" />
                                                </div >

                                                <div className="Vertical_Display_Block_Default_Dropdown_Menu_Item_Container"
                                                    id="account-admin-menu-item-container">
                                                    <div className="margin_bottom_5px"></div>

                                                    {
                                                        window.location.pathname === "/admin" || window.location.pathname === "/user"
                                                            ?
                                                            <Link className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin" : "/user"} > Thông tin tài khoản
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin" : "/user"}> Thông tin tài khoản
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/admin/notification" || window.location.pathname === "/user/notification"
                                                            ?
                                                            <Link
                                                                className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/notification" : "/user/notification"}>
                                                                Thông báo
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/notification" : "/user/notification"}
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                Thông báo
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/admin/posts_list" || window.location.pathname === "/user/posts_list"
                                                            ?
                                                            <Link
                                                                className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/posts_list" : "/user/posts_list"}
                                                            >
                                                                Danh sách bài viết
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/posts_list" : "/user/posts_list"
                                                                }
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                Danh sách bài viết
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/admin/docs_list" || window.location.pathname === "/user/docs_list"
                                                            ?
                                                            <Link
                                                                className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/docs_list" : "/user/docs_list"}
                                                            >
                                                                Danh sách tài liệu
                                                            </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/docs_list" : "/user/docs_list"}
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                Danh sách tài liệu
                                                            </Link>
                                                    }
                                                    {
                                                        window.location.pathname === "/admin/update_password" || window.location.pathname === "/user/update_password"
                                                            ?
                                                            <Link
                                                                className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/update_password" : "/user/update_password"}>
                                                                Cập nhật mật khẩu
                                                             </Link>
                                                            :
                                                            <Link className="Sub_Dropdown_Menu_Item"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/update_password" : "/user/update_password"}
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                Cập nhật mật khẩu
                                                </Link>
                                                    }
                                                    <div className="margin_bottom_5px" />
                                                    <div className="decoration_underline " />
                                                    <div className="margin_bottom_5px" />
                                                    <div className="margin_bottom_5px" />
                                                </div>


                                                {/* Viet bai */}
                                                {/* 
                                                    // window.location.pathname === "/admin/create_post" ?
                                                    //     <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                    //         to="/admin/create_post">
                                                    //         <img alt="*"
                                                    //             className="Primary_Menu_Item_Element"
                                                    //             src={gray_nb_write_icon}
                                                    //             id="user-managent-btn-element" />
                                                    //         <div className="Vertical_Menu_Item_Text"  >
                                                    //             Tạo bài viết mới
                                                    //     </div>
                                                    //     </Link>
                                                    //     :
                                                    // <Link className="Vertical_Menu_Item"

                                                    // to="/admin/create_post"
                                                // onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>*/}
                                                <div className="Vertical_Menu_Item" onClick={() => window.location.href = "/create_post"}>
                                                    <img alt="*" className="Primary_Menu_Item_Element"
                                                        src={gray_nb_write_icon}
                                                        id="user-managent-btn-element"
                                                    />
                                                    <div className="Vertical_Menu_Item_Text"  >
                                                        Tạo bài viết mới
                                                        </div>
                                                </div>
                                                {/* // </Link> */}
                                                {/* } */}

                                                {/* Upload tai lieu */}
                                                {/* { 
                                                    // window.location.pathname === "/admin/upload_doc" ?
                                                    //     <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                    //         to="/admin/upload_doc">
                                                    //         <img alt="*"
                                                    //             className="Primary_Menu_Item_Element"
                                                    //             src={gray_nb_upload_icon}
                                                    //             id="upload-doc-btn-element" />
                                                    //         <div className="Vertical_Menu_Item_Text"  >
                                                    //             Upload tài liệu
                                                    //     </div>
                                                    //     </Link>
                                                    //     :
                                                    //     <Link className="Vertical_Menu_Item"
                                                    //         to="/admin/upload_doc"
                                                    //         onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                    //         <img alt="*" className="Primary_Menu_Item_Element"
                                                    //             src={gray_nb_upload_icon}
                                                    //             id="upload-doc-btn-element"
                                                    //         />
                                                    //         <div className="Vertical_Menu_Item_Text"  >
                                                    //             Upload tài liệu
                                                    //     </div>
                                                    //     </Link>*/}
                                                <div className="Vertical_Menu_Item" onClick={() => window.location.href = "/create_doc"}>
                                                    <img alt="*" className="Primary_Menu_Item_Element"
                                                        src={gray_nb_upload_icon}
                                                        id="user-managent-btn-element"
                                                    />
                                                    <div className="Vertical_Menu_Item_Text"  >
                                                        Upload tài liệu
                                                    </div>
                                                </div>
                                                {/* // } */}

                                            </div>

                                            <div id="page-management-vertical-menu-port-container" style={{ display: "none" }}>
                                                {/* Quản lý nội dung */}
                                                <div hidden={!this.isGrantedPermissions(ContentManagementPermission.Management)}>
                                                    <div className="Parent_Dropdown_Menu_Item"
                                                        id="page-managent-parent-menu-item"
                                                        onClick={(e) => this.handleDisplayBlockDefaultDropDownMenuClick(e, "page-managent-parent-menu-item", "page-managent-parent-menu-item-text", "page-admin-dropdown-btn-element", "page-admin-menu-item-container")}>
                                                        <div className="display_flex">
                                                            <img alt="*" className="Primary_Menu_Item_Element" src={content_management_menu_item_element} id="page-managent-btn-element" />
                                                            <div className="Vertical_Menu_Item_Text" id="page-managent-parent-menu-item-text">
                                                                Quản lý nội dung
                                                            </div>
                                                        </div>

                                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-admin-dropdown-btn-element" />
                                                    </div>

                                                    <div className="Vertical_Display_Block_Default_Dropdown_Menu_Item_Container" id="page-admin-menu-item-container">
                                                        <div className="margin_bottom_5px" />
                                                        {
                                                            (this.isGrantedPermissions(ContentManagementPermission.Management)
                                                                && this.isGrantedPermissions(PostPermission.Approve))
                                                                ?
                                                                window.location.pathname === "/admin/post_approving" || window.location.pathname === "/user/post_approving"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/post_approving" : "/user/post_approving"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Duyệt bài viết
                                                                        </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/post_approving" : "/user/post_approving"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Duyệt bài viết
                                                                         </div>
                                                                    </Link>
                                                                : <></>
                                                        }
                                                        {
                                                            (this.isGrantedPermissions(ContentManagementPermission.Management)
                                                                && this.isGrantedPermissions(DocumentPermission.Approve))
                                                                ?
                                                                window.location.pathname === "/admin/doc_approving" || window.location.pathname === "/user/doc_approving"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/doc_approving" : "/user/doc_approving"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Duyệt tài liệu
                                                                 </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/doc_approving" : "/user/doc_approving"}

                                                                        onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Duyệt tài liệu
                                                                    </div>
                                                                    </Link>
                                                                :
                                                                <></>
                                                        }
                                                        {
                                                            (this.isGrantedPermissions(ContentManagementPermission.Management)
                                                                && this.isGrantedPermissions(NotificationPermission.ViewAll))
                                                                ?
                                                                window.location.pathname === "admin/page_notification" || window.location.pathname === "/user/page_notification"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/page_notification" : "/user/page_notification"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Thông báo trang
                                                                        </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/page_notification" : "/user/page_notification"}
                                                                        onClick={() => this.handleOnNotAccountInformationMenuItemClick()}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Thông báo trang
                                                                        </div>
                                                                    </Link>
                                                                :
                                                                <></>
                                                        }
                                                        {
                                                            (this.isGrantedPermissions(ContentManagementPermission.Management)
                                                                && this.isGrantedPermissions(CategoryPermission.View))
                                                                ?
                                                                window.location.pathname === "admin/categories_management" || window.location.pathname === "/user/categories_management"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/categories_management" : "/user/categories_management"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Quản lý danh mục
                                                                    </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/categories_management" : "/user/categories_management"}
                                                                        onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Quản lý danh mục
                                                                    </div>
                                                                    </Link>
                                                                : <></>
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
                                                    (this.isGrantedPermissions(ContentManagementPermission.Management)
                                                        && this.isGrantedPermissions(UserPermission.All))
                                                        ?
                                                        window.location.pathname === "/admin/user_management" || window.location.pathname === "/user/user_management"
                                                            ?
                                                            <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/user_management" : "/user/user_management"}

                                                            >
                                                                <img alt="*"
                                                                    className="Primary_Menu_Item_Element"
                                                                    src={user_management_menu_item_element}
                                                                    id="user-managent-btn-element" />
                                                                <div className="Vertical_Menu_Item_Text"  >
                                                                    Quản lý người dùng
                                                            </div>
                                                            </Link>
                                                            :
                                                            <Link className="Vertical_Menu_Item"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/user_management" : "/user/user_management"}

                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                <img alt="*" className="Primary_Menu_Item_Element"
                                                                    src={user_management_menu_item_element}
                                                                    id="user-managent-btn-element"
                                                                />
                                                                <div className="Vertical_Menu_Item_Text"  >
                                                                    Quản lý người dùng
                                                            </div>
                                                            </Link>
                                                        :
                                                        <></>
                                                }

                                                {/* Quan ly hoat dong: các báo cáo người dùng  */}
                                                {
                                                    (this.isGrantedPermissions(ContentManagementPermission.Management)
                                                        && this.isGrantedPermissions(UserPermission.All))
                                                        ?
                                                        window.location.pathname === "/admin/activity_management" || window.location.pathname === "/user/activity_management"
                                                            ?
                                                            <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/activity_management" : "/user/activity_management"}
                                                            >
                                                                <img alt="*" className="Primary_Menu_Item_Element"
                                                                    src={activity_management_menu_item_element}
                                                                    id="activity-managent-btn-element" />
                                                                <div className="Vertical_Menu_Item_Text"  >
                                                                    Quản lý hoạt động
                                                            </div>
                                                            </Link>
                                                            :
                                                            <Link className="Vertical_Menu_Item"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/activity_management" : "/user/activity_management"}
                                                                onClick={() => this.handleOnNotAccountInformationMenuItemClick()}>
                                                                <img alt="*" className="Primary_Menu_Item_Element"
                                                                    src={activity_management_menu_item_element}
                                                                    id="activity-managent-btn-element"
                                                                />
                                                                <div className="Vertical_Menu_Item_Text"  >
                                                                    Quản lý hoạt động
                                                             </div>
                                                            </Link>
                                                        :
                                                        <></>
                                                }



                                                {/* Quan lý quyền truy cập: role */}
                                                {(this.isGrantedPermissions(ContentManagementPermission.Management)
                                                    && this.isGrantedPermissions(RolePermission.All))
                                                    ?
                                                    window.location.pathname === "/admin/user_role_management" || window.location.pathname === "/user/user_role_management"
                                                        ?
                                                        <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/activity_management" : "/user/activity_management"}
                                                        >
                                                            <img alt="*" className="Primary_Menu_Item_Element"
                                                                src={user_role_management_menu_item_element}
                                                                id="user-role-managent-btn-element" />
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
                                                                id="user-role-managent-btn-element" />
                                                            <div className="Vertical_Menu_Item_Text"  >
                                                                Quản lý quyền truy cập
                                                            </div>
                                                        </Link>
                                                    :
                                                    <></>
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
                                            </div>
                                        </div >
                                    </ div >
                                </div>
                            </div>


                            {/* Router Outlet */}
                            <div className="Management_Router_Outlet" >
                                <Switch>

                                    {/* Account and Page (admin and collab only) admin */}
                                    <Route exact path="/admin" component={Management_AccountInformationManagement} />     {/* for admin */}
                                    <Route exact path="/admin/update_password" component={Management_AccountInformationManagement} />
                                    <Route exact path="/user" component={Management_AccountInformationManagement} />{/* for user and collab */}
                                    <Route exact path="/user/update_password" component={Management_AccountInformationManagement} />

                                    {/* Admin and collab page content admin */}
                                    {/* for admin */}
                                    <Route exact path="/admin/post_approving" component={Management_PostApprovingPage} />
                                    <Route exact path="/admin/doc_approving" component={Management_DocApprovingPage} />

                                    {/* for collab */}
                                    <Route exact path="/user/post_approving" component={Management_PostApprovingPage} />
                                    <Route exact path="/user/doc_approving" component={Management_DocApprovingPage} />

                                    {/* for admin only */}
                                    <Route exact path="/admin/page_notification" component={Management_NotificationManagement} />
                                    <Route exact path="/admin/categories_management" component={Management_CategoriesManagement} />
                                    <Route exact path="/admin/user_management" component={Management_UserManagement} />
                                    {/* <Route exact path="/admin/activity_management" component={ManagementPage} /> */}
                                    <Route exact path="/admin/user_role_management" component={Management_UserRoleManagement} />
                                    {/* <Route exact path="/admin/user_management/:id" component={ManagementPage} /> */}
                                </Switch>
                            </div>
                        </Router>
                    </div >
                    <Footer></Footer>
                </div >

            );
        }
        return <> </>
    }
    //#region for UI/UX sidebar
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

    initiateTabMenuItem = () => {
        if (
            window.location.pathname === "/admin/post_approving"
            || window.location.pathname === "/admin/doc_approving"
            || window.location.pathname === "/user/post_approving"
            || window.location.pathname === "/user/doc_approving"
            || window.location.pathname === "/admin/page_notification"
            || window.location.pathname === "/admin/categories_management"
            || window.location.pathname === "/admin/user_management"
            || window.location.pathname === "/admin/user_role_management"
            || window.location.pathname === "/admin/activity_management"
        ) {
            this.onPageManagementTabMenuItemClicked();
        }
        else this.onAccountManagementTabMenuItemClicked();
    }

    onAccountManagementTabMenuItemClicked = () => {
        if (document.getElementById("page-management-tab-menu-item")) {
            this.isTheFirstTimeLoaded = false;
            let account_tab_menu_item = document.getElementById("account-management-tab-menu-item");
            let management_tab_menu_item = document.getElementById("page-management-tab-menu-item");
            let account_management_container = document.getElementById("account-management-vertical-menu-port-container");
            let page_management_container = document.getElementById("page-management-vertical-menu-port-container");

            if (management_tab_menu_item.className === "Activated_Tab_Menu_Item_Port") {
                management_tab_menu_item.className = "Tab_Menu_Item_Port";
            }

            if (page_management_container.style.display !== "hidden" && page_management_container.style.display !== "none") {
                page_management_container.style.display = "none";
            }

            if (account_tab_menu_item.className === "Tab_Menu_Item_Port") {
                account_tab_menu_item.className = "Activated_Tab_Menu_Item_Port";
            }

            if (account_management_container.style.display === "hidden" || account_management_container.style.display === "none") {
                account_management_container.style.display = "block";
            }
        }
    }

    onPageManagementTabMenuItemClicked = () => {
        if (document.getElementById("page-management-tab-menu-item")) {
            let account_tab_menu_item = document.getElementById("account-management-tab-menu-item");
            let management_tab_menu_item = document.getElementById("page-management-tab-menu-item");
            let account_management_container = document.getElementById("account-management-vertical-menu-port-container");
            let page_management_container = document.getElementById("page-management-vertical-menu-port-container");

            if (management_tab_menu_item.className === "Tab_Menu_Item_Port") {
                management_tab_menu_item.className = "Activated_Tab_Menu_Item_Port";
            }

            if (page_management_container.style.display === "hidden" || page_management_container.style.display === "none") {
                page_management_container.style.display = "block";
            }

            if (account_tab_menu_item.className === "Activated_Tab_Menu_Item_Port") {
                account_tab_menu_item.className = "Tab_Menu_Item_Port";
            }
            if (account_management_container.style.display !== "hidden" && account_management_container.style.display !== "none") {
                account_management_container.style.display = "none";
            }
        }
    }
    //#endregion

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

// const

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ManagementPage));
//#endregion