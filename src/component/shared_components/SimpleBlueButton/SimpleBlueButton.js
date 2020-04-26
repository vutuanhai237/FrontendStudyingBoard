import React, { Component } from 'react'
import './SimpleBlueButton.scss'

//Set text props for this component
class SimpleBlueButton extends Component {
    
    render() {
        return (
            <div className="Root_Simple_Blue_Button">
                {this.props.text}
            </div>
        )
    }
}

export default SimpleBlueButton;
