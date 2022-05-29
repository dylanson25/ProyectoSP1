import React from 'react';
import {Conteiner, TextInfo, RealoadBtn} from './Styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {firbaseMethods} from '../../methods';

const MessageToVerify = ({navigation, email}) => {
  return (
    <Conteiner>
      <Icon name="user-shield" color={'#87B7DF'} size={100}></Icon>
      <TextInfo>
        Para mayor seguridad se a enviado un mensaje a el correo electrónico:
      </TextInfo>
      <TextInfo  style={{textDecorationLine: 'underline'}} color="#2A9EFF"> {email} </TextInfo>
      <TextInfo>
        Favor de verificar el correo para poder iniciar sesión
      </TextInfo>
      <RealoadBtn
        onPress={() => {
            firbaseMethods.LogOut(navigation)
        }}>
        <Icon
          name={'arrow-right'}
          color={ 'black' }
          size={50}></Icon>
      </RealoadBtn>
    </Conteiner>
  );
};

export default MessageToVerify;
