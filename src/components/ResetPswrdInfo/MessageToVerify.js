import React from 'react';
import {Conteiner, TextInfo} from '../VerifyUser/Styled';
import Icon from 'react-native-vector-icons/FontAwesome5';


const MessageToReset = ({email}) => {
  return (
    <Conteiner hg={'82%'}>
      <Icon name="user-shield" color={'#87B7DF'} size={90}></Icon>
      <TextInfo>
        Se enviara un mensaje a el correo electrónico para realizar el cambio de contraseña:
      </TextInfo>
      <TextInfo color="#2A9EFF"> {email} </TextInfo>
      <TextInfo>
        Favor de dar al boton cambiar contraseña para recibir el correo de canvio de contraseña
      </TextInfo>
    </Conteiner>
  );
};

export default MessageToReset;
