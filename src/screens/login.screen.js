import React from 'react';
import {Conteiner,  Title, TxtInfo} from '../assets/styleds';
import {CustomInput, CustomButton} from '../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../utils/validation_function';
const tryValidate = data => {
  console.log(data);
};

const Login = ({navigation}) => {
  const {control, handleSubmit} = useForm();
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
          onPress={() => navigation.navigate('Path')}
          bg="#FFDEDC"
        />
      </Conteiner>
  );
};
export default Login;
