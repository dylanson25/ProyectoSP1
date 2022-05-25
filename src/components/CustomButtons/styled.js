import styled from 'styled-components/native';
// F1B5B5
export const CustomBtn = styled.TouchableOpacity`
  justify-content: center;
  margin-bottom: 2%;
  margin-top: 2%;
  width: 80%;
  height: 48px;
  background: ${props => props.bg || '#F1B5B5'};
  border-radius: 10px;
  elevation: 6;
`;
export const TxtBtn = styled.Text`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${props => props.color || 'black'};
`;

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 12%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`
export const Circle = styled.View`
  background-color: #F1B5B5;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 16%;
  height: 70%;
`
export const Texto = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 15px;
  color: black;
`
