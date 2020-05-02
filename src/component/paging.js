import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import "./login_status.scss";
class Paging extends Component {
    render() {
        //const {item} = this.props;
        const item = [1, 2, 3, 4, 5];
        return (
            <div id="paging">
                <Pagination>
                    {item.map((item) => {
                        return (
                            <Pagination.Item key={item} active={item === 2}>
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
