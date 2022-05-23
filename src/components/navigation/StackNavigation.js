import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Register, Path, Verify} from '../../screens/index';
import {TabNavigator} from './TabNavigation';

const Stack = createNativeStackNavigator();

const listScreen = [
  {name: 'Login', component: Login},
  {name: 'Path', component: Path},
  {name: 'Register', component: Register},
  {name: 'Verify', component: Verify},
  {name: 'Main', component: TabNavigator},
];

const screens = listScreen.map(({name, component}, key) => (
  <Stack.Screen key={key} name={name} component={component} />
));

export const StackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    
  return (
    <NavigationContainer
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Navigator>{screens}</Stack.Navigator>
    </NavigationContainer>
  );
};
