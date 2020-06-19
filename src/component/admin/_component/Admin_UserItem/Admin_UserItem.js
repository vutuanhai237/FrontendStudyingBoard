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

class Admin_UserItem extends Component {

    constructor(props) {
        super(props);

        this.role = this.props.role;
        this.roleID = this.props.roleID;
        this.name = this.props.name;
        this.userName = this.props.userName;
        this.nickName = this.props.nickName;
        this.avatarUrl = this.props.avatarUrl;
        this.email = this.props.email;
        this.postCount = this.props.postCount;
        this.docCount = this.props.docCount;
        this.score = this.props.score;

        this.state = {
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
            this.roleID === role.id ?
                <option className="User_Item_Roles_Combobox" value={role.role} key={role.id} selected="selected">{role.role}</option> :
                <option className="User_Item_Roles_Combobox" value={role.role} key={role.id}>{role.role}</option>
        )

        return (
            <div className="Admin_User_Item" >

                <img src={this.avatarUrl} className="Show_Avatar"></img>

                <div style={{ "padding": "10px", "padding-top": "0" }}>
                    <div style={{ display: "flex" }}>
                        <div className="User_Item_Name">{this.name}</div>
                        <div className="User_Item_Nick_Name">({this.nickName})</div>
                    </div>
                    <div>
                        <div className="User_Item_Email">{this.email}</div>

                        {/* record bar */}
                        <div style={{
                            display: "flex", "font-family": "Barlow Condensed",
                            "font-style": "normal",
                            "font-weight": 600,
                            "font-size": "18px",
                            "line-height": "30px",
                            "margin-top": "5px",
                        }}>
                            <div className="User_Item_Score">Scrore: {this.score}</div>
                            <img src={gray_write_icon} className="User_Item_Element" ></img>
                            <div className="User_Item_Post_Count">{this.postCount}</div>
                            <img src={gray_upload_icon} className="User_Item_Element"></img>
                            <div className="User_Item_Doc_Count"> {this.docCount}</div>
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