import React, { Component } from "react";
import WallPage from "components/common/home/Wallpage/Wallpage";
import TopPost from "components/common/home/TopPost";
import TopDocument from "components/common/home/TopDoc";
import TopEvent from "components/common/home/TopEvent";
import NewDocumentsList from "components/common/home/NewDocumentsList"
import "./Home.scss";
import "layouts/Layout.scss"
import ItemHorizontalSlider from 'components/common/ItemHorizontalSlider/ItemHorizontalSlider'

class Home extends Component {
    render() {
        return (
            <div className="">
                <WallPage />
                <div className="lg-bl-layout">
                    <NewDocumentsList />
                    <TopEvent />
                    <TopPost />
                    <TopDocument />
                </div>
            </div>
        );
    }
}

export default Home;
