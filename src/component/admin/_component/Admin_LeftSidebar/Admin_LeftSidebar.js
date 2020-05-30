import React, { Component } from 'react'
import './Admin_LeftSidebar.scss'
import SimpleBlueButton from '../../../shared_components/SimpleBlueButton/SimpleBlueButton'
import btn_element from '../../../../img/btn_element.png'

class Admin_LeftSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "info": {
                "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                "displayName": "Nguyen Van Dong",
                "userName": "tesla",
                "gmail": "dongnv.since1999@gmail.com",
                "password_length": 10
            },
        }
    }
    render() {
        return (
            < div className="Admin_Info_Menu_Port" >
                {/* Admin Infor Port */}
                < div className="Admin_Info_Port" >
                    <div className="Avatar_Port">
                        <img alt="avatar" className="Avatar" src={this.state.info.avatarUrl} />
                    </div>
                    <div className="User_Name_Gmail_Port">
                        <div className="Display_Name">
                            {this.state.info.displayName}
                        </div>
                        <div className="Gmail">
                            {this.state.info.gmail}
                        </div>
                        <div className="Logout_Btn_Port">
                            {/* <button className="Logout_Btn">Đăng xuất</button> */}
                            <SimpleBlueButton text="Đăng xuất"></SimpleBlueButton>
                        </div>
                    </div>
                </div >
                {/* Admin Menu Port */}
                < div className="Admin_Vertical_Menu_Port" >
                    <div className="Vertical_Menu_Item">
                        <img alt="button" className="Btn_Element" src={btn_element}></img>
                        <div className="Vertical_Menu_Item_Text">
                            Tên hiển thị
                      </div>
                    </div>
                    <div className="Vertical_Menu_Item">
                        <img alt="button" className="Btn_Element" src={btn_element}></img>
                        <div className="Vertical_Menu_Item_Text">
                            Đổi mật khẩu
                        </div>
                    </div>

                    <div className="Vertical_Menu_Item">
                        <img alt="button" className="Btn_Element" src={btn_element}></img>
                        <div className="Vertical_Menu_Item_Text">
                            Bài đăng
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default Admin_LeftSidebar;