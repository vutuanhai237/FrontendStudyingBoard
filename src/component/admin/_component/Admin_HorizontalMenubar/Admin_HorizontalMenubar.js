import React, { Component } from 'react'
import './Admin_HorizontalMenubar.scss'

class Admin_HorizontalMenubar extends Component {
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

            </div>
        );
    }
}
export default Admin_HorizontalMenubar;