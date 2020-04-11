import React, { Component } from 'react';
import Header from "../container/header"
import Footer from "../container/footer"
import WallPage from "../container/wallpage"
import GroupPost from "../container/group_post"
import GroupDocument from '../container/group_document';
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <WallPage/>
                <GroupPost/>
              
                <GroupDocument/>
                <Footer/>

            </div>

        );
    }
}


export default Home;
