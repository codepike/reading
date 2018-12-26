import React from 'react'
import { Button, Card, CardImg, CardImgOverlay,CardSubtitle,  CardText,
  CardBody, CardTitle, Container, Col, Media, Row } from 'reactstrap';
import Book from './Book'

const GridView = (props) => {
  const { books, showBook } = props;
  console.log(props)
  console.log(books)

  const grid = books.map((book)=>{
    return (
      <Col md="4" sm="6" xs="12" key={book.id}>
        <Book book={book} onClick={() => showBook(book.id)} />
      </Col>
    );
  });

  return grid;
}

export default GridView;
