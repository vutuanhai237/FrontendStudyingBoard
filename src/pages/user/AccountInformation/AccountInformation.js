/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import AdminLayout from 'pages/management/AdminLayout'
import Titlebar from 'components/common/Titlebar/Titlebar'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_upload_icon from 'assets/images/gray_upload_icon.png'
import gray_write_icon from 'assets/images/gray_write_icon.png'
import { PORT } from 'constants/constants'
import './AccountInformation.scss'
import 'styles/Form.scss'
import './AIResponsiveLayout.scss'
import { ClickAwayListener } from '@material-ui/core'
import dropdown_btn from 'assets/images/dropdown_icon.png'
import white_dropdown_btn from 'assets/images/white_dropdown_icon.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdatePassword from './UpdatePassword'
import { isContainSpecialCharacter } from 'utils/Utils'
import ImageUploader from 'react-images-upload'

//import for Redux
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from 'services/userServices'
import { management_getAllRoles } from 'services/authorized/userServices'

//import for role config
import { getRoleNameFilterByName } from 'utils/PermissionManagement'

import Cookies from 'js-cookie'

class AccountInformation extends Component {
    constructor(props) {
        super(props);
        //initiate data from props:
        //if value been set by a string, db didn't match it.

        //from user API
        this.displayName = "Nguyễn Văn Đông";
        this.userID = "";
        this.password = "";
        this.avatarURL = "";
        this.email = "";
        this.score = "";
        this.postCount = 0;
        this.documentCount = 0;
        this.roleID = 2;
        this.roleName = "";

        //for popup
        this.isChangeRoleConfirmationPopupOpen = false;
        this.passwordString = "";
        this.canClickSaveInformation = false;
        this.isAnySuccessAlertPopupOpen = false;
        this.isAnyFailedAlertPopupOpen = false;
        this.isAnySuccessReloadAlertPopupOpen = false;

        this.isChangeRoleConfirmationPopupOpen = false;
        this.isUpdateInformationPopupOpen = false;
        this.isAnyChangeRoleDropdownComboboxOpen = false;

        this.isUpdateAvatarPopupOpen = false;
        this.isHaveAnyImageInFileLoader = false;
        //for valid input
        this.isDisplayNameEmpty = false;
        this.isDisplayNameContainSpecialCharacters = false;

        this.updateInformation_DTO = {
            username: "",
            oldPasword: "",
            displayname: "",
        }

        this.state = {
            pictures: []
        }

        this.roleList = [];
    }

    componentDidMount() {
        // (this.props);
        this.props.getCurrentUser();
    }

