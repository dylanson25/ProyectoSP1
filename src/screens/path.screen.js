import React from 'react';
import {Container,  TxtInfo} from '../assets/styleds';
import {pathMapping} from '../utils';

const Path = ({navigation}) => {
  return (
    <Container>
      {pathMapping(navigation)}
    </Container>
  );
};
export default Path;
