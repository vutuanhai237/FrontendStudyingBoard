import React, { Component } from 'react';
import Header from "../container/header"
import Footer from "../container/footer"
import WallPage from "../container/wallpage"
import TopPost from "../container/top_post"
import TopDocument from '../container/top_document';

import TopEvent from '../container/top_event';
import "./home.scss"
class Home extends Component {
    render() {
        return (
            <div >            
                <Header/>
                <WallPage/>
                <TopPost/>
              
                <TopDocument/>
                <TopEvent/>
                <Footer/>
            </div>

        );
    }
}


export default Home;
