import React, {useEffect} from 'react';
import {CardInfo} from '../../components';
import {Container} from '../../assets/styleds';
import {ScrollView} from 'react-native'
const ListComponent = ({navigation, userData, getProfile}) => {
  useEffect(() => {
    // getProfile();
  }, []);
  const data = [
    {name: 'map-marker-alt', info: 'Flor de girasol #321 Co.Arboles'},
    {name: 'laptop-house', info: 'Virtual y precencial'},
    {name: 'money-bill-wave', info: '$250'},
    {name: 'phone', info: '312-678-9843'},
  ];
  return (
    <ScrollView>
      <Container>
        <CardInfo data={data} />
        <CardInfo data={data} />
      </Container>
    </ScrollView>
  );
};
export default ListComponent;
