// Document by VTH
// function: shows the list of posts in post page.
// props from parent: none
// state: none
// dependency component: summary post, paging, filter
import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Card, Col } from "react-bootstrap";
import { bindActionCreators } from 'redux';
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
            keywork: "",
        }
    }

    componentDidMount() {

        const url = window.location.href;
        const index = url.search("search/");
        const keywork = url.slice(index + 7, url.length);
        console.log(keywork)
        this.setState({
            keywork: keywork,
        })
        // this.props.getSearchPost(`title=${keywork}`);


    }
    render() {
        const { posts } = this.props;
        var title = null;
        if (posts.length === 0) {
            title = <p style={{ marginTop: "20px" }} className="title">{`KHÔNG CÓ BÀI VIẾT NÀO CHỨA "${this.state.keywork}"`}</p>

        } else {
            title = <p style={{ marginTop: "20px" }} className="title">{`DANH SÁCH BÀI VIẾT CÓ CHỨA "${this.state.keywork}"`}</p>

        }
        return (
            <div id="group-post">
                <div>
                    {title}
                </div>

                <Card.Body id="card-body">
                    <Row>
                        {
                            posts.map(item => {
                                return <Col sm={12} md={6}>
                                    {/* <SummaryPost item={item}></SummaryPost> */}
                                </Col>
                            })
                        }

                    </Row>
                </Card.Body>
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
    // getSearchPost,
}, dispatch);


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchResult)
);

