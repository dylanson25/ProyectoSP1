import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, CardProList, EditProCard, Login} from '../../screens/index';
import auth from '@react-native-firebase/auth';
import {firbaseMethods} from '../../methods';

const Tab = createBottomTabNavigator();
const home = [
  {
    key: 1,
    name: 'Home',
    component: CardProList,
    icon: 'address-book',
  },
];

export const TabNavigator = () => {
  const [type, setType] = useState(null);
  const [listItems, setItems] = useState(home);
 
  const onAuthStateChanged = user => {
    user && firbaseMethods.getType(user.uid).then(setType); 
    setItems([ 

      ...home,
      {

        key: 2,
        name: 'Perfil',
        component: user ? Profile : Login,
        icon: 'user-circle',
      },
    ]);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const listProItems = [
    {key: 3, name: 'EditProCard', component: EditProCard, icon: 'money-check'},
    ...listItems,
  ];
  const tabList = (type === true ? listProItems : listItems).map(
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
        {tabList}
      </Tab.Navigator>
    </>
  );
};
