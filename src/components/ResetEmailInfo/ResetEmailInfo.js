import React from 'react';
import {Conteiner, TextInfo} from '../VerifyUser/Styled';
import Icon from 'react-native-vector-icons/FontAwesome5';


const MessageToResetEmail = ({email}) => {
  return (
    <Conteiner style={{width: 400}} hg={'65%'}>
      <Icon style={{margin: 22}} name="user-shield" color={'#87B7DF'} size={70}></Icon>
      <TextInfo color="#2A9EFF"> {email} </TextInfo>
      <TextInfo size={'18px'}>
        Al cambiar el correo electronico se necesitara verificar el correo electronico nuevo a si como volver a iniciar sesion:
      </TextInfo>
     
    </Conteiner>
  );
};

export default MessageToResetEmail;