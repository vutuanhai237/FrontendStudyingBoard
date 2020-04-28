import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import anh from "../../img/anh.jpg"
import "./summary_document.scss"
import FooterSummaryDocument from "./footer_summary_document"
class SummaryDocument extends Component {
    render() {
        const { item } = this.props;
        return (
            <div id="summary">
                <Card.Img variant="top" src={anh} />
                <Card.Link className="card-title" href="">{item.title}</Card.Link>
                <p className="card-summary">
                    {item.summary}
                </p>
                <Card.Link id="card-category" href="">{item.categoryName} </Card.Link>
                <Card.Link id="card-subject" href="">{item.subjectName} </Card.Link>
                <p className="inline">được viêt bởi </p>
                <Card.Link id="card-author" href="">{item.authorName}</Card.Link>
                <Card.Text id="card-date">
                    {item.publishDate}
                </Card.Text>
                <FooterSummaryDocument item={item} />
            </div>
        );
    }
}


export default SummaryDocument;
