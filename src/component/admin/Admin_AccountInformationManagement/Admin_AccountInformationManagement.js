/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_admin_components/Admin_Titlebar/Admin_Titlebar'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import gray_upload_icon from '../../../img/gray_upload_icon.png'
import gray_write_icon from '../../../img/gray_write_icon.png'
import '../../shared_components/Avatar.scss'
import './Admin_AccountInformationManagement.scss'
import { ClickAwayListener } from '@material-ui/core'
import dropdown_btn from '../../../img/dropdown_icon.png'
import white_dropdown_btn from '../../../img/white_dropdown_icon.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin_UpdatePassword from './Admin_UpdatePassword'

import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getCurrentUser } from '../../../service/UserAPI'




class Admin_AccountInformationManagement extends Component {
    constructor(props) {
        super(props);
        this.isAnyChangeRoleDropdownComboboxOpen = true;
        // this.accountInformation = this.props.account;
        this.state = {
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
            passwordString: "",
            canSaveInformation: false,
        }
    }

    componentDidMount() {
        // console.log(this.props);
        this.props.getCurrentUser();
    }



    render() {
        if (this.props.accountInformation) {
            let roles_Combobox =
                this.state.roles.map(role =>
                    this.props.accountInformation.roleID === role.id ?
                        <div className="Activated_Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + role.id} value={role.role} key={role.id}>{role.role}</div> :
                        <div className="Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + role.id} value={role.role} key={role.id}
                            onClick={() => this.handleDropDownMenuItemClick(role.id)}> {role.role}
                        </div>
                )


            return (
                <div>
                    <Admin_Titlebar title="THÔNG TIN TÀI KHOẢN" />
                    {console.log(window.location.pathname)}
                    <div className="Admin_Show_Port">
                        <div className="display_flex width_100_percents" >
                            <div className="width_50_percents">
                                {(window.location.pathname === "/admin" || window.location.pathname === "/admin/") ?
                                    <div>
                                        <div className="Account_Information_Port">

                                            <div className="Simple_Gray_Label">Avatar: </div>
                                            <div className="Account_Information_Avatar_Port">
                                                <div className="Simple_White_Button ">Cập nhật avatar</div>
                                                {/* <div className="margin_left_10px"></div> */}
                                                <img className="Account_Information_Avatar_Image" alt="avatar" src={this.props.accountInformation.avartar} />
                                            </div>

                                            {/* Display name */}
                                            <div className="Simple_Gray_Label margin_top_10px">
                                                Họ tên:
                                            </div>
                                            <input type="text" className="Simple_Text_Input" defaultValue={this.props.accountInformation.displayName} onChange={(e) => this.handlerChangeUserDisplay(e)} />

                                            {/* Username */}
                                            <div className="Simple_Gray_Label margin_top_10px">
                                                Username:
                                            </div>
                                            <input disabled type="text" className="Simple_Text_Input" defaultValue={this.props.accountInformation.username} />

                                            {/* Password */}
                                            <div className="Simple_Gray_Label margin_top_10px">
                                                Password:
                                            </div>
                                            <input disabled type="text" className="Simple_Text_Input" value={this.generatePassword()} />

                                            {/* Facebook */}
                                            {/* <div className="Simple_Gray_Label margin_top_10px">
                                                Facebook:
                                            </div>
                                            <input disabled type="text" className="Simple_Text_Input" defaultValue={this.props.accountInformation.facebook} /> */}

                                            {/* Email */}
                                            <div className="Simple_Gray_Label margin_top_10px">
                                                Email:
                                            </div>
                                            <input disabled type="text" className="Simple_Text_Input" defaultValue={this.props.accountInformation.email} />
                                        </div>

                                        <div className="display_flex margin_top_10px" >
                                            <button disabled={!this.state.canSaveInformationgihtub} className="Simple_Blue_Button margin_auto"  >
                                                Lưu thay đổi
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    < Admin_UpdatePassword />
                                }
                            </div>

                            <div className="margin_left_10px" />

                            <div className="width_50_percents">
                                <div className="Account_Information_Port">
                                    <div className="display_flex">
                                        <div className="Simple_Gray_Label" style={{ lineHeight: "25px" }}>Role:</div>
                                        <ClickAwayListener onClickAway={() => { this.closeAllChangeRoleDropdownCombobox() }}>

                                            <div style={{ position: "relative", display: "flex", width: "100%", zIndex: 10000 }}>
                                                <div style={{ position: "relative", display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                                    <div style={{ position: "absolute", width: "140px" }}>
                                                        <div className="Disable_Parent_Dropdown_Combobox" id={"user-role-parent-dropdown-combobox"}>
                                                            {/* // onClick={(e) => this.handleDropDownMenuClick(e, "user-role-parent-dropdown-combobox", "user-role-parent-dropdown-combobox-text", "user-role-dropdown-btn-element", "user-role-dropdown-combobox-container")}> */}
                                                            <div className="display_flex">
                                                                <div className="Vertical_Menu_Item_Text" id={"user-role-parent-dropdown-combobox-text"}>
                                                                    {this.props.accountInformation.roleId ?
                                                                        this.state.roles[this.props.accountInformation.roleId].role : "User"
                                                                    }
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
                                        <div className="Account_Information_Achivement_Score">Scrore: {this.props.accountInformation.score}</div>
                                        <div className="Account_Information_Achivement_Post_Doc_Count_Port">
                                            <div className="display_flex width_50_percents">
                                                <img alt="post count" src={gray_write_icon} className="User_Item_Element" ></img>
                                                <div className="margin_left_5px">{this.props.accountInformation.postCount}</div>
                                            </div>
                                            <div className="display_flex width_50_percents">
                                                <img alt="upload count" src={gray_upload_icon} className="User_Item_Element"></img>
                                                <div className="margin_left_5px"> {this.props.accountInformation.documentCount}</div>
                                            </div>
                                        </div>

                                    </div >
                                </div>
                            </div>
                        </div>
                    </div >

                    {/* #region Popup region */}
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

                    {/* #endregion */}

                </div >

            );
        }
        return <></>
    }

    //#region support initate value for rendering
    generatePassword = () => {
        let _passwordString = "";
        console.log(String(this.props.accountInformation.password));
        if (this.props.accountInformation.password !== undefined) {
            for (let i = 0; i < this.props.accountInformation.password.length; i++) {
                _passwordString += "*";
            }
        }
        return _passwordString;
    }

    //#region handler combobox role and change role

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
        this.props.accountInformation.roleID = roleID;

        // open a confirmation popup
        this.openChangeRoleConfirmationPopup(roleID);
    }

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

        if (this.isAnyChangeRoleDropdownComboboxOpen === true) {
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

    //#endregion

    //#region handler for valid admin information front-end
    handlerChangeUserDisplay = (e) => {
        console.log(e.target.value);
        this.props.accountInformation.displayName = e.target.value;
        this.setState();

    }
    //#endregion
}


const mapStatetoProps = (state) => {
    // console.log(state);
    return {
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Admin_AccountInformationManagement));
