import React, {useEffect} from "react";
import { Container, Title } from "../../assets/styleds";
import {CustomButton} from '../../components'
import {firbaseMethods} from '../../methods'
import auth from '@react-native-firebase/auth';

export const ProfileComponent = ({navigation, userData,getProfile})=>{
    useEffect(() => {
        getProfile();
    }, [])  
    return (  
        <Container> 
            <Title>Perfil</Title>
            <Title>{userData.type}</Title>
            <Title>{userData.Nombres}</Title>
            <Title>{userData.PrimerApellido}</Title>
            <Title>{userData.SegundoApellido}</Title>
            <Title>{userData.Email}</Title>
            <Title>{userData.Cedulas}</Title>
            <CustomButton title='Cerrar seción' onPress={()=> firbaseMethods.LogOut(navigation)} />        
        </Container>
    )
} 
 
