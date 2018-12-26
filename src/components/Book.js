import React from 'react'
import { Button, Card, CardImg, CardImgOverlay,CardSubtitle,  CardText, CardBody, CardTitle, Container, Col, Media, Row } from 'reactstrap';

const Book = (props) => {
  const { book } = props;
  console.log(props)
  console.log(book)

  if (book) {
  return (
    <Container sm='12'>
      <Row sm='12'>
        <Col sm='6'>
          <Card>
            <CardImg top width="100%" src={book.cover} alt="Card image cap" />
            <CardBody>
              <CardTitle>{book.title}</CardTitle>
              <CardSubtitle>By {book.author}</CardSubtitle>
              <CardText>{book.isbn}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='6'>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{book.title}</CardTitle>
              <CardSubtitle>By {book.author}</CardSubtitle>
              <CardText>{book.isbn}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
} else {
  return null;
}
}

export default Book;
