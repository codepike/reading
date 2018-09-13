import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../dishes';
import SigninView from './SigninView';
import SignUpView from './SignUpView';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const getMenu = () => {
  return  <Menu dishes={DISHES} onClick={(dishId)=>this.onDishSelect(dishId)} />;
};
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
  }

  render() {
     return (
       <div>
         <Header />

       <Switch>
         <Route path="/login" component = { SigninView } />
         <Route path="/signup" component = { SignUpView } />
         <Route path="/" component={ getMenu }/>
       </Switch>

       </div>
                // <Header />
         // <Switch>
         //    <Route path="/" component={ Header } />
         //    // <Redirect from="/old-match" to="/will-match" />
         //    // <Route path="/will-match" component={WillMatch} />
         //    // <Route component={NoMatch} />
         //  </Switch>
         // // <Menu dishes={DISHES} onClick={(dishId)=>this.onDishSelect(dishId)} />
         // //
         // // <DishDetail dish={this.state.dishes.filter(
         // //   (dish)=>dish.id === this.state.selectedDish
         // // )[0]} />
         // <Footer />

    );
  }
}

export default Main;
