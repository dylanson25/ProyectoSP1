import React, {useEffect, useState} from 'react';
import {CardInfo} from '../components';
import {Container, ScrollView} from '../assets/styleds';
import {firestoreMethods} from '../methods';

const CardProList = ({navigation}) => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    firestoreMethods.getProCards().then(response => {
      setCards(response);
    });
  }, []);
  const listCards = cards?.map((info, key) => (
    <CardInfo
      key={key}
      name={info.nombre}
      img={info.imagen}
      desripcion={info.descripcion}
      data={[
        {name: 'map-marker-alt', info: info.ubicacion},
        {name: 'laptop-house', info: info.modalidad},
        {name: 'money-bill-wave', info: info.precio},
        {name: 'phone', info: info.telefono},
      ]}
    />
  ));
  // <CardInfo data={data} />
  return (
    <ScrollView>
      <Container>
        {listCards}
      </Container>
    </ScrollView>
  );
};
export default CardProList;
