import React from "react";
import { ClickAwayListener } from '@material-ui/core';
import dropdown_btn from 'assets/images/dropdown_icon.png';
// import white_dropdown_btn from 'assets/images/white_dropdown_icon.png';
import "./Combobox.scss"

export default class Combobox extends React.Component {
    constructor(props) {
        super(props);

        this.isAnyValueChanged = false; //will become true if you choose an option

        this.state = {
            isDropdownOpen: false,
        }

        //các option phải có dạng 
        this.selectedOption = {
            id: "",
            name: ""
        }

        this.placeHolder = "All";
        //if you don't want to show placeHolder => assign name by "none". 
        //=> it will show selected option have name equal to name of selectedOption ID
        //placeHolder is not use as an option :)if use want to use an option default, assign placeHolder by none

        //if you used selectedOption ID, please assign name of placeHolder by none 

        this.disabled = false; //if you want to disable combobox, you this.

        this.validation = this.props.validation;
        this.errorMessage = "";
        this.selectorRules = {};
        this.errorElement = null;
        this.rules = this.props.validation.rules || [];

        this.isHaveFocus = false;

    }

    componentDidMount() {

    }

    closeAllOption = () => {
        let parent_id = "combobox-" + this.props.id;
        let show_text_id = "combobox-text-" + this.props.id;
        let dropdown_element_id = "combobox-btn-element-" + this.props.id;
        let container_id = "dropdown-container-" + this.props.id;

        let parent_menu_item = document.getElementById(parent_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let show_text = document.getElementById(show_text_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            parent_menu_item.style.background = "white";
            parent_menu_item.style.borderRight = "var(--gray) 1px solid";
            parent_menu_item.style.paddingLeft = "0px";
            show_text.style.color = "var(--black)";
            dropdown_element.src = dropdown_btn;
        }
        this.setState({})
    }

    onBlur = () => {
        this.closeAllOption();
        this.validation.rules.forEach((rule) => {
            this.validate(rule);
        });

    }

    handleComboboxClick = (e, combobox_id, combobox_text_id, dropdown_element_id, container_id) => {
        e.preventDefault();

        let parent_menu_item = document.getElementById(combobox_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            dropdown_element.src = dropdown_btn;
        }
        else {
            parent_menu_item.style.background = "var(--white)"
            parent_menu_item.style.borderRight = "3px solid var(--blue)"
            dropdown_container.style.display = "block";
            dropdown_element.src = dropdown_btn;
        }

        //cho nay can them vao mot doan xu ly cho props
        this.setState({ isDropdownOpen: true });

        this.isHaveFocus = true;
    }

    handleOptionClick = (id) => {
        let item_id = "combobox-option-" + this.props.id + "-" + id;
        let combobox_option = document.getElementById(item_id);

        for (let i = 1; i <= this.props.options; i++) {
            let combobox_option_index_id = "combobox-option-" + this.props.id + "-" + this.props.options[i].id;
            let combobox_option_index = document.getElementById(combobox_option_index_id);
            combobox_option_index.className = "combox-option";
        }

        this.selectedOption = {
            id: parseInt(id),
            name: this.props.options.filter(item => item.id === id)[0].name
        }

        //pass to parent
        if (this.props.onOptionChanged)
            this.props.onOptionChanged(this.selectedOption);
        else console.log('error', "Please implement onOptionChanged() of Combobox!");
        combobox_option.className = "activated-combox-option";
        this.isAnyValueChanged = true;

        this.onBlur();
        this.setState({});
    }



    validate = (rule) => {


        if (!this.isHaveFocus) return;

        //lay element ngoai cung cua editor hien tai
        let wrapperCombobox = document.getElementById("combobox-wrapper-" + this.props.id);

        //lay element error 
        this.errorElement = this.getParent(wrapperCombobox, this.validation.formGroupSelector).querySelector(this.validation.errorSelector);

        this.selectorRules[rule.selector] = [rule.test];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < this.selectorRules[rule.selector].length; ++i) {
            this.errorMessage = this.selectorRules[rule.selector][i](this.selectedOption.name);
            if (this.errorMessage) break;
        }

        if (this.errorMessage) {
            this.errorElement.innerText = this.errorMessage;

            this.getParent(wrapperCombobox, this.validation.formGroupSelector).classList.add('invalid');
            // document.getElementById("combobox-wrapper-" + this.props.id).classList.add("invalid");

        } else {
            this.errorElement.innerText = '';
            this.getParent(wrapperCombobox, this.validation.formGroupSelector).classList.remove('invalid');
            // document.getElementById("combobox-wrapper-" + this.props.id).classList.remove("invalid");
        }

        return !this.errorMessage;
    }

