import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
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
                <Header />
                <WallPage />
                <TopEvent />
                <TopPost />
                <NewPost />
                <TopDocument />

                <Footer />
            </div>
        );
    }
}

export default Home;
