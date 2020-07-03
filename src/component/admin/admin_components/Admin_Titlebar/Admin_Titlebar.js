import React, { Component } from 'react'
import './Admin_Titlebar.scss'

class Admin_Titlebar extends Component {
    constructor(props) {
        super();
        this.maxPostNumber = 10;
        this.isAdminBrower = true;
        this.state = {
        }
    }

    render() {
        return (
            <div className="Admin_Horizontal_Menu_Port">

                {/* Menu bar */}
                <div className="Horizontal_Menu_Bar">
                    <div className="Main_Title">{this.props.title}</div>
                </div>

                {/* version trước */}
                {/* <div className="First_Horizontal_Menu_Item" onClick={() => window.location.href = "/admin/post_browser"}>
                        Duyệt bài
                    </div>
                    <div className="Horizontal_Menu_Item" onClick={() => window.location.href = "/admin/doc_browser"}>
                        Duyệt tài liệu
                    </div>
                    <div className="Horizontal_Menu_Item">
                        Quản lý thông báo
                    </div>
                    <div className="Horizontal_Menu_Item" onClick={() => window.location.href = "/admin/user_manager"}>
                        Quản lý người dùng
                    </div>
                    <div className="Horizontal_Menu_Item">
                        Quản lý bộ lọc bài viết
                   </div> */}
            </div>
        );
    }
}
export default Admin_Titlebar;