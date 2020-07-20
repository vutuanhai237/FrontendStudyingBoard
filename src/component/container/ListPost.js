// Document by VTH
// function: shows the list of posts in post page.
// props from parent: none
// state: none
// dependency component: summary post, paging, filter
import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Card, Col } from "react-bootstrap";
import SummaryPost from "../post/SummaryPost";
import FilterPost from "../post/FilterPost";
import Paging from "../Paging"
import "./ListPost.scss"
import { bindActionCreators } from 'redux';
import { getPostByFilter } from "../../service/PostAPI"
class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
        }
    }

    componentDidMount() {
        this.props.getPostByFilter("page=1");
    }
    render() {
        console.log(this.props.posts);
        return (
            <div id="group-post">
                <div>
                    <p className="title">DANH SÁCH BÀI VIẾT</p>
                </div>
                <FilterPost/>
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
                <Paging type="posts"></Paging>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getPostByFilter
}, dispatch);


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ListPost)
);

