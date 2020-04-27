import React, { Component } from 'react'
import './PostSummaryAuthorLink.scss'

//Set text props for this component
class PostSummaryAuthorLink extends Component {
    
    render() {
        return (
            <div className="Root_Post_Summary_Author_Link">
                {this.props.authorName}
            </div>
        )
    }
}

export default PostSummaryAuthorLink;
