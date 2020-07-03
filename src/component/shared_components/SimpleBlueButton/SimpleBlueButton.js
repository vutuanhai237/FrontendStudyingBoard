import React, { Component } from 'react'
import './SimpleBlueButton.scss'

//Set text props for this component
class SimpleBlueButton extends Component {
    
    render() {
        return (
            <button className="Simple_Blue_Button">
                {this.props.text}
            </button>
        )
    }
}

export default SimpleBlueButton;
