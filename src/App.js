import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main';
import {BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
