import React, { Component } from 'react';
import './Tag.scss';

//Set text props for this component
class Tag extends Component {

    //onDelete, tag: id, content

    constructor(props) {
        super(props);
        console.log(this.props.onDelete)
    }

    onDelete = () => {
        this.props.onDeleteTag(this.props.tag);
    }

    render() {
        return (
            <div className="simple-tag">
                <div style={{ display: "flex" }}>
                    {!this.props.isReadOnly && <div onClick={this.onDelete} className="tag-delete-btn"><div className="close_8x8" /> </div>}
                    <div style = {{paddingLeft: "5px" }}> {this.props.tag.content} </div>
                </div>
            </div>
        )
    }


}

export default Tag;
