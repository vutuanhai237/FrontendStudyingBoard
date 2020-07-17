import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
import WallPage from "../container/Wallpage";
import TopPost from "../container/TopPost";
import TopDocument from "../container/TopDoc";
import TopEvent from "../container/TopEvent";
import "./Home.scss";
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <WallPage />
                <TopPost />

                <TopDocument />
                <TopEvent />
                <Footer />
            </div>
        );
    }
}

export default Home;
