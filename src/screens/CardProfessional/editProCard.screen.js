import React, {useEffect} from 'react';
import {
  Container,
  StackDatos,
  StackTitle,
  CardEdit,
  ScrollView,
} from '../../assets/styleds';
import {PerfilInfo, CustomButton, ControllerInput} from '../../components';
import {useForm} from 'react-hook-form';
import {firestoreMethods} from '../../methods/firestore.method';

const CardProfessional = ({userData, getProfile}) => {
  const handleLoadCard = (imagen, data) => {
    const nombre = `${userData.Nombres} ${userData.PrimerApellido} ${userData.SegundoApellido}`;
    firestoreMethods.loadData(imagen, nombre, data);
  };

  const {control, handleSubmit} = useForm();
  useEffect(() => {
    getProfile();
  }, []);

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
              Nombres: userData.Nombres,
              PrimerApellido: userData.PrimerApellido,
              SegundoApellido: userData.SegundoApellido,
            }}
          />
          <ControllerInput
            inputMult
            name="descripcion"
            rules={{
              required: 'Falta ingresar la descripción',
            }}
            control={control}
          />
          <ControllerInput
            inputCards
            name="ubicacion"
            rules={{
              required: 'Falta ingresar la ubicación',
            }}
            control={control}
            placeholder="Ubicación"
            icon="map-marker-alt"
          />
          <ControllerInput
            inputCards
            name="modalidad"
            rules={{
              required: 'Falta ingresar la modalidad',
            }}
            control={control}
            placeholder="Modalidad"
            icon="laptop-house"
          />
          <ControllerInput
            inputCards
            name="precio"
            rules={{
              required: 'Falta ingresar la precio',
            }}
            control={control}
            placeholder="Precio"
            icon="money-bill-wave"
            ktype="numeric"
          />
          <ControllerInput
            inputCards
            name="telefono"
            rules={{
              required: 'Falta ingresar la telefono',
              minLength: {
                value: 10,
                message: 'Numero de telefono no valido',
              },
            }}
            control={control}
            placeholder="Telefono"
            icon="phone"
            ktype="phone-pad"
          />
        </CardEdit>
        <CustomButton
          title={'Guardar'}
          onPress={handleSubmit(data => handleLoadCard('Esta es una imagen', data))}
        />
      </Container>
    </ScrollView>
  );
};
export default CardProfessional;
