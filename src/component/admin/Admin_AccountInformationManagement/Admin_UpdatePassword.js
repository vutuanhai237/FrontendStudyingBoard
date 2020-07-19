/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_admin_components/Admin_Titlebar/Admin_Titlebar'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
// import '../../shared_components/Avatar.scss'

class Admin_UpdatePassword extends Component {
    constructor(props) {
        super();

        //check condition to open popups
        this.isChangeRoleConfirmationPopupOpen = false;
        this.isAnyChangeRoleDropdownComboboxOpen = false;
        this.isAnyFailedAlertPopupOpen = false;
        this.isAnySuccessAlertPopupOpen = false;

        //check condition to disable update password button
        this.canClickUpdatePassword = false;

        //for show error labels
        this.isCurrentPasswordEmpty = false;
        this.isCurrentPasswordLessThan6Characters = false;
        this.isCurrentPasswordContainSpecialCharacters = false;

        this.isNewPasswordEmpty = false;
        this.isNewPasswordLessThan6Characters = false;
        this.isNewPasswordContainSpecialCharacters = false;

        this.isConfirmationPasswordEmpty = false;
        this.isConfirmationPasswordLessThan6Characters = false;
        this.isConfirmationPasswordContainSpecialCharacters = false;



        //for POST to server new information of new password
        this.updatePassword_DTO = {
            //may be have id of user
            currentPassword: "",
            newPassword: "",
            confirmationPassword: ""
        }

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




        }
    }

    componentDidMount() {

    }


    render() {

        return (
            <div>
                {/* <div className="Admin_Account_Information_Bounding_Port"> */}
                <form onSubmit={(e) => this.handlerUpdatePassword(e)} autoComplete="off" >

                    <div className="Simple_Gray_Label " style={{ textAlign: "center", color: "#5279db", fontSize: "1.3rem" }}>Cập nhật mật khẩu</div>

                    {/* Current password */}
                    <div className="position_relative" >
                        <div className="Simple_Gray_Label margin_top_10px">
                            Mật khẩu hiện tại:
                                    </div>
                        <input type="password" autoComplete="new-password" defaultValue="" placeholder="Nhập mật khẩu hiện tại ..." className="Simple_Text_Input" onChange={(e) => this.handlerChangeCurrentPassword(e)} />
                        <div className="Simple_Error_Label" hidden={!this.isCurrentPasswordEmpty} >
                            *Mật khẩu hiện tại không được để trống.
                                    </div>
                    </div>

                    {/* New password */}
                    <div className="position_relative" >
                        <div className="Simple_Gray_Label Is_Form_Label">
                            Mật khẩu mới:
                                    </div>
                        <input type="password" defaultValue="" placeholder="Nhập mật khẩu mới ..." className="Simple_Text_Input" onChange={(e) => this.handlerChangeNewPassword(e)} />
                        <div className="Simple_Error_Label" hidden={!this.isNewPasswordEmpty} >
                            *Mật khẩu mới không được để trống.
                                    </div>
                        <div className="Simple_Error_Label" hidden={!this.isNewPasswordLessThan6Characters} >
                            *Mật khẩu mới không được ít hơn 6 ký tự.
                                    </div>
                        <div className="Simple_Error_Label" hidden={this.isNewPasswordLessThan6Characters || !this.isNewPasswordContainSpecialCharacters} >
                            *Mật khẩu mới không được chứa các ký tự đặc biệt.
                                    </div>

                    </div>

                    {/* Confirm new password */}
                    <div className="position_relative" >
                        <div className="Simple_Gray_Label Is_Form_Label">
                            Xác nhận mật khẩu:
                                </div>
                        <input type="password" defaultValue="" placeholder="Nhập lại mật khẩu mới ..." className="Simple_Text_Input" onChange={(e) => this.handlerChangeConfirmationPassword(e)} />
                        <div className="Simple_Error_Label" hidden={!this.isConfirmationPasswordEmpty} >
                            *Mật khẩu xác nhận không được để trống.
                                    </div>
                        <div className="Simple_Error_Label" hidden={!this.isConfirmationPasswordLessThan6Characters} >
                            *Mật khẩu xác nhận không được ít hơn 6 ký tự.
                                    </div>
                        <div className="Simple_Error_Label" hidden={this.isConfirmationPasswordLessThan6Characters || !this.isConfirmationPasswordContainSpecialCharacters} >
                            *Mật khẩu xác nhận không được chứa các ký tự đặc biệt.
                                    </div>

                    </div>
                    <div className="display_flex" >
                        <button className="Simple_Blue_Button margin_auto Is_Form_Button" disabled={!this.canClickUpdatePassword} onClick={(e) => this.handlerUpdatePassword(e)}>
                            Xác nhận
                                    </button>
                    </div>

                </form>
                {/* </div> */}


                {/* modal for verifing change role */}
                <CustomModal
                    open={this.isChangeRoleConfirmationPopupOpen}
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

                {/* modal for notification anything */}
                <CustomModal
                    open={this.isAnyFailedAlertPopupOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_fail"
                    closeModal={() => this.closeFailedAlertPopup()}
                >

                    {/* code footer to handler event in parent class (if you want to show a confirmation modal)
                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyChangeRoleConfirmation()}>OK</button>
                    <button className="Simple_White_Button" onClick={() => this.handleCancelChangeRoleConfirmation()}>Cancel</button> */}
                </CustomModal>

                <CustomModal
                    open={this.isAnySuccessAlertPopupOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_fail"
                    closeModal={() => this.closeSuccessAlertPopup()}
                >

                    {/* code footer to handler event in parent class (if you want to show a confirmation modal)
                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyChangeRoleConfirmation()}>OK</button>
                    <button className="Simple_White_Button" onClick={() => this.handleCancelChangeRoleConfirmation()}>Cancel</button> */}
                </CustomModal>

            </div >
        );
    }

    //#region handler popup region
    closeChangeRoleConfirmationPopup = () => {
        this.isChangeRoleConfirmationPopupOpen = false;
        this.setState({});
    }

    openFailedAlertPopup = () => {
        this.isAnyFailedAlertPopupOpen = true;
        this.setState({});
    }
    openSuccessAlertPopup = () => {
        this.isAnySuccessAlertPopupOpen = true;
        this.setState({});
    }
    closeFailedAlertPopup = () => {
        this.isAnyFailedAlertPopupOpen = false;
        this.setState({});
    }

    closeSuccessAlertPopup = () => {
        this.isAnySuccessAlertPopupOpen = false;
        this.setState({});
    }

    //#endregion

    //#region handler change text inputs
    handlerChangeCurrentPassword = (e) => {
        e.preventDefault();
        this.updatePassword_DTO.currentPassword = e.target.value;
        if (this.updatePassword_DTO.currentPassword === "" || this.updatePassword_DTO.currentPassword === null) {
            this.isCurrentPasswordEmpty = true;
        } else
            this.isCurrentPasswordEmpty = false;
        this.handlerChangeStateOfSubmitButton();
    }

    handlerChangeNewPassword = (e) => {
        e.preventDefault();
        this.updatePassword_DTO.newPassword = e.target.value;
        if (this.updatePassword_DTO.newPassword === ""
            || this.updatePassword_DTO.newPassword === null) {
            this.isNewPasswordEmpty = true;
            this.canClickUpdatePassword = false;

        }
        else
            this.isNewPasswordEmpty = false;

        if ((this.updatePassword_DTO.newPassword !== ""
            && this.updatePassword_DTO.newPassword !== null)
            && this.updatePassword_DTO.newPassword.length < 6) {
            this.isNewPasswordLessThan6Characters = true;
            this.canClickUpdatePassword = false;

        }
        else
            this.isNewPasswordLessThan6Characters = false;

        if (this.isContainSpecialCharacter(this.updatePassword_DTO.newPassword)) {
            this.isNewPasswordContainSpecialCharacters = true;
            this.canClickUpdatePassword = false;

        }
        else
            this.isNewPasswordContainSpecialCharacters = false;

        this.handlerChangeStateOfSubmitButton();
    }

    handlerChangeConfirmationPassword = (e) => {
        e.preventDefault();
        this.updatePassword_DTO.confirmationPassword = e.target.value;
        //check confirmation password
        if (this.updatePassword_DTO.confirmationPassword === ""
            || this.updatePassword_DTO.confirmationPassword === null) {
            this.isConfirmationPasswordEmpty = true;
            this.canClickUpdatePassword = false;
        }
        else
            this.isConfirmationPasswordEmpty = false;

        if ((this.updatePassword_DTO.confirmationPassword !== ""
            && this.updatePassword_DTO.confirmationPassword !== null)
            && this.updatePassword_DTO.confirmationPassword.length < 6) {
            this.isConfirmationPasswordLessThan6Characters = true;
            this.canClickUpdatePassword = false;
        }
        else
            this.isConfirmationPasswordLessThan6Characters = false;

        if (this.isContainSpecialCharacter(this.updatePassword_DTO.confirmationPassword)) {
            this.isConfirmationPasswordContainSpecialCharacters = true;
            this.canClickUpdatePassword = false;
        }
        else
            this.isConfirmationPasswordContainSpecialCharacters = false;

        this.handlerChangeStateOfSubmitButton();
    }

    handlerChangeStateOfSubmitButton = () => {
        this.canClickUpdatePassword = true;
        console.log("As")
        //check current password
        console.log(this.updatePassword_DTO.currentPassword)
        if (this.updatePassword_DTO.currentPassword === ""
            || this.updatePassword_DTO.currentPassword === null) {
            this.canClickUpdatePassword = false;
            this.setState({});
            return;
        }

        //check new password
        if (this.updatePassword_DTO.newPassword === ""
            || this.updatePassword_DTO.newPassword === null) {
            this.canClickUpdatePassword = false;
            this.setState({});
            return;
        }

        if ((this.updatePassword_DTO.newPassword !== ""
            && this.updatePassword_DTO.newPassword !== null)
            && this.updatePassword_DTO.newPassword.length < 6) {
            this.canClickUpdatePassword = false;
            this.setState({});
            return;
        }

        if (this.isContainSpecialCharacter(this.updatePassword_DTO.newPassword)) {
            this.canClickUpdatePassword = false;
            this.setState({});
            return;
        }

        //check confirmation password
        if (this.updatePassword_DTO.confirmationPassword === ""
            || this.updatePassword_DTO.confirmationPassword === null) {
            this.canClickUpdatePassword = false;
            this.setState({});
            return;
        }

        if ((this.updatePassword_DTO.confirmationPassword !== ""
            && this.updatePassword_DTO.confirmationPassword !== null)
            && this.updatePassword_DTO.confirmationPassword.length < 6) {
            console.log("A")
            this.canClickUpdatePassword = false;
            this.setState({});
            return;
        }

        if (this.isContainSpecialCharacter(this.updatePassword_DTO.confirmationPassword)) {
            this.canClickUpdatePassword = false;
            this.setState({});
            return;
        }

        this.setState({});
    }
    //#endregion

    //#region main handler to call APIs 
    handlerUpdatePassword = (e) => {
        e.preventDefault();

        //check if new password and confirmation pass word is the same?
        if (this.updatePassword_DTO.confirmationPassword !== this.updatePassword_DTO.newPassword) {
            this.notifyContent = "Thất bại";
            this.notifyContent = "Mật khẩu mới và mật khẩu xác nhận không khớp nhau!";
            this.openFailedAlertPopup();
            return;
        }

        //call function to update password

    }

    //#endregion

    //#region
    isContainSpecialCharacter(str) {
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
    }
}
export default Admin_UpdatePassword;