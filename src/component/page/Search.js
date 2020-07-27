import React, { Component } from "react";
import Header from "../container/Header";
import Footer from "../container/Footer";
import Searchs from "../container/Search";
class Search extends Component {
    render() {
        return (
            <div>
                <Header />
                <Searchs />
                <Footer />
            </div>
        );
    }
}

export default Search;
