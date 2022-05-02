import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../../screens/login.screen.js'
import Register from '../../screens/register.screen.js'
import Path from "../../screens/path.screen.js";
const Stack = createNativeStackNavigator();

const Navigate = () =>{
    return(
        <Stack.Navigator initialRouteName="Login"   screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Path" component={Path}/>
        </Stack.Navigator>
    )
}  
export default Navigate