    render() {

        if (!this.props.accountInformation !== null && this.props.accountInformation !== undefined) {
            this.accountInformation = this.props.accountInformation;
            this.displayName = this.accountInformation.displayName;
            this.userID = this.accountInformation.id;
            this.password = this.accountInformation.password;
            this.avatar = this.accountInformation.avatar;
            this.email = this.accountInformation.email;
            this.score = this.accountInformation.score;
            this.postCount = this.accountInformation.postCount;
            this.documentCount = this.accountInformation.documentCount;
            this.roleID = this.accountInformation.roleId;
            this.roleName = this.accountInformation.roleName;
            this.username = this.accountInformation.username;
            this.avatarURL = this.accountInformation.avatarURL;
            // for update information DTO
            this.updateInformation_DTO.oldPasword = this.password;
            this.updateInformation_DTO.username = this.username;

            console.log(this.accountInformation)


            this.roleList = this.props.roleList;
            // console.log(this.roleList);
            let roles_Combobox =
                this.roleList.map(role =>
                    this.roleID === role.id ?
                        <div className="activated-combo-box-option" id={"user-role-dropdown-combobox-sub-item-" + role.id} value={role.role} key={role.id}>{role.role}</div> :
                        <div className="combo-box-option" id={"user-role-dropdown-combobox-sub-item-" + role.id} value={role.role} key={role.id}
                            onClick={() => this.handleDropDownMenuItemClick(role.id)}> {role.role}
                        </div>
                )

            return (
                <div>

                    <Titlebar title="THÔNG TIN TÀI KHOẢN" />

                    <div className="left-side-bar-layout-content-container">
                        <div className="Show_Layout_Bounding_Layout">


                            <div className="Account_Information_Bounding_Layout">
                                <div className="Account_Information_Layout">

                                    {/* <div className="gray-label">Avatar: </div> */}
                                    <div className="Account_Information_Avatar_Layout">
                                        {/* <img className="Account_Information_Avatar_Image" alt="avatar" src='https://i.imgur.com/SZJgL6C.jpg' ></img> */}
                                        {/* <img className="Account_Information_Avatar_Image" alt="avatar" src={"https://drv.tw/~bht.cnpm.uit2@gmail.com/gd/BHTWeb/Avatar/" +  this.username + ".png'} ></img> */}
                                        {/* <img className="Account_Information_Avatar_Image" alt="avatar" src={"https://cfaevjuhwlpmr2dgadvijg-on.drv.tw/BHTWeb/Avatar/" +  this.username + ".png'} ></img> */}

                                        <img className="Account_Information_Avatar_Image" alt="avatar" src={this.avatarURL} />
                                        {/* <div className="margin_left_10px"></div> */}

                                        {/* <div>{this.props.</div> */}
                                    </div>

                                    <div className="blue-button margin_auto " style={{ marginBottom: "20px", marginTop: "10px" }} onClick={() => this.handlerClickUpdateAvatar()}>Cập nhật avatar</div>

                                    <div className="margin-top-10px" />

                                    <div className="flex_container">
                                        <div className="gray-label" style={{ lineHeight: "25px" }}>Role:</div>
                                        <ClickAwayListener onClickAway={() => { this.closeAllChangeRoleDropdownCombobox() }}>

                                            <div style={{ position: "relative", display: "flex", width: "100%", zIndex: 10000 }}>
                                                <div style={{ position: "relative", display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                                    <div style={{ position: "absolute", width: "200px" }}>
                                                        <div className="disabled-combo-box" id={"user-role-parent-dropdown-combobox"}>
                                                            {/* // onClick={(e) => this.handleDropDownMenuClick(e, "user-role-parent-dropdown-combobox", "user-role-parent-dropdown-combobox-text", "user-role-dropdown-btn-element", "user-role-dropdown-combobox-container")}> */}
                                                            <div className="flex_container">
                                                                <div className="Vertical_Menu_Item_Text" id={"user-role-parent-dropdown-combobox-text"}>
                                                                    {
                                                                        this.roleList.map(role =>
                                                                            role.UserGroupID === this.roleID ?
                                                                                getRoleNameFilterByName(role.UserGroupName)
                                                                                : <></>
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                            <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id={"user-role-dropdown-btn-element"} />
                                                        </div>

                                                        {this.isChangeRoleDropdownComboboxOpen ? (
                                                            <div className="combo-box-container" id={"user-role-dropdown-combobox-container"}>
                                                                {roles_Combobox}
                                                                <div className="margin-bottom-5px" />
                                                                <div className="margin-bottom-5px" />
                                                            </div>
                                                        ) : <div id={"user-role-dropdown-combobox-container"}></div>}

                                                    </div>
                                                </div>
                                            </div>
                                        </ClickAwayListener>
                                    </div>

                                    <div className="margin-top-5px" />

                                    <div className="Account_Information_Achivement_Layout">
                                        <div className="Account_Information_Achivement_Score">Scrore: {this.score}</div>
                                        <div className="Account_Information_Achivement_Post_Doc_Count_Layout">
                                            <div className="flex_container width_50_percents">
                                                <img alt="post count" src={gray_write_icon} className="User_Item_Element" ></img>
                                                <div className="margin_left_5px">{this.postCount}</div>
                                            </div>
                                            <div className="flex_container width_50_percents">
                                                <img alt="upload count" src={gray_upload_icon} className="User_Item_Element"></img>
                                                <div className="margin_left_5px"> {this.documentCount}</div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <div className="Account_Information_Bounding_Layout">

                                <div className="Account_Information_Layout">
                                    {(window.location.pathname === "/admin"
                                        || window.location.pathname === "/admin/"
                                        || window.location.pathname === "/user"
                                        || window.location.pathname === "/user/"
                                    ) ?
                                        <div>
                                            {/* Display name */}
                                            <div className="position_relative">
                                                < div className="gray-label Is_Form_Label">
                                                    Họ tên:
                                                </div>
                                                <input type="text" className="form-input"
                                                    defaultValue={this.displayName} id="management-display-name-text-input"
                                                    onChange={(e) => this.handlerChangeUserDisplay(e)} />
                                                <div className="error-label" hidden={!this.isDisplayNameEmpty} >
                                                    *Tên không được để trống.
                                                </div>
                                                <div className="error-label" hidden={!this.isDisplayNameContainSpecialCharacters} >
                                                    *Tên không được chứa các ký tự đặc biệt.
                                                </div>
                                            </div>

                                            {/* Username */}
                                            <div className="gray-label Is_Form_Label">
                                                Username:
                                            </div>
                                            <input disabled type="text" className="form-input" defaultValue={this.username} />

                                            {/* Password */}
                                            <div className="gray-label Is_Form_Label">
                                                Password:
                                            </div>
                                            <input disabled type="text" className="form-input" value={this.generatePassword()} />

                                            {/* Email */}
                                            <div className="gray-label Is_Form_Label">
                                                Email:
                                            </div>
                                            <input disabled type="text" className="form-input" defaultValue={this.email} />

                                            <div className="flex_container margin-top-10px" >
                                                <button disabled={!this.canClickSaveInformation} className="blue-button margin_auto" onClick={() => this.handlerClickSaveInformation()} >
                                                    Lưu thay đổi
                                            </button>
                                            </div>
                                        </div>
                                        :
                                        < UpdatePassword oldPass={this.password} username={this.username} />
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* </div > */}

                    {/* #region Popup region */}

                    {/* modal success alert */}
                    <CustomModal
                        open={this.isAnySuccessAlertPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_success"
                        closeModal={() => { this.isAnySuccessAlertPopupOpen = false; this.setState({}) }}
                    />

                    <CustomModal
                        open={this.isAnySuccessReloadAlertPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="alert_success"
                        closeModal={() => { this.isAnySuccessReloadAlertPopupOpen = false; this.setState({}); window.location.reload() }}
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

                    {/* for verify change role */}
                    <CustomModal
                        open={this.isChangeRoleConfirmationPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="confirmation"
                        closeModal={() => this.closeChangeRoleConfirmationPopup()}
                    >

                        {/* code footer to handler event in parent class (if you want to show a confirmation modal) */}
                        <button className="blue-button margin-right-5px" onClick={() => this.handlerVerifyChangeRoleConfirmation()}>OK</button>
                        <button className="white-button" onClick={() => this.handlerCancelChangeRoleConfirmation()}>Cancel</button>
                    </CustomModal>

                    {/* modal for veritfy update informartion */}
                    <CustomModal
                        open={this.isUpdateInformationPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="confirmation"
                        closeModal={() => this.closeUpdateInformationConfirmationPopup()}
                    >

                        {/* code footer to handler event in parent class (if you want to show a confirmation modal) */}
                        <div className="gray-label">Xác nhận?</div>
                        <div style={{ display: "flex" }}>
                            <button className="blue-button margin-right-5px" onClick={() => this.handlerVerifyUpdateInformation()}>OK</button>
                            <button className="white-button" onClick={() => this.handlerCancelVerifyUpdateInformation()}>Cancel</button>
                        </div>
                    </CustomModal>

                    {/* Popup for update avatar */}
                    <CustomModal open={this.isUpdateAvatarPopupOpen}
                        shadow={true}
                        title={this.notifyHeader}
                        text={this.notifyContent}
                        type="custom"
                        closeModal={() => this.closeUpdateAvatarPopup()}
                    >
                        <div className="Custom_Modal_Body">
                            <ImageUploader
                                withIcon={true}
                                buttonText='Tải ảnh lên'
                                onChange={this.onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                                singleImage={true}
                                withPreview={true}
                                labelClass="gray-label"
                            ></ImageUploader>
                        </div>
                        {this.isHaveAnyImageInFileLoader
                            ?
                            <div className="Custom_Modal_Footer">

                                <div className="gray-label">Xác nhận?</div>
                                <div style={{ display: "flex" }}>
                                    <button className="blue-button margin-right-5px" onClick={() => this.handlerVerifyUpdateAvatarConfirmation()}>OK</button>
                                    <button className="white-button" onClick={() => { this.isUpdateAvatarPopupOpen = false; this.setState({}) }}>Cancel</button>
                                </div>
                            </div>
                            :
                            <></>
                        }
                    </CustomModal>
                    {/* #endregion */}
                    <div src={this.state.pictures[0]}></div>
                </div >

            );
        }
        return <></>
    }

    //#region handle for popup 

    //for general alert popup
    openSuccessAlertPopup = () => {
        this.isAnySuccessAlertPopupOpen = true;
        this.setState();
    }

    openFailedSuccessAlertPopup = () => {
        this.isAnyFailedAlertPopupOpen = true;
        this.setState({});
    }

    //for change role
    closeChangeRoleConfirmationPopup = (roleID) => {
        this.isChangeRoleConfirmationPopupOpen = false;
        this.setState({});
    }

    closeUpdateInformationConfirmationPopup = () => {
        this.isUpdateInformationPopupOpen = false;
        this.setState({});
    }

    //for update avatar
    closeUpdateAvatarPopup = () => {
        this.isUpdateAvatarPopupOpen = false;
        this.setState({});
    }


    //for update information
    //#endregion


    //#region support initate value for rendering and handler image drop
    generatePassword = () => {
        let _passwordString = "";
        (String(this.props.accountInformation.password));
        if (this.props.accountInformation.password !== undefined) {
            for (let i = 0; i < this.props.accountInformation.password.length; i++) {
                _passwordString += "*";
            }
        }
        return _passwordString;
    }

    onDrop = (pictureFile) => {
        this.setState({
            pictures: this.state.pictures.concat(pictureFile),
        });
        this.updateInformation_DTO.avatarFile = pictureFile;
        this.isHaveAnyImageInFileLoader = true;
        if (this.updateInformation_DTO.avatarFile[0] === undefined || this.updateInformation_DTO.avatarFile[0] === null)
            this.isHaveAnyImageInFileLoader = false;
        this.setState({});
    }
    //#endregion

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

        this.isChangeRoleDropdownComboboxOpen = true;
        this.setState({});
    }

    handleDropDownMenuItemClick = (roleID) => {
        //change current UI
        let item_id = "user-role-dropdown-combobox-sub-item-" + roleID;
        let sub_dropdown_item = document.getElementById(item_id);

        for (let i = 0; i < this.roleList.length; i++) {
            let sub_dropdown_item_index_id = "user-role-dropdown-combobox-sub-item-" + i;
            // (sub_dropdown_item_index_id);
            let sub_dropdown_item_index = document.getElementById(sub_dropdown_item_index_id);
            sub_dropdown_item_index.className = "combo-box-option";
        }

        sub_dropdown_item.className = "activated-combo-box-option";
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

    closeAllChangeRoleDropdownCombobox = () => {

        if (this.isChangeRoleDropdownComboboxOpen === true) {
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
            this.isChangeRoleDropdownComboboxOpen = false;
            this.setState({})
        }

    }

    //#endregion

    //#region validator for display name input
    handlerChangeStateOfSubmitButton = () => {
        this.canClickSaveInformation = true;
        this.isDisplayNameEmpty = false;
        this.isDisplayNameContainSpecialCharacters = false;

        if ((this.updateInformation_DTO.displayname === ""
            || this.updateInformation_DTO.displayname === null)) {
            this.canClickSaveInformation = false;
            this.isDisplayNameEmpty = true;
            this.setState({});
            return;
        }

        if (isContainSpecialCharacter(this.updateInformation_DTO.displayname)) {
            this.canClickSaveInformation = false;
            this.isDisplayNameContainSpecialCharacters = true;
            this.setState({});
            return;
        }

        this.setState({});
    }

    handlerChangeUserDisplay = (e) => {
        this.updateInformation_DTO.displayname = e.target.value;
        this.handlerChangeStateOfSubmitButton();
    }

    //#endregion

    //#region main handler event and call APIs

    handlerClickSaveInformation = () => {
        this.notifyContent = "Xác nhận cập nhật thông tin?";
        this.notifyHeader = "Cập nhật thông tin";
        this.isUpdateInformationPopupOpen = true;
        this.setState({});
    }

    handlerVerifyUpdateInformation = () => {

        // console.log(this.updateInformation_DTO);

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", this.updateInformation_DTO.username);
        urlencoded.append("oldPasword", this.updateInformation_DTO.oldPasword);
        urlencoded.append("displayname", this.updateInformation_DTO.displayname);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/account/update?sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).statusCode === 20) {
                    console.log(result);
                    this.isUpdateInformationPopupOpen = false;
                    this.canClickSaveInformation = false;
                    this.notifyHeader = "Thành công";
                    this.notifyContent = "Cập nhật thông tin thành công!";
                    this.isAnySuccessReloadAlertPopupOpen = true;
                    this.setState({});
                    return;
                }
                console.log(result);
                this.isUpdateInformationPopupOpen = false;
                this.canClickSaveInformation = false;
                this.notifyHeader = "Thất bại";
                this.notifyContent = "Cập nhật thông tin không thành công!";
                this.isAnyFailedAlertPopupOpen = true;
                this.setState({});

            }
            )
            .catch(error => console.log('error', error));


    }

    handlerCancelVerifyUpdateInformation = () => {
        document.getElementById("management-display-name-text-input").value = this.displayName;
        this.isUpdateInformationPopupOpen = false;
        this.canClickSaveInformation = false;
        this.setState({});
    }

    handlerVerifyChangeRoleConfirmation = (roleID) => {
        // send request to server   
        //...

        this.closeChangeRoleConfirmationPopup();
    }

    handlerCancelChangeRoleConfirmation = () => { //phai co popup thi moi test duoc
        this.roleID = this.recover_roleID;
        this.closeChangeRoleConfirmationPopup();
    }

    handlerClickUpdateAvatar = () => {
        this.isUpdateAvatarPopupOpen = true;
        this.notifyContent = "Chọn ảnh:";
        this.notifyHeader = "Cập nhật avatar";
        this.setState({});
    }

    handlerVerifyUpdateAvatarConfirmation = () => {

        //call API to update avatar.
        this.isUpdateAvatarPopupOpen = false;
        this.notifyContent = "Cập nhật ảnh đại diện thành công!";
        this.notifyHeader = "Thành công";
        this.isAnySuccessAlertPopupOpen = true;
        this.setState({});
    }

    //#endregion
}

//#region for Redux
const mapStatetoProps = (state) => {
    // (state);
    // console.log(state);
    return {
        roleList: state.management_user.allRoles,
        accountInformation: state.user.account
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentUser, management_getAllRoles
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(AccountInformation));
 //#endregion