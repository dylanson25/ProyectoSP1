import React from 'react';
import {Circle, Container, Texto, ColRow} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileBtn = ({icon, text, onPress}) => {
  return (
    <Container onPress={onPress}>
      <ColRow>
        <ColRow fd="row">
          <Circle>
            <Icon name={icon} size={25} color={'white'} />
          </Circle>
          <Texto>{text}</Texto>
        </ColRow>
      </ColRow>
    </Container>
  );
};
export default ProfileBtn;
