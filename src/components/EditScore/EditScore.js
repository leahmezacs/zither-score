import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Container, Row, Col } from 'react-bootstrap/';


class EditScore extends Component {
    render () {
        return (
            <div>
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                            </Card>
                    
                </Container>
            </div>
        )
    }
}

export default EditScore;