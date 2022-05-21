import React from "react";
import { Container } from '../assets/styleds'
import { MessageToVerify } from "../components";
import auth from '@react-native-firebase/auth'

const Verify = ({navigation}) => {
    return(
        <Container> 
            <MessageToVerify navigation={navigation} email={auth().currentUser.email} />
        </Container>
    ) 
}
export default Verify;