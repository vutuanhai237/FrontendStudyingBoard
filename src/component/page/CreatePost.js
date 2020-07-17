import React, { Component } from "react";
import Header from "../container/Header";
import CreatePost from "../container/CreatePost";
class CrPost extends Component {
    render() {
        return (
            <div>
                <Header />
                <CreatePost />
                <br></br>
            </div>
        );
    }
}

export default CrPost;
