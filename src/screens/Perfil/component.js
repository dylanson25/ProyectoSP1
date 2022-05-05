import React, {useEffect} from "react";
import { Container, Title } from "../../assets/styleds";
export const ProfileComponent = ({navigation, userData,getProfile})=>{
    useEffect(() => {
        getProfile();
    }, [])
    console.log(userData)
    return (
        <Container>
            <Title>{userData.Type}</Title>
        </Container>
    )


}

