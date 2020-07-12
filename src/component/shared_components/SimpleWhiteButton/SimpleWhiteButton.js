import React, { Component } from 'react'
import './SimpleWhiteButton.scss'

//Set text props for this component
class SimpleWhiteButton extends Component {
    
    render() {
        return (
            <button className="Simple_White_Button">
                {this.props.text}
            </button>
        )
    }
}

export default SimpleWhiteButton;
