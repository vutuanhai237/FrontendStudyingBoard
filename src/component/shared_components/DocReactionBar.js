import React, { Component } from 'react'
import './DocPostSummary.scss'
import liked_btn from '../../img/liked_btn.png'
import unliked_btn from '../../img/unliked_btn.png'
import full_blue_bookmark_btn from '../../img/full_blue_bookmark_btn.png'
import gray_bookmark_btn from '../../img/gray_bookmark_btn.png'
//Set text props for this component

class PostReactionBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "isLiked": "false",
            "isSaved": "false",
        }
        this.likeCount = this.props.likeCount;
    }

    toggleLikeImage = () => {
        this.state.isLiked = !this.state.isLiked;
        this.setState(this.state);
    }

    toggleSaveImage = () => {
        this.state.isSaved = !this.state.isSaved;
        this.setState(this.state);
    }

    render() {
        //initiate some element
        let likeBtn = <div></div>;
        let saveBtn = <div></div>;

        //render likeBtn
        if (!this.state.isLiked) {
            likeBtn = <img className="Post_Reaction_Bar_Like_Btn" src={liked_btn} onClick={this.toggleLikeImage}></img>
        }
        else {
            likeBtn = <img className="Post_Reaction_Bar_Like_Btn" src={unliked_btn} onClick={this.toggleLikeImage} ></ img>
        }
        //render saveBtn
        if (!this.state.isSaved) {
            saveBtn = <img className="Post_Reaction_Bar_Save_Btn" src={full_blue_bookmark_btn} onClick={this.toggleSaveImage}></img>
        }
        else {
            saveBtn = <img className="Post_Reaction_Bar_Save_Btn" src={gray_bookmark_btn} onClick={this.toggleSaveImage} ></ img>
        }

        return (
            <div className="Post_Reaction_Bar">
                <div className="Post_Reaction_Bar_Like_Btn_Layout">
                    {likeBtn}
                    <div className="Post_Reaction_Bar_Like_Count">{this.props.likeCount}</div>
                </div>

                <div className="Post_Reaction_Bar_Save_Comment_Btn_Layout">
                    <div className="Post_Reaction_Bar_Save_Btn_Layout">
                        {saveBtn}
                        <div className="Post_Reaction_Bar_Save_Text"> {this.state.isSaved ? "Lưu" : "Huỷ"} </div>
                    </div>
                    <div className="Post_Reaction_Bar_Comment_Btn_Layout">
                        <div className="Post_Reaction_Bar_Comment_Text">
                            Bình luận
                        </div>
                        <div className="Post_Reaction_Bar_Comment_Count">
                            {this.props.commentCount}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostReactionBar;
