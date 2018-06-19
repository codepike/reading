import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 m-1">
                <Card key={dish.id} onClick={()=>this.props.onClick(dish.id)}>
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

    render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            this.renderDish(dish)
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

export default Menu;
