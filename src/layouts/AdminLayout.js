/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import resource image, icon
import dropdown_btn from 'assets/images/dropdown_icon.png'
import gray_write_icon from 'assets/images/gray_write_icon.png'
import gray_upload_icon from 'assets/images/gray_upload_icon.png'
import content_management_icon from 'assets/images/content_management_icon.png'
import user_management_icon from 'assets/images/user_management_icon.png'
import activity_management_icon from 'assets/images/activity_management_icon.png'
import user_role_management_icon from 'assets/images/user_role_management_icon.png'
import statistic_management_icon from 'assets/images/statistic_management_icon.png'

//management 
import Statistic from 'pages/management/Statistic/Statistic';
import UserRoleManagement from 'pages/management/UserRoleManagement/UserRoleManangement';
import NotificationManagement from 'pages/management/NotificationManagement/NotificationManagement';
import CategoryManagement from 'pages/management/CategoryManagement/CategoryManagement';
import UserManagement from 'pages/management/UserManagement/UserManagement';
import DocApprovingPage from 'pages/management/DocApproving/DocApproving';
import PostApprovingPage from 'pages/management/PostApprovingPage/PostApprovingPage';

//import scss
import 'layouts/LeftSidebarLayout.scss'
import 'styles/SimpleLabel.scss'

//import resource string

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'redux/services/userServices'

//import for permission
import {
    getRoleNameByName,
    isGrantedPermissions
} from 'utils/permissionUtils'

import {
    Document,
    Post,
    ContentManagement,
    Notification,
    Category,
    User,
    Activity,
    Role
} from 'utils/permissionUtils'

