import React, { Component } from "react";
import Header from "../container/header";
import Footer from "../container/footer";
import ListDocument from "../container/listDoc";
class Documents extends Component {
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

export default Documents;
