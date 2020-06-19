import React, { Component } from 'react'
import './PostSummaryCategoryLink.scss'

//Set text props for this component
class PostSummaryCategoryLink extends Component {
    
    render() {
        return (
            <div className="Root_Post_Summary_Category_Link">
                {this.props.categoryName}
            </div>
        )
    }
}

export default PostSummaryCategoryLink;
