import React from 'react';
import {View, Text, Button} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import { Store } from '../redux/store';
import { setName } from '../redux/actions';
import { saveName } from '../firbase/prueba.firbase';

const Abr = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 99%;
  height: 50px;
  padding: 0px 70px 0px 10px;
  background: red;
  border: solid 3px;
  border-color: black;
  border-radius: 12px;
  margin: 0% 0% 7% 0%;
`;

const Login = () => {
  return (
    <Abr>
      <Icon name={"user"} size={20} color={"#198654"}/>
      <Text> login.screen </Text>
      {/* <Icon name="battery-charging-outline" size={50}></Icon> */}
      {/* <Icon name={"md-reorder-two"} color="#4F8EF7" size={300} /> */}
      <Button
      onPress={()=>{
        Store.dispatch(setName('Nombre'))
        console.log(Store.getState().userData.name)
        saveName()
      }}
      title={'Touch me'}
      >
      </Button>
    </Abr>
  );
};
export default Login;