class AdminLayout extends Component {
    constructor(props) {
        super(props);
        this.isTheFirstTimeLoaded = true;
        this.isGrantedPermissions = isGrantedPermissions.bind(this); //bind check permission in PermissionManagement.js file


    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {

        if (this.props.accountInformation !== null && this.props.accountInformation !== undefined) {

            let { roleName, score, post_count, doc_count, username, avatarURL } = this.props.accountInformation;

            //neu khong la admin va co tinh vao domain cua admin=> home
            if (window.location.pathname.substring(0, 6) === "/admin" && roleName !== "ADMIN")
                window.location.pathname = "/"; //401 error

            //neu la admin va co tinh vao trang quan ly cua user => admin
            if (window.location.pathname.substring(0, 5) === "/user" && roleName === "ADMIN")
                window.location.pathname = "/admin";

            return (
                <div className="pr-layout" >
                    {/* Xu ly su kien cuon tro chuot */}
                    {window.onscroll = () => this.scrollFunction()}

                    {/* Body Area */}
                    <div className="left-side-bar-layout">
                        {/* Left Sidebar */}
                        <Router>
                            <div>
                                <div>
                                    {/* Dung de gioi han lai khong gian cua cac component con khi scroll */}
                                    <div className="Fake_Left_Sidebar" />

                                    {/* Left Sidebar */}
                                    <div className="Left_Sidebar" id="left-sidebar">

                                        {/* Hien thi avatar, thanh tich va ten role */}
                                        <div>
                                            {/* Management Infor Layout */}
                                            < div className="Info_Layout" >
                                                <div className="Avatar_Layout">
                                                    {/* This is the way to set avatar from a online server via Google Drive */}
                                                    {/* <img alt="avatar" className="Show_Avatar" src={"https://cfaevjuhwlpmr2dgadvijg-on.drv.tw/BHTWeb/Avatar/" + this.username + ".png'} /> */}
                                                    <img alt="avatar" className="Show_Avatar" src={avatarURL} />
                                                </div>
                                                <div className="Achivement_Layout">
                                                    <div className="Achivement_Score">Scrore: {this.score}</div>
                                                    <div className="Achivement_Post_Doc_Count_Layout">
                                                        <div className="display-flex width_50_percents">
                                                            <img alt="post count" src={gray_write_icon} className="User_Item_Element" ></img>
                                                            <div className="mg-left-5px">{post_count}</div>
                                                        </div>

                                                        <div className="display-flex width_50_percents">
                                                            <img alt="upload count" src={gray_upload_icon} className="User_Item_Element"></img>
                                                            <div className="mg-left-5px"> {doc_count}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div >

                                            {/* Role and achivement port */}
                                            <div className="Role_Achivement_Layout">
                                                <div className="Own_Role_Layout">
                                                    {getRoleNameByName(roleName)}
                                                </div>
                                            </div >

                                        </div>

                                        {this.isTheFirstTimeLoaded ? <></> : <>:</>
                                            //Trong tuong lai se check them role
                                            //Hanh dong se lam trong lan render thanh cong dau tien
                                        }

                                        < div className="Vertical_Menu_Layout"  >
                                            <div>
                                                {/* Quản lý nội dung */}
                                                <div hidden={!this.isGrantedPermissions(ContentManagement.Management)}>
                                                    <div className="Parent_Dropdown_Menu_Item"
                                                        id="page-managent-parent-menu-item"
                                                        onClick={(e) => this.handleDisplayBlockDefaultDropDownMenuClick(e, "page-managent-parent-menu-item", "page-managent-parent-menu-item-text", "page-admin-dropdown-btn-element", "page-admin-menu-item-container")}>
                                                        <div className="display-flex">
                                                            <img alt="*" className="side-bar-primary-menu-item-icon" src={content_management_icon} id="page-managent-btn-element" />
                                                            <div className="side-bar-menu-item-text" id="page-managent-parent-menu-item-text">
                                                                Quản lý nội dung
                                                            </div>
                                                        </div>

                                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id="page-admin-dropdown-btn-element" />
                                                    </div>

                                                    <div className="Vertical_Display_Block_Default_Dropdown_Menu_Item_Container" id="page-admin-menu-item-container">
                                                        <div className="margin-bottom-5px" />
                                                        {
                                                            (this.isGrantedPermissions(ContentManagement.Management)
                                                                && this.isGrantedPermissions(Post.Approve))
                                                                ?
                                                                window.location.pathname === "/admin/post-approving" || window.location.pathname === "/user/post-approving"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/post-approving" : "/user/post-approving"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Quản lý bài viết
                                                                </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        onClick={() => this.setState({})}
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/post-approving" : "/user/post-approving"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Quản lý bài viết
                                                                 </div>
                                                                    </Link>
                                                                : <></>
                                                        }
                                                        {
                                                            (this.isGrantedPermissions(ContentManagement.Management)
                                                                && this.isGrantedPermissions(Document.Approve))
                                                                ?
                                                                window.location.pathname === "/admin/doc-approving" || window.location.pathname === "/user/doc-approving"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/doc-approving" : "/user/doc-approving"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Quản lý tài liệu
                                                         </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/doc-approving" : "/user/doc-approving"}
                                                                        onClick={() => this.setState({})}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Quản lý tài liệu
                                                            </div>
                                                                    </Link>
                                                                :
                                                                <></>
                                                        }
                                                        {
                                                            (this.isGrantedPermissions(ContentManagement.Management)
                                                                && this.isGrantedPermissions(Notification.ViewAll))
                                                                ?
                                                                window.location.pathname === "/admin/page-notification" || window.location.pathname === "/user/page-notification"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={"/admin/page-notification"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Thông báo trang
                                                                </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        to={"/admin/page-notification"}
                                                                        onClick={() => this.setState({})}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text" >
                                                                            Thông báo trang
                                                                </div>
                                                                    </Link>
                                                                :
                                                                <></>
                                                        }
                                                        {
                                                            (this.isGrantedPermissions(ContentManagement.Management)
                                                                && this.isGrantedPermissions(Category.View))
                                                                ?
                                                                window.location.pathname === "/admin/categories-management" || window.location.pathname === "/user/categories-management"
                                                                    ?
                                                                    <Link className="Main_Interactive_Menu_Item_Active Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/categories-management" : "/user/categories-management"}
                                                                    >
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Quản lý danh mục
                                                            </div>
                                                                    </Link>
                                                                    :
                                                                    <Link className="Sub_Dropdown_Menu_Item"
                                                                        to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/categories-management" : "/user/categories-management"}
                                                                        onClick={() => this.setState({})}>
                                                                        <div className="Sub_Dropdown_Menu_Item_Text">
                                                                            Quản lý danh mục
                                                            </div>
                                                                    </Link>
                                                                : <></>
                                                        }
                                                        <div className="margin-bottom-5px" />
                                                        <div className="decoration-underline " />
                                                        <div className="margin-bottom-5px" />
                                                        <div className="margin-bottom-5px" />
                                                    </div>
                                                </div>

                                                {/* Quan ly nguoi dung */}
                                                {(this.isGrantedPermissions(ContentManagement.Management)
                                                    && this.isGrantedPermissions(User.All))
                                                    ? window.location.pathname === "/admin/user-management" || window.location.pathname === "/user/user-management"
                                                        ?
                                                        <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/user-management" : "/user/user-management"}

                                                        >
                                                            <img alt="*"
                                                                className="side-bar-primary-menu-item-icon"
                                                                src={user_management_icon}
                                                                id="user-managent-btn-element" />
                                                            <div className="side-bar-menu-item-text"  >
                                                                Quản lý người dùng
                                                        </div>
                                                        </Link>
                                                        :
                                                        <Link className="Vertical_Menu_Item"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/user-management" : "/user/user-management"}

                                                            onClick={() => this.setState({})}>
                                                            <img alt="*" className="side-bar-primary-menu-item-icon"
                                                                src={user_management_icon}
                                                                id="user-managent-btn-element"
                                                            />
                                                            <div className="side-bar-menu-item-text"  >
                                                                Quản lý người dùng
                                                    </div>
                                                        </Link>
                                                    :
                                                    <></>
                                                }

                                                {/* Quan ly hoat dong: các báo cáo người dùng  */}
                                                {
                                                    (this.isGrantedPermissions(ContentManagement.Management)
                                                        && this.isGrantedPermissions(User.All))
                                                        ? window.location.pathname === "/admin/activity_management" || window.location.pathname === "/user/activity_management"
                                                            ?
                                                            <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/activity_management" : "/user/activity_management"}
                                                            >
                                                                <img alt="*" className="side-bar-primary-menu-item-icon"
                                                                    src={activity_management_icon}
                                                                    id="activity-managent-btn-element" />
                                                                <div className="side-bar-menu-item-text"  >
                                                                    Quản lý hoạt động
                                                    </div>
                                                            </Link>
                                                            :
                                                            <Link className="Vertical_Menu_Item"
                                                                to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/activity_management" : "/user/activity_management"}
                                                                onClick={() => this.setState({})}>
                                                                <img alt="*" className="side-bar-primary-menu-item-icon"
                                                                    src={activity_management_icon}
                                                                    id="activity-managent-btn-element"
                                                                />
                                                                <div className="side-bar-menu-item-text"  >
                                                                    Quản lý hoạt động
                                                     </div>
                                                            </Link>
                                                        :
                                                        <></>
                                                }



                                                {/* Quan lý quyền truy cập: role */}
                                                {(this.isGrantedPermissions(ContentManagement.Management)
                                                    && this.isGrantedPermissions(Role.All))
                                                    ?
                                                    window.location.pathname === "/admin/user_role_management" || window.location.pathname === "/user/user_role_management"
                                                        ?
                                                        <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/user_role_management" : "/user/user_role_management"}
                                                        >
                                                            <img alt="*" className="side-bar-primary-menu-item-icon"
                                                                src={user_role_management_icon}
                                                            // id="user-role-managent-btn-element"
                                                            />
                                                            <div className="side-bar-menu-item-text"  >
                                                                Quản lý quyền truy cập
                                                    </div>
                                                        </Link>
                                                        :
                                                        <Link className="Vertical_Menu_Item"
                                                            to="/admin/user_role_management"
                                                            onClick={() => this.setState({})}>
                                                            <img alt="*" className="side-bar-primary-menu-item-icon"
                                                                src={user_role_management_icon}
                                                            // id="user-role-managent-btn-element"
                                                            />
                                                            <div className="side-bar-menu-item-text"  >
                                                                Quản lý quyền truy cập
                                                    </div>
                                                        </Link>
                                                    :
                                                    <></>
                                                }

                                                {/* Thong ke */}
                                                {(this.isGrantedPermissions(ContentManagement.Management)
                                                    && this.isGrantedPermissions(Role.All))
                                                    ?
                                                    window.location.pathname === "/admin/Statistic_management" || window.location.pathname === "/user/Statistic_management"
                                                        ?
                                                        <Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/Statistic_management" : "/user/Statistic_management"}
                                                        >
                                                            <img alt="*" className="side-bar-primary-menu-item-icon"
                                                                src={statistic_management_icon}
                                                            // id="user-role-managent-btn-element"
                                                            />
                                                            <div className="side-bar-menu-item-text"  >
                                                                Thống kê
                                                    </div>
                                                        </Link>
                                                        :
                                                        <Link className="Vertical_Menu_Item"
                                                            to="/admin/Statistic_management"
                                                            onClick={() => this.setState({})}>
                                                            <img alt="*" className="side-bar-primary-menu-item-icon"
                                                                src={statistic_management_icon}
                                                            // id="user-role-managent-btn-element"
                                                            />
                                                            <div className="side-bar-menu-item-text"  >
                                                                Thống kê
                                                    </div>
                                                        </Link>
                                                    :
                                                    <></>
                                                }

                                            </div>
                                        </div >
                                    </ div >
                                </div>
                            </div>


                            {/* Router Outlet */}
                            <div className="left-sidebar-layout-router-outlet" >
                                <Switch>
                                    {/* Admin and collab page content admin */}
                                    {/* for admin */}
                                    <Route exact path="/admin" component={PostApprovingPage} />
                                    <Route exact path="/admin/post-approving" component={PostApprovingPage} />
                                    <Route exact path="/admin/doc-approving" component={DocApprovingPage} />

                                    {/* for collab */}
                                    <Route exact path="/user/post-approving" component={PostApprovingPage} />
                                    <Route exact path="/user/doc-approving" component={DocApprovingPage} />

                                    {/* for admin only */}
                                    <Route exact path="/admin/page-notification" component={NotificationManagement} />
                                    <Route exact path="/admin/categories-management" component={CategoryManagement} />
                                    <Route exact path="/admin/user-management" component={UserManagement} />
                                    <Route exact path="/admin/activity_management" component={AdminLayout} />
                                    <Route exact path="/admin/user_role_management" component={UserRoleManagement} />
                                    <Route exact path="/admin/user-management/:id" component={AdminLayout} />
                                    <Route exact path="/admin/statistic_management" component={Statistic} />

                                </Switch>
                            </div>
                        </Router>
                    </div >
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

    handleOnNotAccountInformationMenuItemClick = () => {
        this.setState({});
    }

    //#endregion

    //#region for handle on scroll
    scrollFunction = () => {

        let left_sidebar = document.getElementById("left-sidebar");
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
        }
        if (getRectBottom(header) > 0 - 21) {
            left_sidebar.classList.replace("Left_Sidebar_After_Header", "Left_Sidebar_Before_Header");
            left_sidebar.classList.remove("Left_Sidebar_Reach_Footer");
        }

        //Handler for Footer
        if ((getRectBottom(left_sidebar)) >= getRectTop(footer) - 45) {
            left_sidebar.classList.replace("Left_Sidebar_After_Header", "Left_Sidebar_Reach_Footer");
        }
    }
    //#endregion

}


//#region for redux
const mapStateToProps = (state) => {
    // (state);
    return {
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser
}, dispatch);

// const

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminLayout));
//#endregion