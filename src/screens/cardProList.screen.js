import React from 'react';
import {CardInfo} from '../components';
import {Container} from '../assets/styleds';

const CardProList = ({navigation}) => {
  const data = [
    {name: 'map-marker-alt', info: 'Flor de girasol #321 Co.Arboles'},
    {name: 'laptop-house', info: 'Virtual y precencial'},
    {name: 'money-bill-wave', info: '$250'},
    {name: 'phone', info: '312-678-9843'},
  ];
  return (
    <Container>
      <CardInfo data={data}/>
    </Container>
  );
};
export default CardProList;
