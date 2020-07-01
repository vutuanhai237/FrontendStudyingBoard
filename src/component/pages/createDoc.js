import React, { Component } from "react";
import Header from "../container/header";
import CreateDoc from "../container/createDoc";
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
