
import { CKEToolbarConfiguration } from "./CKEditorConfiguration"
import Loader from 'components/common/Loader/Loader'
import React, { Component } from 'react';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.editorID = "ck-editor-" + this.props.id;
    this.options = this.props.options;
    this.state = { content: '' };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.errorMessage = "";
    this.selectorRules = {};
    this.errorElement = null;
    this.rules = this.props.options.rules || [];
  }

  componentDidMount() {
    let toolbarConfig = this.props.config ? this.props.config : CKEToolbarConfiguration;

    let configuration = {
      toolbar: toolbarConfig
    };

    window.CKEDITOR.replace(this.editorID, configuration);

    window.CKEDITOR.instances[this.editorID].on('change', function () {
      let data = window.CKEDITOR.instances[this.editorID].getData();
      this.onEditorChange(data);
    }.bind(this));

    window.CKEDITOR.instances[this.editorID].on('focus', function () {
      this.onFocus();
    }.bind(this));

    window.CKEDITOR.instances[this.editorID].on('blur', function () {
      this.onBlur();
    }.bind(this));

    window.CKEDITOR.instances[this.editorID].on('instanceReady', function () {
      this.onInstanceReady();
    }.bind(this));

    document.getElementById('ck-editor-loader' + this.props.id).style.display = "block";
    document.getElementById("cke-wrapper-" + this.props.id).style.border = "none";

    //for validation:

    //lay de valid cai form nay
    // var formElement = document.querySelector(this.options.form);
    // if (formElement) {

    // }


  }

  onEditorChange = () => {

    //validate
    this.options.rules.forEach((rule) => {
      this.validate(rule);
    });

    if (this.props.onChange) {
      this.props.onChange();
    }

  }

  onFocus = () => {

    //change style
    document.getElementById("cke-wrapper-" + this.props.id).classList.add("focus");
    document.getElementById("cke-wrapper-" + this.props.id).classList.remove("invalid");

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur = () => {

    //change style
    document.getElementById("cke-wrapper-" + this.props.id).classList.remove("focus");

    //validation
    this.options.rules.forEach((rule) => {
      this.validate(rule);
    });

    if (this.props.onBlur)
      this.props.onBlur()
  }

  onInstanceReady = () => {
    document.getElementById('ck-editor-loader' + this.props.id).style.display = "none";
    document.getElementById("cke-wrapper-" + this.props.id).style.border = "1px solid var(--gray)";
    if (this.props.onInstanceReady)
      this.props.onInstanceReady()
  }

  validate = (rule) => {


    //lay element ngoai cung cua editor hien tai
    let wrapperEditor = document.getElementById("cke-wrapper-" + this.props.id);

    //lay element error 
    this.errorElement = this.getParent(wrapperEditor, this.options.formGroupSelector).querySelector(this.options.errorSelector);


    // // Lấy ra các rules của selector => this.rules

    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm
    for (var i = 0; i < this.rules.length; ++i) {

      if (window.CKEDITOR.instances[this.editorID].getData) {
        this.errorMessage = this.rules[i];

      }

      if (this.errorMessage) break;
    }

    if (this.errorMessage) {
      // this.errorElement.innerText = this.props.options.rules.errorMessage;
      this.errorElement.innerText = this.errorMessage;

      this.getParent(wrapperEditor, this.options.formGroupSelector).classList.add('invalid');

    } else {
      this.errorElement.innerText = '';
      this.getParent(wrapperEditor, this.options.formGroupSelector).classList.remove('invalid');
    }

    return !this.errorMessage;
  }

  //lay form
  getParent = (wrapperEditor, selector) => {
    while (wrapperEditor.parentElement) {
      if (wrapperEditor.parentElement.matches(selector)) {
        return wrapperEditor.parentElement;
      }
      wrapperEditor = wrapperEditor.parentElement;
    }
  }

  render() {
    return (

      <div className="cke-wrapper" id={"cke-wrapper-" + this.props.id}>

        <input type="text-area" className="fake-cke" id={this.editorID} name={this.editorID} cols="100" rows="6" defaultValue={this.props.value}>
        </input>

        <div id={"ck-editor-loader" + this.props.id}>
          <Loader />
        </div>

      </div>

    );
  }
}


Editor.isNotAllowSpecialCharacter = function (message) {

  console.log("checked S");

  return {
    selector: ".form-error-label",
    test: function (value) {
      return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(value) ? undefined : message || 'Vui lòng nhập trường này'
    }
  };
}

Editor.isRequired = function (message) {
  console.log("checked R");

  return {
    selector: ".form-error-label",
    test: function (value) {
      return value ? undefined : message || 'Vui lòng nhập trường này'
    }
  };
}

export default Editor;