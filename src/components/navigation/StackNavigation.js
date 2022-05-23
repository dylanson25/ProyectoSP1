import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Register, Path, Verify} from '../../screens/index';
import {TabNavigator} from './TabNavigation';

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
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // useEffect(() => {
  //   isFirstLaunch === null ? setIsFirstLaunch(true) : setIsFirstLaunch(false);
  // },[]);
  
  // let screens = null;
  
  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch === true) {
  //   screens = listScreensWithOnboard.map(({name, component}) => (
  //     <Stack.Screen key={name} name={name} component={component} />
  //   ));
  // } else {
  //   screens = listScreens.map(({name, component}) => (
  //     <Stack.Screen key={name} name={name} component={component} />
  //   ));
  // }
  return (
    <NavigationContainer
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Navigator>{screens}</Stack.Navigator>
    </NavigationContainer>
  );
};
