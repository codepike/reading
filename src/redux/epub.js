import 'rxjs';
import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators';
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';


const CHANGE_LOCATION = "CHANGE_LOCATION";
const RECEIVE_BOOKS = "RECEIVE_BOOKS"


const initialState = {
  location: ""
};

function Reducer(state = initialState, action) {
  
  switch (action.type) {
    case CHANGE_LOCATION:
      return {...state,
        location: action.location
      };

    default:
      return state
  }
}

export function changeLocation(location) {
  return {
    type: CHANGE_LOCATION,
    location: location
  }
};


export default Reducer;
