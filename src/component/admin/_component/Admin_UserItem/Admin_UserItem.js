import React, { Component } from 'react'
import './Admin_UserItem.scss'
import BlueRedButtonGroup from '../../../shared_components/BlueRedButtonGroup/BlueRedButtonGroup'
import { findByLabelText } from '@testing-library/react';
import gray_write_icon from '../../../../img/gray_write_icon.png'
import gray_upload_icon from '../../../../img/gray_upload_icon.png'
import btn_element from '../../../../img/btn_element.png'
import white_btn_element from '../../../../img/white_btn_element.png'
import white_dropdown_btn from '../../../../img/white_dropdown_icon.png'
import dropdown_btn from '../../../../img/dropdown_icon.png'

class Admin_UserItem extends Component {

    constructor(props) {
        super(props);

        this.role = this.props.role;
        this.roleID = this.props.roleID;
        this.userID = this.props.userID;
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

    componentDidMount() {
        this.getAllRoles();
    }

    getAllRoles = () => {

    }

    render() {

        let roles_Combobox = this.state.roles.map(role =>
            this.roleID === role.id ?
                <div className="Sub_Dropdown_Menu_Item" value={role.role} key={role.id} selected="selected">{role.role}</div> :
                <div className="Sub_Dropdown_Menu_Item" value={role.role} key={role.id}>{role.role}</div>
        )

        return (
            <div className="Admin_User_Item" >

                <img src={this.avatarUrl} className="Show_Avatar"></img>

                <div style={{
                    paddingLeft: "10px", width: "100%"
                }}>
                    < div style={{ display: "flex" }}>
                        <div className="User_Item_Name">{this.name}</div>
                        <div className="User_Item_Nick_Name">({this.nickName})</div>
                    </div>
                    <div>
                        <div className="User_Item_Email">{this.email}</div>

                        {/* statusbar: score, docs count, posts count, role */}
                        <div className="User_Item_Statusbar" >

                            <div style={{ "display": "flex" }}>
                                <div className="User_Item_Score">Scrore: {this.score}</div>
                                <img src={gray_write_icon} className="User_Item_Element" ></img>
                                <div className="User_Item_Post_Count">{this.postCount}</div>
                                <img src={gray_upload_icon} className="User_Item_Element"></img>
                                <div className="User_Item_Doc_Count"> {this.docCount}</div>
                            </div>

                            <div style={{ position: "relative", width: "100%", zIndex: 1000 }}>
                                <div style={{ position: "absolute" }}>
                                    <div className="Parent_Dropdown_Menu_Item" id={"user-role-parent-menu-item" + this.userID}
                                        onClick={(e) => this.handleDropDownMenuClick(e, "user-role-parent-menu-item" + this.userID, "user-role-parent-menu-item-text" + this.userID, "user-role-dropdown-btn-element" + this.userID, "user-role-menu-item-container" + this.userID)}>
                                        <div className="display_flex">
                                            <div className="Vertical_Menu_Item_Text" id={"user-role-parent-menu-item-text" + this.userID}>
                                                {this.role}
                                            </div>
                                        </div>
                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id={"user-role-dropdown-btn-element" + this.userID} />
                                    </div>
                                    <div className="Vertical_Dropdown_Menu_Item_Container" id={"user-role-menu-item-container" + this.userID}>
                                        {roles_Combobox}
                                        <div className="margin_bottom_5px" />
                                        <div className="decoration_underline " />
                                        <div className="margin_bottom_5px" />
                                        <div className="margin_bottom_5px" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        );
    }

    handleDropDownMenuClick = (e, parent_id, show_text_id, dropdown_element_id, container_id) => {
        e.preventDefault();
        let parent_menu_item = document.getElementById(parent_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let show_text = document.getElementById(show_text_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            parent_menu_item.style.background = "white";
            parent_menu_item.style.paddingLeft = "0px";
            show_text.style.color = "#363636";
            dropdown_element.src = dropdown_btn;
        }
        else {
            parent_menu_item.style.background = "#5279DB"
            dropdown_container.style.display = "block";
            parent_menu_item.style.paddingLeft = "10px";
            show_text.style.color = "white";
            parent_menu_item.style.borderRadius = "5px";
            dropdown_element.src = white_dropdown_btn;
        }
    }

}
export default Admin_UserItem;