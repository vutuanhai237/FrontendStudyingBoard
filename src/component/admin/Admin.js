import React, { Component } from 'react'

// import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import './Admin.scss'
import btn_element from "../../img/btn_element.png"
import SimpleBlueButton from "../shared_components/SimpleBlueButton/SimpleBlueButton.js";
import AdminBrowsePostComponent from "./AdminBrowsePostComponent"
class Admin extends Component {
    constructor(props) {
        super();

        this.state = {
            "info": {
                "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                "displayName": "Nguyen Van Dong",
                "userName": "tesla",
                "gmail": "dongnv.since1999@gmail.com",
                "password_length": 10
            },
            isBrowserPost: true,
            isBrowserDocument: false,
            isAnnouncementManagement: false,
            isUserAccountsManagement: false,
            isPostFilterManagement: false
        }
    }

    render() {
        let mainMenuShow = <div></div>;
        if (this.state.isBrowserPost) {
            mainMenuShow = <AdminBrowsePostComponent></AdminBrowsePostComponent>;
        }

        return (
            <div className="Admin">

                {/* Header Area */}
                <div className="Admin_Header">
                    {/* <Header></Header> */}
                </div>

                {/* Body Area */}
                <div className="Admin_Main_Port">

                    {/* Admin Info and Menu Port */}
                    <div className="Admin_Info_Menu_Port">
                        {/* Admin Infor Port */}
                        <div className="Admin_Info_Port">
                            <div className="Avatar_Port">
                                <img className="Avatar" src={this.state.info.avatarUrl} />
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
                        </div>
                        {/* Admin Menu Port */}
                        <div className="Admin_Vertical_Menu_Port">
                            <div className="Vertical_Menu_Item">
                                <img className="Btn_Element" src={btn_element}></img>
                                <div className="Vertical_Menu_Item_Text">
                                    Tên hiển thị
                                </div>
                            </div>
                            <div className="Vertical_Menu_Item">
                                <img className="Btn_Element" src={btn_element}></img>
                                <div className="Vertical_Menu_Item_Text">
                                    Đổi mật khẩu
                                </div>
                            </div>

                            <div className="Vertical_Menu_Item">
                                <img className="Btn_Element" src={btn_element}></img>
                                <div className="Vertical_Menu_Item_Text">
                                    Bài đăng
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Menu Main Port to show what will be manage*/}
                    <div className="Admin_Horizontal_Menu_Port">

                        {/* Menu bar */}
                        <div className="Horizontal_Menu_Bar">
                            <div className="First_Horizontal_Menu_Item">
                                Duyệt bài
                            </div>
                            <div className="Horizontal_Menu_Item">
                                Duyệt tài liệu
                            </div>
                            <div className="Horizontal_Menu_Item">
                                Quản lý thông báo
                            </div>
                            <div className="Horizontal_Menu_Item">
                                Quản lý người dùng
                            </div>
                            <div className="Horizontal_Menu_Item">
                                Quản lý bộ lọc bài viết
                            </div>
                        </div>

                        {/* Menu_Main_Show_Port */}
                        <div className="Admin_Main_Show_Port">
                            {/* show current menu option*/}
                            {mainMenuShow}
                        </div>
                    </div>
                </div >
                <div className="Admin_GrammarManagement_Footer">
                    {/* <Footer></Footer> */}
                </div>
            </div>
        );
    }
}

export default Admin;