import React, { Component } from 'react'
import './AdminBrowsePostComponent.scss'
import PostSummary from '../post_summary/PostSummary'

class AdminBrowsePostComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            posts:
                [
                    {
                        "id": 60,
                        "url": "some text",
                        "title": "some text",
                        "Summary": "some text",
                        "authorName": "some text",
                        "authorID": 33,
                        "categoryID": 51,
                        "categoryName": "some text",
                        "readTime": "some text",
                        "likeCount": 88,
                        "commentCount": 75,
                        "liked": true,
                        "saved": true,
                        "publishDate": "some text",
                        "authorAvatarURL": "some text",
                        "contentURL": "some text",
                        "tags": [
                            "some text",
                            "some text"
                        ]
                    },
                    {
                        "id": 5,
                        "url": "some text",
                        "title": "some text",
                        "Summary": "some text",
                        "authorName": "some text",
                        "authorID": 29,
                        "categoryID": 8,
                        "categoryName": "some text",
                        "readTime": "some text",
                        "likeCount": 39,
                        "commentCount": 27,
                        "liked": true,
                        "saved": true,
                        "publishDate": "some text",
                        "authorAvatarURL": "some text",
                        "contentURL": "some text",
                        "tags": [
                            "some text",
                            "some text"
                        ]
                    }
                ]
        }

    }


    render() {
        let summaryPostList = this.state.posts.map((item) => {
            return (               
                    <PostSummary item={item}></PostSummary>              
            );
        })
        return (
            <div className = "Root_Admin_Post_List_Component">
                {summaryPostList}
            </div>
        );
    }
}
export default AdminBrowsePostComponent;