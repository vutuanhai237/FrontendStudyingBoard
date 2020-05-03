import React, { Component } from "react";
import Header from "../container/header";
import Footer from "../container/footer";
import ListEvent from "../container/list_event";
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
