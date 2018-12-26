import React from 'react';
import { Input, Button } from 'reactstrap'
import { connect } from 'react-redux';
import { changeLocation } from '../redux/epub'
import {ReactReader} from 'react-reader'

class Book extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log("enter location", this.props.epub);

    return (
      <div id="area"  style={{position: 'relative', height: 1000}}>
        <ReactReader
          url={'assets/my-ebook.epub'}
          title={'Alice in wonderland'}
          location={this.props.epub.location}
          locationChanged={(epubcifi) => this.props.onChangeLocation(epubcifi)}
          options = {{spread: "always", min: 100000}}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    epub: state.epub
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onChangeLocation: (epubcifi) => {
        console.log("onChangeLocation", epubcifi);
        dispatch(changeLocation(epubcifi));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
