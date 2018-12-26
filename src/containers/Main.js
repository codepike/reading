import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../dishes';
import SigninView from './SigninView';
import SignUpView from './SignUpView';
import BooksView from './BookView';
import BookScreen from './BookScreen'
import Editor from './Editor'
import Books from './Books'
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
  }

  render() {
     return (
       <div>
         <Header />
         <Switch>
           <Route path="/login" component = { SigninView } />
           <Route path="/signup" component = { SignUpView } />
           <Route exact path="/book/:id" component={BookScreen}/>
           <Route exact path="/edit/:id" component={Editor} />
           <Route exact path="/admin/manage" component={Editor} />
           <Route path="/" component={ Books }/>
         </Switch>
       </div>
    );
  }
}

export default Main;
