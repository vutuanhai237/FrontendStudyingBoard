import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
import ListPost from "../container/ListPost";
class Posts extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListPost />
                <Footer />
            </div>
        );
    }
}

export default Posts;
