import React from 'react';
import {
  Container,
  StackDatos,
  StackTitle,
  CardEdit,
  ScrollView,
} from '../assets/styleds';
import {InputCardPro, PerfilInfo, CustomButton, InputMiltiline} from '../components';
import {useForm} from 'react-hook-form';

const handleLogIn = (navigation, {email, pswrd}) => {};

const EditProCard = ({navigation}) => {
  const {control, handleSubmit} = useForm();

  return (
    <ScrollView>
      <Container jc="flex-start">
        <StackDatos>
          <StackTitle>Mis datos</StackTitle>
        </StackDatos>
        <CardEdit>
          <PerfilInfo
            isCard
            data={{
              Nombres: 'Ximena',
              PrimerApellido: 'Velasco',
              SegundoApellido: 'Godines',
            }}
          />
          <InputMiltiline />
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
        <CustomButton title={'Guardar'} onPress={() => {}} />
      </Container>
    </ScrollView>
  );
};
export default EditProCard;
