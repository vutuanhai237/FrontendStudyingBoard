// Document by VTH
// function: filter list of post by 2 dropdown button.
// props from parent: list of category
// state: none
// dependency component: none
import React, { Component } from "react";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "./FilterPost.scss";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
    getPostCategories,
    getSearchPost,
} from "services/postServices"
class FilterPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: "Chọn danh mục",
            filter: {
                currentCategoryID: -1,
            }
        };
        this.changeCurrentCategory = this.changeCurrentCategory.bind(this);
    }

    componentDidMount() {
        this.props.getPostCategories();
    }
    filterPost() {
        let filter = "";
        if (this.state.filter.currentCategoryID !== -1) filter = filter.concat("categoryID=" + this.state.filter.currentCategoryID + "&")
        console.log(filter);
        this.props.getSearchPost(filter);
    }
    changeCurrentCategory(evt, name) {
        const { categories } = this.props;

        let isAll = true;
        this.setState({
            currentCategory: evt
        })
        categories.filter(item => {
            if (item.categoryName === evt) {
                this.setState({
                    filter: { ...this.state.filter, currentCategoryID: item.id }
                }, () => { this.filterPost(); })
                isAll = false;
                return;
            }
        });
        if (isAll) {
            this.setState({
                filter: { ...this.state.filter, currentCategoryID: -1 }
            }, () => { this.filterPost(); })
        }
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="filter">
                <Row d-flex flex-row>
                    <DropdownButton id="category" categoryName={this.state.currentCategory}>
                        <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey="Chọn tất cả">
                            Chọn tất cả
                        </Dropdown.Item>
                        {categories.map((item) => {
                            return (
                                <Dropdown.Item onSelect={(evt) => this.changeCurrentCategory(evt)} eventKey={item.categoryName}>
                                    {item.categoryName}
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
        categories: state.post.categories,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostCategories,
    getSearchPost,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(FilterPost));
