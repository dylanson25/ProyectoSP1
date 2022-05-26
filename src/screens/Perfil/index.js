import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfile} from '../../redux/actions'
import {ProfileComponent} from './component';
import { EditComponent } from './editProfile';
import { ChangePswrdComponent } from './changePswrd';

export const Profile = connect(
  ({user: {userData}}) => ({userData}),
  dispatch => bindActionCreators({getProfile}, dispatch),
)(ProfileComponent);

export const EditProfile = connect(
  ({user: {userData}}) => ({userData}),
  dispatch => bindActionCreators({getProfile}, dispatch),
)(EditComponent);

export const ChangePswrd = connect(
  ({user: {userData}}) => ({userData}),
  dispatch => bindActionCreators({getProfile}, dispatch),
)(ChangePswrdComponent);

