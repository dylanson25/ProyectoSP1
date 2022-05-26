import React from 'react';
import {Circle, Container, Texto, Line, ColRow} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileBtn = ({icon, text, onPress}) => {
  return (
    <Container onPress={onPress}>
      <ColRow>
        <ColRow  fd="row">
          <Circle>
            <Icon name={icon} size={30} color={'black'} />
          </Circle>
          <Texto>{text}</Texto>
        </ColRow>
        <Line></Line>
      </ColRow>
    </Container>
  );
};
export default ProfileBtn;
