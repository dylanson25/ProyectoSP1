import React from 'react';
import {
  Container,
  StackDatos,
  StackTitle,
  CardEdit,
  ScrollView,
} from '../assets/styleds';
import {
  InputCardPro,
  PerfilInfo,
  CustomButton,
  InputMiltiline,
} from '../components';
import {useForm} from 'react-hook-form';
import { firestoreMethods } from '../methods/firestore.method';


const handleLoadCard = (imagen, nombre, data) => {
  console.log(data)
  firestoreMethods.loadData(imagen, nombre, data)
};

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
            placeholder="Ubicación"
            icon="map-marker-alt"
          />
          <InputCardPro
            name="modalidad"
            rules={{
              required: 'Falta ingresar la modalidad',
            }}
            control={control}
            placeholder="Modalidad"
            icon="laptop-house"
          />
          <InputCardPro
            name="precio"
            rules={{
              required: 'Falta ingresar la precio',
            }}
            control={control}
            placeholder="Precio"
            icon="money-bill-wave"
          />
          <InputCardPro
            name="telefono"
            rules={{
              required: 'Falta ingresar la telefono',
            }}
            control={control}
            placeholder="Telefono"
            icon="phone"
          />
        </CardEdit>
        <CustomButton title={'Guardar'} onPress={handleSubmit(data => handleLoadCard('Ximena Montserrat', 'imagenate esta',data))} />
      </Container>
    </ScrollView>
  );
};
export default EditProCard;
