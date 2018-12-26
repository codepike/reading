import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import {ReactReader} from 'react-reader'
import {withRouter} from "react-router-dom";
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Col, Container, Input, Media, Row } from 'reactstrap';
import { fetchBooks } from '../redux/bookshelf'
import GridView from '../components/GridView'

function RenderBook({book, onClick}) {
  return (
    <Card className="h-100"
       onClick={()=>onClick(book.id)}>
       <CardImg src={book.cover} alt={book.title} />
       <CardBody>
         <CardTitle>{book.title}</CardTitle>
         <CardText>{book.author}</CardText>
       </CardBody>
    </Card>
  );
}

const Book = withRouter(RenderBook)

class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFetchBooks();
  }

  showBook(id) {
    console.log("show book", id);
    this.props.history.push("/book/" + id)
  }

  render() {

    const gridView = this.props.books.books.map(book => {
      return (
        <Col md="3">
          <Book key={book.id} book={book} onClick={this.showBook.bind(this)}/>
        </Col>
      )}
    );
        // showBook = {this.showBook.bind(this)}/>

    return (
      <Container>
        <Row>
          {gridView}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookshelf
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onFetchBooks: () => {
        dispatch(fetchBooks());
      },

    }
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Books) )
