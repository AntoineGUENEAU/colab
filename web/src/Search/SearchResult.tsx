import React, {ReactElement} from "react";
import {Card} from "react-bootstrap";

export default function SearchResult(): ReactElement{
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">See detail</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}
