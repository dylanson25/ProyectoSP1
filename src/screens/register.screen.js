import React from 'react';
import {
  Container,
  AcomodingBox,
  ScrollView,
  Title,
  SubTitle,
  Logo,
  TxtInfo,
} from '../assets/styleds';
import {ControllerInput, CustomButton, InputCedula} from '../components';
import {useForm} from 'react-hook-form';
import {
  pswrd_rules,
  verifyCedula,
  EMAIL_REGEX,
} from '../utils/validation_function';
import {firbaseMethods} from '../methods';

const handleSignUp = (navigation, data) => {
  firbaseMethods
    .signInWithNameEmailAndPassword(navigation, data)
    .then(() => console.log(true))
    .catch(err => console.log(err));
};

const Register = ({navigation, route}) => {
  const {control, handleSubmit, watch, reset} = useForm();
  const pwd = watch('pswrd');
  const fullName = watch(['userName', 'firstName', 'secondName']);
  return (
    <ScrollView>
      <Container>
        <Logo wh="90px" hg="140px" />
        <Title fs="30px">Mental Colima</Title>
        <SubTitle>{route.params ? 'Profesional' : 'Usario'}</SubTitle>
        <ControllerInput
          inputForms
          rules={{required: 'Falta ingresar el nombre'}}
          name="userName"
          control={control}
          title="Nombre(s)"
          icon="user"
        />
        <ControllerInput
          inputForms
          rules={{
            required: 'Falta ingresar el primer apellido',
          }}
          name="firstName"
          control={control}
          title="Primer apellido"
        />
        <ControllerInput
          inputForms
          rules={{required: false}}
          name="secondName"
          control={control}
          title="Segundo apellido"
        />

        {route.params && (
          <InputCedula
            rules={{
              required: 'Falta ingresar la cedula',
              validate: value =>
                verifyCedula(value, fullName) ||
                'Los datos de la cedula no coinciden con sus datos',
            }}
            name="cedula"
            control={control}
            title="Cedula"
            reset={reset}
          />
        )}

        <ControllerInput
          inputForms
          rules={{
            required: 'Falta ingresar el email',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email invalido',
              minLength: {
                value: 7,
                message: 'La cedula debe contener al menos 7 caracteres',
              },
            },
          }}
          name="email"
          control={control}
          title="Correo electronico"
          icon="envelope"
        />
        <ControllerInput
          inputForms
          rules={pswrd_rules}
          name="pswrd"
          control={control}
          title="Contraseña"
          icon="lock"
        />
        <ControllerInput
          inputForms
          rules={{
            required: 'Falta confirmar la contraseña',
            validate: value => value == pwd || 'La contraseña no coincide',
          }}
          name="confirmPswrd"
          control={control}
          title="Confirmar contraseña"
          icon="lock"
        />
        <CustomButton
          onPress={handleSubmit(value => handleSignUp(navigation, value))}
          title="Crear cuenta"
        />
        <AcomodingBox>
          <TxtInfo>¿Ya tienes cuenta?{'  '}</TxtInfo>
          <TxtInfo
            mt={'0px'}
            color={'#5C7D95'}
            style={{textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate('Login')}>
            Iniciar sesión
          </TxtInfo>
        </AcomodingBox>
        <TxtInfo
          color={'#5E89DD'}
          style={{textDecorationLine: 'underline'}}
          onPress={() => navigation.push('Main', {screen: 'Home'})}>
          Entrar sin cuenta
        </TxtInfo>
      </Container>
    </ScrollView>
  );
};
export default Register;
