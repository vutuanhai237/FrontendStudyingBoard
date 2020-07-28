import React, { Component } from 'react'
import './Management_UserItem.scss'
import gray_write_icon from '../../../../img/gray_write_icon.png'
import gray_upload_icon from '../../../../img/gray_upload_icon.png'
import white_dropdown_btn from '../../../../img/white_dropdown_icon.png'
import dropdown_btn from '../../../../img/dropdown_icon.png'
import icon_write from '../../../../img/icon_write.png'
//combobox
import '../../../shared_components/CustomCombobox.scss'


//modal popup
import CustomModal from '../../../shared_components/CustomModalPopup/CustomModal'

import { ClickAwayListener } from '@material-ui/core';
import { getRoleNameByName } from '../../../../utils/PermissionManagement'

import Cookies from 'js-cookie'
import { PORT } from '../../../../constant/index'

class Management_UserItem extends Component {

    constructor(props) {
        super(props);


        this.roleID = "";
        this.roleName = "";
        this.userID = "";
        this.name = "";
        this.userName = "";
        this.nickName = "";
        this.avatarUrl = "";
        this.email = "";
        this.postCount = "";
        this.docCount = "";
        this.score = "";
        this.roleList = [];

        //for cancel change roleID
        this.recover_roleID = this.props.roleID;

        this.isAnyChangeRoleDropdownComboboxOpen = false;

        this.notifyContent = "";

        this.state = {
            role_PutDTO: {
                id: this.roleID
            },
            isChangeRoleConfirmationPopupOpen: false,

        }

        this.isAnyFailedAlertPopupOpen = false;
        this.isAnySuccessAlertPopupOpen = false;

    }

    componentDidMount() {

    }

