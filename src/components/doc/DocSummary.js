import React, { Component } from 'react'

import 'components/styles/DocPostSummary.scss'
import 'styles/SimpleButton.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'

import gray_btn_element from 'assets/images/gray_btn_element.png'
import liked_btn from 'assets/images/liked_btn.png'
import unliked_btn from 'assets/images/unliked_btn.png'
import dislike_btn from 'assets/images/dislike_btn.png'
import undislike_btn from 'assets/images/undislike_btn.png'
import full_blue_bookmark_btn from 'assets/images/full_blue_bookmark_btn.png'
import gray_bookmark_btn from 'assets/images/gray_bookmark_btn.png'
import menu_icon from 'assets/images/menu-icon.png'
import download_btn from 'assets/images/gray_download_icon.png'

import CustomButton from 'components/common/Button/Button'

// 

class DocSummary extends Component {

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

    this.componentTypes = { approving: "APPROVING", normal: "NORMAL", mySelf: "MY_SELF" }

    this.isFirstTimeLoaded = false;

    this.type = this.componentTypes.mySelf;

    this.rightTopMenuOptions = [
      {
        id: "1",
        name: "Chỉnh sửa"
      },
      {
        id: "2",
        name: "Xoá"
      }
    ]
  }

  onLikeBtnClick = () => {

    // this.props.likeDocument(this.id);
    this.dislikes = this.isDisliked ? this.dislikes-- : this.dislikes;
    this.isDisliked = false;
    this.isLiked = !this.isLiked;
    this.likes++;
    this.calculateBar();
    this.setState({});
  }

  onDislikeBtnClick = () => {

    // this.props.dislikeDocument(this.id);
    this.likes = this.isLiked ? this.likes-- : this.likes;
    this.isLiked = false;
    this.isDisliked = !this.isDisliked;
    this.dislikes++;
    this.calculateBar();
    this.setState({});
  }

  componentDidMount() {

  }

  getFirstImage() {

  }

  onDeleteBtnClick = () => {

  }

  onEditBtnClick = () => { }


  render() {

    //initiate some element
    let likeBtn = <div></div>;
    let dislikeBtn = <div></div>;

    //render likeBtn
    if (!this.isLiked) {
      likeBtn = <img className="doc-like-dislike-btn" alt="like" src={liked_btn} onClick={this.onLikeBtnClick}></img>
    }
    else {
      likeBtn = <img className="doc-like-dislike-btn" alt="like" src={unliked_btn} onClick={this.onLikeBtnClick} ></img>
    }

    //render dislikeBtn
    if (!this.isDisliked) {
      dislikeBtn = <img className="doc-like-dislike-btn" alt="dislike" src={dislike_btn} onClick={this.onDislikeBtnClick}></img>
    }
    else {
      dislikeBtn = <img className="doc-like-dislike-btn" alt="dislike" src={undislike_btn} onClick={this.onDislikeBtnClick} ></img>
    }

    if (!this.props.id) {
      this.isFirstTimeLoaded = false;
    }
    else {
      if (this.isFirstTimeLoaded === false) {
        this.isDisliked = this.props.isDisliked;
        this.isLiked = this.props.isLiked;
        this.likes = this.props.likes;
        this.dislikes = this.props.dislikes;
        this.isFirstTimeLoaded = true;
        this.calculateBar();
      }
    }

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
        <div className="display-flex" style={{ marginLeft: "15px", marginTop: "-8px" }} >
          <img alt="*" className="metadata-icon" src={gray_btn_element} />
          <div className="metadata-gray-label" style={{ marginLeft: "2px" }}>
            {this.props.subject}
          </div>
        </div>
        <div className="summary-summary">
          {this.props.description}
        </div>

        <div className="summary-reaction-bar" style={{ right: "5px" }}>
          <div className="like-dislike-bar">

            {/* 2 button */}
            <div className="justify-content-space-between">
              <div className="display-flex">
                <div> {likeBtn}</div>
                <div className="doc-like-dislike-count">{this.props.likes}</div>
              </div>

              <div className="display-flex">
                <div> {dislikeBtn}</div>
                <div className="doc-like-dislike-count">{this.props.dislikes}</div>
              </div>
            </div>


            {/* rate bar */}
            <div className="rate-percent-bar">
              <div className="like-rate-percent" id={'document-summary-like-percents-' + this.props.id} />
            </div>
          </div>

          <div className="display-flex">

            <div className="comment-count-layout">
              <div className="comment-text">
                Bình luận
              </div>
              <div className="comment-count">
                {this.props.commentCount}
              </div>
            </div>
            <div className="view-count-layout">
              lượt xem
              <div style={{ width: "5px" }}></div>
              {this.props.views}
            </div>
            <div className="download-count-layout">
              <img src={download_btn} alt="^" className="download-btn"></img>
              <div style={{ width: "2px" }}></div>
              {this.props.downloads}
            </div>
          </div>
        </div>

        <div className="justify-content-space-between margin-top-10px">
          <div className="link-label">
            Đọc tiếp ...
            </div>
          <div className="display-flex">
            {/* 
          <CustomButton text="Chỉnh sửa" color="blue" onBtnClick={this.onEditBtnClick}></CustomButton>
          <div style={{ width: "10px" }} />
          <CustomButton text="Xoá" color="red" onBtnClick={this.onDeleteBtnClick} ></CustomButton> */}

            <div className="blue-button" style={{ marginRight: "5px" }} onClick={() => this.handlerPreviewRequestedPost()}>Chỉnh sửa</div>
            <div className="red-button" onClick={() => { this.handlerRejectRequestedPost() }}>Xoá</div>

          </div>
        </div>

        {/* approving */}
        {/* <div className="summary-container_Footer">
          <div className="blue-button" style={{ marginRight: "5px", fontSize: "16px" }} onClick={() => this.handlerPreviewRequestedPost()}>Xem trước</div>
          <div className="red-button" style={{ fontSize: "16px" }} onClick={() => { this.handlerRejectRequestedPost() }}>Từ chối</div>
        </div> */}

        {/* Popup for reject requested post */}
        {/* <CustomModal
                    shadow={true}
                    type="confirmation"
                    open={this.isRejectRequestedPopupOpen}
                    title="Xác nhận?"
                    text="Xác nhận từ chối tiếp nhận bài viết này?"
                    closeModal={() => { this.isRejectRequestedPopupOpen = false; this.setState({}); }}
                >
                    <button className="blue-button margin-right-5px" onClick={() => this.handlerVerifyRejectRequestedPostConfirmation()}>OK</button>
                    <button className="white-button" onClick={() => this.handleCancelRejectRequestedPostConfirmation()}>Cancel</button>

                </CustomModal> */}


      </div >


    );
  }


  //Calculates bar widths
  calculateBar = () => {

    if (this.likes === this.dislikes) {
      console.log(document.getElementByID('document-summary-like-percents-' + this.props.id))
      if (document.getElementById('document-summary-like-percents-' + this.props.id))
        document.getElementById('document-summary-like-percents-' + this.props.id).style.width = "50%";
      return;
    }
    else {
      let percentageLikes;
      //Simple math to calculate percentages
      let total = this.likes + this.dislikes;
      percentageLikes = (this.likes / total) * 100;
      if (document.getElementById('document-summary-like-percents-' + this.props.id))
        //We need to apply the widths to our elements
        document.getElementById('document-summary-like-percents-' + this.props.id).style.width = percentageLikes.toString() + "%";
    }

  }

  navigateToAuthorPersonalPage = () => {
    window.location.href = "/user/" + this.authorID;
  }

  navigateToSameCategoryDocsPage = () => {
    window.location.href = "/docs/category?id=" + this.requestedCategoryID;
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
export default DocSummary;