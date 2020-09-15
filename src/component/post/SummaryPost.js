// Document by VTH
// function: shows the preview of a post.
// props from parent: item
// state: none
// dependency component: footer summary post
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./SummaryPost.scss";
import FooterSummaryPost from "./FooterSummaryPost";
class SummaryPost extends Component {
    render() {
        const { item } = this.props;
        return (
            <div id="summary">
                <a href={"/posts/" + item.id}>
                    <Card.Img variant="top" src={item.imageURL} />
                    <Card.Link className="card-title" href={"/posts/" + item.id}>
                        {item.title}
                    </Card.Link>
                    <p className="card-summary">{item.summary}</p>
                    <Card.Link className="card-category" href={item.categoryID}>
                        {item.categoryName}
                    </Card.Link>
                    <Card.Link className="card-subject" href={item.subjectID}>
                        {item.subjectName}
                    </Card.Link>
                    <p className="inline">được viết bởi </p>
                    <Card.Link className="card-author" href={item.authorID}>
                        {item.authorName}
                    </Card.Link>
                    <Card.Text className="card-date">{item.publishDate}</Card.Text>
                    <FooterSummaryPost isSummary={true} item={item} />
                </a>
            </div>
        );
    }
}

export default SummaryPost;
