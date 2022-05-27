import React from 'react';
import {Container, ScrollView} from '../../assets/styleds';
import {CustomButton, CustomInput, MessageToResetEmail} from '../../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../../utils/validation_function';
import {firbaseMethods} from '../../methods';
import Auth from '@react-native-firebase/auth'


const handleResetEmail = (navigation, { email }) => {
  firbaseMethods.resetEmail(navigation, email);
};

export const EditComponent = ( { navigation, userData}) => {
  const {control, handleSubmit} = useForm();
  
  return (
    <ScrollView>
      <Container>
        <MessageToResetEmail email={Auth().currentUser.email} />
        <CustomInput
          name="email"
          rules={{
            required: 'Falta ingresar el email',
            pattern: {value: EMAIL_REGEX, message: 'Email invalido'},
          }}
          control={control}
          title="Correo electronico"
          placeholder="Correo electronico"
          icon="envelope"
        />
        <CustomButton
          title="Cambiar correo"
          onPress={handleSubmit(data => handleResetEmail(navigation, data))}
        />
      </Container>
    </ScrollView>
  );
};
