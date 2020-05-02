// Document by VTH
// function: filter list of post by 2 dropdown button.
// props from parent: list of category
// state: none
// dependency component: none
import React, { Component } from "react";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "./filter_post.scss";

class FilterPost extends Component {
    render() {
        //const {item} = this.props;
        const list_category = ["A", "B", "C", "D", "E", "F"];
        return (
            <div>
                <Row className="filter">
                    <p className="prelabel" style={{ display: "inline" }}>Thời gian</p>
                    <DropdownButton
                        id="dropdown-menu"
                        title="Chọn thời gian"
                        className="dropdown"
                    >
                        <Dropdown.Item as="button">
                            Sớm nhất
                        </Dropdown.Item>
                        <Dropdown.Item as="button">
                            Trễ nhất
                        </Dropdown.Item>
                    </DropdownButton>
                    <p className="prelabel" style={{ display: "inline" }}>Danh mục</p>
                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-menu"
                            className="dropdown"
                        >
                            Chọn danh mục
                        </Dropdown.Toggle>
                        {}
                        <Dropdown.Menu>
                            {list_category.map((item) => {
                                return (
                                    <Dropdown.Item as="button">
                                        {item}
                                    </Dropdown.Item>
                                );
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
               
            </div>
        );
    }
}

export default FilterPost;
