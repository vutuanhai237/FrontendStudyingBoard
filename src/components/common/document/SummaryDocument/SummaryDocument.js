// Document by VTH
// function: shows the preview of a document.
// props from parent: item
// state: none
// dependency component: footer summary document
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "components/common/document/FooterSummayDocument/FooterSummaryDocument.scss";
import FooterSummaryDocument from "components/common/document/FooterSummayDocument/FooterSummaryDocument";

class SummaryDocument extends Component {
    render() {
        const { item } = this.props;
        if (!item) {
            return <div></div>;
        }
        return (
            <div id="summary">
                <a href={"/docs/" + item.id}>
                    <Card.Img variant="top" src={item.imageURL} />
                    <Card.Link className="card-title" href={"/docs/" + item.id}>
                        {item.title}
                    </Card.Link>
                    <p className="card-summary">{item.summary}</p>
                    <Card.Link className="card-category" href={item.categoryID}>
                        {item.categoryName}
                    </Card.Link>
                    <Card.Link className="card-subject" href={item.subjectID}>
                        {item.subjectName}
                    </Card.Link>
                    <p className="inline"> được viết bởi </p>
                    <Card.Link className="card-author" href={item.authorID}>
                        {item.authorName}
                    </Card.Link>
                    <Card.Text className="card-date">{item.publishDate}</Card.Text>
                    <FooterSummaryDocument item={item} />
                </a>
            </div>
        );
    }
}

export default SummaryDocument;