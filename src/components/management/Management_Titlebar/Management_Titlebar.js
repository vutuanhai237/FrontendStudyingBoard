import React, { Component } from 'react'
import './Management_Titlebar.scss'

class Management_Titlebar extends Component {
    render() {
        return (
            <div className="Management_Horizontal_Menu_Layout">
                {/* Menu bar */}
                <div className="Horizontal_Menu_Bar">
                    <div className="Main_Title">{this.props.title}</div>
                </div>
            </div>
        );
    }
}
export default Management_Titlebar;