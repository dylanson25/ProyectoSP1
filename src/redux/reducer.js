import {SET_NAME, SET_EMAIL, SET_PASSWORD, SET_UID} from './actions';

const initialState = {
  uid: '',
  name: '',
  email: '',
  password: '',
};

function userData(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    case SET_UID:
      return {...state, uid: action.payload};
    default:
      return state;
  }
}

export default userData;
