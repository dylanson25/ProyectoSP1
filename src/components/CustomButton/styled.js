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
`;
export const TxtBtn = styled.Text`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${props => props.color || 'black'};
`;
