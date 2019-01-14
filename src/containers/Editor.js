import React from 'react';
import { connect } from 'react-redux'
import { Button, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
import { addCover, inputChange, createBook, selectFile } from '../redux/edit'
import { fetchBook } from '../redux/book'

const EDIT = "EDIT"

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id && id > 0) {
      this.props.onFetchBook(id);
    }
  }

  render() {
    console.log("enter location", this.props);

    const {id, title, series, isbn, author, year, description} = this.props.edit.book;

    return (
      <Container>
        <Row>
          <div className="col-12">
            <Form>
              <FormGroup>
                <Label for="id">Id</Label>
                <Input id="id" placeholder="" value={id}
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="title">Enter Title</Label>
                <Input id="title" placeholder="" value={title}
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="series">Enter Series</Label>
                <Input id="series" placeholder="" value={series}
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="isbn">Enter ISBN</Label>
                <Input name="isbn" id="isbn" placeholder="" value={isbn}
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="author">Enter Author</Label>
                <Input id="author" placeholder=""  value={author}
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="year">Enter Publication Year</Label>
                <Input id="year" placeholder="" value={year}
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="description">Enter Description</Label>
                <Input type="textarea" id="description" placeholder=""
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup check row>
                <Button onClick={(event)=>this.props.onCreateBook(event, this.props.edit.book)}>Save Book</Button>
              </FormGroup>
            </Form>
          </div>
        </Row>

        <Row>
          <br />
        </Row>

        <Row>
          <div className="col-12">
            <Form>
              <FormGroup>
                <Label for="coverFile">Upload Cover Image</Label>
                <Input id="coverFile" type="file" onChange={(e) => this.props.onInputFile(e)}/>
              </FormGroup>

              <FormGroup check row>
                <Button onClick={(event)=>this.props.onAddCover(event, id, this.props.edit.cover.coverFile)}>Save Cover</Button>
              </FormGroup>
            </Form>
          </div>
        </Row>

        <Row>
          <br />
        </Row>

        <Row>
          <div className="col-12">
            <Form>
              <FormGroup>
                <Label for="chapter">Enter Chapter ID</Label>
                <Input id="chapter" placeholder=""
                  onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="question">Enter Question</Label>
                <Input type="textarea" name="question" id="question" placeholder="" onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>

              <FormGroup>
                <Label for="answer">Enter Answer</Label>
                <Input type="textarea" name="answer" id="answer" placeholder="" onChange = {(event) => {this.props.onInputChange(event)}}/>
              </FormGroup>


              <FormGroup check row>
                <Button onClick={(event)=>this.props.onCreateBook(event, this.props.edit.book, this.props.edit.cover)}>Save Question</Button>
              </FormGroup>
            </Form>
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    edit: state.edit
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onAddCover: (event, bookId, coverFile) => {
          event.preventDefault();
          dispatch(addCover(bookId, coverFile))
      },

      onInputChange: (event) => {
        dispatch(inputChange(EDIT, event.target.id, event.target.value));
      },

      onInputFile: (event) => {
        dispatch(selectFile(event.target.files[0]));
      },

      onFetchBook: bookId => {
        dispatch(fetchBook(EDIT, bookId))
      },

      onCreateBook: (event, book) => {
        event.preventDefault();
        dispatch(createBook(book));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
