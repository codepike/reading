import React from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, Col,
  CardTitle, Input, Label
} from 'reactstrap';

function onChange(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.files[0]);
  console.log(URL.createObjectURL(event.target.files[0]));
}

const UploadComponent = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Label>Enter the title</Label>
        <Input></Input>
        <Button>Add a page</Button>
        <Input
          type="file"
          id ="file1"
          onChange={event => onChange(event)}
        />
      </div>
    </div>
  );
};

export default UploadComponent;
