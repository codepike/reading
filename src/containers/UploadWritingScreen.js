import React from 'react';
import Signup from '../components/SignupComponent';
import { connect } from 'react-redux';
import { userInputChange, register } from '../redux/signup';
import { Button, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
import { addCover, inputChange, createBook, selectFile } from '../redux/edit'
import { fetchBook } from '../redux/book'

const EDIT = "EDIT"

class UploadWritingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {id, title, series, isbn, author, year, description} = this.props.edit.book;

    return (
        <Container>
          <Row>
            <div className="col-12">
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" id="email" placeholder=""
                    onChange = {(event) => {this.props.onInputChange(event)}}/>
                </FormGroup>

                <FormGroup>
                  <Label for="description">Enter Description</Label>
                  <Input type="textarea" id="description" placeholder=""
                    onChange = {(event) => {this.props.onInputChange(event)}}/>
                </FormGroup>

                <FormGroup>
                  <Label for="coverFile">Choose a file</Label>
                  <Input id="coverFile" type="file" onChange={(e) => this.props.onInputFile(e)}/>
                </FormGroup>

                <FormGroup check row>
                  <Button>Submit</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadWritingScreen);
