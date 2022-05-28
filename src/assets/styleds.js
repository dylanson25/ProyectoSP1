import styled from 'styled-components/native';
export {TxtInfo} from '../components/CustomInput/styled';
// padding: ${props => props.Padd || '6%'};
export const Title = styled.Text`
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  color: #ff9f9f;
`;
export const SubTitle = styled.Text`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #444444;
`;

export const Container = styled.View`
flex: 1;
height: 100%;
margin: 0;
justify-content: ${props => props.jc || 'center'};
align-items: center;
background: white;
border:solid 1px black;
padding-bottom: 10%;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  background-color: white;
`;

export const StackDatos = styled.View`
  height: 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #bedce3;
`;

export const StackTitle = styled.Text`
  font-weight: 400;
  font-size: 32px;
  line-height: 35px;
  color: black;
`;

export const AcomodingBox = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.View`
  margin-bottom: 2%;
  margin-top: 2%;
  align-items: center;
  flex-direction: row;
  width: ${props => props.width || '90%'};
  height: 58px;
  background: #ffdedc;
  border: 1px solid #000000;
  border-radius: 10px;
  padding-start: 10px;
`;

export const CardEdit = styled.View`
  margin: 2%;
  margin-top: 4%;
  padding-top: 4%;
  padding-bottom: 4%;
  align-items: center;
  width: 90%;
  border: solid 2px black;
  elevation: 3;
`;

export const ContBtn = styled.View`
  height: 60%;
  margin: 0;
  justify-content: center;
  background: white;
`;
