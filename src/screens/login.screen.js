import React from 'react';
import {Container, Title, TxtInfo} from '../assets/styleds';
import {ControllerInput, CustomButton} from '../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../utils/validation_function';
import {firbaseMethods} from '../methods';
import {useAuthChecker} from '../hooks/firbase';

const handleLogIn = (navigation, {email, pswrd}) => {
  firbaseMethods
    .logInWithEmailAndPassword(email, pswrd, navigation)
    .catch(err => console.log(err));
};

const Login = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  useAuthChecker(navigation);
  return (
    <Container>
      <Title>Mental Colima</Title>
      <ControllerInput
        inputForms
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
      <ControllerInput
        inputForms
        name="pswrd"
        rules={{required: 'Falta ingresar la contraseña'}}
        control={control}
        title="Contraseña"
        placeholder="Contraseña"
        icon="lock"
      />
      <CustomButton
        title="INICIAR SESIÓN"
        onPress={handleSubmit(data => handleLogIn(navigation, data))}
      />
      <TxtInfo>- ¿No tienes cuenta? -</TxtInfo>
      <CustomButton
        title="CREAR CUENTA"
        onPress={() => navigation.navigate('Path')}
        bg="#FFDEDC"
      />
      <CustomButton
        title="ENTRAR SIN CUENTA"
        onPress={() => navigation.push('Main', {screen: 'Home'})}
        bg="#FFDEDC"
      />
    </Container>
  );
};
export default Login;
