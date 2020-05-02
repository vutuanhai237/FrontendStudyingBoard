import React, { Component } from "react";
import Header from "../container/header";
import Footer from "../container/footer";
import ListDocument from "../container/list_document";
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
