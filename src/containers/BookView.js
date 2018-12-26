import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'reactstrap'
import { fetchBooks } from '../redux/bookshelf';

const renderBook = (book) => {
  return (
    <div key={book.id}>
      <p>{book.title}</p>
    </div>
  );
}

class BooksView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log("aaa", this.props.books);

    const bookList = this.props.books.map(book=>renderBook(book))

    console.log("bbb", bookList);

    return (
      <div className="container">
        <Button
          onClick={()=>this.props.onFetchBooks()}>
          Test Books
        </Button>
        {bookList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.book.books
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // same effect
        onFetchBooks : () => {
          console.log("username, password");
          dispatch(fetchBooks());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksView);
