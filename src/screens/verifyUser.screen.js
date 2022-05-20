import React from "react";
import { Container } from '../assets/styleds'
import {Text} from 'react-native'
import { useAuthVerify } from "../hooks/firbase";
import auth from '@react-native-firebase/auth'


export const Verify = ({navigation}) => {
    useAuthVerify(navigation)

    console.log(auth().currentUser.emailVerified)
    return(
        <Container>  
            <Text>Verify user</Text>
        </Container>
    )
}