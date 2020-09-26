// Document by VTH
// function: shows the list of posts in post page.
// props from parent: none
// state: none
// dependency component: summary post, paging, filter
import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Card, Col } from "react-bootstrap";
import SummaryPost from "/post/SummaryPost";
import Paging from "components/common/Paging/Paging"
class EventsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
        }
    }


    render() {
        const { events } = this.props;

        return (
            <div id="group-post">
                <div>
                    <p className="title">DANH SÁCH SỰ KIỆN</p>
                </div>
                <Card.Body id="card-body">
                    <Row>
                        {
                            events.map(item => {
                                return <Col sm={12} md={6}>
                                    <SummaryPost item={item}></SummaryPost>
                                </Col>
                            })
                        }

                    </Row>
                </Card.Body>
                <Paging type="events"></Paging>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        events: state.post.events,

    };

}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsList));
