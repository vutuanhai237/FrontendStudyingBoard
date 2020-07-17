import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
import ListEvent from "../container/ListEvent";
class Events extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListEvent />
                <Footer />
            </div>
        );
    }
}

export default Events;
