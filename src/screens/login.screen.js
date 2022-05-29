import React from 'react';
import {Container, Title, TxtInfo, Logo} from '../assets/styleds';
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
      <Logo/>
      <Title>Mental Colima</Title>
      <>
        <ControllerInput
          inputForms
          name="email"
          rules={{
            required: 'Falta ingresar el email',
            pattern: {value: EMAIL_REGEX, message: 'Email invalido'},
          }}
          control={control}
          title="Correo electronico"
          icon="envelope"
        />
        <ControllerInput
          inputForms
          name="pswrd"
          rules={{required: 'Falta ingresar la contraseña'}}
          control={control}
          title="Contraseña"
          icon="lock"
        />
        <CustomButton
          title="Iniciar sesión"
          onPress={handleSubmit(data => handleLogIn(navigation, data))}
        />
      </>

      <TxtInfo mt='20px'>¿No tienes cuenta?</TxtInfo>
      <TxtInfo
        mt={'0px'}
        color={'#5C7D95'}
        style={{textDecorationLine: 'underline'}}
        onPress={() => navigation.navigate('Path')}>
        Crear cuenta
      </TxtInfo>
      <TxtInfo
        color={'#5E89DD'}
        style={{textDecorationLine: 'underline'}}
        onPress={() => navigation.push('Main', {screen: 'Home'})}>
        Entrar sin cuenta
      </TxtInfo>
    </Container>
  );
};
export default Login;
