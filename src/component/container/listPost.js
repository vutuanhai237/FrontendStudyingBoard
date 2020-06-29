// Document by VTH
// function: shows the list of posts in post page.
// props from parent: none
// state: none
// dependency component: summary post, paging, filter
import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Card, Col } from "react-bootstrap";
import SummaryPost from "../post/summaryPost";
import FilterPost from "../post/filterPost";
import Paging from "../home/paging"
import "./topPost.scss"
import "./listPost.scss"
class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
        }
    }


    render() {
        const { posts } = this.props;

        return (
            <div id="group-post">
                <div>
                    <p className="title">DANH SÁCH BÀI VIẾT</p>
                </div>
                <FilterPost/>
                <Card.Body id="card-body">
                    <Row>
                        {
                            posts.map(item => {
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

const mapStateToProps = state => {
    return {

        posts: state.post.posts,

    };

}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPost));
