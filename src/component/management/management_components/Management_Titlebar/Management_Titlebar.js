import React, { Component } from 'react'
import './Management_Titlebar.scss'

class Management_Titlebar extends Component {
    constructor(props) {
        super();
        this.maxPostNumber = 10;
        this.isManagementBrower = true;
        this.state = {
        }
    }

    render() {
        return (
            <div className="Management_Horizontal_Menu_Port">

                {/* Menu bar */}
                <div className="Horizontal_Menu_Bar">
                    <div className="Main_Title">{this.props.title}</div>
                </div>

                {/* version trước */}
                {/* <div className="First_Horizontal_Menu_Item" onClick={() => window.location.href = "/management/post_browser"}>
                        Duyệt bài
                    </div>
                    <div className="Horizontal_Menu_Item" onClick={() => window.location.href = "/management/doc_browser"}>
                        Duyệt tài liệu
                    </div>
                    <div className="Horizontal_Menu_Item">
                        Quản lý thông báo
                    </div>
                    <div className="Horizontal_Menu_Item" onClick={() => window.location.href = "/management/user_manager"}>
                        Quản lý người dùng
                    </div>
                    <div className="Horizontal_Menu_Item">
                        Quản lý bộ lọc bài viết
                   </div> */}
            </div>
        );
    }
}
export default Management_Titlebar;