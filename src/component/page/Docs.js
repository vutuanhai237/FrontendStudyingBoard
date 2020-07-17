import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
import ListDoc from "../container/ListDoc";
class Docs extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListDoc />
                <Footer />
            </div>
        );
    }
}

export default Docs;
