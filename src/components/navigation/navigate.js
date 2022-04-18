import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../../screens/login.screen.js'
const Stack = createNativeStackNavigator();

const Navigate = () =>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}  
export default Navigate
