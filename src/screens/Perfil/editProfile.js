import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Container} from '../../assets/styleds';
import {CustomInput, CustomButton} from '../../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../../utils/validation_function';

import {Text} from 'react-native';
const handleLogIn = (navigation, {email, pswrd}) => {
    
  };

export const EditComponent = ({navigation, userData}) => {
  const {control, handleSubmit} = useForm();
  return (
    <Container>
      <Icon name="user-edit" size={70} color={'#87B7DF'} />
      <CustomInput
        name="email"
        rules={{
          required: 'Falta ingresar el email',
          pattern: {value: EMAIL_REGEX, message: 'Email invalido'},
        }}
        control={control}
        placeholder="Correo electronico"
        icon="envelope"
      />
    
      <CustomButton
        title="INICIAR SESIÓN"
        onPress={handleSubmit(data => handleLogIn(navigation, data))}
      />
      
    </Container>
  );
};
