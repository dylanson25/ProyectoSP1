import {getNewState} from '../../methods';
import {GET_PROFILE} from '../actionTypes';

const initialState = {
  userData: {},
  allCardsPro: [],
  loading: false,
};

export default (state = initialState, action) => {
  const {payload: response} = action;
  switch (action.type) {
    case GET_PROFILE.request():
      return getNewState(state, {
        ...state,
        loading: true,
      });
    case GET_PROFILE.error():
      return getNewState(state, {
        userData: {},
        loading: false,
      });
    case GET_PROFILE.success():
      return getNewState(state, {
        userData: response,
        loading: false,
      });
    default:
      return state;
  }
};
