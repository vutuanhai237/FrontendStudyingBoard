/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'constants/constants.js'

// import resource image, icon
import dropdown_btn from 'assets/images/dropdown_icon.png'
import gray_write_icon from 'assets/images/gray_write_icon.png'
import gray_upload_icon from 'assets/images/gray_upload_icon.png'
import account_management_icon from 'assets/images/account_management_icon.png'
import gray_nb_upload_icon from 'assets/images/gray_nb_upload_icon.png'
import gray_nb_write_icon from 'assets/images/gray_nb_write_icon.png'

//import pages
import AccountInformation from 'pages/user/AccountInformation/AccountInformation';
import MyDocList from 'pages/user/MyDocList/MyDocList';
import MyPostList from 'pages/user/MyPostList/MyPostList';
import UploadDoc from 'pages/user/UploadDocument/UploadDocument'
import CreatePost from 'pages/user/CreatePost/CreatePost'

//import scss
import '../styles/LeftSidebarLayout.scss'
import 'styles/SimpleLabel.scss'

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'services/UserAPI'

//import for permission
import {
    StatisticPermission,
    getRoleNameByName,
    isGrantedPermissions
} from 'utils/PermissionManagement'

import {
    DocumentPermission,
    PostPermission,
    ContentManagementPermission,
    NotificationPermission,
    CategoryPermission,
    UserPermission,
    ActivityPermission,
    RolePermission
} from 'utils/PermissionManagement'

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

            // //neu khong la admin va co tinh vao domain cua admin=> home
            // if (window.location.pathname.substring(0, 6) === "/admin" && roleName !== "ADMIN")
            //     window.location.pathname = "/"; //401 error

            // //neu la admin va co tinh vao trang quan ly cua user => admin
            // if (window.location.pathname.substring(0, 5) === "/user" && roleName === "ADMIN")
            //     window.location.pathname = "/admin";

            return (
                <div className="normal-container">
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
                                                        <div className="flex_container width_50_percents">
                                                            <img alt="post count" src={gray_write_icon} className="User_Item_Element" ></img>
                                                            <div className="margin_left_5px">{post_count}</div>
                                                        </div>

                                                        <div className="flex_container width_50_percents">
                                                            <img alt="upload count" src={gray_upload_icon} className="User_Item_Element"></img>
                                                            <div className="margin_left_5px"> {doc_count}</div>
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
                                            <div style={{ display: "block" }}>
                                                {/* Quan ly tai khoan menu item*/}
                                                <div className="Parent_Dropdown_Menu_Item" id="account-managent-parent-menu-item"
                                                    onClick={(e) => this.handleDisplayBlockDefaultDropDownMenuClick(e, "account-managent-parent-menu-item", "account-managent-parent-menu-item-text", "account-admin-dropdown-btn-element", "account-admin-menu-item-container")
                                                    }>
                                                    <div className="flex_container">
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={account_management_icon}
                                                            id="page-managent-btn-element" />
                                                        <div className="Vertical_Menu_Item_Text"
                                                            id="account-managent-parent-menu-item-text">
                                                            {"Tài khoản"}
                                                        </div>
                                                    </div>
                                                    <img alt="v" className="Dropdown_Btn_Element"
                                                        src={dropdown_btn}
                                                        id="account-admin-dropdown-btn-element" />
                                                </div >

                                                <div className="Vertical_Display_Block_Default_Dropdown_Menu_Item_Container"
                                                    id="account-admin-menu-item-container">
                                                    <div className="margin-bottom-5px"></div>

                                                    {window.location.pathname === "/admin" || window.location.pathname === "/user" ?
                                                        <Link className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin" : "/user"} > Thông tin tài khoản
                                                        </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            onClick={() => this.setState({})}
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin" : "/user"}> Thông tin tài khoản
                                                        </Link>
                                                    }
                                                    {window.location.pathname === "/admin/notification" || window.location.pathname === "/user/notification"
                                                        ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/notification" : "/user/notification"}>
                                                            Thông báo
                                                        </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/notification" : "/user/notification"}
                                                            onClick={() => this.setState({})}>
                                                            Thông báo
                                                        </Link>
                                                    }
                                                    {window.location.pathname === "/admin/posts_list" || window.location.pathname === "/user/posts_list"
                                                        ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/posts_list" : "/user/posts_list"}>
                                                            Danh sách bài viết
                                                        </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/admin/posts_list" : "/user/posts_list"}
                                                            onClick={() => this.setState({})}>
                                                            Danh sách bài viết
                                                        </Link>
                                                    }
                                                    {window.location.pathname === "/user/docs_list" || window.location.pathname === "/user/docs_list"
                                                        ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/user/docs_list" : "/user/docs_list"}
                                                        >
                                                            Danh sách tài liệu
                                                        </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/user/docs_list" : "/user/docs_list"}
                                                            onClick={() => this.setState({})}>
                                                            Danh sách tài liệu
                                                        </Link>
                                                    }
                                                    {window.location.pathname === "/user/update_password" || window.location.pathname === "/user/update_password"
                                                        ?
                                                        <Link
                                                            className="Sub_Dropdown_Menu_Item Main_Interactive_Menu_Item_Active"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/user/update_password" : "/user/update_password"}>
                                                            Cập nhật mật khẩu
                                                        </Link>
                                                        :
                                                        <Link className="Sub_Dropdown_Menu_Item"
                                                            to={window.location.pathname.substring(0, 6) === "/admin" ? "/user/update_password" : "/user/update_password"}
                                                            onClick={() => this.setState({})}>
                                                            Cập nhật mật khẩu
                                                        </Link>
                                                    }
                                                    <div className="margin-bottom-5px" />
                                                    <div className="decoration_underline " />
                                                    <div className="margin-bottom-5px" />
                                                    <div className="margin-bottom-5px" />
                                                </div>


                                                {/* Viet bai */}
                                                {window.location.pathname === "/create_post" ?
                                                    < Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to={"/create_post"}
                                                    >
                                                        <img alt="*" className="Primary_Menu_Item_Element" src={gray_nb_write_icon} />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Tạo bài viết mới</div>
                                                    </Link>
                                                    :
                                                    <Link className="Vertical_Menu_Item"
                                                        to={"/create_post"}
                                                        onClick={() => this.setState({})}>
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={gray_nb_write_icon}
                                                        />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Tạo bài viết mới
                                                    </div>
                                                    </Link>
                                                }

                                                {/* Viet bai */}
                                                {window.location.pathname === "/upload_doc" ?
                                                    < Link className="Vertical_Menu_Item Main_Interactive_Menu_Item_Active"
                                                        to={"/upload_doc"}
                                                    >

                                                        <img alt="*" className="Primary_Menu_Item_Element" src={gray_nb_upload_icon} />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Upload tài liệu</div>
                                                    </Link>
                                                    :
                                                    <Link className="Vertical_Menu_Item"
                                                        to={"/upload_doc"}
                                                        onClick={() => this.setState({})}>
                                                        <img alt="*" className="Primary_Menu_Item_Element"
                                                            src={gray_nb_upload_icon}
                                                        />
                                                        <div className="Vertical_Menu_Item_Text"  >
                                                            Upload tài liệu
                                                         </div>
                                                    </Link>
                                                }
                                            </div>
                                        </div >
                                    </ div >
                                </div>
                            </div>

                            {/* Router Outlet */}
                            <div className="Router_Outlet" >
                                <Switch>
                                    <Route exact path="/user" component={AccountInformation} />
                                    <Route exact path="/user/update_password" component={AccountInformation} />
                                    <Route exact path="/user/docs_list" component={MyDocList} />
                                    <Route exact path="/user/posts_list" component={MyPostList} />
                                    <Route exact path="/create_post" component={CreatePost} />
                                    <Route exact path="/upload_doc" component={UploadDoc} />
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

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(AdminLayout));
//#endregion