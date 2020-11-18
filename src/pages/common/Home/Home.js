import React, { Component } from "react";
import WallPage from "components/common/home/Wallpage/Wallpage";
import TopPost from "components/common/home/TopPost";
import TopDocument from "components/common/home/TopDoc";
import TopEvent from "components/common/home/TopEvent";
import NewPost from "components/common/home/NewPost"
import "./Home.scss";
import "components/common/home/HomeLayout.scss"

class Home extends Component {
    render() {
        return (
            <div className="HomePage">
                <WallPage />
                <div className="HomePage_Content">
                    <NewPost />
                    <TopEvent />
                    <TopPost />
                    <TopDocument />
                </div>


            </div>
        );
    }
}

export default Home;
