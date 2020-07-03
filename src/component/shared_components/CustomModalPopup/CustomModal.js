import React from "react";
import './CustomModal.scss'


//delete icon
// import gray_delete_icon from '../../../img/gray_delete_icon.png'
import red_delete_icon from '../../../img/red_delete_icon.png'
import confirmation_icon from '../../../img/confirmation_management_icon.png'
import success_management_icon from '../../../img/success_management_icon.png'
import fail_management_icon from '../../../img/fail_management_icon.png'
// import '../../../'

//import button
import '../SimpleRedButton/SimpleRedButton.scss'
import '../SimpleBlueButton/SimpleBlueButton.scss'
import '../SimpleWhiteButton/SimpleWhiteButton.scss'

export default class CustomModal extends React.Component {

    //to use this component:
    //shadow = {true} if you want to have a back ground fullscreen after your modal/
    //custom = {true} 
    //type = "confirmation" => you will have a confirmation icon in component 
    //but, you must to code footer and handler event in your parent component
    //type = "alert" => not to code any more, only set title and text
    //type = "custom" if you want to custom yout modal by code in children
        
    //tilte = "String": title of 
    //text = "String": main text

    render() {

        if (!this.props.open) {
            return null;
        }
        return (
            <div>
                {this.props.shadow ? <div className="Custom_Modal_Out_Shadow" /> : <></>}

                <div className="Custom_Modal_Out_Port">
                    <div className="Custom_Modal_Wrapper">
                        {!(this.props.type === "custom") ?
                            <>
                                <div className="Custom_Modal_Header">
                                    <div> {this.props.title} </div>
                                    <img className="Custom_Modal_Close_Button" alt="header" src={red_delete_icon}
                                        onClick={() => this.props.closeModal()} />
                                </div>

                                <div className="Custom_Modal_Body">
                                    {(this.props.type === "alert_success") ?
                                        <img className="Custom_Modal_Main_Icon" src={success_management_icon} alt="icon" />
                                        : <></>
                                    }
                                    {(this.props.type === "alert_fail") ?
                                        <img className="Custom_Modal_Main_Icon" src={fail_management_icon} alt="icon" />
                                        : <></>
                                    }
                                    {(this.props.type === "confirmation") ?
                                        <img className="Custom_Modal_Main_Icon" src={confirmation_icon} alt="icon" />
                                        : <></>
                                    }
                                    <div className="Custom_Modal_Main_Content_Port">
                                        <div className="Custom_Modal_Main_Text">
                                            {this.props.text}
                                        </div>
                                    </div>
                                </div>

                                {(this.props.type === "confirmation") ?
                                    <div className="Custom_Modal_Confirmation_Port">
                                        {this.props.children}
                                    </div>
                                    : <></>
                                }

                                {(this.props.type === "alert_success"||this.props.type === "alert_fail") ?
                                    <div className="Custom_Modal_Footer">
                                        <div className="Simple_Blue_Button" style={{ margin: "auto" }} onClick={() => this.props.closeModal()} >OK</div>
                                    </div>
                                    : <></>
                                }
                            </>
                            :
                            <></>}
                    </div>
                </div>
            </div>
        );
    }
}