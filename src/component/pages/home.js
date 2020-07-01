import React, { Component } from "react";
import Header from "../container/header";
import Footer from "../container/footer";
import WallPage from "../container/wallpage";
import TopPost from "../container/topPost";
import TopDocument from "../container/topDoc";
import TopEvent from "../container/topEvent";
import "./home.scss";
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
