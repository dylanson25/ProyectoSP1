import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Login, Register, Path, Profile} from '../../screens/index' 

const Stack = createNativeStackNavigator();

const Navigate = () =>{
    return(
        <Stack.Navigator initialRouteName="Login"   screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Path" component={Path}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}  
export default Navigate
