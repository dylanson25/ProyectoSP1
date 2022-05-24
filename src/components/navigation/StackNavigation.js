import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Register, Path, Verify} from '../../screens/index';
import {TabNavigator} from './index';

const Stack = createNativeStackNavigator();

const listScreens = [
  {name: 'Login', component: Login},
  {name: 'Path', component: Path},
  {name: 'Register', component: Register},
  {name: 'Verify', component: Verify},
  {name: 'Main', component: TabNavigator},
];

const screens = listScreens.map(({name, component}, key) => (
  <Stack.Screen key={key} name={name} component={component} />
));

export const StackNavigator = () => {
  return (
    <NavigationContainer
      initialRouteName="Login">
      <Stack.Navigator screenOptions={{header: () => null}}>{screens}</Stack.Navigator>
    </NavigationContainer>
  );
};
