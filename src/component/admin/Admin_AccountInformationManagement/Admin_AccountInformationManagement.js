/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../admin_components/Admin_Titlebar/Admin_Titlebar'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import gray_upload_icon from '../../../img/gray_upload_icon.png'
import gray_write_icon from '../../../img/gray_write_icon.png'
import '../../shared_components/Avatar.scss'
import './Admin_AccountInformationManagement.scss'
import { ClickAwayListener } from '@material-ui/core'
import dropdown_btn from '../../../img/dropdown_icon.png'
import white_dropdown_btn from '../../../img/white_dropdown_icon.png'

class Admin_AccountInformationManagement extends Component {
    constructor(props) {
        super();
        this.isAnyChangeRoleDropdownComboboxOpen = true;
        this.state = {
            accountInformation: {
                userID: 1,
                avartarUrl: "https://i.imgur.com/SZJgL6C.jpg",
                displayName: "Nguyen Van Dong",
                username: "admin",
                passwordLength: "10",
                facebook: "https://www.facebook.com/profile.php?id=100024742350400",
                gmail: "dongnv.since1999@gmail.com",
                doc_count: 100,
                post_count: 300,
                score: 12345,
                roleID: 0,
            },
            roles: [
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
                    role: "Account"
                }
            ],

            isChangeRoleConfirmationPopupOpen: false,

        }
    }

    componentDidMount() {

    }



    render() {
        let roles_Combobox = this.state.roles.map(role =>


            this.state.accountInformation.roleID === role.id ?
                <div className="Activated_Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + role.id} value={role.role} key={role.id}>{role.role}</div> :
                <div className="Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + role.id} value={role.role} key={role.id}
                    onClick={() => this.handleDropDownMenuItemClick(role.id)}> {role.role}
                </div>

        )
        return (
            <div>
                <Admin_Titlebar title="THÔNG TIN TÀI KHOẢN" />
                <div className="Admin_Show_Port">
                    <div className="display_flex width_100_percents" >
                        <div className="width_50_percents">
                            <div className="Account_Information_Port">

                                <div className="Simple_Gray_Label_18px">Avatar: </div>
                                <div className="Account_Information_Avatar_Port">
                                    <img className="Account_Information_Avatar_Image" alt="avatar" src={this.state.accountInformation.avartarUrl} />
                                </div>

                                {/* Display name */}
                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Họ tên:
                             </div>
                                <input type="text" className="Simple_Text_Input" />

                                {/* Username */}
                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Username:
                              </div>
                                <input type="text" className="Simple_Text_Input" />

                                {/* Passwords */}
                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Passwords:
                            </div>
                                <input type="text" className="Simple_Text_Input" />

                                {/* Facebook */}
                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Facebook:
                             </div>
                                <input type="text" className="Simple_Text_Input" />

                                {/* Gmail */}
                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Gmail:
                             </div>
                                <input type="text" className="Simple_Text_Input" />
                            </div>

                            <div className="display_flex margin_top_10px" >
                                <button className="Simple_Blue_Button margin_auto"  >
                                    Lưu thay đổi
                            </button>
                            </div>
                        </div>

                        <div className="margin_left_10px" />

                        <div className="width_50_percents">
                            <div className="Account_Information_Port">
                                <div className="display_flex">
                                    <div className="Simple_Gray_Label_18px" style = {{lineHeight: "25px"}}>Role:</div>
                                    <ClickAwayListener onClickAway={() => { this.closeAllChangeRoleDropdownCombobox() }}>

                                        <div style={{ position: "relative", display: "flex", width: "100%", zIndex: 10000 }}>
                                            <div style={{ position: "relative", display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                                <div style={{ position: "absolute", width: "140px" }}>
                                                    <div className="Disable_Parent_Dropdown_Combobox" id={"user-role-parent-dropdown-combobox"}>
                                                        {/* // onClick={(e) => this.handleDropDownMenuClick(e, "user-role-parent-dropdown-combobox", "user-role-parent-dropdown-combobox-text", "user-role-dropdown-btn-element", "user-role-dropdown-combobox-container")}> */}
                                                        <div className="display_flex">
                                                            <div className="Vertical_Menu_Item_Text" id={"user-role-parent-dropdown-combobox-text"}>
                                                                {this.state.roles[this.state.accountInformation.roleID].role}
                                                            </div>
                                                        </div>
                                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id={"user-role-dropdown-btn-element"} />
                                                    </div>

                                                    {this.isAnyChangeRoleDropdownComboboxOpen ? (
                                                        <div className="Dropdown_Combobox_Container" id={"user-role-dropdown-combobox-container"}>
                                                            {roles_Combobox}
                                                            <div className="margin_bottom_5px" />
                                                            <div className="margin_bottom_5px" />
                                                        </div>
                                                    ) : <div id={"user-role-dropdown-combobox-container"}></div>}

                                                </div>
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                </div>

                                <div className="margin_top_10px" />

                                <div className="Account_Information_Achivement_Port">
                                    <div className="Account_Information_Achivement_Score">Scrore: {this.state.accountInformation.score}</div>
                                    <div className="Account_Information_Achivement_Post_Doc_Count_Port">
                                        <div className="display_flex width_50_percents">
                                            <img alt="post count" src={gray_write_icon} className="User_Item_Element" ></img>
                                            <div className="margin_left_5px">{this.state.accountInformation.post_count}</div>
                                        </div>
                                        <div className="display_flex width_50_percents">
                                            <img alt="upload count" src={gray_upload_icon} className="User_Item_Element"></img>
                                            <div className="margin_left_5px"> {this.state.accountInformation.doc_count}</div>
                                        </div>
                                    </div>

                                </div >
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal for veritfy change role */}
                <CustomModal
                    open={this.state.isChangeRoleConfirmationPopupOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="confirmation"
                    closeModal={() => this.closeChangeRoleConfirmationPopup()}
                >

                    {/* code footer to handler event in parent class (if you want to show a confirmation modal) */}
                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyChangeRoleConfirmation()}>OK</button>
                    <button className="Simple_White_Button" onClick={() => this.handleCancelChangeRoleConfirmation()}>Cancel</button>
                </CustomModal>

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
            dropdown_element.src = white_dropdown_btn;
        }

        this.isAnyChangeRoleDropdownComboboxOpen = true;
        this.setState({});
    }

    handleDropDownMenuItemClick = (roleID) => {
        //change current UI
        let item_id = "user-role-dropdown-combobox-sub-item-" + roleID;
        let sub_dropdown_item = document.getElementById(item_id);

        for (let i = 0; i < this.state.roles.length; i++) {
            let sub_dropdown_item_index_id = "user-role-dropdown-combobox-sub-item-" + i;
            console.log(sub_dropdown_item_index_id);
            let sub_dropdown_item_index = document.getElementById(sub_dropdown_item_index_id);
            sub_dropdown_item_index.className = "Dropdown_Combobox_Sub_Item";
        }

        sub_dropdown_item.className = "Activated_Dropdown_Combobox_Sub_Item";
        this.state.accountInformation.roleID = roleID;

        // open a confirmation popup
        this.openChangeRoleConfirmationPopup(roleID);
    }

    //handler change role
    openChangeRoleConfirmationPopup = (roleID) => {
        this.closeAllChangeRoleDropdownCombobox();
        this.notifyHeader = "Xác nhận?";
        this.notifyContent = "Xác nhận thay đổi quyền người dùng?";
        this.setState({ isChangeRoleConfirmationPopupOpen: true });
    }

    closeChangeRoleConfirmationPopup = (roleID) => {
        this.setState({ isChangeRoleConfirmationPopupOpen: false });
    }

    handlerVerifyChangeRoleConfirmation = (roleID) => {
        // send request to server   
        //...

        this.closeChangeRoleConfirmationPopup();
    }

    handleCancelChangeRoleConfirmation = () => { //phai co popup thi moi test duoc
        this.roleID = this.recover_roleID;
        this.closeChangeRoleConfirmationPopup();

        // this.setState({});
    }

    closeAllChangeRoleDropdownCombobox = () => {

        let parent_id = "user-role-parent-dropdown-combobox";
        let show_text_id = "user-role-parent-dropdown-combobox-text";
        let dropdown_element_id = "user-role-dropdown-btn-element";
        let container_id = "user-role-dropdown-combobox-container";

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
        this.isAnyChangeRoleDropdownComboboxOpen = false;
        this.setState({})
    }
}
export default Admin_AccountInformationManagement;