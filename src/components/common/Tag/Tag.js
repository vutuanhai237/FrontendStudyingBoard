import React, { Component } from 'react'
import './Tag.scss'

//Set text props for this component
class Tag extends Component {
    
    render() {
        return (
            <div className="Root_Tag">
                {this.props.text}
            </div>
        )
    }
}

export default Tag;
