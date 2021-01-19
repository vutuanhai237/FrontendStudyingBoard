
import { CKEToolbarConfiguration } from "./CKEditorConfiguration"
import Loader from 'components/common/Loader/Loader'
import React, { Component } from 'react';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: 'false' };
    this.editorID = "ck-editor-" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

    let config = this.props.config ? this.props.config : CKEToolbarConfiguration;

    let configuration = {
      toolbar: { config }
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
  }

  onEditorChange = () => {
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  onFocus = () => {
    document.getElementById("cke-wrapper-" + this.props.id).classList.add("focus");
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur = () => {
    document.getElementById("cke-wrapper-" + this.props.id).classList.remove("focus");
    if (this.props.onBlur)
      this.props.onBlur()
  }

  onInstanceReady = () => {
    document.getElementById('ck-editor-loader' + this.props.id).style.display = "none";
    document.getElementById("cke-wrapper-" + this.props.id).style.border = "1px solid var(--gray)";
    if (this.props.onInstanceReady)
      this.props.onInstanceReady()
  }

  render() {
    return (
      <div className="cke-wrapper" id={"cke-wrapper-" + this.props.id}>
        {/* <CKEditor
          
          config={editorConfiguration}
          id={this.props.id}
          onChange={() => this.onEditorChange()}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
        /> */}
        <textarea className = "cke-text-area" id={this.editorID} name={this.editorID} cols="100" rows="6" defaultValue={this.props.value}></textarea>

        <div id={"ck-editor-loader" + this.props.id}>
          <Loader />
        </div>

      </div>

    );
  }
}

export default Editor;