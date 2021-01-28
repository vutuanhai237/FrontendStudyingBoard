/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import resource image, icon
import dropdown_btn from 'assets/images/dropdown_icon.png'
import gray_write_icon from 'assets/images/gray_write_icon.png'
import gray_upload_icon from 'assets/images/gray_upload_icon.png'
import account_management_icon from 'assets/images/account_management_icon.png'
// import gray_nb_upload_icon from 'assets/images/gray_nb_upload_icon.png'
import gray_nb_write_icon from 'assets/images/gray_nb_write_icon.png'

//import pages
import AccountInformation from 'pages/user/AccountInformation/AccountInformation';
import MyDocumentsList from 'pages/user/MyDocumentsList/MyDocumentsList';
import MyPostsList from 'pages/user/MyPostsList/MyPostsList';
import UploadDoc from 'pages/user/UploadDocument/UploadDocument'
import CreatePost from 'pages/user/CreatePost/CreatePost'

//import scss
import 'layouts/LeftSidebarLayout.scss'
import 'components/styles/SimpleLabel.scss'
import 'layouts/Layout.scss'

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'redux/services/userServices'

//import for permission
import {
  Statistic,
  getRoleNameByName,
  isGrantedPermissions
} from 'utils/permissionUtils'

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.isTheFirstTimeLoaded = true;
    this.isGrantedPermissions = isGrantedPermissions.bind(this); //bind check permission in PermissionManagement.js file


  }

  componentDidMount() {
    // this.props.getCurrentUser();
    window.addEventListener('scroll', this.scrollFunction)

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  }
  render() {

    // if (this.props.accountInformation !== null && this.props.accountInformation !== undefined) {

    let roleName, score, post_count, doc_count, username, avatarURL = "";
    // = this.props.accountInformation;

    return (
      <div className="pr-layout">
        {/* Xu ly su kien cuon tro chuot */}

        {/* Body Area */}
        <div className="left-sidebar-layout">
          {/* Left Sidebar */}
          <Router>
            <div>
              <div>
                {/* Dung de gioi han lai khong gian cua cac component con khi scroll */}
                <div className="fake-left-sidebar" />

                {/* Left Sidebar */}
                <div className="left-sidebar" id="left-sidebar">

                  {/* Hien thi avatar, thanh tich va ten role */}
                  <div>
                    {/* Management Infor Layout */}
                    < div className="user-info-layout" >
                      <div className="Avatar_Layout">
                        {/* This is the way to set avatar from a online server via Google Drive */}
                        {/* <img alt="avatar" className="Show_Avatar" src={"https://cfaevjuhwlpmr2dgadvijg-on.drv.tw/BHTWeb/Avatar/" + this.username + ".png'} /> */}
                        <img alt="avatar" className="Show_Avatar" src={avatarURL} />
                      </div>
                      <div className="achivement-layout">
                        <div className="score">Scrore: {this.score}</div>
                        <div className="Achivement_Post_Doc_Count_Layout">
                          <div className="d-flex w-50-percents">
                            <img alt="post count" src={gray_write_icon} className="user-item-element" ></img>
                            <div className="mg-left-5px">{post_count}</div>
                          </div>

                          <div className="d-flex w-50-percents">
                            <img alt="upload count" src={gray_upload_icon} className="user-item-element"></img>
                            <div className="mg-left-5px"> {doc_count}</div>
                          </div>
                        </div>
                      </div>
                    </div >

                    {/* Role and achivement port */}
                    <div className="Role_achivement-layout">
                      <div className="user-role">
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
                        <div className="d-flex">
                          <img alt="*" className="vertical-menu-item-icon"
                            src={account_management_icon} />
                          <div className="side-bar-menu-item-text"
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
                        <div className="mg-bottom-5px"></div>
                        {window.location.pathname === "/user" ?
                          < Link className="vertical-sub-menu-item main-interactive-menu-item-active"
                            to="/user" > Thông tin tài khoản
                          </Link> :
                          < Link className="vertical-sub-menu-item"
                            to="/user"
                            onClick={() => this.setState({})}
                          > Thông tin tài khoản
                           </Link>
                        }

                        {window.location.pathname === "/user/update-password"
                          ?
                          <Link
                            className="vertical-sub-menu-item main-interactive-menu-item-active"
                            to="/user/update-password">
                            Cập nhật mật khẩu
                            </Link>
                          :
                          <Link className="vertical-sub-menu-item"
                            to="/user/update-password"
                            onClick={() => this.setState({})}>
                            Cập nhật mật khẩu
                            </Link>

                        }
                        {window.location.pathname === "/user/notification"
                          ?
                          <Link
                            className="vertical-sub-menu-item main-interactive-menu-item-active"
                            to="/user/notification">
                            Thông báo
                                                        </Link>
                          :
                          <Link className="vertical-sub-menu-item"
                            to={"/user/notification"}
                            onClick={() => this.setState({})}>
                            Thông báo
                                                        </Link>
                        }
                        <div className="decoration-underline" style={{ marginTop: "5px", marginBottom: "10px" }} />
                      </div>


                      {/* Bai viet*/}

                      <div style={{ display: "block" }}>
                        <div className="Parent_Dropdown_Menu_Item" id="user-post-managent-parent-menu-item"
                          onClick={(e) => this.handleDisplayBlockDefaultDropDownMenuClick(e,
                            "user-post-management-parent-menu-item",
                            "user-post-management-parent-menu-item-text",
                            "user-post-management-dropdown-btn-element",
                            "user-post-management-menu-item-container")
                          }>
                          <div className="d-flex">
                            <img alt="*" className="vertical-menu-item-icon"
                              src={gray_nb_write_icon} />
                            <div className="side-bar-menu-item-text"
                              id="user-post-managent-parent-menu-item-text">
                              {"Bài viết"}
                            </div>
                          </div>
                          <img alt="v" className="Dropdown_Btn_Element"
                            src={dropdown_btn}
                            id="user-post-managent-parent-menu-item-text" />
                        </div >


                        <div className="Vertical_Display_Block_Default_Dropdown_Menu_Item_Container"
                          id="user-post-management-menu-item-container">
                          <div className="mg-bottom-5px"></div>
                          {window.location.pathname === "/user/my-posts"
                            ?
                            <Link
                              className="vertical-sub-menu-item main-interactive-menu-item-active"
                              to={"/user/my-posts?page=1&category=1"}>
                              Bài viết của tôi
                                                        </Link>
                            :
                            <Link className="vertical-sub-menu-item"
                              to={"/user/my-posts?page=1&category=1"}
                              onClick={() => this.setState({})}>
                              Bài viết của tôi
                                                        </Link>
                          }
                          {window.location.pathname === "/user/saved_posts"
                            ?
                            <Link
                              className="vertical-sub-menu-item main-interactive-menu-item-active"
                              to="/user/saved_posts?page=1">
                              Bài viết đã lưu
                                                        </Link>
                            :
                            <Link className="vertical-sub-menu-item"
                              to={"/user/saved_posts?page=1"}
                              onClick={() => this.setState({})}>
                              Bài viết đã lưu
                                                        </Link>
                          }

                          {window.location.pathname === "/create-post"
                            ?
                            <Link
                              className="vertical-sub-menu-item main-interactive-menu-item-active"
                              to={"/create-post"}>
                              Tạo bài viết mới
                                                        </Link>
                            :
                            <Link className="vertical-sub-menu-item"
                              to={"/create-post"}
                              onClick={() => this.setState({})}>
                              Tạo bài viết mới
                                                        </Link>
                          }

                          <div className="decoration-underline" style={{ marginTop: "5px", marginBottom: "10px" }} />
                        </div>
                      </div>


                      <div style={{ display: "block" }}>
                        <div className="Parent_Dropdown_Menu_Item" id="user-doc-managent-parent-menu-item"
                          onClick={(e) => this.handleDisplayBlockDefaultDropDownMenuClick(e,
                            "user-doc-management-parent-menu-item",
                            "user-doc-management-parent-menu-item-text",
                            "user-doc-management-dropdown-btn-element",
                            "user-doc-management-menu-item-container")
                          }>
                          <div className="d-flex">
                            <img alt="*" className="vertical-menu-item-icon"
                              src={gray_nb_write_icon} />
                            <div className="side-bar-menu-item-text"
                              id="user-doc-managent-parent-menu-item-text">
                              {"Tài liệu"}
                            </div>
                          </div>
                          <img alt="v" className="Dropdown_Btn_Element"
                            src={dropdown_btn}
                            id="user-doc-managent-parent-menu-item-text" />
                        </div >

                        <div className="Vertical_Display_Block_Default_Dropdown_Menu_Item_Container"
                          id="user-doc-management-menu-item-container">
                          <div className="mg-bottom-5px"></div>
                          {window.location.pathname === "/user/my-docs"
                            ?
                            <Link
                              className="vertical-sub-menu-item main-interactive-menu-item-active"
                              to={"/user/my-docs?page=1&category=1"}>
                              Tài liệu của tôi
                                                        </Link>
                            :
                            <Link className="vertical-sub-menu-item"
                              to={"/user/my-docs?page=1&category=1"}
                              onClick={() => this.setState({})}>
                              Tài liệu của tôi
                                                        </Link>
                          }


                          {window.location.pathname === "/upload-doc"
                            ?
                            <Link
                              className="vertical-sub-menu-item main-interactive-menu-item-active"
                              to={"/upload-doc"}>
                              Upload tài liệu
                                                        </Link>
                            :
                            <Link className="vertical-sub-menu-item"
                              to={"/upload-doc"}
                              onClick={() => this.setState({})}>
                              Upload tài liệu
                                                        </Link>
                          }

                          <div className="decoration-underline" style={{ marginTop: "5px", marginBottom: "10px" }} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div >
              </ div >
            </div>

            {/* Router Outlet */}
            {/* <div className="left-sidebar-layout">
              <div className="router-outlet" > */}
                <Switch>
                  <Route exact path="/user" component={AccountInformation} />
                  <Route exact path="/user/update-password" component={AccountInformation} />
                  <Route exact path="/user/my-docs" component={MyDocumentsList} />
                  <Route exact path="/user/my-posts" component={MyPostsList} />
                  <Route exact path="/create-post" component={CreatePost} />
                  <Route exact path="/upload-doc" component={UploadDoc} />
                </Switch>
              {/* </div>
            </div> */}
          </Router>
        </div >
      </div >

    );

    // return <> </>
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
      left_sidebar.classList.add("left-sidebar_After_Header");
      left_sidebar.classList.remove("left-sidebar_Reach_Footer");
    }
    if (getRectBottom(header) > 0 - 21) {
      left_sidebar.classList.replace("left-sidebar_After_Header", "left-sidebar_Before_Header");
      left_sidebar.classList.remove("left-sidebar_Reach_Footer");
    }

    //Handler for Footer
    if ((getRectBottom(left_sidebar)) >= getRectTop(footer) - 45) {
      left_sidebar.classList.replace("left-sidebar_After_Header", "left-sidebar_Reach_Footer");
    }
  }
  //#endregion


}

//#region for redux
const mapStateToProps = (state) => {
  return {
    // accountInformation: state.user.account
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentUser
}, dispatch);

// const

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminLayout));
//#endregion