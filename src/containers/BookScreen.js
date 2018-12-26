import React from 'react';
import { Button, Col, Container, Input, Row } from 'reactstrap'
import { connect } from 'react-redux';
import { changeLocation } from '../redux/epub'
import {ReactReader} from 'react-reader'
import { fetchBook } from '../redux/book'
import Book from '../components/Book'

const BOOK_SCREEN = 'BOOK_SCREEN'

class BookScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.onFetchBook(id);
  }

  render() {
    const id = this.props.match.params.id;
    console.log(this.props)
    return (
      <Container>
        <Book book={this.props.book} />
        <div className="row">
          <div className="col-12 col-md-3">
            <Button>Edit</Button>
            </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onChange: (event) => {
        console.log(event);
      },

      onFetchBook: bookId => {
        dispatch(fetchBook(BOOK_SCREEN, bookId))
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);
