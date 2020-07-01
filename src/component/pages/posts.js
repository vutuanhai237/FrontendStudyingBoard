import React, { Component } from "react";
import Header from "../container/header";
import Footer from "../container/footer";
import ListPost from "../container/listPost";
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
