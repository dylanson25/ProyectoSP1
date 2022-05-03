import React from "react";
import { Conteiner, Title, TxtInfo } from "../assets/styleds";
import { CustomButton } from "../components";

const Path =({navigation})=>{
    return(
        <Conteiner>
            <Title>Salud Mental</Title>
            <TxtInfo>¿Cual el papel que desempeñaras?</TxtInfo>
            <CustomButton title='Usuario Comun' onPress={()=>{
               
                navigation.navigate('Register', false)
            }}/>
            <CustomButton title='Profecional de la salud' bg={'#FFDEDC'} onPress={()=>{
                navigation.navigate('Register', true)
            }}/>
        </Conteiner>
    )
}
export default Path;