    render() {

        if (this.roleList !== null && this.roleList !== undefined) {
            this.roleID = this.props.roleID;
            this.roleName = this.props.roleName;
            this.userID = this.props.userID;
            this.name = this.props.name;
            this.userName = this.props.userName;
            this.avatarUrl = this.props.avatarUrl;
            this.email = this.props.email;
            this.postCount = this.props.postCount;
            this.docCount = this.props.docCount;
            this.score = this.props.score;
            this.roleList = this.props.roleList;


            let roles_Combobox = this.roleList.map(role =>
                this.roleID === role.UserGroupID ?
                    <div className="Activated_Dropdown_Combobox_Sub_Item"
                        id={"user-role-dropdown-combobox-sub-item-" + this.userID + "-" + role.UserGroupID}
                        value={getRoleNameByName(role.UserGroupName)}
                        key={role.UserGroupID}>
                        {getRoleNameByName(role.UserGroupName)}
                    </div>
                    :
                    <div className="Dropdown_Combobox_Sub_Item"
                        id={"user-role-dropdown-combobox-sub-item-" + this.userID + "-" + role.UserGroupID}
                        value={role.UserGroupName}
                        key={role.UserGroupID}
                        onClick={() => this.handleDropDownMenuItemClick(role.UserGroupID)}>
                        {getRoleNameByName(role.UserGroupName)}
                    </div>

            )

            return (
                <div className="Management_User_Item"  >

                    <img alt="avatar" src={this.avatarUrl} className="Show_Avatar"></img>

                    <div style={{
                        paddingLeft: "10px", width: "100%"
                    }}>
                        < div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="User_Item_Name">{this.name}</div>
                            {/* <div className="User_Item_Edit_Btn" onClick={() => { window.location.href = "/management/users_management/" + this.userID }}>
                                <img alt="edit" className="User_Item_Edit_Btn_Element margin_right_5px" src={icon_write} />
                                <div className="Simple_Gray_Label" style={{ paddingTop: "2px" }}>Chỉnh sửa</div>
                            </div> */}
                        </div>
                        <div>
                            <div className="User_Item_Email">{this.email}</div>

                            {/* statusbar: score, docs count, posts count, role */}
                            <div className="User_Item_Statusbar" >

                                <div style={{ "display": "flex" }}>
                                    <div className="User_Item_Score">Scrore: {this.score}</div>
                                    <img alt="avatar" src={gray_write_icon} className="User_Item_Element" ></img>
                                    <div className="User_Item_Post_Count">{this.postCount}</div>
                                    <img alt="avatar" src={gray_upload_icon} className="User_Item_Element"></img>
                                    <div className="User_Item_Doc_Count"> {this.docCount}</div>
                                </div>

                                <ClickAwayListener onClickAway={() => { this.closeAllChangeRoleDropdownCombobox() }}>

                                    <div style={{ position: "relative", display: "flex", width: "100%", zIndex: 10000 - this.userID }}>
                                        <div style={{ position: "relative", display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                            <div style={{ position: "absolute", width: "140px" }}>
                                                <div className="Parent_Dropdown_Combobox" id={"user-role-parent-dropdown-combobox-" + this.userID}
                                                    onClick={(e) => this.handleDropDownMenuClick(e, "user-role-parent-dropdown-combobox-" + this.userID, "user-role-parent-dropdown-combobox-text-" + this.userID, "user-role-dropdown-btn-element-" + this.userID, "user-role-dropdown-combobox-container-" + this.userID)}>
                                                    <div className="display_flex">
                                                        <div className="Vertical_Menu_Item_Text" id={"user-role-parent-dropdown-combobox-text-" + this.userID}>

                                                            {this.roleList ?
                                                                getRoleNameByName(this.roleName)
                                                                : ""
                                                            }
                                                        </div>
                                                    </div>
                                                    <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id={"user-role-dropdown-btn-element-" + this.userID} />
                                                </div>

                                                {this.isAnyChangeRoleDropdownComboboxOpen ? (
                                                    <div className="Dropdown_Combobox_Container" id={"user-role-dropdown-combobox-container-" + this.userID}>
                                                        {roles_Combobox}
                                                        <div className="margin_bottom_5px" />
                                                        <div className="margin_bottom_5px" />
                                                    </div>
                                                ) : <div id={"user-role-dropdown-combobox-container-" + this.userID}></div>}

                                            </div>
                                        </div>
                                    </div>
                                </ClickAwayListener>
                            </div>
                        </div>
                    </div >

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
                        <button className="Simple_White_Button" onClick={() => this.closeChangeRoleConfirmationPopup()}>Cancel</button>
                    </CustomModal>


                    {/* modal success alert */}
                    <CustomModal
                        open={this.isAnySuccessAlertPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_success"
                        closeModal={() => { this.isAnySuccessAlertPopupOpen = false; this.setState({}) }}
                    />

                    {/* modal failed alert */}
                    <CustomModal
                        open={this.isAnyFailedAlertPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_fail"
                        closeModal={() => { this.isAnyFailedAlertPopupOpen = false; this.setState({}) }}
                    />


                </div >
            );
        }
        return <></>
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
        let item_id = "user-role-dropdown-combobox-sub-item-" + this.userID + "-" + roleID;
        let sub_dropdown_item = document.getElementById(item_id);

        for (let i = 1; i <= this.roleList.length; i++) {
            let sub_dropdown_item_index_id = "user-role-dropdown-combobox-sub-item-" + this.userID + "-" + i;
            let sub_dropdown_item_index = document.getElementById(sub_dropdown_item_index_id);
            sub_dropdown_item_index.className = "Dropdown_Combobox_Sub_Item";
        }

        sub_dropdown_item.className = "Activated_Dropdown_Combobox_Sub_Item";
        this.roleID = roleID;

        //open a confirmation popup
        this.openChangeRoleConfirmationPopup();
    }

    //handler change role
    openChangeRoleConfirmationPopup = () => {
        this.closeAllChangeRoleDropdownCombobox();
        this.notifyHeader = "Xác nhận?";
        this.notifyContent = "Xác nhận thay đổi quyền người dùng?";
        this.setState({ isChangeRoleConfirmationPopupOpen: true });
    }

    closeChangeRoleConfirmationPopup = (roleID) => {
        this.setState({ isChangeRoleConfirmationPopupOpen: false });
    }

    handlerVerifyChangeRoleConfirmation = (roleID) => {

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", this.userName);
        urlencoded.append("roleId", this.roleID);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/admin/updaterole?sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).statusCode === 20) {
                    this.isUpdateInformationPopupOpen = false;
                    this.canClickSaveInformation = false;
                    this.notifyHeader = "Thành công";
                    this.notifyContent = "Cập nhật quyền thành công!";
                    this.isAnySuccessPopupOpen = true;
                    this.setState({});

                    return;
                }
                this.isUpdateInformationPopupOpen = false;
                this.canClickSaveInformation = false;
                this.notifyHeader = "Thất bại";
                this.notifyContent = "Cập nhật quyền không thành công!";
                this.isAnyFailedAlertPopupOpen = true;
                this.setState({});

            }
            )
            .catch(error => console.log('error', error));

        this.closeChangeRoleConfirmationPopup();
    }

    handleCancelChangeRoleConfirmation = () => { //phai co popup thi moi test duoc
        this.roleID = this.recover_roleID;
        this.closeChangeRoleConfirmationPopup();

        // this.setState({});
    }

    closeAllChangeRoleDropdownCombobox = () => {

        let parent_id = "user-role-parent-dropdown-combobox-" + this.userID;
        let show_text_id = "user-role-parent-dropdown-combobox-text-" + this.userID;
        let dropdown_element_id = "user-role-dropdown-btn-element-" + this.userID;
        let container_id = "user-role-dropdown-combobox-container-" + this.userID;

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
export default Management_UserItem;