    //lay form
    getParent = (wrapperCombobox, selector) => {
        while (wrapperCombobox.parentElement) {
            if (wrapperCombobox.parentElement.matches(selector)) {
                return wrapperCombobox.parentElement;
            }
            wrapperCombobox = wrapperCombobox.parentElement;
        }
    }

    render() {
        if (this.selectedOption.id === "" && this.props.selectedOptionID) {
            this.selectedOption = {
                id: this.props.selectedOptionID,
                name: this.props.options.filter(item => item.id === parseInt(this.props.selectedOptionID))[0].name
            }
        }

        let options = this.props.options.map(option =>
            this.selectedOption.id === option.id ?
                <div className="activated-combox-option"
                    id={"combobox-option-" + this.props.id + "-" + option.id}
                    key={option.id}>
                    {option.name}
                    <div>A</div>
                </div>
                :
                <div className="combox-option"
                    id={"combobox-option-" + this.props.id + "-" + option.id}
                    key={option.id}
                    onClick={() => this.handleOptionClick(option.id)}>
                    {option.name}
                </div>
        )

        return (
            <div id={"combobox-wrapper-" + this.props.id} className='form-combobox wrapper-combobox' >
                < ClickAwayListener onClickAway={() => { this.onBlur() }}>
                    <div>
                        {/* select */}
                        <div className="combox" id={"combobox-" + this.props.id}
                            onClick={(e) => this.handleComboboxClick(e, "combobox-" + this.props.id, "combobox-text-" + this.props.id, "combobox-btn-element-" + this.props.id, "dropdown-container-" + this.props.id)}>
                            <div className="display-flex">
                                <div className="combox-text" id={"combobox-text-" + this.props.id}>
                                    {
                                        this.props.placeHolder === "none" ? //neu khong dung placeHolder
                                            <div>
                                                {
                                                    this.props.options.map(item =>
                                                        <div>
                                                            {this.selectedOption.id ?
                                                                <div>
                                                                    {item.id === this.selectedOption.id //neu da chon roi thi se hien thi cac gia tri duoc chon trong bang cac option
                                                                        ? item.name
                                                                        : ""}
                                                                </div> : <div>
                                                                    {item.id === this.props.selectedOptionID //neu da chon roi thi se hien thi cac gia tri duoc chon trong bang cac option
                                                                        ? item.name
                                                                        : ""}
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            : // neu co dung place holder
                                            !this.isAnyValueChanged ? 
                                                <div>
                                                    {(!this.props.selectedOptionID && this.props.placeHolder === "none") ?
                                                        <div>
                                                            {
                                                                this.props.selectedOptionID ?
                                                                    this.selectedOption.name
                                                                    : this.props.options[0].name
                                                            }</div>
                                                        :
                                                        <div>
                                                            {this.props.selectedOptionID ?
                                                                this.selectedOption.name
                                                                : this.props.placeHolder
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                                : this.selectedOption.name//neu dung, khi co thay doi se chuyen thanh selected name
                                    }
                                </div>
                            </div>

                            {/* dropdown-icon */}
                            <img alt="v" className="Dropdown_Btn_Element" style={{ marginLeft: "10px", userSelect: "none" }} src={dropdown_btn} id={"combobox-btn-element-" + this.props.id} />
                        </div>

                        {/* dropdown */}
                        {this.state.isDropdownOpen ? (
                            <div className="dropdown-container" id={"dropdown-container-" + this.props.id}>
                                {options}
                                <div className="margin-bottom-5px" />
                                <div className="margin-bottom-5px" />
                            </div>
                        ) : <div id={"dropdown-container-" + this.props.id}></div>}
                    </div>
                </ClickAwayListener >
            </div >
        );
    }
}


Combobox.isRequired = function (message) {
    return {
        selector: ".form-error-label",
        test: function (value) {
            return value !== "" ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}
