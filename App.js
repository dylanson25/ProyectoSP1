import React from 'react';
import whitRedux from './src/redux/index'

import { StackNavigator } from './src/components/navigation/StackNavigation';

const App = () => {
  return (
    <>
      <StackNavigator />
    </>
  );
};

export default whitRedux(App);
