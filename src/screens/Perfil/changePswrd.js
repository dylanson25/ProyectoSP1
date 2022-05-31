import React from 'react';
import {Container} from '../../assets/styleds';
import {CustomButton, MessageToReset} from '../../components';
import {firbaseMethods} from '../../methods';

export const ChangePswrdComponent = ({navigation, userData}) => {
  return (
    <Container>
      <MessageToReset email={userData.Email} />
      <CustomButton
        title={'Cambiar contraseña'}
        onPress={() => {
          firbaseMethods.resetPasword()
          firbaseMethods.LogOut(navigation)
        }}
      />
    </Container>
  );
};
