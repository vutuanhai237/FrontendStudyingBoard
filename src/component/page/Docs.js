import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
import ListDocument from "../container/ListDoc";
class Docs extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListDocument />
                <Footer />
            </div>
        );
    }
}

export default Docs;
