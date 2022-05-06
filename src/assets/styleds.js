import styled from 'styled-components/native';
export { TxtInfo } from '../components/CustomInput/styled';
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
  height: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  background: #dfe2db;
  `;
  
  export const ScrollView = styled.ScrollView`
  border:1px solid black;
  flex: 1;
  background: #dfe2db;
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
