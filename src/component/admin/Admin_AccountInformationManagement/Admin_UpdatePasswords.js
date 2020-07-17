/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react'
import '../AdminPage'
import Admin_Titlebar from '../_admin_components/Admin_Titlebar/Admin_Titlebar'
import CustomModal from '../../shared_components/CustomModalPopup/CustomModal'
import '../../shared_components/Avatar.scss'

class Admin_UpdatePasswords extends Component {
    constructor(props) {
        super();
        this.isAnyChangeRoleDropdownComboboxOpen = true;
        this.canClickUpdatePassWord = false;
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

        return (
            <div>
                <div>
                    <div className="display_flex width_100_percents" >
                        <div className="Account_Information_Update_Passwords_Port">
                            <form onSubmit={() => this.handlerUpdatePassword()}>
                                <div className="Simple_Gray_Label_18px " style={{ textAlign: "center", color: "#5279db", fontSize: "1.3rem" }}>Cập nhật mật khẩu</div>

                                {/* Display name */}

                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Mật khẩu hiện tại:
                             </div>
                                <input type="password" className="Simple_Text_Input" defaultValue="" onChange={(e) => this.handlerChangeCurrentPasswords(e)} />

                                {/* Username */}
                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Mật khẩu mới:
                              </div>
                                <input type="password" className="Simple_Text_Input" onChange={(e) => this.handlerChangeNewPasswords(e)} />

                                {/* Passwords */}
                                <div className="Simple_Gray_Label_18px margin_top_10px">
                                    Xác nhận mật khẩu mới:
                            </div>
                                <input type="password" className="Simple_Text_Input" onChange={(e) => this.handlerChangeConfirmationNewPasswords(e)} />
                            </form>
                        </div>


                    </div>
                    <div className="display_flex margin_top_10px" >
                        <button className="Simple_Blue_Button margin_auto" disabled={!this.canClickUpdatePassWord} >
                            Xác nhận
                        </button>
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

    //#region handler change text inputs
    handlerChangeCurrentPasswords = (e) => {

    }

    handlerChangeNewPasswords = (e) => {

    }

    handlerChangeConfirmationNewPasswords = (e) => {

    }
    //#endregion

    handlerUpdatePassword = (e) => {
        e.preventDefault();
    }


}
export default Admin_UpdatePasswords;