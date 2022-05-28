import React from 'react';
import {Conteiner, Texto, Back} from './Styled';
import Icon from 'react-native-vector-icons/FontAwesome';

const PerfilInfo = ({data, isCard}) => {
  const {Nombres, PrimerApellido, SegundoApellido} = data;
  return (
    <Conteiner bg={isCard && 'white'}>
      <Back wd={isCard && '130px'} hg={isCard && '130px'}>
        <Icon name={isCard ? 'address-book' : 'user-o'} size={isCard ? 80 : 100} color="black" />
      </Back>
      <Texto size="25px">
        {Nombres} {PrimerApellido} {SegundoApellido}
      </Texto>
    </Conteiner>
  );
};
export default PerfilInfo;
