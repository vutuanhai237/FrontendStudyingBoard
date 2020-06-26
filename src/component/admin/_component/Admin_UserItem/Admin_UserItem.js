import React, { Component } from 'react'
import './Admin_UserItem.scss'
import gray_write_icon from '../../../../img/gray_write_icon.png'
import gray_upload_icon from '../../../../img/gray_upload_icon.png'
import white_dropdown_btn from '../../../../img/white_dropdown_icon.png'
import dropdown_btn from '../../../../img/dropdown_icon.png'

//combobox
import '../../../shared_components/CustomCombobox.scss'

//modal popup
import CustomModal from '../../../shared_components/CustomModalPopup/CustomModal'

//delete icon
// import gray_delete_icon from '../../../../img/gray_delete_icon.png'
// import red_delete_icon from '../../../../img/red_delete_icon.png'
// import confirmation_icon from '../../../../img/confirmation_management_icon.png'

import { ClickAwayListener } from '@material-ui/core';


class Admin_UserItem extends Component {

    constructor(props) {
        super(props);

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

        this.rolesList = this.props.rolesList;

        //for cancel change roleID
        this.recover_roleID = this.props.roleID;

        this.isAnyChangeRoleDropdownComboboxOpen = false;

        this.notifyContent = "";

        this.state = {
            roles: this.rolesList,
            role_PutDTO: {
                id: this.roleID
            },
            isChangeRoleConfirmationPopupOpen: false,

        }
    }

    componentDidMount() {

    }

    render() {

        let roles_Combobox = this.state.roles.map(role =>


            this.roleID === role.id ?
                <div className="Activated_Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + this.userID + "-" + role.id} value={role.role} key={role.id}>{role.role}</div> :
                <div className="Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + this.userID + "-" + role.id} value={role.role} key={role.id}
                    onClick={() => this.handleDropDownMenuItemClick(role.id)}> {role.role}
                </div>

        )

        return (
            <div className="Admin_User_Item"  >

                <img alt="avatar" src={this.avatarUrl} className="Show_Avatar"></img>

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
                                                        {this.state.roles[this.roleID].role}
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
                    custom={false}
                >
                    <div className="Simple_Blue_Button" onClick={() => this.closeChangeRoleConfirmationPopup()} >OK</div>
                    <div className="Simple_White_Button" onClick={() => this.closeChangeRoleConfirmationPopup()} >Cancel</div>
                </CustomModal>

                {/* modal for notify change role success */}
                <CustomModal
                    open={this.state.isChangeRoleConfirmationPopupOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert"
                    custom={false}
                >
                    <div className="Simple_Blue_Button" onClick={() => this.closeChangeRoleConfirmationPopup()} >OK</div>
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
        let item_id = "user-role-dropdown-combobox-sub-item-" + this.userID + "-" + roleID;
        let sub_dropdown_item = document.getElementById(item_id);

        for (let i = 0; i < this.state.roles.length; i++) {
            let sub_dropdown_item_index_id = "user-role-dropdown-combobox-sub-item-" + this.userID + "-" + i;
            let sub_dropdown_item_index = document.getElementById(sub_dropdown_item_index_id);
            sub_dropdown_item_index.className = "Dropdown_Combobox_Sub_Item";
        }

        sub_dropdown_item.className = "Activated_Dropdown_Combobox_Sub_Item";
        this.roleID = roleID;

        //open a confirmation popup
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


    handleCancelChangeRoleConfirmation = () => { //phai co popup thi moi test duoc
        this.roleID = this.recover_roleID;
        this.setState({});
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
export default Admin_UserItem;