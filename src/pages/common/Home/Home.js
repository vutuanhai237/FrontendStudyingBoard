import React, { Component } from "react";
import WallPage from "components/common/home/Wallpage/Wallpage";

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
            
                </div>
            </div>
        );
    }
}

export default Home;
