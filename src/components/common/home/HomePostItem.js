import React, { Component } from 'react'

//resource
import graySaveIcon from 'assets/icons/24x24/gbookmark_icon_24x24.png'
import blueSaveIcon from 'assets/icons/24x24/bfbookmark_icon_24x24.png'

import trash_icon from 'assets/icons/24x24/trash_icon_24x24.png'
import { itemType } from 'constants.js'

//styles
import 'components/styles/DocPostSummary.scss'
import 'components/styles/SimpleButton.scss'
import './HomeItem.scss'

//components
import PopupMenu from 'components/common/PopupMenu/PopupMenu'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'

import Loader from 'components/common/Loader/Loader'
import { Link } from 'react-router-dom'
import gray_btn_element from 'assets/images/g_btn_element.png'
import liked_btn from 'assets/images/liked_btn.png'
import unliked_btn from 'assets/images/unliked_btn.png'
import full_blue_bookmark_btn from 'assets/images/full_blue_bookmark_btn.png'
import gray_bookmark_btn from 'assets/images/gray_bookmark_btn.png'

class CourseSummaryItem extends Component {

  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.title = this.props.title;
    this.image = this.props.image;
    this.isLiked = false;

  }

  onSaveBtnClick = () => {

  }

  onUnSaveBtnClick = () => {

  }

  componentDidMount() {

  }

  toggleLikeImage = () => {
    this.isLiked = !this.isLiked;
    this.setState({});
  }

  toggleSaveImage = () => {
    this.isSaved = !this.isSaved;
    this.setState({});
  }

  render() {
    let likeBtn = <div></div>;
    let saveBtn = <div></div>;

    //render likeBtn
    if (!this.isLiked) {
      likeBtn = <img className="post-like-btn" alt="like" src={liked_btn} onClick={this.toggleLikeImage}></img>
    }
    else {
      likeBtn = <img className="post-like-btn" alt="like" src={unliked_btn} onClick={this.toggleLikeImage} ></img>
    }

    //render saveBtn
    if (!this.isSaved) {
      saveBtn = <img className="save-btn" alt="dislike" src={full_blue_bookmark_btn}></img>
    }
    else {
      saveBtn = <img className="save-btn" alt="dislike" src={gray_bookmark_btn} ></img>
    }
    return (
      <div className="home-item" >
        <img className="cover-image" alt='cover' src={this.props.imageURL} />
        <div className="home-item-metadata" >
          <div className="d-flex">
            <div className="d-flex">
              <div className="category">
                {this.props.categoryName}
              </div>
            </div>
            <div className="metadata-light-black-label">bởi</div>
            <Link className="link-label" to={/user/}>
              {this.props.authorName}
            </Link>
          </div>
        </div>
        {/* title */}
        <Link to={"/posts/" + this.props.id}>
          <div className="title">
            {this.props.title}
          </div>
        </Link>

        <div className="metadata-2" >
          <div className="d-flex"  >
            <img alt="*" className="metadata-icon" src={gray_btn_element} />
            <div className="metadata-light-black-label" style={{ marginLeft: "2px" }}>
              {this.props.readingTime / 60} phút đọc
            </div>
          </div>

          <div className="d-flex" >
            <img alt="*" className="metadata-icon" src={gray_btn_element} />
            <div className="metadata-light-black-label" style={{ marginLeft: "2px" }}>
              {this.props.publishDtm.substring(0, 10)}
            </div>
          </div>
        </div>

        <div className="summary">
          {this.props.summary}
        </div>

        <div className="reaction-bar">
        
            <div className="d-flex">
              <div className="d-flex like-btn-container">
                <div> {likeBtn}</div>
                <div className="like-count">{this.props.likes}</div>
              </div>
            </div>

            <div className="d-flex">
              <div className="d-flex save-btn-container mg-left-5px" onClick={this.toggleSaveImage}>
                <div>{saveBtn}</div>
                {this.isSaved ? "Lưu" : "Huỷ"}
              </div>
              <div className="comment-count-container">
                Bình luận
                <div style={{ paddingLeft: "5px" }}>
                  {this.props.comments}
                </div>
              </div>
            </div>

        </div>
      </div >
    );
  }


}
export default CourseSummaryItem;