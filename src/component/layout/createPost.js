import React, { Component } from "react";
import Header from "../container/header";
import CreatePost from "../container/createPost";
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
