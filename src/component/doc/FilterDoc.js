// Document by VTH
// function: filter list of document by 2 dropdown button.
// props from parent: list of subject
// state: none
// dependency component: none
import React, { Component } from "react";
import { Row, Col, Dropdown, DropdownButton, Button } from "react-bootstrap";
import "./FilterDoc.scss";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    getSemesters,
    getSubjects,
    getCategoriesDoc,
    getSearchDoc,
} from "service/DocAPI.js"
class FilterDoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: "Chọn danh mục",
            currentSemester: "Chọn học kì",
            currentSubject: "Chọn môn học",
            filter: {
                currentCategoryID: -1,
                currentSemesterID: -1,
                currentSubjectID: -1,

            }
        };

    }

    changeCurrentCategory(evt, name) {
        const { categories } = this.props;
        let isAll = true;
        this.setState({
            currentCategory: evt
        })
        categories.filter(item => {
            if (item.name === evt) {
                this.setState({
                    filter: { ...this.state.filter, currentCategoryID: item.id }
                }, () => { this.filterDoc(); })
                isAll = false;
                return;
            }
        });
        if (isAll) {
            this.setState({
                filter: { ...this.state.filter, currentCategoryID: -1 }
            }, () => { this.filterDoc(); })
        }
    }

    changeCurrentSemester(evt) {
        const { semesters } = this.props;
        let isAll = true;
        this.setState({
            currentSemester: evt
        })
        semesters.filter(item => {
            if (item.semesterNo + " . " + item.academicYear === evt) {
                this.setState({
                    filter: { ...this.state.filter, currentSemesterID: item.semesterId }
                }, () => { this.filterDoc(); })
                isAll = false;
                return;
            }
        });
        if (isAll) {
            this.setState({
                filter: { ...this.state.filter, currentSemesterID: -1 }
            }, () => { this.filterDoc(); })
        }
    }

    changeCurrentSubject(evt) {
        const { subjects } = this.props;
        let isAll = true;
        this.setState({
            currentSubject: evt
        })
        subjects.filter(item => {
            if (item.subjectName === evt) {
                this.setState({
                    filter: { ...this.state.filter, currentSubjectID: item.subjectId }
                }, () => { this.filterDoc(); })
                isAll = false;
                return;
            }
        });
        if (isAll) {
            this.setState({
                filter: { ...this.state.filter, currentSubjectID: -1 }
            }, () => { this.filterDoc(); })
        }

    }


    filterDoc() {
        let filter = "";
        if (this.state.filter.currentCategoryID !== -1) filter = filter.concat("category=" + this.state.filter.currentCategoryID + "&")
        if (this.state.filter.currentSemesterID !== -1) filter = filter.concat("semester=" + this.state.filter.currentSemesterID + "&")
        if (this.state.filter.currentSubjectID !== -1) filter = filter.concat("subject=" + this.state.filter.currentSubjectID + "&")

        console.log(filter);
        this.props.getSearchDoc(filter);
    }


    componentDidMount() {
        this.props.getCategoriesDoc();
        this.props.getSemesters();
        this.props.getSubjects();
        this.props.getSearchDoc("");
    }


    render() {
        let { categories, semesters, subjects } = this.props;
        return (
            <div className="filter">
                <Row d-flex flex-row>
                    <DropdownButton id="category" title={this.state.currentCategory}>
                        <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey="Chọn tất cả">
                            Chọn tất cả
                        </Dropdown.Item>
                        {categories.map((item) => {
                            return (
                                <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey={item.name}>
                                    {item.name}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>

                    <DropdownButton id="subject" className="d-inline" title={this.state.currentSubject}>
                        <Dropdown.Item onSelect={(evt) => this.changeCurrentSubject(evt)} eventKey="Chọn tất cả">
                            Chọn tất cả
                        </Dropdown.Item>
                        {subjects.map((item) => {
                            return (
                                <Dropdown.Item onSelect={(evt) => this.changeCurrentSubject(evt)} eventKey={item.subjectName}>
                                    {item.subjectName}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>

                    <DropdownButton id="semester" title={this.state.currentSemester}>
                        <Dropdown.Item onSelect={(evt) => this.changeCurrentSemester(evt)} eventKey="Chọn tất cả">
                            Chọn tất cả
                        </Dropdown.Item>
                        {semesters.map((item) => {
                            return (
                                <Dropdown.Item onSelect={(evt) => this.changeCurrentSemester(evt)} eventKey={item.semesterNo + " . " + item.academicYear}>
                                    {item.semesterNo + " . " + item.academicYear}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                </Row>


            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        categories: state.doc.categories,
        semesters: state.doc.semesters,
        subjects: state.doc.subjects,
        searchDoc: state.doc.searchDoc,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSemesters,
    getSubjects,
    getCategoriesDoc,
    getSearchDoc,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(FilterDoc));
