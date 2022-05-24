import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, CardProList, EditProCard} from '../../screens/index';

const Tab = createBottomTabNavigator();
const type = 'CommonUser';

const listCommontItems = [
  {key: 1, name: 'Profile', component: Profile, icon: 'user-circle'},
  {key: 2, name: 'CardProList', component: CardProList, icon: 'address-book'},
];

const listProItems = [
  {key: 3, name: 'EditProCard', component: EditProCard, icon: 'money-check'},
  ...listCommontItems,
];

const tabList = (type == 'CommonUser' ? listCommontItems : listProItems).map(
  ({key, name, component, icon}) => {
    console.log(name)
    return (
      <Tab.Screen
        key={key}
        name={name}
        component={component}
        options={{
          
           tabBarLabel: '#17A1A2',
           abBarActiveTintColor: '#17A1A2',
           abBarInactiveTintColor: '#17A1A2',
           
          tabBarIcon: ({focused}) => (
            <Icon color={focused ? 'black' : 'white'} name={icon} size={24} />
          ),
        }}
      />
    );
  },
);

export const TabNavigator = () => (
  <>
    <Tab.Navigator screenOptions={{header: () => null}}>
      {tabList}
    </Tab.Navigator>
  </>
);
