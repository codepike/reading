import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, Col,
  CardTitle } from 'reactstrap';

function RenderDish({dish}) {
  if (dish != null) {
      return(
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1">
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        </div>
      );
  }
  return (<div></div>);
}

function RenderComments({comments}) {
  const commentList = comments.map(
    comment=>{
      return (
        <li>
          <p>{comment.comment}</p>
          <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
        </li>
      );
    }
  );

  return (
    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1">
      <h4>Comments</h4>
      <ul class="list-unstyled">{commentList}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default DishDetail;
