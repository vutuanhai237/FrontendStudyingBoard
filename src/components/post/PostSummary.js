import React, { Component } from 'react'

import 'components/styles/DocPostSummary.scss'
import 'styles/SimpleButton.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_btn_element from 'assets/images/gray_btn_element.png'

import liked_btn from 'assets/images/liked_btn.png'
import unliked_btn from 'assets/images/unliked_btn.png'
import full_blue_bookmark_btn from 'assets/images/full_blue_bookmark_btn.png'
import gray_bookmark_btn from 'assets/images/gray_bookmark_btn.png'
import { Link } from 'react-router-dom'

class PostSummary extends Component {

  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.authorName = this.props.authorName;
    this.authorID = this.props.authorID;

    this.publishDtm = this.props.publishDtm;
    this.category = this.props.category;
    this.requestedCategoryID = this.props.requestedCategoryID;

    this.title = this.props.title;
    this.content = this.props.content;
    this.image = this.props.image;
    this.tags = this.props.tags;

    this.isLiked = false;
    this.isSaved = false;
  }

  componentDidMount() {

  }

  getFirstImage() {

  }

  //#region handle like, unlike buttons
  toggleLikeImage = () => {
    this.isLiked = !this.isLiked;
    this.setState({});
  }

  toggleSaveImage = () => {
    this.isSaved = !this.isSaved;
    this.setState({});
  }
  //#endregion

  //#region edit, delete button
  onDeleteBtnClick = () => {

  }

  onEditBtnClick = () => {

  }
  //#endregion

  render() {

    //#region like, unlike buttons

    //initiate some element
    let likeBtn = <div></div>;
    let saveBtn = <div></div>;

    //render likeBtn
    if (!this.isLiked) {
      likeBtn = <img className="like-btn" src={liked_btn} onClick={this.toggleLikeImage}></img>
    }
    else {
      likeBtn = <img className="like-btn" src={unliked_btn} onClick={this.toggleLikeImage} ></img>
    }

    //render saveBtn
    if (!this.isSaved) {
      saveBtn = <img className="save-btn" src={full_blue_bookmark_btn}></img>
    }
    else {
      saveBtn = <img className="save-btn" src={gray_bookmark_btn} ></img>
    }

    //#endregion

    return (
      <div className="summary-container" >
        <div className="summary-normal-metadata-container" >
          <div className="display-flex">

            <div className="display-flex">
              <div className="prefix-normal-category" />
              <div className="normal-category">
                {this.props.category}
              </div>
            </div>

            <div className="metadata-gray-label">bởi</div>
            <div className="link-label" onClick={() => this.navigateToAuthorPersonalPage()}>
              {this.props.authorName}
            </div>

            <div className="display-flex" >
              <img alt="*" className="metadata-icon" src={gray_btn_element} />
              <div className="metadata-gray-label" style={{ marginLeft: "2px" }}>
                {this.props.publishDtm}
              </div>
            </div>
          </div>
        </div>
        <div className="summary-title">
          {this.props.title}
        </div>
        <div className="display-flex" style={{ marginTop: "-10px" }} >
          <img alt="*" className="metadata-icon" src={gray_btn_element} />
          <div className="metadata-gray-label" style={{ marginLeft: "2px" }}>
            {this.props.readingTime} phút đọc
                        </div>
        </div>
        <div className="summary-summary">
          {this.props.summary}
        </div>

        <div className="summary-reaction-bar" style={{ right: "5px" }}>
          <div className="display-flex ">
            <div className="display-flex">
              <div> {likeBtn}</div>
              <div className="like-count">{this.props.likes}</div>
            </div>

            <div className="display-flex">
              <div className="btn-text-container" onClick={this.toggleSaveImage}>
                <div>{saveBtn}</div>
                <div className="save-text">{this.isSaved ? "Lưu" : "Huỷ"}</div>
              </div>
              <div className="comment-count-layout">
                <div className="comment-text">
                  Bình luận
              </div>
                <div style={{ paddingLeft: "5px" }}>
                  {this.props.comments}
                </div>
              </div>
            </div>
          </div>
          <div className="link-label margin-top-5px" onClick={() => { window.location.href = "/docs/category?id=" + this.props.id }}>
            Đọc tiếp ...
            </div>
        </div>

        <div className="justify-content-space-between">



          {this.props.type === postSummaryType.mySelf ?

            <div className="display-flex" >
              <div className="blue-button" style={{ marginRight: "5px" }} onClick={() => this.onEditBtnClick()}>Chỉnh sửa</div>
              <div className="red-button" onClick={() => { this.onDeleteBtnClick() }}>Xoá</div>
            </div>
            :
            <></>
          }

        </div>
      </div >
    );
  }

  handlerPreviewRequestedPost = () => {
    if (window.location.pathname.substring(0, 6) === "/admin") {
      window.location.href = "/admin/doc_approving/" + this.id;
      return;
    }
    if (window.location.pathname.substring(0, 5) === "/user")
      window.location.href = "/user/doc_approving/" + this.id;

  }

  handlerRejectRequestedPost = () => {
    this.isRejectRequestedPopupOpen = true;
    this.setState({});
  }

  handleCancelRejectRequestedPostConfirmation = () => {
    this.isRejectRequestedPopupOpen = false;
    this.setState({});
  }

  handlerVerifyRejectRequestedPostConfirmation = () => {
    this.isRejectRequestedPopupOpen = false;
    this.setState({});
  }

  // likePost() { }

}
export default PostSummary;

export const postSummaryType = { approving: "APPROVING", normal: "NORMAL", mySelf: "MY_SELF" }
