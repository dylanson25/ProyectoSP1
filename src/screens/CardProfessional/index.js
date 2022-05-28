import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfile} from '../../redux/actions';
import CardProfessional from './editProCard.screen';

export const EditProCard = connect(
    ({user: {userData}}) => ({userData}),
    dispatch => bindActionCreators({getProfile}, dispatch),
  )(CardProfessional);
