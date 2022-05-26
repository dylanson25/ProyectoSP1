import React from 'react';
import {Conteiner, Texto, Type, EmailCont} from './Styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PerfilInfo = ({data}) => {
  const {Nombres, PrimerApellido, SegundoApellido, Email, type} = data;
  return (
    <Conteiner>
      <Icon name="user-alt" size={70} color="#87B7DF" />
      <Texto>
        {Nombres} {PrimerApellido} {SegundoApellido}
      </Texto>
      <Type>
        <Texto color="white" size='20px'>{type ? 'Profesional' : 'Usario comun'}</Texto>
      </Type>
      <EmailCont>
        <Icon name="envelope" size={30} color="black" />
        <Texto size='20px'>{Email}</Texto>
      </EmailCont>
    </Conteiner>
  );
};
export default PerfilInfo;
