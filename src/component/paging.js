import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class Paging extends Component {
    changePage(item) {
        
        const { type } = this.props;
        const createHistory = require("history").createBrowserHistory;
        let history = createHistory();
        history.push(type + "/page?=" + item);
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
    }
    render() {
        //const {item} = this.props;
        const item = [1, 2, 3, 4, 5];
        return (
            <div id="paging">
                <Pagination>
                    {item.map((item) => {
                        return (
                            <Pagination.Item onClick={ ()=> this.changePage(item)} key={item} active={item === 2}>
                                {item}
                            </Pagination.Item>
                        );
                    })}
                </Pagination>
            </div>
        );
    }
}

export default Paging;
