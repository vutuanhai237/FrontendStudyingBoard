import React, { Component } from 'react';
import 'components/common/Button/Button.scss'

//Set text props for this component
export default class Button extends Component {

    //onDelete, tag: id, content

    constructor(props) {
        super(props);
        console.log(this.props.onDelete);
        this.color = { red: "#fe3a3a", blue: "#5279db", green: "green", white: "white" }
        this.isDisabled = false;
        this.type = { close: "", delete: "", approve: "" }
    }

    onBtnClick = () => {
        this.props.onBtnClick();
    }

    render() {
        return (
            <button className="custom-button" style={{
                background: this.color[this.props.color],
                color: this.props.color === "white" ? "#363636" : "white",
                border: this.props.color === "white" ? "#363636" : this.props.color
            }} disabled={this.props.isDisabled} onClick={this.onBtnClick}>
                <div>   {this.props.icon}</div>
                <div>  {this.props.text} </div>
            </button>
        )
    }


}
