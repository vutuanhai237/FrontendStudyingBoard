import React from "react";
import './CustomModal.scss'


//delete icon
import gray_delete_icon from '../../../img/gray_delete_icon.png'
import red_delete_icon from '../../../img/red_delete_icon.png'
import confirmation_icon from '../../../img/confirmation_management_icon.png'
// import '../../../'

//import button
import '../SimpleRedButton/SimpleRedButton.scss'
import '../SimpleBlueButton/SimpleBlueButton.scss'
import '../SimpleWhiteButton/SimpleWhiteButton.scss'

export default class CustomModal extends React.Component {

    state = {
        open: false
    };

    showModal = e => {
        this.setState({
            open: true
        });
    };

    render() {

        if (!this.props.open) {
            return null;
        }
        return <div>
            {this.props.shadow ? <div className="Custom_Modal_Out_Shadow" /> : <></>}

            <div className="Custom_Modal_Out_Port">
                <div className="Custom_Modal_Wrapper">
                    {this.props.custom === false ?
                        <>
                            <div className="Custom_Modal_Header">
                                <div> {this.props.title} </div>
                                <img alt="header" src={gray_delete_icon} style={{ height: "1em", width: "auto" }} />
                            </div>

                            <div className="Custom_Modal_Body">
                                <img className="Custom_Modal_Main_Icon" src={confirmation_icon} alt="confirmation" />
                                <div className="Custom_Modal_Main_Text_Port">
                                    <div className="Custom_Modal_Main_Text">
                                        {this.props.text}
                                    </div>
                                </div>
                            </div>

                            <div className="Custom_Modal_Footer">
                                {this.props.children}
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    }
}