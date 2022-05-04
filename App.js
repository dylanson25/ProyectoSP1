import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/components/navigation/navigate';
import whitRedux from './src/redux/index'
const App = () => {
  return (
    
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>

  );
};

export default whitRedux(App);
