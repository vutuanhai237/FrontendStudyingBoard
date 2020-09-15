import React, { Component } from "react";
import WallPage from "../container/Wallpage";
import TopPost from "../container/TopPost";
import TopDocument from "../container/TopDoc";
import TopEvent from "../container/TopEvent";
import NewPost from "../container/NewPost"
import "./Home.scss";
class Home extends Component {
    render() {
        return (
            <div>
                <WallPage />
                <TopEvent />
                <TopPost />
                <NewPost />
                <TopDocument />
            </div>
        );
    }
}

export default Home;
