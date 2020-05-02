import React, { Component } from "react";
import Header from "../container/header";
import CreateDocument from "../container/create_document";
class CrDocument extends Component {
    render() {
        return (
            <div>
                <Header />
                <CreateDocument />
                <br></br>
            </div>
        );
    }
}

export default CrDocument;
