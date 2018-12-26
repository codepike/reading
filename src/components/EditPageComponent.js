import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  Col, CardTitle, Input, Label, TextArea
} from 'reactstrap';

const EditPageComponent = (props) => {
  return (
    <div className="container">
      <div className="row">
        <TextArea></TextArea>
        <Label>Upload an image</Label>

        <Input
          type="file"
        />
      </div>
    </div>
  );
};

export default EditPageComponent;
