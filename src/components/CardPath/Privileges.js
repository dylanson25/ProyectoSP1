import React from "react";
import { ContPriviliges, TextInfo } from "./styled";
import Icon from 'react-native-vector-icons/FontAwesome5'

const privilegesMapping = (privdata) => privdata.map((data, i) => <Privileges key={i} text={data} />)

const Privileges = ({text}) => {
    return(
        <ContPriviliges>
            <Icon name={'check'} color={ 'black' } size={20} />
            <TextInfo style={{marginStart: 10}}>{text}</TextInfo>
        </ContPriviliges>
    )
} 
export default privilegesMapping;