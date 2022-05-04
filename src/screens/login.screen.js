import React from 'react';
import {Conteiner, Title, TxtInfo} from '../assets/styleds';
import {CustomInput, CustomButton} from '../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../utils/validation_function';
import {firbaseMethods} from '../methods';
import {useAuthChecker} from '../hooks/firbase';
const tryValidate = ({email, pswrd}) => {
  firbaseMethods
    .logInWithEmailAndPassword(email, pswrd)
    .then(() => {})
    .catch(err => console.log(err));
};

const Login = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  useAuthChecker(navigation);
  return (
    <Conteiner>
      <Title>Mental Colima</Title>
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
      <CustomInput
        name="pswrd"
        rules={{required: 'Falta ingresar la contraseña'}}
        control={control}
        placeholder="Contraseña"
        icon="lock"
      />
      <CustomButton
        title="INICIAR SESIÓN"
        onPress={handleSubmit(tryValidate)}
      />
      <TxtInfo>- ¿No tienes cuenta? -</TxtInfo>
      <CustomButton
        title="CREAR CUENTA"
        onPress={() => { 
          navigation.navigate('Path');
        }}
        bg="#FFDEDC"
      />
    </Conteiner>
  );
};
export default Login;
