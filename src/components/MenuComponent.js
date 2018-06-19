import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

function RenderMenuItem({dish, onClick}) {
  return (
    <Card top
       onClick={()=>onClick(dish.id)}>
       <CardImg width="100%" src={dish.image} alt={dish.name} />
       <CardBody>
         <CardTitle>{dish.name}</CardTitle>
         <CardText>{dish.description}</CardText>
       </CardBody>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish)=>{
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
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
};

export default Menu;
