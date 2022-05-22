import styled from 'styled-components/native';

export const Conteiner = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 45%;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: solid black 3px;
  background-color: white;
`;

export const Title = styled.Text`
  color: black;
  margin-bottom: 10px;
  font-size: 25px;
`;
export const TextInfo = styled.Text`
  color: black;
  text-align: justify;
  font-weight: ${props => props.fw || '400'};
  margin-top: 10px;
  font-size: 15px;
`;
export const ContPriviliges = styled.View`
  flex-direction: row;
  width: 60%;
  align-items: center;
`;
export const RealoadBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #F1B5B5;
  width: 25%;
  height: 15%;
  border-radius: 20px;
  margin-top: 20px;
  elevation: 6;
  `;
