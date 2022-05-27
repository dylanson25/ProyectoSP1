import React from 'react';
import {Conteiner, Texto, Back} from './Styled';
import Icon from 'react-native-vector-icons/FontAwesome';

const PerfilInfo = ({data}) => {
  const {Nombres, PrimerApellido, SegundoApellido} = data;
  return (
    <Conteiner>
      <Back>
        <Icon name="user-o" size={100} color="black" />
      </Back>
      <Texto size="25px">
        {Nombres} {PrimerApellido} {SegundoApellido}
      </Texto>
    </Conteiner>
  );
};
export default PerfilInfo;
