import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import {ReactReader} from 'react-reader'
import {withRouter} from "react-router-dom";
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Input, Media } from 'reactstrap';
import { fetchBooks } from '../redux/bookshelf'

function RenderBook({book, onClick}) {
  return (
    <Card
       onClick={()=>onClick(book.id)}>
       <CardImg width="100%" src={book.cover} alt={book.title} />
       <CardBody>
         <CardTitle>{book.title}</CardTitle>
         <CardText>{book.author}</CardText>
       </CardBody>
    </Card>
  );
}

const B = withRouter(RenderBook)

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
    const menu = this.props.books.books.map((book)=>{
      return (
        <div className="col-12 col-md-3" key={book.id}>
          <B book={book} onClick={() => this.showBook.bind(this)(book.id)} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
      </div>
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
