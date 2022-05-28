import React from 'react';
import {Container, StackDatos, StackTitle, CardEdit} from '../assets/styleds';
import {InputCardPro} from '../components';
import {useForm} from 'react-hook-form';

const handleLogIn = (navigation, {email, pswrd}) => {};

const EditProCard = ({navigation}) => {
  const {control, handleSubmit} = useForm();

  return (
    <Container jc="flex-start">
      <StackDatos>
        <StackTitle>Pantalla de edición</StackTitle>
      </StackDatos>
      <CardEdit>
        <InputCardPro
          name="ubicacion"
          rules={{
            required: 'Falta ingresar la ubicación',
          }}
          control={control}
          title="Correo electronico"
          placeholder="Ubicación"
          icon="map-marker-alt"
        />
        <InputCardPro
          name="Modalidad"
          rules={{
            required: 'Falta ingresar la ubicación',
          }}
          control={control}
          title="Correo electronico"
          placeholder="Modalidad"
          icon="laptop-house"
        />
        <InputCardPro
          name="Precio"
          rules={{
            required: 'Falta ingresar la ubicación',
          }}
          control={control}
          title="Correo electronico"
          placeholder="Precio"
          icon="money-bill-wave"
        />
        <InputCardPro
          name="Telefono"
          rules={{
            required: 'Falta ingresar la ubicación',
          }}
          control={control}
          title="Correo electronico"
          placeholder="Telefono"
          icon="phone"
        />
      </CardEdit>
    </Container>
  );
};
export default EditProCard;
