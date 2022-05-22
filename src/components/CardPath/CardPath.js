import React from 'react';
import {Conteiner, Title, TextInfo, RealoadBtn} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import privilegesMapping from './Privileges';

const CardPath = ({icon, type, privileges, navigation, nav}) => {
  return (
    <Conteiner>
      <Title>{type}</Title>
      <Icon name={icon} color={'black'} size={50} />
      <TextInfo fw={'bold'}>Privilegios: </TextInfo>
      <View >{privilegesMapping(privileges)}</View>
      <RealoadBtn
        onPress={() => {
            navigation.navigate('Register', nav)
        }}>
        <Icon
          name={'arrow-right'}
          color={ 'black' }
          size={30}/>
      </RealoadBtn>
    </Conteiner>
  );
};

export default CardPath;
