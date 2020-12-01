import React, { Component } from 'react'
import './Titlebar.scss'

class Titlebar extends Component {
    render() {
        return (
            <div className="Horizontal_Menu_Layout">
                {/* Menu bar */}
                <div className="title-bar">
                    <div className="Main_Title">{this.props.title}</div>
                </div>
            </div>
        );
    }
}
export default Titlebar;