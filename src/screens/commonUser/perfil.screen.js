import React from 'react';
import { Conteiner, Title } from '../../assets/styleds';
import { CustomButton } from '../../components';
import { firbaseMethods } from '../../methods';
const Perfil = ({navigation}) => {
  
  return (
    <Conteiner>
      <Title>perfil</Title>
      <CustomButton title='Salir'  onPress={() => {
        firbaseMethods.LogOut(navigation)
      }}/>
    </Conteiner>
  );
};
export default Perfil;
