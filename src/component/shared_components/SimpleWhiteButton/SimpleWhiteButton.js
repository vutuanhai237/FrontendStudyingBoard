import React, { Component } from 'react'
import './SimpleWhiteButton.scss'

//Set text props for this component
class SimpleWhiteButton extends Component {
    
    render() {
        return (
            <div className="Root_Simple_White_Button">
                {this.props.text}
            </div>
        )
    }
}

export default SimpleWhiteButton;
