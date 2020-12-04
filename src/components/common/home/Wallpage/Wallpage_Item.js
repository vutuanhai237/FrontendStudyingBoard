import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./Wallpage.scss";
import wallpage_bg from 'assets/images/white_bg.jpg'
import btn_element from 'assets/images/btn_element.png'
import full_blue_bookmark_btn from 'assets/images/full_blue_bookmark_btn.png'
import like_btn from 'assets/images/liked_btn.png'
import unliked_btn from 'assets/images/unliked_btn.png'
import save_btn from 'assets/images/blue_bookmark_btn.png'

//demo only 
import { getHighlightPosts } from "redux/services/postServices";

export default class WallPaper_Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "isLiked": "false",
            "isSaved": "false",
        }
        this.likes = this.props.likes;
    }

    toggleLikeImage = () => {
        this.state.isLiked = !this.state.isLiked;
        this.setState(this.state);
    }

    toggleSaveImage = () => {
        this.state.isSaved = !this.state.isSaved;
        this.setState(this.state);
    }

    imageClick() {
        console.log(1)
    }

    componentDidMount() {
        //load all hotest or pinned post
    }

    showSlide = () => {

    }

    render() {
        return (

            <div className="Wallpage_Content">
                <div className="Wallpage_Left_Content">
                    <img className="Wallpage_Image" src={"https://i.pinimg.com/originals/01/3a/b1/013ab1e5228096b6f5623cb53eb0dc4f.jpg"} />
                </div>

                <div className="Wallpage_Right_Content">

                    <div className="display-flex">
                        <div className="Highlight_Title">NỔI BẬT</div>
                        <div className="Highlight_Title_Underline"></div>
                    </div>
                    <div className="Highlight_Metadata justify-content-space-between">
                        <div className="display-flex">
                            <div className="Highlight-category_Metadata">
                                <div className="prefix-Highlight_Metadata" />
                                <div className="Highlight-category">
                                    Danh mục 1
                                </div>
                            </div>
                            <div className="gray-label margin-left-5px">by</div>
                            <div className="Highlight-author-link margin-left-5px" >
                                {/* // onClick={() => this.navigateToAuthorPersonalPage()}> */}

                                {/* {this.authorName} */} Vũ Tuấn Hải
                                 </div>
                            <img alt="*" className="Hightlight_Metadata_Icon" src={btn_element} />
                            <div className="Highlight_Read_Time">
                                {/* {this.publishDtm} */}
                               10 phút đọc
                                </div>
                        </div>
                        <div className="Highlight_Published_Date">
                            {/* {this.publishDtm} */}
                                 20/10/2020
                            </div>
                    </div>

                    <div className="Highlight_Summary_Title">
                        {/* {this.props.title} */}
                            Không gì là không thể
                        </div>

                    <div className="Highlight_Summary_Content">
                        {/* {this.props.content} */}
                            Bạn có bao giờ cảm thấy rằng bản thân mình đang sinh sống trong một thời đại mà tuổi trẻ mang quá nhiều gánh nặng trên vai đến đáng thương hay không?
Thật ra thì ở bất kì thời đại nào, con người vẫn đều tồông thôn đềuvới đời sống, mỗi một ngày qua đi thế giới lại như đã đổi khác. Và những người trẻ, vô tình bị đưa vào vòng xoáy của sự phát …
                        </div>

                    <div className="Highlight_Reaction_Bar">
                        <div className="Highlight_Reaction_Bar_Like_Btn_Layout">
                            <img className ="Highlight_Reaction_Bar_Like_Btn" src={this.state.isLiked ? like_btn : unliked_btn} onClick={() => this.toggleLikeImage()}></img>
                            <div className="Highlight_Reaction_Bar_Like_Count">{this.state.isLiked ? this.props.likes + 1 : this.props.likes}</div>
                        </div>

                        <div className="Highlight_Reaction_Bar-save-comment-count-layout">
                            <div className="Highlight_Reaction_Bar-save-btn-layout">
                                <img className ="Highlight_Reaction_Bar-save-btn" src={this.state.isSaved ? save_btn : full_blue_bookmark_btn} onClick={() => this.toggleSaveImage()}></img>

                                <div className="Highlight_Reaction_Bar_Save_Text"> {this.state.isSaved ? "Lưu" : "Huỷ"} </div>
                            </div>
                            <div className="Highlight_Reaction_Bar-comment-count-layout">
                                <div className="Highlight_Reaction_Bar_Comment_Text">
                                    Bình luận
                                </div>
                                <div className="Highlight_Reaction_Bar-comment-count">
                                    {this.props.commentCount}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}


// <Carousel className="carousel">
// {newActivities.map((item) => {
//     return <Carousel.Item>
//         <img id="image" className="d-block w-100 h-100" src={item.imageURL} alt="First slide"
//             onClick={() => this.imageClick()} />
//         <Carousel.Caption>
//             <h3 style={{ textShadow: "2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black" }}>{item.title}</h3>
//             <p style={{ textShadow: "2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black" }}>{item.summary}</p>
//             <Row>
//                 <Col />
//                 <Col>
//                     <p style={{ display: "inline" }}>
//                         {item.publishDtm}
//                     </p>
//                 </Col>
//                 <Col />
//             </Row>
//         </Carousel.Caption>
//     </Carousel.Item>
// })}
// </Carousel>
// <div className="animation-area">
// <ul className="box-area">
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
// </ul>
// </div>