import {request, success, error} from '../baseActions';
import {firbaseMethods} from '../../methods';
import {GET_PROFILE} from '../actionTypes/user';

export const getProfile = () => async dispatch => {
  const action = GET_PROFILE;
  dispatch(request(action));
  try {
    const response = await firbaseMethods.getProfile();
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};
