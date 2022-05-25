import React from 'react';
import {Circle, Container, Texto} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileBtn = ({icon, text}) => {
  return (
    <Container>
      <Circle>
        <Icon name={icon} size={30} color={'black'} />
      </Circle>
      <Texto>{text}</Texto>
    </Container>
  );
};
export default ProfileBtn;