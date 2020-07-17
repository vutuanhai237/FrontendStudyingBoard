import React, { Component } from "react";
import Header from "../container/Header";
import CreateDoc from "../container/CreateDoc.js";
class CrDoc extends Component {
    render() {
        return (
            <div>
                <Header />
                <CreateDoc />
                <br></br>
            </div>
        );
    }
}

export default CrDoc;
