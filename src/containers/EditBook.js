import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, Col, CardTitle } from 'reactstrap';
import EditorBookComponent from '../components/EditBookComponent';
import { inputChange } from '../redux/editbook';

class EditBook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EditorBookComponent
        onInputChange={this.props.onInputChange}
      ></EditorBookComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    editbook: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: event => {
          dispatch(inputChange(event.target.id, event.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
