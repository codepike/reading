import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux'
import { render } from 'react-dom'
// import logger from './redux/logger';
import { ajax } from 'rxjs/ajax';
import rootEpic from './redux/epic';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

const endpoint = '';

function makeRequest(resource, method, body) {
  console.log("makeing request");
  return [{
    response: 'uuuuuuuuuuuuuuuu'
  }];
  let withCredentials = true;
  let request = {
    url: endpoint + '/' + resource,
    withCredentials: true,
    async: true,
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: body
  }

  return ajax(request);
}

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    makeRequest: makeRequest
  }
});

const logger1 = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

// const store = createStore(rootReducer);
function getStore() {
  const store = createStore(
    rootReducer,
  // applyMiddleware() tells createStore() how to handle middleware
    applyMiddleware(logger1, epicMiddleware)
  )

  epicMiddleware.run(rootEpic);

  return store;
}

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
