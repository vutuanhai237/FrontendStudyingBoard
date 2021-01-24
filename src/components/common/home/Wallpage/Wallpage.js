import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom'

//resources
import wallpage_bg from 'assets/images/white_bg.jpg'
import full_blue_bookmark_btn from 'assets/images/full_blue_bookmark_btn.png'
import unliked_btn from 'assets/images/unliked_btn.png'
import trash_icon from 'assets/icons/24x24/trash_icon_24x24.png'
import liked_btn from 'assets/images/liked_btn.png'
import gray_btn_element from 'assets/images/gray_btn_element.png'
import gray_bookmark_btn from 'assets/images/gray_bookmark_btn.png'

//components
import PopupMenu from 'components/common/PopupMenu/PopupMenu'
import Loader from 'components/common/Loader/Loader'

//styles
import 'components/styles/SimpleLabel.scss'
import "./Wallpage.scss";
import 'components/styles/DocPostSummary.scss'

//constants
import { itemType } from 'constants.js'

//services
import { getHighlightPostsList } from "redux/services/postServices";

class WallPaper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,
            isSaved: true
        }

        this.slideID = 0;
        this.slideIndex = 0;
        this.slideIndexLength = 3;

        this.isLiked = false;
        this.isSaved = false;

        this.normalMenuItemList = [
            { id: 3, name: "Báo cáo", icon: trash_icon },
        ]

    }

    componentDidMount() {
        this.props.getHighlightPostsList();

        let intervalID = setInterval(
            this.showSlides, 5000
        );

        this.setState({ intervalID: intervalID })

    }

    componentWillUnmount = () => {
        clearInterval(this.state.intervalID);
    }


    toggleLikeImage = () => {
        this.state.isLiked = !this.state.isLiked;
        this.setState(this.state);
    }

    toggleSaveImage = () => {
        this.state.isSaved = !this.state.isSaved;
        this.setState(this.state);
    }

    showSlides = () => {
        if (this.props.isLoadDone) {
            for (let i = 0; i < this.props.highlightPostsList.length; i++) {
                let slide = document.getElementById("current-highlight-" + this.props.highlightPostsList[i].id);
                slide.style.display = "none"

                console.log(slide.style.display)
            }

            if (this.slideIndex === this.slideIndexLength - 1) {
                this.slideIndex = 0;
            }
            else {
                this.slideIndex = this.slideIndex + 1;
            }

            this.slideID = this.props.highlightPostsList[this.slideIndex].id;

            document.getElementById("current-highlight-" + this.slideID).style.display = "block";
            this.setState({});
        }

    }



    render() {
        //initiate some element

        let likeBtn = <div></div>;
        let saveBtn = <div></div>;
        let approveLabel = <div></div>

        if (!this.isLiked) {
            likeBtn = <img className="like-btn" alt="like" src={liked_btn} onClick={this.toggleLikeImage}></img>
        }
        else {
            likeBtn = <img className="like-btn" alt="like" src={unliked_btn} onClick={this.toggleLikeImage} ></img>
        }

        //render saveBtn
        if (!this.isSaved) {
            saveBtn = <img className="save-btn" alt="dislike" src={full_blue_bookmark_btn}></img>
        }
        else {
            saveBtn = <img className="save-btn" alt="dislike" src={gray_bookmark_btn} ></img>
        }
        let highlightList;
        let highlightTransitionbar;

        if (!this.props.isLoading) {
            highlightList = this.props.highlightPostsList.map((item) => {
                return <div id={"current-highlight-" + item.id}
                    style={{
                        display: "none"
                    }}
                >
                    <div className="Wallpage_Content">

                        <div className="Wallpage_Left_Content">
                            <img className="Wallpage_Image" alt="" src={"https://i.pinimg.com/originals/01/3a/b1/013ab1e5228096b6f5623cb53eb0dc4f.jpg"} />
                        </div>

                        <div className="Wallpage_Right_Content">
                            <div className="display-flex margin-bottom-8px" >
                                <div className="Highlight_Title">NỔI BẬT</div>
                                <div className="Highlight_Title_Underline"></div>
                            </div>
                            <div className="highlight-item-container" >
                                <div className="item-normal-metadata-container" >
                                    <div className="display-flex">

                                        <div className="display-flex">
                                            <div className="prefix-normal-category" />
                                            <div className="normal-category">
                                                {item.category}
                                            </div>
                                        </div>

                                        <div className="metadata-light-black-label">bởi</div>
                                        <Link className="link-label" to={/user/}>
                                            {item.authorName}
                                        </Link>

                                        {item.type === itemType.mySelf || item.type === itemType.approving ?
                                            <>{approveLabel}</> : <></>}
                                    </div>

                                    {item.type === itemType.mySelf &&
                                        <PopupMenu items={this.mySelfMenuItemList} id={`highlight-post-popup-menu-${item.id}`} />
                                    }
                                    {(item.type === itemType.normal || !item.type) &&
                                        <PopupMenu items={this.normalMenuItemList} id={`highlight-post-popup-menu-${item.id}`} />
                                    }

                                </div>
                                <div className="item-title">
                                    {item.title}
                                </div>
                                <div className="display-flex" style={{ marginTop: "-10px" }}>
                                    <div className="display-flex"  >
                                        <img alt="*" className="metadata-icon" src={gray_btn_element} />
                                        <div className="metadata-light-black-label" style={{ marginLeft: "2px" }}>
                                            {item.readingTime} phút đọc
                                    </div>
                                    </div>

                                    <div className="display-flex" >
                                        <img alt="*" className="metadata-icon" src={gray_btn_element} />
                                        <div className="metadata-light-black-label" style={{ marginLeft: "2px" }}>
                                            {item.publishDtm}
                                        </div>
                                    </div>

                                </div>

                                <div className="item-summary">
                                    {item.summary}
                                </div>

                                <div className="item-reaction-bar">
                                    <div className="display-flex mg-top-5px">
                                        <div className="display-flex">
                                            <div> {likeBtn}</div>
                                            <div className="like-count">{item.likes}</div>
                                        </div>

                                        <div className="display-flex">
                                            <div className="save-text-container" onClick={this.toggleSaveImage}>
                                                <div>{saveBtn}</div>
                                                {this.isSaved ? "Lưu" : "Huỷ"}
                                            </div>
                                            <div className="post-comment-count-container">
                                                Bình luận
                                          <div style={{ paddingLeft: "5px" }}>
                                                    {item.comments}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="link-label mg-top-5px" onClick={() => { window.location.href = "/docs/category?id=" + item.id }}>
                                        Đọc tiếp ...
                                 </div>
                                </div>


                            </div >
                        </div>
                    </div>
                </div>
            });

            highlightTransitionbar = this.props.highlightPostsList.map((item, index) =>
                <div className="Highlight_Transitionbar_Item">

                </div>
            )
        }
        return (
            <div className="Wallpage">
                {/* <img className="Wallpage_BG" src={wallpage_bg} alt="wall_page" /> */}
                <div className="Wallpage_Content_Port">
                    {this.props.isLoading ?
                        <Loader />
                        : <> {highlightList} </>
                    }

                    {/* <div className="Highlight_Transitionbar">
                        {highlightTransitionbar}
                    </div> */}
                </div>
            </div>

        );
    }


}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        highlightPostsList: state.post.highlightPosts.data,
        isLoading: state.post.highlightPosts.isLoading,
        isLoadDone: state.post.highlightPosts.isLoadDone,
        error: state.post.highlightPosts.error
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getHighlightPostsList
}, dispatch);
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(WallPaper)
);
