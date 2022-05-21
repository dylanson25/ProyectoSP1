import React, {useEffect} from 'react';
import {Container, Title} from '../../assets/styleds';
import {CustomButton} from '../../components';
import {Text} from 'react-native'
import {firbaseMethods} from '../../methods';



export const ProfileComponent = ({navigation, userData, getProfile}) => {
    useEffect(() => {
        getProfile();
    }, []);
  return (
    <Container>
      <Title> Perfil</Title>
      <Text>{userData.type}</Text>
      <Text>{userData.Nombres}</Text>
      <Text>{userData.PrimerApellido}</Text>
      <Text>{userData.SegundoApellido}</Text>
      <Text>{userData.Email}</Text>
      <Text>{userData.Cedulas}</Text>
      <CustomButton
        title="Cerrar sesión"
        onPress={() => firbaseMethods.LogOut(navigation)}
      />
    </Container>
  );
};

