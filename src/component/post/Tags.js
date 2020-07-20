import React, { Component } from "react";
import {
    Button,
    Row,
} from "react-bootstrap";

import { redirect } from "../../constant/"
import "./Tags.scss"
class Tags extends Component {
    constructor(props) {
        super(props);

    }

    handleClick(item) {
        redirect("/item");
    }

    render() {
        const { tags } = this.props;
        return (
            <div>
                <Row id="tags" className="justify-content-start">
                    {
                        tags.map(item => {
                            return <div>
                                <Button onClick={() => this.handleClick(item)} variant="secondary" style={{ marginRight: "15px", borderRadius: "15px" }}>{item}</Button>
                            </div>
                        })
                    }
                </Row>

            </div >
        );
    }
}



export default Tags;