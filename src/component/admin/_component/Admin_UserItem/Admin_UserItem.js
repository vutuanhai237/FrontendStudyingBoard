import React, { Component } from 'react'

// import Header from "../../components/Header/Header.js";
// import Footer from "../../components/Footer/Footer.js";
import './Admin_UserItem.scss'

// import PostSummaryCategoryLink from '../PostSummaryCategoryLink/PostSummaryCategoryLink'
// import SimpleBlueButton from '../SimpleBlueButton/SimpleBlueButton'
// import SimpleRedButton from '../SimpleRedButton/SimpleRedButton'
import BlueRedButtonGroup from '../../../shared_components/BlueRedButtonGroup/BlueRedButtonGroup'
import { findByLabelText } from '@testing-library/react';
import gray_write_icon from '../../../../img/gray_write_icon.png'
import gray_upload_icon from '../../../../img/gray_upload_icon.png'

//to call this component: 
//isAdminBrowser
//isOwnerManagement
//isNormal

//authorName, authorLink or authorID
//requestedDate
//title of post 
//...

//Thanh tác giả và thời gian có hai cách hiển thị: admin duyệt bài (tác giả, thời gian yêu cầu, ngày yêu cầu, danh mục) 
//                                        (undone) và view bình thường (tác giả, ngày publish, thời gian đọc ước tính, danh mục)
//Reaction bar lúc admin view chờ duyệt thì không xuất hiện, còn lại hiện hết.
//Đối với các nút thao tác:
// + Khi admin view chờ duyệt: preview và reject.
// + Khi trong màn hình quản lý của mình: Đọc tiếp và Xoá.
// + Còn lại: Đọc tiếp.

class Admin_UserItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                "name": "Nguyen Van Dong",
                "nickName": "Tesla",
                "email": "dongnv.since1999@gmail.com",
                "score": "10^9",
                "post_count": "300",
                "doc_count": "0",
                "role": "Admin",
                "roleID": 1
            },
            roles:
                [
                    {
                        id: 0,
                        role: "Admin"
                    },
                    {
                        id: 1,
                        role: "Collaborator"
                    },
                    {
                        id: 2,
                        role: "User"
                    }
                ]
        }
    }

    render() {

        let roles_Combobox = this.state.roles.map(role =>
            this.state.user.roleID === role.id ?
                <option className="User_Item_Roles_Combobox" value={role.role} key={role.id} selected="selected">{role.role}</option> :
                <option className="User_Item_Roles_Combobox" value={role.role} key={role.id}>{role.role}</option>
        )

        return (
            <div className="Admin_User_Item" >

                <img src={this.state.user.avatarUrl} className="Show_Avatar"></img>
                <div style={{ "padding": "10px", "padding-top": "0" }}>
                    <div style={{ display: "flex" }}>
                        <div className="User_Item_Name">{this.state.user.name}</div>
                        <div className="User_Item_Nick_Name">({this.state.user.nickName})</div>
                    </div>
                    <div>
                        <div className="User_Item_Email">{this.state.user.email}</div>

                        {/* record bar */}
                        <div style={{
                            display: "flex", "font-family": "Barlow Condensed",
                            "font-style": "normal",
                            "font-weight": 600,
                            "font-size": "18px",
                            "line-height": "30px",
                            "margin-top": "5px",
                        }}>
                            <div className="User_Item_Score">Scrore: {this.state.user.score}</div>
                            <img src={gray_write_icon} className="User_Item_Element" ></img>
                            <div className="User_Item_Post_Count">{this.state.user.post_count}</div>
                            <img src={gray_upload_icon} className="User_Item_Element"></img>
                            <div className="User_Item_Doc_Count"> {this.state.user.doc_count}</div>
                        </div>

                        <select className="User_Item_Roles_Combobox">
                            {roles_Combobox}
                        </select>

                    </div>
                </div>
            </div >
        );
    }
}
export default Admin_UserItem;