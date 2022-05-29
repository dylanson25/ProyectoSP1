import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfile} from '../../redux/actions';
import ListComponent from './component';

export const CardProList = connect(
    ({user: {userData}}) => ({userData}),
    dispatch => bindActionCreators({getProfile}, dispatch),
  )(ListComponent);
  