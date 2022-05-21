import React, {useState} from 'react';
import {Conteiner, TextInfo, RealoadBtn} from './Styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

const emailUserVerified = setState => {
  const {emailVerified} = auth().currentUser;
  console.log(emailVerified);
  setState(emailVerified);
};

const MessageToVerify = ({navigation}) => {
  const [state, setState] = useState('false');

  return (
    <Conteiner>
      <Icon name="user-shield" color={'#87B7DF'} size={100}></Icon>
      <TextInfo>
        Para mayor seguridad se a enviado un mensaje a el correo electrónico:{' '}
      </TextInfo>
      <TextInfo color="#2A9EFF"> Dvillarreal0@ucol.mx </TextInfo>
      <TextInfo>Favor de verificar el correo</TextInfo>
      <RealoadBtn
        onPress={() => {
          emailUserVerified(setState);
          navigation.navigate('Verify');
        }}>
        <Icon
          name={!state ? 'undo' : 'check'}
          color={!state ? 'black' : 'green'}
          size={50}></Icon>
      </RealoadBtn>
    </Conteiner>
  );
};

export default MessageToVerify;
