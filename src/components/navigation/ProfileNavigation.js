import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile, EditProfile, ChangePswrd} from '../../screens/index';

const Stack = createNativeStackNavigator();

const listScreens = [
  {name: 'Opciones de Perfil', component: Profile},
  {name: 'Editar información', component: EditProfile},
  {name: 'Cambiar contraseña', component: ChangePswrd},
];

const screens = listScreens.map(({name, component}, key) => (
  <Stack.Screen key={key} name={name} component={component} />
));
const ProfileScreens = () => (
  <Stack.Navigator initialRouteName="Opciones de Perfil">{screens}</Stack.Navigator>
);

export default ProfileScreens;