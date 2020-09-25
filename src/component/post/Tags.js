import React, { Component } from "react";
import {
    Button,
    Row,
} from "react-bootstrap";

import { redirect } from 'constants.js'
import "./Tags.scss"
class Tags extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        console.log(item);
    }
    render() {
        const { tags } = this.props;
        console.log(tags)
        return (
            <div>
                <Row id="tags" className="justify-content-start">
                    {
                        tags.map(item => {
                            return <div>
                                <Button onClick={()=> {this.handleClick(item)}} variant="secondary" style={{ marginRight: "15px", borderRadius: "15px" }}>{item.tagdetail}</Button>
                            </div>
                        })
                    }
                </Row>

            </div >
        );
    }
}



export default Tags;