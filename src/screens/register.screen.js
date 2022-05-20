import React from 'react';
import { Container, AcomodingBox, ScrollView, Title, SubTitle } from '../assets/styleds';
import {CustomInput, CustomButton, InputCedula} from '../components';
import {useForm} from 'react-hook-form';
import { pswrd_rules, verifyCedula, EMAIL_REGEX } from '../utils/validation_function';
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
        <Title>Mental Colima</Title>
        <SubTitle>Profesional</SubTitle>
        <CustomInput
          rules={{required: 'Falta ingresar el nombre'}}
          name="userName"
          control={control}
          placeholder="Nombre(s)"
          icon="user"
        />
        <AcomodingBox>
          <CustomInput
            rules={{
              required: 'Falta ingresar el primer apellido',
            }}
            name="firstName"
            control={control}
            placeholder="Primer apellido"
            width="45%"
          />
          <CustomInput
            rules={{required: false}}
            name="secondName"
            control={control}
            placeholder="Segundo apellido"
            width="45%"
          />
        </AcomodingBox>

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
            placeholder="Cedula"
            reset={reset}
          />
        )}

        <CustomInput
          rules={{
            required: 'Falta ingresar el email',
            pattern: {value: EMAIL_REGEX, message: 'Email invalido',  minLength: {
              value: 7,
              message: 'La cedula debe contener al menos 7 caracteres',
            },},
          }}
          name="email"
          control={control}
          placeholder="Correo electronico"
          icon="envelope"
        />
        <CustomInput
          rules={pswrd_rules}
          name="pswrd"
          control={control}
          placeholder="Contraseña"
          icon="lock"
        />
        <CustomInput
          rules={{
            required: 'Falta confirmar la contraseña',
            validate: value => value == pwd || 'La contraseña no coincide',
          }}
          name="confirmPswrd"
          control={control}
          placeholder="Confirmar contraseña"
          icon="lock"
        />
        <CustomButton
          onPress={handleSubmit(value => handleSignUp(navigation, value))}
          title="CREAR CUENTA"
        />
      </Container>
    </ScrollView>
  );
};
export default Register;
