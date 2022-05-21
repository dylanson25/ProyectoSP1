import React, {useState} from "react";
import { Container } from '../assets/styleds'
import { useAuthChecker } from "../hooks/firbase";
import { MessageToVerify } from "../components";

const Verify = ({navigation}) => {
    useAuthChecker(navigation)
    
    return(
        <Container> 
            <MessageToVerify navigation={navigation} />
        </Container>
    ) 
}
export default Verify;