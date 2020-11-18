// Document by VTH
// function: shows the list of posts in post page.
// props from parent: none
// state: none
// dependency component: summary post, paging, filter
import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Card, Col, Pagination } from "react-bootstrap";
import SummaryPost from "components/common/post/SummaryPost/SummaryPost";
import FilterPost from "components/common/post/FilterPost/FilterPost";
import Paging from "components/common/Paging/Paging";
import { bindActionCreators } from 'redux';
import { getSearchPost, getCategoriesPost } from "services/PostAPI"
class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
        }
    }

    componentDidMount() {
        this.props.getSearchPost("page=1");

    }

    handleNewPage(number) {
        this.setState({
            current_page: number,
        })
    }
    render() {
        let paginItems = [];
        for (let number = 1; number <= 5; number++) {
            paginItems.push(
                <Pagination.Item onClick={() => { this.handleNewPage(number) }} key={number} active={number === this.state.current_page}>
                    {number}
                </Pagination.Item>,
            );
        }


        return (
            <div id="group-post">
                <div>
                    <p style={{ marginTop: "20px" }} className="title">DANH SÁCH BÀI VIẾT</p>
                </div>
                <FilterPost />
                <Card.Body id="card-body">
                    <Row>
                        {
                            this.props.posts.map(item => {
                                return <Col sm={12} md={6}>
                                    <SummaryPost item={item}></SummaryPost>
                                </Col>
                            })
                        }

                    </Row>
                </Card.Body>
                <Pagination>{paginItems}</Pagination>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
        categories: state.post.categories,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchPost,
    getCategoriesPost,
}, dispatch);


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PostsList)
);

