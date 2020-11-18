import React from "react";
import { ClickAwayListener } from '@material-ui/core'
import dropdown_btn from 'assets/images/dropdown_icon.png'
export default class Combobox extends React.Component {
    constructor(props) {
        super(props);

        //id
        this.state = {
            selectedOptionID: 1,
            options: [
                {
                    id: 0,
                    value: "All"
                },
                {
                    id: 1,
                    value: "Option 1"
                },
                {
                    id: 2,
                    value: "Option 2"
                }
            ]
        }
    }

    closeAllOption = () => {

    }

    onCloseOption = () => {

    }

    onSelectedOption = () => { 
        
    }

    render() {

        let options = this.props.options.map(option =>
            this.selectedOption === this.props.option.content ?
                <div className="activated-combo-box-option"
                    id={this.props.id + "-" + this.props.options.id}
                    value={"Value A"}
                    key={this.props.options.id}>
                    "Activated value"
                </div>
                :
                <div className="combo-box-option"
                    id={this.props.id + "-" + this.props.options.id}
                    value={"Value D"}
                    key={this.props.option.id}
                    onClick={() => this.handleOptionClick(this.props.id + "-" + this.props.options.id)}>
                    "Deactivated value"
                </div>

        )

        return (
            < ClickAwayListener onClickAway={() => { this.closeAllOption() }}>
                <div style={{ position: "relative", display: "flex", width: "100%", zIndex: 10000 - this.userID }}>
                    <div style={{ position: "relative", display: "flex", justifyContent: "flex-end", width: "100%" }}>
                        <div style={{ position: "absolute", width: "140px" }}>
                            <div className="combo-box" id={"user-role-parent-dropdown-combobox-" + this.userID}
                                onClick={(e) => this.handleDropDownMenuClick(e, "user-role-parent-dropdown-combobox-" + this.userID, "user-role-parent-dropdown-combobox-text-" + this.userID, "user-role-dropdown-btn-element-" + this.userID, "user-role-dropdown-combobox-container-" + this.userID)}>
                                <div className="flex_container">
                                    <div className="Vertical_Menu_Item_Text" id={"user-role-parent-dropdown-combobox-text-" + this.userID}>

                                        {this.props.options.length > 0 ?
                                            "Test"
                                            : ""
                                        }
                                    </div>
                                </div>
                                <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id={"user-role-dropdown-btn-element-" + this.userID} />
                            </div>

                            {this.isAnyChangeRoleDropdownComboboxOpen ? (
                                <div className="combo-box-container" id={"user-role-dropdown-combobox-container-" + this.userID}>
                                    {options}
                                    <div className="margin-bottom-5px" />
                                    <div className="margin-bottom-5px" />
                                </div>
                            ) : <div id={"user-role-dropdown-combobox-container-" + this.userID}></div>}

                        </div>
                    </div>
                </div>
            </ClickAwayListener >
        );
    }
}