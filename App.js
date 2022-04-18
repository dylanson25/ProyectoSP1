import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './src/components/navigation/navigate';
import {Provider} from 'react-redux';
import { Store } from './src/redux/store';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
