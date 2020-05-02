// Document by VTH
// function: filter list of document by 2 dropdown button.
// props from parent: list of subject
// state: none
// dependency component: none
import React, { Component } from "react";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "./filter_document.scss";

class FilterPost extends Component {
    render() {
        //const {item} = this.props;
        const list_subject = ["A", "B", "C", "D", "E", "F", "G"];
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
                    <p className="prelabel" style={{ display: "inline" }}>Môn học</p>
                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-menu"
                            className="dropdown"
                        >
                            Chọn môn học
                        </Dropdown.Toggle>
                        {}
                        <Dropdown.Menu>
                            {list_subject.map((item) => {
                                return (
                                    <Dropdown.Item as="button">
                                        {item}
                                    </Dropdown.Item>
                                );
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <p className="prelabel" style={{ display: "inline" }}>Thể loại</p>
                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-menu"
                            className="dropdown"
                        >
                            Chọn thể loại
                        </Dropdown.Toggle>
                        {}
                        <Dropdown.Menu>
                            {list_subject.map((item) => {
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
