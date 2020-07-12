import React, { Component } from 'react'
import './SimpleRedButton.scss'

//Set text props for this component
class SimpleRedButton extends Component {
    
    render() {
        return (
            <button className="Simple_Red_Button">
                {this.props.text}
            </button>
        )
    }
}

export default SimpleRedButton;
