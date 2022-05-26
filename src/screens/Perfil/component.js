import React, {useEffect} from 'react';
import {Container} from '../../assets/styleds';
import {ProfileBtn, PerfilInfo} from '../../components';
import {firbaseMethods} from '../../methods';

export const ProfileComponent = ({navigation, userData, getProfile}) => {
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Container>
      <PerfilInfo data={userData} />
      <ProfileBtn icon="feather-alt" text="Editar perfil" onPress={()=> {
        navigation.navigate('Main', {screen: 'Perfil', params: {
          screen: 'Editar información'
        }})
      }}/>
      <ProfileBtn icon="key" text="Cambiar contraseña" onPress={()=> {
        navigation.navigate('Main', {screen: 'Perfil', params: {
          screen: 'Cambiar contraseña'
        }})
      }}/>
      <ProfileBtn
        icon="sign-out-alt"
        text="Cerrar sesion"
        onPress={() => firbaseMethods.LogOut(navigation)}
      />
    </Container>
  );
};
{
  /* <Title> Perfil</Title>
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
    */
}
