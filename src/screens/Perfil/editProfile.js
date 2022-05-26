import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Container, AcomodingBox} from '../../assets/styleds';
import {CustomInput, CustomButton} from '../../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../../utils/validation_function';

const handleLogIn = (navigation, {email, pswrd}) => {};

export const EditComponent = ({navigation, userData}) => {
    const {Nombres, PrimerApellido, SegundoApellido, Email} = userData;
    const {control, handleSubmit} = useForm();
  return (
    <Container>
      <Icon style={{margin: 25}} name="user-edit" size={85} color={'#87B7DF'} />
      <CustomInput
        name="email"
        rules={{
          required: 'Falta ingresar el email',
          pattern: {value: EMAIL_REGEX, message: 'Email invalido'},
        }}
        control={control}
        title="Correo electronico"
        placeholder={Email}
        icon="envelope"
        black
      />
      <CustomInput
        rules={{required: 'Falta ingresar el nombre'}}
        name="userName"
        control={control}
        title="Nombre(s)"
        placeholder={Nombres}
        icon="user"
        black
      />
      <AcomodingBox>
        <CustomInput
          rules={{
            required: 'Falta ingresar el primer apellido',
          }}
          name="firstName"
          control={control}
          title="Primer apellido"
          placeholder={PrimerApellido}
          width="45%"
          black
        />
        <CustomInput
          rules={{required: false}}
          name="secondName"
          control={control}
          title='Segundo apellido'
          placeholder={SegundoApellido}
          width="45%"
          black
        />
      </AcomodingBox>
      <CustomButton
        title="Guardar"
        onPress={handleSubmit(data => handleLogIn(navigation, data))}
      />
    </Container>
  );
};
