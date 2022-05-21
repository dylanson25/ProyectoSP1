import React from "react";
import { Container, Title, TxtInfo } from "../assets/styleds";
import { CustomButton } from "../components";

const Path =({navigation})=>{
    return(
        <Container>
            <Title>Salud Mental</Title>
            <TxtInfo>¿Cual el papel que desempeñaras?</TxtInfo>
            <CustomButton title='Usuario Comun' onPress={()=>{
               
                navigation.navigate('Register', false)
            }}/>
            <CustomButton title='Profesional de la salud' bg={'#FFDEDC'} onPress={()=>{
                navigation.navigate('Register', true)
            }}/>
        </Container>
    )
}
export default Path;