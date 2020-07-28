import React, { Component } from "react";
import PostDetail from "../container/Post";
import Header from "../container/Header";
import Footer from "../container/Footer";
class Post extends Component {
    render() {
        return (
            <div>
                 <Header />
                <PostDetail/>
                <Footer />
            </div>
        );
    }
}

export default Post;
