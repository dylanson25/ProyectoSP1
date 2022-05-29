import React from 'react';
import {Conteiner, ContInfo, Imagen, TextInfo, TextName} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Info = ({name, info}) => {
  return (
    <ContInfo>
      <Icon name={name} size={20} color="black" />
      <TextInfo style={{margin: 10}}>{info}</TextInfo>
    </ContInfo>
  );
};

const CardInfo = ({data}) => {
  const renderInfo = data.map(({name, info}, key) => (
    <Info key={key} name={name} info={info} />
  ));

  return (
    <Conteiner>
      <Imagen source={{uri: 'https://reactjs.org/logo-og.png'}} />
      <TextName>
          Ximena velasca godines
      </TextName>
      <TextInfo>
        Esto es una prueba de una descrpcion de una especialista en la salud
        mental
      </TextInfo>
      {renderInfo}
    </Conteiner>
  );
};

export default CardInfo;
