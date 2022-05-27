import React, {useEffect} from 'react';
import {Container, ContBtn} from '../../assets/styleds';
import {ProfileBtn, PerfilInfo} from '../../components';
import {firbaseMethods} from '../../methods';

export const ProfileComponent = ({navigation, userData, getProfile}) => {
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Container>
      <PerfilInfo data={userData} />

      <ContBtn>
        <ProfileBtn
          icon="envelope"
          text="Cambiar correo"
          onPress={() => {
            navigation.navigate('Main', {
              screen: 'Perfil',
              params: {
                screen: 'Editar información',
                email: email
              },
            });
          }}
        />
        <ProfileBtn
          icon="key"
          text="Cambiar contraseña"
          onPress={() => {
            navigation.navigate('Main', {
              screen: 'Perfil',
              params: {
                screen: 'Cambiar contraseña',
              },
            });
          }}
        />
        <ProfileBtn
          icon="sign-out-alt"
          text="Cerrar sesion"
          onPress={() => firbaseMethods.LogOut(navigation)}
        />
      </ContBtn>
    </Container>
  );
};
