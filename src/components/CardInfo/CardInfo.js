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

const CardInfo = ({data, name, desripcion, img}) => {
  const renderInfo = data.map(({name, info}, key) => (
    <Info key={key} name={name} info={info} />
  ));

  return (
    <Conteiner>
      <Imagen source={{uri: img}} />
      <TextName>
          {name}
      </TextName>
      <TextInfo>
       {desripcion}
      </TextInfo>
      {renderInfo}
    </Conteiner>
  );
};

export default CardInfo;
