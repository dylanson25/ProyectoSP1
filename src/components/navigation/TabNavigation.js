import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, CardProList, EditProCard, Login} from '../../screens/index';
import Auth from '@react-native-firebase/auth';
import {firbaseMethods} from '../../methods';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const [type, setType] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    user && setType(firbaseMethods.getType());
    setUser(Auth().currentUser);
    console.log(type);
  }, []);

  const listCommontItems = [
    {key: 1, name: 'Home', component: CardProList, icon: 'address-book'},
    {
      key: 2,
      name: 'Perfil',
      component: user ? Profile : Login,
      icon: 'user-circle',
    },
  ];

  const listProItems = [
    {key: 3, name: 'EditProCard', component: EditProCard, icon: 'money-check'},
    ...listCommontItems,
  ];

  const commonTabList = (type ? listProItems : listCommontItems).map(
    ({key, name, component, icon}) => {
      return (
        <Tab.Screen
          key={key}
          name={name}
          component={component}
          options={{
            tabBarLabel: name,
            tabBarIcon: ({focused}) => (
              <Icon color={focused ? 'black' : 'grey'} name={icon} size={24} />
            ),
          }}
        />
      );
    },
  );

  return (
    <>
      <Tab.Navigator screenOptions={{header: () => null}}>
        {commonTabList}
      </Tab.Navigator>
    </>
  );
};
